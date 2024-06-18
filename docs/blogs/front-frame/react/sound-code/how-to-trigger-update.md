# 如何触发更新

常见的触发更新的方式：

- ReactDOM.createRoot().render
  （或者老版的ReactDOM.render）
- this.setState
- useState的dispatch方法

我们希望实现一套统一的更新机制，他的特点是

- 兼容上述触发更新的方式
- 方便后续扩展（优先级机制）因为react18的特色是并发更新，那么这套更新机制也要方便我们从当前的同步更新变成后续的并发更新。

## 一、更新机制的组成部分

* 代表更新的数据结构 ---Update

* 消费update的数据结构 ---UpdateQueue

每个fiber节点里面，都有一个updateQueue属性，这个属性里面保存着一个对象，对象里面有shared属性，这个属性也保存着一个对象，这个对象里面有一个pending属性，这个属性会指向一个action，当然，如果没有任何更新的话，这个pending指向一个null。初始图如下

<Image :src="'/front-frame/react/sound-code/how-to-trigger-update/1.png'" />

我们接下来初步实现一下这个数据结构，并且实现创建这个数据结构的方法和消费这个数据结构的方法。

```typescript
export type Action<State> = State | ((prevState: State) => State);

export interface Update<State> {
	action: Action<State>;
}

export interface UpdateQueue<State> {
	shared: {
		pending: Update<State> | null;
	};
}

// 实现创建Update实例的方法
export const createUpdate = <State>(
	action: Action<State>,
): Update<State> => {
	return {
		action
	};
};

// 接下来我们还需要一个方法就是往UpdateQueue里面增加Update
export const enqueueUpdate = <State>(
	updateQueue: UpdateQueue<State>,
	update: Update<State>
) => {
  // 当前我们插入update采用全覆盖的方式，后续有批处理逻辑的话，我们再改一下update的逻辑
  updateQueue.shared.pending = update;
}

// UpdateQueue消费Update的方法
// 这里传进来的pendingUpdate应该是我们的baseQueue和我们原来的pendingUpdate合并后的结果，所以应该是在外面处理的
export const processUpdateQueue = <State>(
	// 初始状态
	baseState: State,
	pendingUpdate: Update<State> | null
): {
	memoizedState: State;
} => {
  const result: ReturnType<typeof processUpdateQueue<State>> = {
		memoizedState: baseState
	};
  if (pendingUpdate !== null) {
    const action = pendingUpdate.action;
    if (action instanceof Function) {
      result.memoizedState = action(baseState);
    } else {
      result.memoizedState = action;
    }
  }
  return result;
}
```

已经实现了update相关的东西，接下来的工作就包括：

* 实现mount时调用的API
* 将该API接入上述更新机制中

那么这里我们需要考虑一些事情：

* 更新可能发生于任意组件，而更新流程是从根节点递归的，所以说，我们需要从触发更新的那个节点，向上遍历到根节点
* 需要一个统一的根节点保存通用信息

举个例子，我们一个react的起点是从createRoot开始的

<Image :src="'/front-frame/react/sound-code/how-to-trigger-update/2.png'" />

ReactDOM.createRoot执行之后就会创建当前应用的统一的根节点，我们叫它fiberRootNode，那我们传进去的rootElement这个dom，这个dom也有自己对应的fiber节点，它的名字叫hostRootFiber。hostRootFiber和fiberRootNode之间用current和stateNode来建立连接。最后执行render方法执行App这个组件，那么最终生成App一个fiberNode，那么App这个fiberNode和hostRootFiber之间就用child和return来建立连接。那么整个应用的根节点就是fiberRootNode。

那么接下来我们就来实现这一套对应的结构。实现了这套数据结构之后，我们再实现向上遍历到根节点的过程。

fiberRootNode结构如下：

```typescript
export class FiberRootNode {
	container: Container;
	current: FiberNode;
	// 这个字段指向的是我们整个更新完成之后hostRootFiber
	finishedWork: FiberNode | null;
	// 代表所有未被消费的lane的集合
	pendingLanes: Lanes;
	// 代表本次消费的lane
	finishedLane: Lanes;
	// 等待被消费的effect
	pendingPassiveEffect: PendingPassiveEffects;
	// 上次调度任务的回调函数
	callbackNode: CallbackNode | null;
	// 上次调度任务的优先级
	callbackPriority: Lane;
	// WeakMap{wakeable: Set<Lane>}
	pingCache: WeakMap<Wakeable<any>, Set<Lane>> | null;
	// root下所有被挂起的更新的优先级
	suspendedLanes: Lanes;
	// 当前root下所有挂起的更新里面的被ping了的更新的优先级，pingLanes就是suspendedLanes的子集
	// 这样子我们每次ensureRootIsScheduled的时候获取优先级就不用只取最高优先级的了，因为总取最高优先级的lane有可能取到挂起的lane
	// 我们得等到这个挂起的lane被ping了之后再取
	pingedLanes: Lanes;
	constructor(container: Container, hostRootFiber: FiberNode) {
		this.container = container;
		this.current = hostRootFiber;
		hostRootFiber.stateNode = this;
		this.finishedWork = null;
		this.pendingLanes = NoLanes;
		this.finishedLane = NoLanes;
		this.suspendedLanes = NoLanes;
		this.pingedLanes = NoLanes;
		this.pendingPassiveEffect = {
			unmount: [],
			update: []
		};
		this.callbackNode = null;
		this.callbackPriority = NoLane;
		this.pingCache = null;
	}
}
```

这个fiberRootNode，就可以保存通用信息。

接下来我们来实现实现mount时调用的API。也就是说我们要实现ReactDOM.creactRoot(rootElement).render(<App/>)这个过程调用的api

```typescript
export function createRoot(container: Container) {
	const root = createContainer(container);
	return {
		render(element: ReactElementType) {
			updateContainer(element, root);
		}
	};
}
```

```typescript
// 这一步实现的是ReactDOM.creactRoot(rootElement)
export function createContainer(container: Container) {
	const hostRootFiber = new FiberNode(HostRoot, {}, null);
	const root = new FiberRootNode(container, hostRootFiber);
	hostRootFiber.updateQueue = createUpdateQueue();
	return root;
}
// 这一步实现的是 render(<App/>)
export function updateContainer(
	element: ReactElementType | null,
	root: FiberRootNode
) {
	const hostRootFiber = root.current;
	const update = createUpdate<ReactElementType | null>(element);
	enqueueUpdate(
		hostRootFiber.updateQueue as UpdateQueue<ReactElementType | null>,
		update
	);
	scheduleUpdateOnFiber(hostRootFiber);
	return element;
}
```

那么接下来我们如何将该API接入上述更新机制中，其实逻辑就在scheduleUpdateOnFiber里面。

```typescript
// 下面这个方法是连接renderRoot和updateContainer
export function scheduleUpdateOnFiber(fiber: FiberNode) {
	const root = markUpdateFromFiberToRoot(fiber);
	renderRoot(root);
}
```

我们上面提到的更新可能发生于任意组件，而更新流程是从根节点递归的，所以说，我们需要从触发更新的那个节点，向上遍历到根节点。这个问题，其实上面的代码在markUpdateFromFiberToRoot就实现了。

```typescript
// 从当前的fiber一直往上查找根fiber对应的stateNode
function markUpdateFromFiberToRoot(fiber: FiberNode) {
	let node = fiber;
	let parent = node.return;
	while (parent !== null) {
		node = parent;
		parent = node.return;
	}
	if (node.tag === HostRoot) {
		return node.stateNode;
	}
	return null;
}
```

接下来我们开始实现renderRoot流程

```typescript
function renderRoot(root: FiberRootNode) {
  // 初始化
  prepareFreshStack(root);
  do {
    try {
      workLoop();
      break;
    } catch(e) {
      console.warn('workLoop发生错误', e);
      workInProgress = null;
    }
  } while (true);
}
```

我们发现renderRoot开始的时候，会先初始化root，那么这个初始化操作具体做的是什么呢？

```typescript
function prepareFreshStack(root: FiberRootNode, lane: Lane) {
	workInProgress = createWorkInProgress(root.current, {});
}
```

其实这个方法的作用就是初始化workInProgress上面的状态。

```typescript
export const createWorkInProgress = (
	current: FiberNode,
	pendingProps: Props
): FiberNode => {
	// 因为react的更新采用了双缓存机制，所以，在创建一个workInProgress树的时候，
	// current树在经过一大堆的操作，最后还是会返回一个workInProgress树
	let wip = current.alternate;
	if (wip === null) {
		// 首屏渲染的时候，workInProgress就是null，当我们首屏渲染之后，下一次渲染的时候，就有workInProgress树了
		// mount
		wip = new FiberNode(current.tag, pendingProps, current.key);
		wip.stateNode = current.stateNode;

		wip.alternate = current;
		current.alternate = wip;
	} else {
		// update
		wip.pendingProps = pendingProps;
		// 接下来就要删除掉副作用，因为这些副作用是上一次更新的时候遗留下来的
		wip.flags = NoFlags;
		wip.subtreeFlags = NoFlags;
		wip.deletions = null;
	}
	wip.type = current.type;
	wip.updateQueue = current.updateQueue;
	wip.child = current.child;
	wip.memoizedProps = current.memoizedProps;
	wip.memoizedState = current.memoizedState;
	wip.ref = current.ref;
	return wip;
};
```

createWorkInProgress返回的是一个fiberNode，我们讲到fiberNode的原理是双缓存机制，因此createWorkInProgress每传进去一个fiberNode，我们应该返回的是与它对应的另一个fiberNode（也就是它的alternate）。因此如果current.alternate是空的话，那么说明是mount阶段，因此需要创建一个FiberNode，如果current.alternate不为空的话，说明在update阶段，那么直接复用current.alternate上面的一些状态。

## 二、总结

我们react的开始，就是先通过ReactDOM.createRoot()创建一个FiberRootNode，这个FiberRootNode不是fiber节点，它是整个应用的根节点，上面挂载着整个应用在运行过程中的各种状态。而其中，它的current指向hostRootFiber，这个节点是一个fiber节点，也就是由ReactDOM.createRoot传进来的root dom生成的对应的fiber节点。而这个fiber节点上面也有一个stateNode属性，这个stateNode属性指向FiberRootNode。

react的其中一个触发更新的方式就是通过ReactDOM.createRoot().render()触发，而render方法做的事情，就是调用updateContainer，创建一个render参数相关的update，然后插入到HostRootFiber的updateQueue上面，然后开始触发调度方法scheduleUpdateOnFiber，而调度方法有可能是在任意组件触发，而每次的调度又是从根节点开始的，因此需要调用markUpdateFromFiberToRoot方法，向上查找，一直找到FiberRootNode，然后再开始真正的调度逻辑renderRoot。renderRoot一开始就需要初始化当前workInProgress的状态，因此需要调用prepareFreshStack方法返回一个初始化完成的workInProgress，然后才开始workLoop，而workLoop我们上一节课提到了，它就是深度优先遍历每个节点，beginWork的时候往下深度优先遍历，然后标记每个fiber节点的flags，beginWork每次执行都会返回fiber的子fiber，当遍历到最深层的节点时，触发completeWork，completeWork的其中一个工作内容就是将当前刚结束beginWork的fiber节点的flags冒泡到父节点上，当前fiber的completeWork执行完成之后，completeUnitOfWork就会查看当前执行完completeWork的fiber节点是否还有兄弟节点，有的话就重新开始beginWork兄弟节点。如果没有的话，就开始执行父级fiber节点的completeWork。

那么具体beginWork和completeWork是在做什么事情呢？我们下节再开始讲解。

