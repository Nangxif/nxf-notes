# 实现同步更新流程（二）

根据上一章节react的执行结果，既然我们需要「多次触发更新，只进行一次更新流程」，意味着我们要将更新合并，所以在：

* render阶段
* commit阶段

这两个阶段的基础上，增加schedule阶段（调度阶段）

<Image :src="'/front-frame/react/sound-code/batched-updates/1.png'" />

## 一、对update的调整

「多次触发更新，只进行一次更新流程」中「多次触发更新」意味着对于同一个fiber，会创建多个update

```javascript
const onClick = () => {
  // 创建三个update
  updateCount((count) => count + 1);
  updateCount((count) => count + 1);
  updateCount((count) => count + 1);
}
```

```typescript
function dispatchSetState<State>(
	fiber: FiberNode,
	updateQueue: UpdateQueue<State>,
	action: Action<State>
) {
	const update = createUpdate(action, lane);
	enqueueUpdate(updateQueue, update);
	scheduleUpdateOnFiber(fiber);
}
```

对于上面的三个updateCount，会触发三次dispatchSetState，因此会创建三个update，然后再将update插入到enqueueUpdate中。

```typescript
const enqueueUpdate = <State>(
  updateQueue: UpdateQueue<State>,
  update: Update<State>
) => {
  updateQueue.shared.pending = update;
}
```

我们一开始对于enqueueUpdate插入的操作是直接覆盖的，现在已经不合适了，需要改变插入的方式。

```typescript
const enqueueUpdate = <State>(
  updateQueue: UpdateQueue<State>,
  update: Update<State>
) => {
  const pending = updateQueue.shared.pending;
  if (penging === null) {
    update.next = update;
  } else {
    update.next = pending.next;
    pending.next = update;
  }
  updateQueue.shared.pending = update;
}
```

现在将updateQueue变成一个update环状链表。

<Image :src="'/front-frame/react/sound-code/batched-updates/2.png'" />

这张图展现出了之前对更新（update）的处理方式，以及之后对更新的处理方式。

接下来要新建一个scheduler阶段，在这个阶段中，我们要在一个宏任务或者微任务中调度这些更新，也就是说，在一个宏任务或者微任务的时间范围内，触发的所有更新，会依据某种判断机制，选出一个优先级，然后根据这个优先级执行render阶段。因此

「多次触发更新，只进行一次更新流程」，意味着要达成3个目标：

1. 需要实现一套优先机制，并且每个更新都有优先级
2. 需要一套算法，用于决定哪个优先级优先进入render阶段
3. 需要能够合并一个宏任务/微任务中触发的所有更新

## 二、实现一套优先机制，Lane模型

包括

* lane（二进制位，代表优先级）

  ```typescript
  const SyncLane = 0b0001;
  const NoLane = 0b0000;
  ```

* lanes（二进制位，代表lane的集合）

其中

* lane作为update的优先级
* lanes为lane的集合

### lane的产生

一开始我们用最简单的方法。统一返回同步的lane

```typescript
function requestUpdateLane() {
	return SyncLane;
}
```

虽然requestUpdateLane目前返回的都是SyncLane，但是我们这里为后续留了一个可扩展的空间。requestUpdateLane后续会对于不同情况触发的更新，产生不同的lane。我们这么写是为后续不同事件产生不同优先级做准备。怎么理解呢？

```typescript
function dispatchSetState<State>(
	fiber: FiberNode,
	updateQueue: UpdateQueue<State>,
	action: Action<State>
) {
  const lane = requestUpdateLane();
	const update = createUpdate(action, lane);
	enqueueUpdate(updateQueue, update);
	scheduleUpdateOnFiber(fiber);
}
```

比如上面的dispatchSetState，有可能是在onClick回调中触发的，也有可能是在useEffect中触发的，而在requestUpdateLane中，它是知道当前的更新是在什么情况下触发的，这个时候会针对不同的情况返回不同的lane。

那么如何知道哪些lane被消费，还剩下哪些没被消费？

我们先理解一下什么是消费lane。

在我们之前消费update的过程中，也就是在processUpdateQueue中，会根据update计算新状态memoizedState，其实消费update就是消费lane的过程。因为lane代表的就是update的优先级。

为了解决上面的问题【如何知道哪些lane被消费，还剩下哪些没被消费？】，我们需要对FiberRootNode进行一些改造。

### 对FiberRootNode的改造

<Image :src="'/front-frame/react/sound-code/batched-updates/3.png'" />

上图是添加了schedule阶段之后，新的同步更新流程。首先触发更新，触发更新的话就会创建以一个update，创建update就会拥有一个lane，此时就进入schedule阶段，那么在schedule阶段的时候，我们要在fiberRootNode中记录这个lane是什么「存放在pendingLanes中」。然后schedule阶段根据某些逻辑选出一个lane，然后这个lane所属的update就进入render阶段，以及后续的commit阶段，至此一个update就消费完了，对应的lane也就消费了。commit阶段完了以后，我们要将fiberRootNode上存放在pendingLanes的lane移除掉，移除完之后，commit阶段又循环回schedule阶段。这个schedule会寻找还有没有其他剩余的lane，有的话就继续上面的操作。

因此在fiberRootNode上需要增加如下字段：

* 代表所有未被消费的lane的集合

  ```typescript
  pendingLanes: Lanes;
  ```

* 代表本次更新消费的lane

  ```typescript
  finishedLane: Lanes;
  ```

## 三、实现「某些判断机制」，选出一个lane

```typescript
// 简单俩讲就是选出优先级最高的lane
function getHightestPriorityLane(lanes: Lanes):Lane {
	return lanes & -lanes;
}
```

在调度的入口选出最高的优先级

```typescript
function ensureRootIsScheduled(root: FiberRootNode) {
	const updateLane = getHightestPriorityLane(root.pendingLanes);
  if(updateLane === NoLane) {
    return;
  }
  if (updateLane === SyncLane) {
    // 同步优先级 用微任务调度
    scheduleSyncCallback(performSyncWorkOnRoot.bind(null, root, updateLane));
		scheduleMicroTask(flushSyncCallbacks);
  } else {
    // 其他优先级 用宏任务调度
  }
}
```

## 四、实现类似防抖、节流效果，合并宏/微任务中触发的更新

上面的ensureRootIsScheduled中，判断到是同步优先级的任务的话，会执行scheduleSyncCallback，先收集所有的同步更新回调函数。

```typescript
let syncQueue: ((...args: any) => void)[] | null = null;
// 当前是否正在执行同步的回调函数
let isFlushingSyncQueue = false;

export function scheduleSyncCallback(callback: (...args: any) => void) {
	if (syncQueue === null) {
		// 第一个回调函数
		syncQueue = [callback];
	} else {
		syncQueue.push(callback);
	}
}
```

收集完成之后，在微任务里面统一执行，因此需要提供一个创建微任务的方法

```typescript
export const scheduleMicroTask =
	typeof queueMicrotask === 'function'
		? queueMicrotask
		: typeof Promise === 'function'
			? (callback: (...args: any) => void) =>
					Promise.resolve(null).then(callback)
			: setTimeout;
```

最后统一调度的逻辑其实是将上面收集到的所有回调遍历执行

```typescript
// 执行同步的回调函数
export function flushSyncCallbacks() {
	if (!isFlushingSyncQueue && syncQueue) {
		isFlushingSyncQueue = true;
		try {
			syncQueue.forEach((callback) => callback());
		} catch (e) {
			console.error('flushSyncCallbacks报错', e);
		} finally {
			isFlushingSyncQueue = false;
			syncQueue = null;
		}
	}
}
```

这里之所以需要用到isFlushingSyncQueue这个变量，是因为如果在函数组件里面出现像这样子的更新逻辑

```typescript
const onClick = () => {  
	// 创建三个update  
	updateCount((count) => count + 1);  
	updateCount((count) => count + 1);  
	updateCount((count) => count + 1);
}
```

每调用一次updateCount，其实就是触发一次dispatchSetState，进而会创建各自对应的update然后开始scheduleUpdateOnFiber，然后再执行ensureRootIsScheduled，而scheduleMicroTask也会执行三次，但是在后面两次，isFlushingSyncQueue为true就走不进去了。因此虽然执行了几次dispatchSetState，但是被合并成一次执行了。

最后还有一个问题，processUpdateQueue方法在消费update时需要考虑：

* lane的因素
* update现在是一条链表，需要遍历

```typescript
export const processUpdateQueue = <State>(
	// 初始状态
	baseState: State,
	pendingUpdate: Update<State> | null,
	renderLane: Lane
): {
	memoizedState: State;
	baseState: State;
	baseQueue: Update<State> | null;
} => {
	const result: ReturnType<typeof processUpdateQueue<State>> = {
		memoizedState: baseState,
		baseState,
		baseQueue: null
	};
	if (pendingUpdate !== null) {
		// 第一个update
		let first = pendingUpdate.next;
		let pending = pendingUpdate.next as Update<any>;
		do {
			const updateLane = pending?.lane;
			if (updateLane === renderLane) {
				const action = pendingUpdate.action;
				if (action instanceof Function) {
					baseState = action(baseState);
				} else {
					baseState = action;
				}
			} else 
				if (__DEV__) {
          console.error('不应该进入');
        }
			}
			pending = pending?.next as Update<any>;
		} while (pending !== first);
		result.memoizedState = baseState;
	}
	return result;
};
```

最后记得在commit阶段移除「本次更新被消费的lane」

```typescript
function commitRoot(root: FiberRootNode) {
	const lane = root.finishedLane;
	if (lane === NoLane) {
		console.error('commit阶段finishedLane不应该是NoLane');
	}
  // 执行一些重置操作
	root.finishedWork = null;
	root.finishedLane = NoLane;
	markRootFinished(root, lane);
}
// 移除传进来的lane
export function markRootFinished(root: FiberRootNode, lane: Lane) {
	root.pendingLanes &= ~lane;
}
```

## 五、提出几个问题

1.下面点击div之后，App组件会render几次？

```typescript
const App = () => {
  const [num, setNum] = useState(0);
  const [show, setShow] = useState(false);
  console.log("render");
  return (
    <div
      onClick={() => {
        setNum((num) => num + 1);
        setNum((num) => num + 1);
        setNum((num) => num + 1);
        setShow(!show)
      }}
    >
      {num}
    </div>
  );
};
const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<App />);
```

答案是一次，因为dispatchSetState被合并成一次执行了。

2.为什么下面在setNum时无法获取到最新的num？

```typescript
const App = () => {
  const [num, setNum] = useState(0);
  console.log("render");
  return (
    <div
      onClick={() => {
        setNum(num + 1);
        setNum(num + 1);
        setNum(num + 1);
      }}
    >
      {num}
    </div>
  );
};
const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<App />);
```

点击div之后，num渲染出来为1。

我们回去看看前面的processUpdateQueue，在处理action的时候，如果action是一个函数，那么就会通过baseState获取到最新的值，但是如果action不为函数，那么就只会直接取action为baseState，而每个action永远都是num + 1，因此最后在界面上也只会显示成1。

```typescript
const action = pendingUpdate.action;
if (action instanceof Function) {
  baseState = action(baseState);
} else {
  baseState = action;
}
```

3.所以setState究竟是同步的还是异步的？

在React中，`setState`行为可以看作是异步的，但这个"异步"并不是像 setTimeout 这样的 JavaScript 异步任务那样，而是由React的更新机制造成的。

React的设计原则是将真实DOM操作抽象化，以在JavaScript层模拟DOM操作，以此来提供一个更高效的更新方式。React保持一个或多个组件树的状态，在组件的`setState`时，并不立刻将这个变化反映在DOM上，而是将这个要修改的状态放入到一个更新队列中。

随后，React会根据需要（通常是等到所有事件处理程序都完成后，或者达到一定的时间间隔)，在合适的时机一次性把这个队列中的状态更新应用到实际的DOM上。这个过程叫作批量更新，也是为什么`setState`有"异步"行为的主要原因。

然而，这并不意味着`setState`不能同步执行。在某些场景下，如`componentDidMount`或者`componentDidUpdate`的生命周期方法中，或者在 React 组件之外调用 `setState`，React并不会批量处理这些更新操作，`setState`将会同步执行。

总的来说，React选择何时进行DOM更新有其自身的一套规则，这些规则都是为了提高应用性能和保证应用的稳定性。在大多数情况下，React做出的这个决定都是最优的，提供了开箱即用的高性能体验。如果你需要立刻获取到最新的状态值，可以使用`setState`的第二个参数，这是一个回调函数，它会在状态更新并且组件重新渲染后执行。

4.下面的执行结果为什么不是最新的值？

```typescript
const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div
      onClick={() => {
        setNum(num + 1);
        setNum(num + 1);
        setNum(num + 1);
        setTimeout(() => {
          console.log(num);
        });
      }}
    >
      {num}
    </div>
  );
};
const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<App />);
```

`setTimeout` 里面的 `console.log(num);` ，在点击时创建，这个 `num` 值其实是点击时捕获的 `num` 的值，也就是0，所以即使在这之后`num` 的值更新了，这个日志还是会输出0。
