# 更新后是单节点的diff算法

我们当前只实现了单一节点的增删操作，也就是我们之前的reconcileSingleElement和reconcileSingleTextNode，即「单节点diff算法」，本节课实现「多节点的diff算法」。

本章节采用简写示例：A1 -> A2也就是type之前是A，key之前是1，更新之后type是A，key为2。

## 一、对于reconcileSingleElement的改动

当前支持的情况：

* A1 -> B1
* A1 -> A2

需支持的情况：

* ABC -> A

本章节我们提到的单节点和多节点，是指更新后是单节点还是多节点，所以，标题提到的，单节点diff算法，指的是更新之后是单节点的逻辑处理算法。

针对更新之后是单节点的情况，我们进行更细致的划分：

* key相同，type相同的话，复用当前节点

  例如： A1B2C3 -> A1

* key相同，type不同的话，则不存在任何复用的可能性

  例如：A1B2C3 -> B1

* key不同，type相同，只能表示当前节点不能复用，兄弟节点可能还能找到可以复用的，所以还需要遍历兄弟节点

* key不同，type也不同，只能当前节点不能复用，兄弟节点可能还能找到可以复用的，所以还需要遍历兄弟节点

接下来针对上面四点，来改造一下reconcileSingleElement

```typescript
function reconcileSingleElement(
		returnFiber: FiberNode,
		currentFiber: FiberNode | null,
		element: ReactElementType
	) {
		const key = element.key;
		while (currentFiber !== null) {
			// update
			if (currentFiber?.key === key) {
				// key相同
				if (element.$$typeof === REACT_ELEMENT_TYPE) {
					if (currentFiber.type === element.type) {
						let props = element.props;
						// type 相同，可以复用
						// 这个props可能包含children属性
						const existing = useFiber(currentFiber, props);
						existing.return = returnFiber;
						// 当前节点可复用，标记剩下的节点删除，既然当前节点是可以复用的，那么被标记为删除的就得从它的第一个兄弟节点开始了currentFiber.sibling
						deleteRemainingChildren(returnFiber, currentFiber.sibling);
						return existing;
					}
					// 如果是key相同，type不同，那么则需要删除所有旧的
					deleteRemainingChildren(returnFiber, currentFiber);
					break;
				} else {
					if (__DEV__) {
						console.warn('还未实现的react类型', element);
						break;
					}
				}
			} else {
				// 如果是key不同，那么就需要删掉当前的这个fiber，然后继续往兄弟节点比较
				deleteChild(returnFiber, currentFiber);
				currentFiber = currentFiber.sibling;
			}
		}
		// 根据element创建fiber
		let fiber;
		if (element.type === REACT_FRAGMENT_TYPE) {
			fiber = createFiberFromFragment(element?.props?.children, key);
		} else {
			fiber = createFiberFromElement(element);
		}
		fiber.return = returnFiber;
		return fiber;
	}

```

上面的while循环会一直遍历sibling，如果更新前（current 树上）的同级是多节点的话，那么就存在sibling，如果在更新前同级也是单节点的话，那么也就不存在也就sibling，就会退出while。然后就需要创建一个新的fiber，因为表示当前的节点不存在current fiber，也就表示是在mount阶段。

## 二、对于reconcileSingleTextNode的改动

reconcileSingleTextNode的改动其实跟reconcileSingleElement是类似的

```typescript
function reconcileSingleTextNode(
  returnFiber: FiberNode,
  currentFiber: FiberNode | null,
  content: string | number
) {
  while (currentFiber !== null) {
    // update
    if (currentFiber.tag === HostText) {
      // 类型没变，可以复用
      const existing = useFiber(currentFiber, { content });
      existing.return = returnFiber;
      deleteRemainingChildren(returnFiber, currentFiber.sibling);
      return existing;
    }
    // 这种情况会走到这里，<div>标签变为文本，这个时候需要删除旧的fiber节点，然后再创建一个新的
    deleteChild(returnFiber, currentFiber);
    // 当前这个节点不能复用的话就继续遍历
    currentFiber = currentFiber.sibling;
  }
  // 都不能复用的话，就根据element创建fiber
  const fiber = new FiberNode(HostText, { content }, null);
  fiber.return = returnFiber;
  return fiber;
}
```

以上就是更新后是单节点的diff算法。
