# useEffect

在react中存在三种副作用，分别叫useEffect，useLayoutEffect，和useInsertionEffect，我们这一系列只讲useEffect。

## 一、mount阶段的useEffect

```javascript
function mountEffect(create: EffectCallback | void, deps: EffectDeps | void) {
	const hook = mountWorkInProgressHook();
	const nextDeps = deps === undefined ? null : deps;
	// mount时，fiber是需要处理副作用的
	currentlyRenderingFiber!.flags |= PassiveEffect;
	hook.memoizedState = pushEffect(
		Passive | HookHasEffect,
		create,
		undefined,
		nextDeps
	);
}
```

首先找到当前的hook，然后计算出依赖deps，然后给函数组件的fiber添加副作用

关于useEffect的flags有下面两个

```javascript
// 代表这个fiber上本次更新存在需要触发useEffect的情况
export const PassiveEffect = 0b0001000;
// 那什么情况下需要触发useEffect呢?一个是fiber包含PassiveEffect，一个是包含ChildDeletion，因为删除的时候需要执行destroy
export const PassiveMask = PassiveEffect | ChildDeletion;
```

因此在mount阶段的useEffect，会给fiber的flags添加PassiveEffect。

然后调用pushEffect给hook的memoizedState插入effect

effect这种数据结构需要满足

* 不同的effect可以共用一个机制useEffect，useLayoutEffect，和useInsertionEffect
* 需要能保存依赖
* 需要能保存create回调
* 需要能保存destory回调
* 需要能够区分是否需要触发create回调
  * mount时
  * 依赖变化时

```javascript
// 将effect插入到fiber的updateQueue环状链表上面，同时将effect返回
function pushEffect(
	hookFlags: Flags,
	create: EffectCallback | void,
	destroy: EffectCallback | void,
	deps: EffectDeps
): Effect {
	const effect: Effect = {
    // effect的状态
		tag: hookFlags,
    // useEffect的callback
		create,
    // useEffect的callback的return
		destroy,
    // useEffect的依赖
		deps,
    // 下一个useEffect
		next: null
	};
	const fiber = currentlyRenderingFiber as FiberNode;
	// effect对应的环状列表应该存在哪里
	const updateQueue = fiber.updateQueue as FCUpdateQueue<any>;
	if (updateQueue === null) {
		const updateQueue = createFCUpdateQueue();
		fiber.updateQueue = updateQueue;
		effect.next = effect;
		updateQueue.lastEffect = effect;
	} else {
		// 插入effect，这一步我感觉执行不到
		const lastEffect = updateQueue.lastEffect;
		if (lastEffect === null) {
			effect.next = effect;
			updateQueue.lastEffect = effect;
		} else {
			// 将effect追加到链表的最后面
			const firstEffect = lastEffect.next;
			lastEffect.next = effect;
			effect.next = firstEffect;
			updateQueue.lastEffect = effect;
		}
	}
	return effect;
}
```

pushEffect首先创建出一个effect数据结构，然后查看fiber.updateQueue上面是否已经有effect链表，如果没有的话就创建一条链表然后将effect添加到updateQueue的lastEffect属性上。如果这条链表已经存在，那么将effect添加到这条链表上，并且lastEffect指向最新的effect。然后将当前的这个effect返回，最后赋值给hook上面的memoizedState。

我们发现effect数据结构里面也有一个状态叫tag，这个tag可能有几种值

```javascript
// 这些状态是用在Effect上面的，而不是用在fiber上的，Effect上面有个tag属性
// 这个Passive指的是useEffect
export const Passive = 0b0010;
// 如果以后实现了useLayoutEffect，那么就用下面这个
// export  const Layout = 0b0001
// 下面这个状态代表需要触发回调
export const HookHasEffect = 0b0001;
```

* 对于effect hook，Passive代表当前effect是「useEffect对应的effect」
* 对于effect hook，HookHasEffect代表「当前effect本次更新存在副作用」

因此，fiber flags和effect tag的关系是

当一个fiber上的effect链表存在tag为Passive｜HookHasEffect的话，那么这个fiber的flags就会被标记为PassiveEffect。

mount阶段的useEffect因为需要执行一次useEffect的回调，因此会给hook的memoizedState指向的effect的tag赋值一个Passive | HookHasEffect，代表这是一个useEffect并且需要执行回调的effect。同时create参数就是useEffect的回调函数，而destroy参数此时还是空。

## 二、update阶段的useEffect

```javascript
function updateEffect(create: EffectCallback | void, deps: EffectDeps | void) {
	const hook = updateWorkInProgressHook();
	const nextDeps = deps === undefined ? null : deps;
	let destroy: EffectCallback;
	if (currentHook !== null) {
		const prevEffect = currentHook.memoizedState as Effect;
		destroy = prevEffect.destroy as EffectCallback;
		if (nextDeps !== null) {
			// 接下来就需要浅比较依赖了
			const prevDeps = prevEffect.deps;
			if (areHookInputsEqual(nextDeps, prevDeps)) {
				hook.memoizedState = pushEffect(Passive, create, destroy, nextDeps);
				return;
			}
			// 浅比较后不相等
			currentlyRenderingFiber!.flags |= PassiveEffect;
			hook.memoizedState = pushEffect(
				Passive | HookHasEffect,
				create,
				destroy,
				nextDeps
			);
		}
	}
}
```

如果nextDeps不为空并且prevEffect.deps也不为空，那么就需要浅比较依赖了

```javascript
function areHookInputsEqual(nextDeps: EffectDeps, prevDeps: EffectDeps) {
	if (nextDeps === null || prevDeps === null) {
		/**
		 *
		 * 这种情况对应依赖没写
		 * useEffect(()=>{})
		 */
		// 那么比较的结果永远是不相等的，一直需要更新
		return false;
	}
	for (let i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
		if (Object.is(prevDeps[i], nextDeps[i])) {
			continue;
		}
		return false;
	}
	return true;
}
```

如果没有依赖的话，那么每次比较都返回false，这也就意味着每次都得执行useEffect的callback

```javascript
// 在当前的fiber上添加PassiveEffect flag
currentlyRenderingFiber!.flags |= PassiveEffect;
// 在effect添加Passive | HookHasEffect，代表当前这个effect是useEffect并且需要触发回调
hook.memoizedState = pushEffect(
  Passive | HookHasEffect,
  create,
  destroy,
  nextDeps
);
```

如果依赖没有发生变化，那么就意味着不用执行回调，所以只需要标记Passive，表示当前effect为useEffect即可

```javascript
hook.memoizedState = pushEffect(Passive, create, destroy, nextDeps);
```

因此，在useEffect的实现中，只是为了构造出一个带有状态tag和回调方法（create，destroy）的effect链表，同时给fiber标记flags

至此我们来总结一下不同的情况的effect应该是什么状态

1. 首次渲染需要执行一次useEffect的create，因此effect的tag为Passive｜HookHasEffect，有create，没有destroy
2. 组件更新的时候，如果依赖没有发生变化，那么useEffect什么都不用执行，因此effect的tag为Passive，有create，有destroy
3. 组件更新的时候，如果依赖发生变化，那么useEffect需要执行上一次的destroy，然后再执行create，因此effect的tag为Passive｜HookHasEffect，有create，有destroy

那么接下来，数据结构有了之后，我们就得开始在fiber树上收集回调（create和destroy），然后统一调度副作用。

## 三、useEffect在commit阶段的处理

### 1、收集回调

在commit阶段的时候，在commitMutationEffects里面会对fiber上面的flags进行判断，判断到是有ChildDeletion或者是PassiveEffect，那么就是开始收集回调

```javascript
function commitRoot(root: FiberRootNode) {
  const substreeHasEffect =
		(finishedWork.subtreeFlags & MutationMask) !== NoFlags;
	const rootHasEffect = (finishedWork.flags & MutationMask) !== NoFlags;
	if (substreeHasEffect || rootHasEffect) {
		commitMutationEffects(finishedWork, root);
  }
}
export const commitMutationEffects = commitEffects(
	'mutation',
	MutationMask | PassiveEffect,
	commitMutationEffectsOnFiber
);

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

	if ((flags & PassiveEffect) !== NoFlags) {
		// 收集回调
		// 这种情况下收集的回调是update，还有一种情况要收集回调，就是delete的时候
		commitPassiveEffect(finishedWork, root, 'update');
		finishedWork.flags &= ~PassiveEffect;
	}
}
```

判断到有PassiveEffect这个flags，代表这个fiber上本次更新存在需要触发useEffect的情况，因此触发commitPassiveEffect收集回调。

在上面的commit流程中，关于effect为什么我还会把flags为ChildDeletion的相关代码也贴出来呢？因为函数组件卸载掉时候，也有可能触发useEffect的destroy。在上面的commitDeletion中

```javascript
const commitDeletion = (childToDelete: FiberNode, root: FiberRootNode) => {
  let rootChildrenToDelete: FiberNode[] = [];
	// 递归子树
	commitNestedComponent(childToDelete, (unmountFiber) => {
		switch (unmountFiber.tag) {
        case FunctionComponent:
          // useEffect unmount处理 解绑ref
          commitPassiveEffect(unmountFiber, root, 'unmount');
          return;
    }
  }
}
```

此时create和destroy的回调都被收集了。

commitPassiveEffect的作用将所有的useEffect回调函数create或者destroy函数统一收集起来，然后在合适的时机统一进行触发。

```javascript
function commitPassiveEffect(
	fiber: FiberNode,
	root: FiberRootNode,
	type: keyof PendingPassiveEffects
) {
	if (
		fiber.tag !== FunctionComponent ||
		(type === 'update' && (fiber.flags & PassiveEffect) === NoFlags)
	) {
		return;
	}
	const updateQueue = fiber.updateQueue as FCUpdateQueue<any>;
	if (updateQueue !== null) {
		if (updateQueue.lastEffect === null && __DEV__) {
			console.error('当FC存在PassiveEffect flag时，不应该不存在effect');
		}
		root.pendingPassiveEffect[type].push(updateQueue.lastEffect as Effect);
	}
}
```

在fiberRootNode上面挂载着一个属性pendingPassiveEffect，这个属性是这种数据结构

```typescript
export interface Effect {
	tag: Flags;
	create: EffectCallback | void;
	destroy: EffectCallback | void;
	deps: EffectDeps;
	next: Effect | null;
}

pendingPassiveEffect = {
  unmount: Effect[],
  update: Effect[]
};
```

### 2、调度回调/执行副作用

依赖收集完了，那么在什么时候对这些回调进行调度执行呢？也是在commitRoot里面

本次更新的任何create回调都必须在所有上一次更新的destroy回调执行完后再执行

整体执行流程包括：

1. 遍历effect
2. 首先触发所有unmount effect，且对于某个fiber，如果触发了unmount destroy，本次更新不会再触发update create
3. 触发所有上次更新的destroy
4. 触发所有这次更新的create

```javascript
function commitRoot(root: FiberRootNode) {
	if (
		(finishedWork.flags & PassiveMask) !== NoFlags ||
		(finishedWork.subtreeFlags & PassiveMask) !== NoFlags
	) {
		// 表明当前这棵fiber树中存在函数组件需要执行useffect回调的
		if (!rootDoesHasPassiveEffects) {
      // 这个变量跟批处理的逻辑是一样的，都是防止多次调度
			rootDoesHasPassiveEffects = true;
			// 调度副作用，这里我们可以暂时理解为在一个setTimeout中执行
			schedulerCallback(NormalPriority, () => {
				// 这个回调函数会在commit阶段完成以后异步执行副作用
				flushPassiveEffects(root.pendingPassiveEffect);
				return;
			});
		}
	}
	rootDoesHasPassiveEffects = false;
}
```

判断finishedWork的flags和它子fiber的flags是否有PassiveMask这个flag，有的话再执行flushPassiveEffects

```javascript
// 那什么情况下需要触发useEffect呢?一个是fiber包含PassiveEffect，一个是包含ChildDeletion，因为删除的时候需要执行destroy
export const PassiveMask = PassiveEffect | ChildDeletion;
```

```javascript
// 这里是执行effect的回调
function flushPassiveEffects(pendingPassiveEffects: PendingPassiveEffects) {
	// 这个字段用来标识当前是否有回调
	let didFlushPassiveEffect = false;
	// 这里要执行完所有destroy回调，再执行create回调
	pendingPassiveEffects.unmount.forEach((effect) => {
		didFlushPassiveEffect = true;
    // 这里只需要将所有useEffect的effect筛选出来即可，因此只需要传Passive
		commitHookEffectListUnmount(Passive, effect);
	});
	pendingPassiveEffects.unmount = [];
	// 先执行上一次的destroy
	pendingPassiveEffects.update.forEach((effect) => {
		didFlushPassiveEffect = true;
		commitHookEffectListDestroy(Passive | HookHasEffect, effect);
	});
	// 再执行create
	pendingPassiveEffects.update.forEach((effect) => {
		didFlushPassiveEffect = true;
		commitHookEffectListCreate(Passive | HookHasEffect, effect);
	});
	pendingPassiveEffects.update = [];
	// 此时再useEffect中可能还有新的setState，这个时候需要继续处理更新流程
	flushSyncCallbacks();
	return didFlushPassiveEffect;
}
```

这里的执行顺序是有讲究的。

1. 先执行完所有的卸载的组件里面的destory

   ```javascript
   // 这里对应的是组件卸载
   // 执行的是tag为Passive的effect
   export function commitHookEffectListUnmount(flags: Flags, lastEffect: Effect) {
   	commitHookEffectList(flags, lastEffect, (effect) => {
   		const destroy = effect.destroy;
   		if (typeof destroy === 'function') {
   			destroy();
   		}
   		// 对于一个函数组件来说，执行到这里说明他已经卸载了，那么这个组件后续的useEffect肯定不会被触发了
       // 所以这里得移除掉
   		effect.tag &= ~HookHasEffect;
   	});
   }
   ```

2. 再执行上一次更新的destory

   ```javascript
   // 这里对应的是副作用更新的时候，执行的destroy
   // 执行的是tag为Passive | HookHasEffect的effect
   export function commitHookEffectListDestroy(flags: Flags, lastEffect: Effect) {
   	commitHookEffectList(flags, lastEffect, (effect) => {
   		const destroy = effect.destroy;
   		if (typeof destroy === 'function') {
   			// 对于一个函数组件来说，执行到这里说明他已经卸载了，那么这个组件后续的useEffect肯定不会被触发了
   			destroy();
   		}
   	});
   }
   ```

3. 最后执行当前的useEffect的create

   ```javascript
   // 执行的是tag为Passive | HookHasEffect的effect
   export function commitHookEffectListCreate(flags: Flags, lastEffect: Effect) {
   	commitHookEffectList(flags, lastEffect, (effect) => {
   		const create = effect.create;
   		if (typeof create === 'function') {
   			effect.destroy = create();
   		}
   	});
   }
   ```

上面执行的过程中，effect链表上面的effect是不会减少的，但是里面的tag可能会被修改，那么effect如果不会减少，那么是不是随着函数组件的render次数变多，这条链表会越来越长？答案是否定的。在renderWithHooks的时候，一开始就将当前的workInprogress fiber上的memoizedState和updateQueue都清空了，当处于update阶段的时候，会从current树上面找到上一次的effect链表进行复用

## 四、commitHookEffectList

这是一个遍历updateQueue.lastEffect环状链表的一个方法

```javascript
function commitHookEffectList(
	flags: Flags,
	lastEffect: Effect,
	callback: (effect: Effect) => void
) {
	let effect = lastEffect.next as Effect;
	do {
		if ((effect.tag & flags) === flags) {
			callback(effect);
		}
		effect = effect.next as Effect;
	} while (effect !== lastEffect.next);
}
```

执行顺序是从链表的第一个effect开始。

## 五、提出几个问题

1. 以下useEffect的执行顺序是什么样的，为什么？

   ```react
   import React, { useEffect, useState } from "react";
   const Child1 = () => {
     useEffect(() => {
       console.log("Child1 useEffect create有deps");
       return () => {
         console.log("Child1 useEffect destroy有deps");
       };
     }, []);
     return <div>child1</div>;
   };
   const Child2 = () => {
     useEffect(() => {
       console.log("Child2 useEffect create有deps");
       return () => {
         console.log("Child2 useEffect destroy有deps");
       };
     }, []);
     return <div>child2</div>;
   };
   const Child3 = () => {
     useEffect(() => {
       console.log("Child3 useEffect create有deps");
       return () => {
         console.log("Child3 useEffect destroy有deps");
       };
     }, []);
     return <div>child3</div>;
   };
   const App = () => {
     const [show, setShow] = useState(true);
     useEffect(() => {
       console.log("App useEffect create没有deps");
     });
     useEffect(() => {
       console.log("App useEffect create有deps");
       return () => {
         console.log("App useEffect destroy有deps");
       };
     }, [show]);
   
     return (
       <div onClick={() => setShow(!show)}>
         {show ? (
           <>
             <Child1 />
             <Child2 />
           </>
         ) : (
           <Child3 />
         )}
       </div>
     );
   };
   const root = document.querySelector("#root");
   ReactDOM.createRoot(root).render(<App />);
   ```

   初始执行会输出

   ```
   Child1 useEffect create有deps
   Child2 useEffect create有deps
   App useEffect create没有deps
   App useEffect create有deps
   ```

   为什么先输出子组件的useEffect create再输出父组件的？因为回调的收集是在commitRoot里面，而commitRoot里面是通过commitEffects往下查找子节点的

   ```typescript
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

   首先先深度优先遍历，查询到某个fiber的subtreeFlags（也就是在completeWork阶段冒泡上来的子fiber的flag的集合）已经不存在对应的mask，则执行回调，因此Child1和Child2组件的回调会先被收集，接着再收集App的回调。而执行回调的时候，又是除了是按照数组顺序执行之外，对每个数组里面的effect链表，它的执行顺序也是从链表头到链表尾。

   点击div之后，会输出

   ```
   Child1 useEffect destroy有deps
   Child2 useEffect destroy有deps
   App useEffect destroy有deps
   Child3 useEffect create有deps
   App useEffect create没有deps
   App useEffect create有deps
   ```

   App组件发生了状态变更，触发了新的一轮调度，从App开始往上到root开始beginWork，遍历到Child3的时候发现有新的useEffect，因此在commitRoot的时候，正如上面所说的effect的顺序，再加上组件unmount的destroy会被先执行，因此才有了前两个输出。其次，再执行App组件的useEffect的destory因此有了第三个输出。而commitRoot在遍历的时候，发现Child1和Child2节点被卸载了，但是出现了Child3节点，那么会将Child3节点的create收集起来，然后往上遍历的时候收集App节点的create，因此才会出现Child3节点的useEffect比App的先执行。