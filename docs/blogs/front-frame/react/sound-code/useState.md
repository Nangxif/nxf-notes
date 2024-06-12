# useState

之前我们讲了hook机制的基础实现，接下来将每个hook的实现就简单了

## 一、mount阶段的useState

```javascript
// 在mount阶段执行的useState
function mountState<State>(
	initialState: (() => State) | State
): [State, Dispatch<State>] {
	// 找到当前useState对应的hook数据
	const hook = mountWorkInProgressHook();
	let memoizedState;
	if (initialState instanceof Function) {
		memoizedState = initialState();
	} else {
		memoizedState = initialState;
	}

	const queue = createUpdateQueue<State>();
	hook.updateQueue = queue;
	hook.memoizedState = memoizedState;
	hook.baseState = memoizedState;
	// @ts-ignore
	const dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
	queue.dispatch = dispatch;
	return [memoizedState, dispatch];
}
```

setState的本质就是状态发生变化之后可以重新出发一遍更新流程

因此，这个流程肯定跟updateQueue是有关的。上述代码在获取到当前的hook之后，会修改这个hook的初始值，initialState有可能是一个函数，也有可能是一个普通的值，因此需要判断一下，最后把值赋值到memoizedState和baseState，然后将memoizedState暴露出去。而dispatch的实现如下

```javascript
function dispatchSetState<State>(
	fiber: FiberNode,
	updateQueue: UpdateQueue<State>,
	action: Action<State>
) {
	/**
	 * 当函数组件里面调用到setState到时候，就会触发dispatch
	 * 而dispatch是由dispatchSetState通过bind绑定了currentlyRenderingFiber, queue而来的
	 * queue的结构是
	 * {
		shared: {
			pending: null
		},
		dispatch
	}
	*/
	/**
	 * update的结构为
	 * {
	 * 		action: 2
	 * }
	 */
	const lane = requestUpdateLane();
	const update = createUpdate(action, lane);
	/**
	 * updateQueue就是在mount的时候绑定的queue，这一步之时往
	 */
	enqueueUpdate(updateQueue, update);
	/**
	 *
	 */
	scheduleUpdateOnFiber(fiber, lane);
}
```

我们上面说了**setState的本质就是状态发生变化之后可以重新出发一遍更新流程**

因此setState里面的逻辑就是创建一个update，然后将update添加到updateQueue上面。然后调用scheduleUpdateOnFiber重新出发调度更新。

## 二、update阶段的useState

```javascript
function updateState<State>(): [State, Dispatch<State>] {
	// 找到当前useState对应的hook数据
	const hook = updateWorkInProgressHook();
	// 计算新的state的逻辑
	const queue = hook.updateQueue as UpdateQueue<State>;
	const baseState = hook.baseState;
	const pending = queue.shared.pending;
	const current = currentHook as Hook;
	let baseQueue = current.baseQueue;

	if (pending !== null) {
		// 	pending baseQueue update保存在current中
		// 这里要将pending和baseQueue合并在一起
		if (baseQueue !== null) {
			const baseFirst = baseQueue.next;
			const pendingFirst = pending.next;
			baseFirst!.next = pendingFirst;
			pending.next = baseFirst;
		}
		baseQueue = pending;
		current.baseQueue = pending;
		queue.shared.pending = null;
	}

	if (baseQueue !== null) {
		const {
			memoizedState,
			baseQueue: newBaseQueue,
			baseState: newBaseState
		} = processUpdateQueue(baseState, baseQueue, renderLane);
		hook.memoizedState = memoizedState;
		hook.baseQueue = newBaseQueue;
		hook.baseState = newBaseState;
	}

	return [hook.memoizedState, queue.dispatch as Dispatch<State>];
}
```

这个时候的useState逻辑就是，计算出最新的queue和state，然后传给processUpdateQueue消费，消费之后计算出最新的memoizedState，然后放在hook的memoizedState上面，同时暴露出去。