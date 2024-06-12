# useRef

## 一、Ref数据结构

Ref有两种数据结构

1. (Instance: T) => void

   ```react
   <div ref={dom => console.log(dom)}></div>
   ```

2. {current: T}

   ```react
   <div ref={domRef}></div>
   ```

## 二、HostComponent Ref工作流程

### 1、标记Ref

Ref相关的flag：

```typescript
//  Ref也是一种flag
export const Ref = 0b0010000;
export const MutationMask =
	Placement | Update | ChildDeletion | Ref | Visibility;
export const LayoutMask = Ref;
```

标记Ref需要满足下面其中一种情况：

* mount时，dom组件存在ref这个props

* update时，ref引用变化

  ```typescript
  function markRef(current: FiberNode | null, workInProgress: FiberNode) {
  	const ref = workInProgress.ref;
  
  	if (
  		(current === null && ref !== null) ||
  		(current !== null && current.ref !== ref)
  	) {
  		// mount时，并且存在ref
  		// 或者update时，ref引用发生变化
  		workInProgress.flags |= Ref;
  	}
  }
  ```

标记的时机包括：

* beginWork

  ```typescript
  export const beginWork = (wip: FiberNode, renderLane: Lane) => {
  	// 比较，最终返回子fiberNode
  	switch (wip.tag) {
  		case HostComponent:
  			return updateHostComponent(wip);
  	}
  }
  function updateHostComponent(wip: FiberNode) {
  	// 对于首屏渲染的时候来说，肯定是还不存在的
  	// <div></div>节点对应的reactElement来说的话，就是在children里面，而children就存放在props里面
  	const nextProps = wip.pendingProps;
  	const nextChildren = nextProps.children;
  	markRef(wip.alternate, wip);
  	reconcileChildren(wip, nextChildren);
  	return wip.child;
  }
  ```
* completeWork

  ```typescript
  function markRef(fiber: FiberNode) {
  	fiber.flags |= Ref;
  }
  
  export const completeWork = (wip: FiberNode) => {
  	// 最终返回子fiberNode
  	const newProps = wip.pendingProps;
  	const current = wip.alternate;
  	switch (wip.tag) {
  		case HostComponent:
  			if (current !== null && wip.stateNode) {
          if (current.ref !== wip.ref) {
  					markRef(wip);
  				}
        }
    }
  }
  ```

### 2、执行Ref操作

包括两类操作：

1. 对于正常的绑定操作：

   * 解绑之前的ref（mutation阶段）
   * 绑定新的ref（layout阶段）

   ```typescript
   function commitRoot(root: FiberRootNode) {
   	const finishedWork = root.finishedWork;
     commitMutationEffects(finishedWork, root);
     // 当我们mutation执行完之后我们会执行fiber树的切换，所以在layout阶段，我们的wip fiber已经变成了currentFiber
     root.current = finishedWork;
     commitLayoutEffects(finishedWork, root);
   }
   
   // commitMutationEffects里面主要执行commitMutationEffectsOnFiber，这个阶段是解绑ref的
   const commitMutationEffectsOnFiber = (
   	finishedWork: FiberNode,
   	root: FiberRootNode
   ) => {
   	const { flags, tag } = finishedWork;
     if ((flags & ChildDeletion) !== NoFlags) {
   		const deletions = finishedWork.deletions;
   		if (deletions !== null) {
   			deletions.forEach((childToDelete) => {
   				commitDeletion(childToDelete, root);
   			});
   		}
   		finishedWork.flags &= ~ChildDeletion;
   	}
     if ((flags & Ref) !== NoFlags && tag === HostComponent) {
   		// 这里要解绑之前的ref，然后在layout阶段绑定新的ref
   		// 因此在这里还不能把这个副作用给删除
   		safelyDetachRef(finishedWork);
   	}
   }
   // 解绑ref，其实就是重置为null
   function safelyDetachRef(current: FiberNode) {
   	const ref = current.ref;
   	if (ref !== null) {
   		if (typeof ref === 'function') {
   			ref(null);
   		} else {
   			ref.current = null;
   		}
   	}
   }
   
   // commitLayoutEffects里面主要执行commitLayoutEffectsOnFiber，这个阶段是绑定新的ref的
   const commitLayoutEffectsOnFiber = (
   	finishedWork: FiberNode,
   	root: FiberRootNode
   ) => {
   	const { flags, tag } = finishedWork;
   
   	if ((flags & Ref) !== NoFlags && tag === HostComponent) {
   		// 绑定新的ref
   		safelyAttachRef(finishedWork);
   		finishedWork.flags &= ~Ref;
   	}
   };
   function safelyAttachRef(fiber: FiberNode) {
   	const ref = fiber.ref;
   	if (ref !== null) {
   		const instance = fiber.stateNode;
   		if (typeof ref === 'function') {
   			ref(instance);
   		} else {
   			ref.current = instance;
   		}
   	}
   }
   ```

2. 对于组件卸载：

   * 解绑之前的ref

## 三、useRef的作用

其实useRef和ref有多大的关系嘛？我觉得也不是。useRef的作用就是存数据而已，useRef存储的数据如果没有更新的话，那么每次函数组件render都只会拿到同一个数据，只是恰好ref能够放在useRef的返回值中。因此这两个概念才有了一些联系。

### 1、mount阶段的useRef

```typescript
function mountRef<T>(initialValue: T): { current: T } {
	const hook = mountWorkInProgressHook();
	const ref = { current: initialValue };
	hook.memoizedState = ref;
	return ref;
}
```

### 2、update阶段的useRef

```javascript
function updateRef<T>(initialValue: T): { current: T } {
	const hook = updateWorkInProgressHook();
	return hook.memoizedState;
}
```

