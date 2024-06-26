# commit阶段

react内部3个阶段：

* schedule阶段（调度阶段，调度的是更新）
* render阶段（处理更新的阶段beginWork completeWork，render阶段的产物就是一棵workInProgress fiber树，以及被标记了flags的一些fiber节点）
* commit阶段（commitWork，会根据render阶段的flags，执行对应的宿主环境的操作）

commit阶段的3个子阶段：

* beforeMutation阶段
* mutation阶段
* layout阶段

commit阶段中的mutation子阶段要执行的任务

1. fiber树的切换
   fiber树是一个双缓存机制，当我们生成workInProgress，渲染到页面以后，就会变成current，然后等它下一次更新又生成一个新的workInProgress。那么这个切换到过程发生在哪里呢？发生在Mutation阶段和layout阶段之间。
2. 执行Placement对应操作

首先我们看一下commit阶段大体的结构

```typescript
function commitRoot(root: FiberRootNode) {
	const finishedWork = root.finishedWork;
	if (finishedWork === null) {
		return;
	}
	if (__DEV__) {
		console.warn('commit阶段开始', finishedWork);
	}
  // 重置
  root.finishedWork = null;
  // 判断是否存在3个子阶段需要执行的操作
	// 这个时候需要判断root的flags和root的subtreeFlags
  const substreeHasEffect =
		(finishedWork.subtreeFlags & MutationMask) !== NoFlags;
	const rootHasEffect = (finishedWork.flags & MutationMask) !== NoFlags;
	if (substreeHasEffect || rootHasEffect) {
  	// 阶段1/3:beforeMutation
		/**
		 * 这个阶段主要是调用getSnapshotBeforeUpdate，这个生命周期函数发生在render之后，
		 * 实际DOM变化之前，用来捕获render之前的某个DOM状态。
		 */
		// 阶段2/3:mutation
		// fiber树切换的操作在mutation之后，在layout之前
		/**
		 * 这个阶段主要执行实际的DOM更新操作，React会遍历effect list（一种相关副作用的链表结构），
		 * 进行增加，删除和更新DOM节点的操作。
		 */
		commitMutationEffects(finishedWork, root);
		// 当我们mutation执行完之后我们会执行fiber树的切换，所以在layout阶段，我们的wip fiber已经变成了currentFiber
		root.current = finishedWork;
		// 阶段3/3:layout
		/**
		 * 这个阶段主要执行可能会导致额外渲染的工作，包括执行useLayoutEffect（类似componentDidMount和componentDidUpdate），
		 * 和生命周期函数componentDidMount，componentDidUpdate。
		 * useLayoutEffect会在浏览器layout操作之后，下一次重绘之前，同步调用它的回调函数。
		 */
		commitLayoutEffects(finishedWork, root);
  } else {
    // 如果不存在对应的操作
    root.current = finishedWork;
  }
}
```

当前我们要实现的是mutation阶段，因为我们主要实现的是Placement，那么有没有一个很简便的方法来判断是否要执行某一个子阶段需要的操作呢？我们可以用Mask的形式。那什么是Mask？

我们在fiberFlags中，要添加一个合成flags。

```typescript
// 如果当前的subtreeFlags或者flags中包含了MutationMask中指定的这些flags，那么代表了当前我们需要执行mutation这个阶段
// mutation阶段可能要进行的工作
export const MutationMask =
	Placement | Update | ChildDeletion | Ref | Visibility;
```

当我们把当前fiber上的flags或者subtreeFlags跟MutationMask逻辑与之后不为NoFlags，则说明当前的fiber节点或者子节点可能存在插入，更新，删除等操作。然后再开始执行上面提到的commit的三个阶段。

## 一、mutation阶段

mutation阶段和layout阶段的实现有一部分逻辑是一样的，就是向下遍历查找的逻辑，这个遍历的逻辑被抽离了出来。

因此mutation阶段和lauout阶段的入口其实很相似

```typescript
export const commitMutationEffects = commitEffects(
	'mutation',
	MutationMask | PassiveEffect,
	commitMutationEffectsOnFiber
);

export const commitLayoutEffects = commitEffects(
	'layout',
	LayoutMask,
	commitLayoutEffectsOnFiber
);
```

这里我们先讲mutation阶段，commitMutationEffects的具体实现。

这个阶段要做的事情有

1. 从当前的fiber往下遍历查找到真实需要更新的fiber节点

   ```typescript
   let nextEffect: FiberNode | null;
   export const commitEffects = (
   	phase: 'mutation' | 'layout',
   	mask: Flags,
   	callback: (fiber: FiberNode, root: FiberRootNode) => void
   ) => {
   	return (finishedWork: FiberNode, root: FiberRootNode) => {
   		nextEffect = finishedWork;
   		while (nextEffect !== null) {
   			// 向下遍历
   			const child: FiberNode | null = nextEffect.child;
   			if ((nextEffect.subtreeFlags & mask) !== NoFlags && child !== null) {
   				// 代表了子节点有可能存在MutationMask的操作
   				nextEffect = child;
   			} else {
   				// 表示找底了，或者说我们找到的那个节点不包含subtreeFlags了，如果不包含subtreeFlags的话，那么就可能包含flags
   				// 向上遍历DFS
   				up: while (nextEffect !== null) {
   					callback(nextEffect, root);
   					const sibling: FiberNode | null = nextEffect.sibling;
   					if (sibling !== null) {
   						nextEffect = sibling;
   						break up;
   					}
   					nextEffect = nextEffect.return;
   				}
   			}
   		}
   	};
   };
   ```

2. 判断是否需要执行插入操作，执行commitPlacement之后移除相应的Placement flags

   ```typescript
   if ((flags & Placement) !== NoFlags) {
     commitPlacement(finishedWork);
     // 将Placement从副作用中移除
     finishedWork.flags &= ~Placement;
   }
   ```

   ```typescript
   const commitPlacement = (finishedWork: FiberNode) => {
   	// finishedWork ~~ DOM
   
   	if (__DEV__) {
   		console.warn('执行Placement操作', finishedWork);
   	}
   	// parent DOM
   	const hostParent = getHostParent(finishedWork);
   
   	// finishedWork转成DOM，并且将DOM append到parent DOM里面
   	if (hostParent !== null) {
   		insertOrAppendPlacementNodeIntoContainer(finishedWork, hostParent);
   	}
   };
   ```

   在执行插入操作的时候，需要找到父节点。

   因为当前fiber节点的父fiber节点可能不是有效的可以插入的节点（比如有可能是一个Flagment）那么这时候需要往上继续查找，直到找到tag为HostComponent或者HostRoot的父节点。

   ```typescript
   function getHostParent(fiber: FiberNode): Container | null {
   	let parent = fiber.return;
   	while (parent) {
   		const parentTag = parent.tag;
   		if (parentTag === HostComponent) {
   			return parent.stateNode as Container;
   		}
   		if (parentTag === HostRoot) {
   			return (parent.stateNode as FiberRootNode).container;
   		}
   		parent = parent.return;
   	}
   	if (__DEV__) {
   		console.warn('未找到host parent');
   	}
   	return null;
   }
   ```

   插入节点的时候，调用insertOrAppendPlacementNodeIntoContainer方法

   ```typescript
   function insertOrAppendPlacementNodeIntoContainer(
   	finishedWork: FiberNode,
   	hostParent: Container,
   ) {
   	if (finishedWork.tag === HostComponent || finishedWork.tag === HostText) {
   		appendChildToContainer(hostParent, finishedWork.stateNode);
   		return;
   	}
   	// 向下遍历，找到那个tag类型是HostComponent或者HostText的fiber节点
   	const child = finishedWork.child;
   	if (child !== null) {
   		insertOrAppendPlacementNodeIntoContainer(child, hostParent);
   		let sibling = child.sibling;
   		while (sibling !== null) {
   			insertOrAppendPlacementNodeIntoContainer(sibling, hostParent);
   			sibling = sibling.sibling;
   		}
   	}
   }
   ```

   如果当前的子fiber是一个tag为HostComponent或HostText的节点，那么直接插入，如果当前的fiber的tag不是Host类型的节点（有可能是FunctionComponent或者Fragment），那么这时候就要查找它的子fiber节点，然后重新执行insertOrAppendPlacementNodeIntoContainer操作，重新进行tag的判断。于此同时，还要查找子节点是否存在兄弟节点，有的话也要执行insertOrAppendPlacementNodeIntoContainer操作，一起插入到hostParent上。那么，什么情况下会执行这一步操作呢？

   ```html
   <div>
     <A></A>
   </div>
   
   function A () {
   	return <>
   		<div></div>
   		<div></div>
   	</>
   }
   ```

   这种情况下，首次insertOrAppendPlacementNodeIntoContainer就判断到finishedWork是A FucntionComponent，hostParent是div。显然A还不是Host节点，那么继续往下查找，这时发现Flagment也不是Host节点，那么还继续往下查找，然后就找到第一个div，发现是Host节点了，执行insertOrAppendPlacementNodeIntoContainer方法，然后查找当前的div节点是否有兄弟节点。诶，恰好还有一个div，此时第二个div也需要执行insertOrAppendPlacementNodeIntoContainer，插入到最顶层的div中。

3. 判断是否需要执行更新操作，执行commitUpdate之后移除相应的Update flags

4. 判断是否需要执行删除操作，执行commitDeletion之后移除相应的ChildDeletion flags

当然，因为我们现在要实现的是将每层都是单一节点的fiber树渲染到页面上，还不涉及到组件的更新和删除，因此后面两点在后面的章节再做详细的讲解。

当我们将所有的子节点插入之后，我们的首屏渲染结果就已经呈现在页面上了，这时需要执行最后一步，就是置换workInProgress树和current树。

至此，我们的首屏渲染逻辑就告一段落。
