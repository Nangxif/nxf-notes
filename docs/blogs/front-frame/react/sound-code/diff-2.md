# 更新后是多节点的diff算法

## 一、对于同级多节点diff的支持

单节点需要支持的情况：

* 插入Placement
* 删除ChildDeletion

多节点需要支持的情况：

* 插入Placement
* 删除ChildDeletion
* 移动Placement

整体流程分为四步，

1. 将current树中所有同级fiber保存在Map中
2. 遍历newChild数组，对于每个遍历到的element，存在两种情况：
   a. 在Map中存在对应current Fiber，且可以复用
   b. 在Map中不存在对饮更多current Fiber，或不能复用
3. 判断是插入还是移动
4. 最后Map中剩下的都标记删除

下面我们按照这四个步骤，来实现更新后是多节点的diff算法

```typescript
function reconcileChildrenArray(
		returnFiber: FiberNode,
		currentFirstChild: FiberNode | null,
		newChild: any[]
	) {
  // 最后一个可复用的fiber在current中的index
  let lastPlacedIndex: number = 0;
  // 创建的最后一个fiber
  let lastNewFiber: FiberNode | null = null;
  // 创建的第一个fiber
  let firstNewFiber: FiberNode | null = null;
  // 整体流程分为四步
  // 1.将current中所有同级fiber保存在Map中
  const existingChildren: ExistingChildren = new Map();
  let current = currentFirstChild;
  while (current) {
    const keyToUse = current.key !== null ? current.key : current.index;
    existingChildren.set(keyToUse, current);
    current = current.sibling;
  }
  for (let i = 0; i < newChild.length; i++) {
    const after = newChild[i];
    // 每一个新的fiber都会走这里
    const newFiber = updateFromMap(returnFiber, existingChildren, i, after);

    // 如果更新的之后的值是一个false或者时一个null就会走这段逻辑
    if (newFiber === null) {
      continue;
    }

    // 3.判断是插入还是移动
    newFiber.index = i;
    newFiber.return = returnFiber;

    if (lastNewFiber === null) {
      lastNewFiber = newFiber;
      firstNewFiber = newFiber;
    } else {
      lastNewFiber.sibling = newFiber;
      // lastNewFiber始终指向最后一个fiber
      lastNewFiber = lastNewFiber.sibling;
    }

    if (!shouldTrackEffects) continue;
    const current = newFiber.alternate;

    if (current !== null) {
      const oldIndex = current.index;
      if (oldIndex < lastPlacedIndex) {
        // 移动
        newFiber.flags |= Placement;
        continue;
      } else {
        // 不移动
        lastPlacedIndex = oldIndex;
      }
    } else {
      // mount
      newFiber.flags |= Placement;
    }
  }
  // 4.最后Map中剩下的都标记删除
  existingChildren.forEach((fiber) => {
    deleteChild(returnFiber, fiber);
  });
  return firstNewFiber;
}
```

### 1、将current中所有同级fiber保存在Map中

existingChildren这个Map的key是fiber数组的key或者index，这个Map存在的意义是方便后面遍历新的数组节点的时候，可以通过key快速的找到对应的旧节点。

### 2、遍历newChild数组

在代码中我们可以看到，map生成之后，开始遍历newChild，然后每个子节点会经过updateFromMap生成新的子节点，updateFromMap的作用就是，用新的ReactElement节点的key或者index，去map中查找是否有一样的key或index，然后比较两个节点的类型type，如果是一样的话就可以复用，不一样的话就得标记删除。当然，里面的操作还不止于此。

```typescript
function updateFromMap(
  returnFiber: FiberNode,
  existingChildren: ExistingChildren,
  index: number,
  element: any
): FiberNode | null {
  const keyToUse = element.key !== null ? element.key : index;
  const before = existingChildren.get(keyToUse);
  if (typeof element === 'string' || typeof element === 'number') {
    // HostText
    if (before) {
      if (before.tag === HostText) {
        existingChildren.delete(keyToUse);
        return useFiber(before, { content: element + '' });
      }
    }
    return new FiberNode(HostText, { content: element + '' });
  }

  // ReactElement
  if (typeof element === 'object' && element !== null) {
    switch (element.$$typeof) {
      case REACT_ELEMENT_TYPE:
        if (before) {
          if (before.type === element.type) {
            existingChildren.delete(keyToUse);
            return useFiber(before, element.props);
          }
        }
        return createFiberFromElement(element);
    }
  }
  if (Array.isArray(element)) {
   console.log("还未实现数组类型的child")
  }
  return null;
}
```

通过key或者index，从map中先找出之前的fiber节点before，如果element是个文本节点或者数字节点，并且before存在且也是文本节点的话，那么这个节点就可以复用，这个key也就可以从existingChildren Map中移除。如果before不存在，那么直接创建一个新的fiber节点。

如果element为对象，并且$$typeof为ReactElement。并且before存在且type类型一样的话，那么这个节点就可以复用，这个key也就可以从existingChildren Map中移除。如果before不存在，那么直接创建一个新的fiber节点。

如果element也是一个数组，有可能出现时下面这种数组

```html
arr = [<li>3</li>,<li>4</li>]
<ul>
	<li>1</li>
	<li>2</li>
 {arr}
</ul>
```

这种情况我们后面讲到Fragment的时候再做处理。

### 3、判断是插入还是移动

我们回到reconcileChildrenArray方法，newFiber经过updateFromMap处理完之后，就得判断是插入还是移动，然后给这个fiber打上对应的flag。

「移动」具体是指向右移动

移动的判断依据是element的index与element对应的current fiber的index比较。

当遍历element时，有一个规律就是，当前遍历到的element一定是所有已遍历的element中最靠右的那一个，这句话听起来有点废话。但是我们可以利用这个规律，只需要记录最后一个可复用的fiber在current中的index（也就是上面代码中的lastPlacedIndex），然后在接下来的遍历中做两件事情：

* 如果接下来遍历到的可复用的fiber的index小于lastPlacedIndex，那么就标记Placement
* 否则不标记

为什么是这样？我们用一个例子来说明

```
A1 B2 C3 -> B2 C3 A1
0  1  2  -> 0  1  2
```

如果我们从上面的左边更新到右边，那么在遍历右边的时候，

假设遍历到B2，因为B2的旧索引是1，而lastPlacedIndex初始值为0，1不小于0，因此按照我们上面的规则，B2不移动，lastPlacedIndex赋值为旧索引1；

假设遍历到C3，因为C3的旧索引是2，而lastPlacedIndex为1，2不小于1，因此按照我们上面的规则，C3也不移动，lastPlacedIndex赋值为旧索引2；

假设遍历到A1，因为A1的旧索引是0，而lastPlacedIndex为2，0小于2，因此按照我们上面的规则，A1需要移动，要标记Placement。

### 4、最后Map中剩下的都标记删除

因为遍历新的数组时，会在旧的existingChildren Map里面查找，查找到一个就删除一个，如果在旧的existingChildren Map中有剩下的fiber，那么就说明这些fiber在下一次更新的时候已经不需要了，全部需要标记删除。

最后，将遍历过程中记录下来的第一个子节点firstNewFiber返回出去。

接下来render阶段标记完了，剩下的就是commit阶段的操作了。