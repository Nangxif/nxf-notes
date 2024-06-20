# 初探mount流程

更新流程的目的：

- 生成wip fiberNode树
- 标记副作用flags
  更新流程的步骤：
- 递：beginWork
- 归：completeWork

## 一、beginWork

对于如下结构的createElememt：

```html
<A>
  <B />
</A>
```

当进入A的beginWork时，通过对比B的current fiberNode与B的ReactElement，生成子节点对应的wip fiberNode。

在此过程中最多会标记两类与【结构变化】相关的flags:

* Placement，代表了节点的插入或者移动
  比如插入： a -> ab，那我们对b会标记一个Placement
  比如移动：abc ->bca，相当于a移动到了最后，那么我们对a会标记一个Placement
* ChildDeletion
  删除：ul>li\*3 -> ul>li\*1，三个li变成一个li，那么会标记两个li为ChildDeletion

在beginWork中标记的flags都是与【结构变化】相关的flags，不包含与【属性变化】相关的flag，比如下面的这个：

* Update

  ```html
  <img title="鸡"/> -> <img title="你太美"/>
  ```

## 二、每种节点在beginWork中需要做的工作

首先beginWork会对每一种类型的fiberNode进行对应的处理

```typescript
export const beginWork = (wip: FiberNode, renderLane: Lane) => {
	// 比较，最终返回子fiberNode
	switch (wip.tag) {
		case HostRoot:
			// 这个传renderLane是因为里面会触发更新
			return updateHostRoot(wip, renderLane);
		case HostComponent:
			return updateHostComponent(wip);
		case HostText:
			// 如果beginWork一直执行到文本节点的话，那么文本节点是没有子节点的
			// 也说明了更新流程的递归中的递阶段，一直递到叶子节点为HostText的时候就没办法继续往下了，接下来就要开始归阶段
			return null;
		case FunctionComponent:
			// 这个传renderLane是因为里面也会触发更新
			return updateFunctionComponent(wip, renderLane);
		case Fragment:
			return updateFragment(wip);
		case ContextProvider:
			return updateContextProvider(wip);
		case SuspenseComponent:
			return updateSuspenseComponent(wip);
		case OffScreenComponent:
			return updateOffscreenComponent(wip);
		default:
			if (__DEV__) {
				console.warn('beginwork未实现的类型');
			}
			break;
	}
	return null;
};
```

HostRoot的beginWork工作流程：

1. 计算状态的最新值
2. 创造子fiberNode

```typescript
function updateHostRoot(wip: FiberNode) {
	// 对于首屏渲染的时候来说，肯定是还不存在的
	const baseState = wip.memoizedState;
	const updateQueue = wip.updateQueue as UpdateQueue<Element>;
	const pending = updateQueue.shared.pending;
	/**
	 * 保存Update的问题
	 * 按照我们下面直接把panding的做法，我们是相信取出来的pending在processUpdateQueue一定会被执行，
	 * 所以才将他清空，但是我们现在有了并发更新，我们的更新可能被打断，比如优先级较低的更新运行到一半如果有高优先级的更新出现，就会被打断
	 * 然后去执行高优先级的更新，那么此时低优先级的更新已经被置为null了，这显然是不对的了
	 * 考虑将update保存在current中，只要不进入commit阶段，current与wip不会互换，
	 * 所以保存在current中，即使多次执行render阶段，只要不进入commit阶段，都能从current中恢复数据
	 */
	/**
	 *  对于首屏渲染来说，这个是不会被打断的，会被打断的情况是出现在hook中，因此我们要去那边解决
	 */
	updateQueue.shared.pending = null;
  // memoizedState就是当前这个HostFiberRoot最新的状态了，其实这个memoizedState就是<App/>的ReactElement
	const { memoizedState } = processUpdateQueue(baseState, pending);

	const current = wip.alternate;

	if (current !== null) {
		// 即使从wip中取不到memoizedState，也可以从current里面取
		current.memoizedState = memoizedState;
	}
	wip.memoizedState = memoizedState;
	const nextChildren = wip.memoizedState;
  // 当前我们已经有了子节点对应的ReactElement->nextChildren
	reconcileChildren(wip, nextChildren);
	return wip.child;
}
```

HostComponent的beginWork工作流程：

1. 创造子fiberNode

```typescript
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

HostText没有beginWork工作流程（因为他没有子节点），所以直接返回一个null就可以了。

## 三、reconcileChildren

上面出现了好几次reconcileChildren方法，那么这个方法是干什么的呢？

其实上面已经有说到了。就是通过对比子节点的current fiberNode与子节点的ReactElement，生成子节点对应的wip fiberNode

```typescript
function reconcileChildren(wip: FiberNode, children?: ReactElementType) {
	//<A><B/></A>
	// 当进入A的beginWork时，通过对比B current fiberNode与B createElement，生成B对应wip fiberNode
	// 所以我们先获取current节点
	const current = wip.alternate;
	if (current !== null) {
		// current不为空，说明不是首屏渲染
		// update
		wip.child = reconcileChildFibers(wip, current?.child, children);
	} else {
		// 即将开始渲染之前只有workInProgress树，还没有current树
		// mount
		wip.child = mountChildFibers(wip, null, children);
	}
}
```

那么在继续实现reconcileChildFibers之前，我们先来了解一个beginWork阶段的性能优化策略。

如果有如下结构的ReactElement：

```html
<div>
    <p>练习时长</p>
    <span>两年半</span>
</div>
```

理论上mount流程完毕之后包含的flags:

- 两年半 Placement
- span Placement
- 练习时长 Placement
- p Placement
- div Placement

相比于执行5次Placement，我们其实可以构建好【离屏DOM树】后，再对顶层的div执行一次Placement操作。

beginWork阶段的性能优化策略实际上是针对mount流程的。因为在mount流程的时候，才会出现大量的节点插入操作。而在update流程的时候，只存在更新局部的节点。

我们看到之前reconcileChildren的时候，如果在mount阶段执行的是mountChildFibers，而mountChildFibers是没有收集副作用的。那么就没有fiber被标记为Placement。在处理HostRoot的时候，我们希望对根节点只执行一次Placement操作。那此时HostRoot的子节点又执行的是mountChildFibers，压根就不收集副作用，那我们要怎么才能实现这种效果。

其实我们在workLoop里面实现了，在renderRoot的时候，我们会先执行prepareFreshStack初始化fiber节点。也就是说在这里会创建一个root.current（也就是hostRootFiber）的workInProgress。这也意味着在更新流程中，即使是首屏渲染，那么整棵fiber树里面，是有一个节点同时存在current以及workInProgress，也就是我们挂载的这个根节点对应的fiber，也就是hostRootFiber。因此对于首屏渲染，我们挂载的组件树的所有fiber都会走reconcileChildren的mount逻辑，而对于hostRootFiber，会走到update逻辑，走update逻辑就会被插入一个Placement的flags，通过这个flags，最终会执行一次dom插入操作，那么这一次dom插入操作就会将已经离屏构建好的dom树插入到页面中。

接下来可以讲解reconcileChildFibers了

其实reconcileChildFibers和mountChildFibers都是由ChildReconciler来的。

这里我们先声明，目前我们只实现子节点为单节点的情况，后续再实现多节点的情况，因为多节点就涉及到了diff算法了，这是一大核心内容。

```typescript
export const reconcileChildFibers = ChildReconciler(true);
export const mountChildFibers = ChildReconciler(false);
```

```typescript
// shouldTrackEffects表示是否应该追踪副作用，为false表示不需要追踪副作用，在这种情况下就不用标识flags
// 那他什么时候传true什么时候传false呢？实际上是针对mount流程的，因为在mount流程的时候，才会出现大量的节点插入操作，
// 而在update流程的时候，只存在更新局部的节点
function ChildReconciler(shouldTrackEffects: boolean) {
  // 插入单一的节点
	function placeSingleChild(fiber: FiberNode) {
		if (shouldTrackEffects && fiber.alternate === null) {
			// 需要副作用，而且当前的workInProgress节点的alternate，也就是对应的current节点为空，说明是首屏加载
			fiber.flags |= Placement;
		}
		return fiber;
	}
  return function reconcileChildFibers(
		returnFiber: FiberNode,
		currentFiber: FiberNode | null,
		newChild?: any //ReactElementType
	) {
		// 我们之前说过，在mount阶段的时候，不对副作用进行追踪，但是不追踪的话，我们怎么在首屏渲染的时候给fiber标识Placement呢
		// 其实我们之前已经实现了，在workLoop文件里面，我们在首屏渲染的时候创建了一棵workInProgress树（createWorkInProgress），这是root.current的workInProgress，
		// 也就是hostRootFiber的workInProgress，这意味着在更新流程中，即使是首屏渲染，那么整棵fiber树里面，是有一个节点，它同时存在current以及workInProgress，也就是hostRootFiber这个节点
		// 那么对于首屏渲染，我们挂载的这棵组件树的所有fiber，都会走到mount的逻辑，对于hostRootFiber的话就会走到update的逻辑
		// 那么这一次的update逻辑，那么就会被插入一个Placement的flags，通过这个flags，最终我们就会执行一次dom插入操作
		// 那么这一次dom插入操作就会将整个离屏的DOM树插入到页面中
    if (typeof newChild === 'object' && newChild !== null) {
      switch (newChild.$$typeof) {
				case REACT_ELEMENT_TYPE:
					return placeSingleChild(
						reconcileSingleElement(returnFiber, currentFiber, newChild)
					);
				default:
					if (__DEV__) {
						console.warn('未实现的reconcile类型', newChild);
					}
					break;
			}
    }
		// HostText
		if (typeof newChild === 'string' || typeof newChild === 'number') {
			return placeSingleChild(
				reconcileSingleTextNode(returnFiber, currentFiber, newChild)
			);
		}
		if (currentFiber !== null) {
			deleteRemainingChildren(returnFiber, currentFiber);
		}
		if (__DEV__) {
			console.warn('未实现的reconcile类型', newChild);
		}
		return null;
	};
}
```

ChildReconciler通过是否需要追踪副作用，创建出两个不同阶段的reconcileChildFibers。在reconcileChildFibers里面，首先判断当前的节点是否为对象，为对象的话判断里面的$$typeof是否为REACT_ELEMENT_TYPE，是的话才能认定为ReactElement节点，然后再执行下面的操作placeSingleChild以及reconcileSingleElement操作。如果当前的节点不为对象，那么检查一下是否为文本或者数字，如果是的话，那么直接执行placeSingleChild以及reconcileSingleTextNode。

我们发现，两种节点最后都会执行一步placeSingleChild操作，在这之前都会调用各自对应的reconcileSingleXXX方法，这个方法会通过ReactElement生成对应的fiberNode。而placeSingleChild就是给生成的这个fiberNode的flags添加Placement标记（如果当前是需要追踪副作用，而且当前对应的current节点为空的情况下）。

## 四、completeWork

上面初步实现了递归中的递阶段beginWork。接下来我们看看归阶段completeWork需要解决的问题：

* 对于Host类型FiberNode：构建离屏DOM树

  为什么是在completeWork的时候才构建离屏树，因为在这个阶段才是从下往上的，那么我们就可以获取到最深层的子节点，那么每次往上的过程，我们就可以把子节点插入到父节点中，然后再把父节点插入到爷爷节点中，这样依次往上，就可以构建一棵离屏的dom树。

* 标记Update flag
  其次，我们可以在completeWork中根据我们的属性是否发生变化来标记Update flag。这个我们后面再来实现。

```typescript
export const completeWork = (wip: FiberNode) => {
  const newProps = wip.pendingProps;
	const current = wip.alternate;
  switch (wip.tag) {
		case HostComponent:
      if (current !== null && wip.stateNode) {
				// update 后续处理
			} else {
				// 1. 构建DOM
				const instance = createInstance(wip.type, newProps);
				// 2. 将DOM插入到DOM树中
				appendAllChildren(instance, wip);
				// 最后把instance赋值给，wip的stateNode
				wip.stateNode = instance;
			}
			bubbleProperties(wip);
			return null;
    case HostText:
			if (current !== null && wip.stateNode) {
				// update 后续处理
			} else {
				// 1. 构建DOM
				const instance = createTextInstance(newProps.content);
				// 最后把instance赋值给，wip的stateNode
				wip.stateNode = instance;
			}
			bubbleProperties(wip);
			return null;
		case HostRoot:
		case FunctionComponent:
		case Fragment:
		case OffScreenComponent:
			bubbleProperties(wip);
			return null;
    default:
			if (__DEV__) {
				console.warn('未处理的completeWork情况', wip);
			}
			break;
  }
}
```

completeWork根据fiber的tag判断是什么类型的fiber，假设如果是HostComponent的fiber，那么得处理一下update的逻辑和mount的逻辑，因为我们这个章节讲的是首屏渲染的逻辑，因此不讲更新的逻辑。

在mount阶段，需要做两步操作：

1. 构建DOM
2. 将DOM插入到DOM树中
3. 最后把instance赋值给，wip的stateNode

这里我们不可能直接书写创建DOM和插入DOM的方法，我们会在一个单独的文件里面实现这些DOM的操作。

```typescript
export function updateFiberProps(node: DOMElement, props: Props) {
	node[elementPropsKey] = props;
}

export const createInstance = (type: string, props: Props): Instance => {
	const element = document.createElement(type) as unknown;
	updateFiberProps(element as DOMElement, props);
	return element as DOMElement;
};

// 在parent节点下插入wip这个节点，但是wip本身有可能不是一个DOM节点，所以对于wip，我们还需要一个递归的流程，寻找它里面的HostComponent或者HostText
function appendAllChildren(parent: Container, wip: FiberNode) {
	let node = wip.child;
	while (node !== null) {
		if (node.tag === HostComponent || node.tag === HostText) {
			appendInitialChild(parent, node?.stateNode);
		} else if (node.child !== null) {
			node.child.return = node;
			node = node.child;
			continue;
		}
		// 终止条件就是当node等于wip的时候，因为这个过程是递归的，当归到根节点的时候，就该结束了
		if (node === wip) {
			return;
		}

		// 当子节点全部遍历完之后，就得开始遍历兄弟节点了
		while (node.sibling === null) {
			// 这个时候得开始往上归了，因为兄弟节点也遍历完了
			if (node.return === null || node.return === wip) {
				return;
			}
			node = node?.return;
		}
		node.sibling.return = node?.return;
		node = node?.sibling;
	}
}
```

通过createInstance创建了一个DOM节点之后，会调用appendAllChildren方法插入节点，插入的逻辑其实很简单，为什么需要appendAllChildren实现这么多的逻辑，我们来看一个例子就理解了。

假设现在有一个函数组件

```typescript
function A () {
  return <div></div>
}
// 接下来我们要将A插入到B中
<h3><A/></h3>
```

实际上，对于我们离屏DOM来说，我们应该插入h3的，是A中的div。所以在appendAllChildren的实现上来说，最简单的情况就是判断到fiberNode刚好是DOM类型的fiber或者文本类型的fiber，此时直接插入即可。

```typescript
if (node.tag === HostComponent || node.tag === HostText) {
  appendInitialChild(parent, node?.stateNode);
}
```

但是还有一些更复杂的情况

```html
<h3>
	<A/>
	<A/>
</h3>
```

这种情况对于h3来说，它不仅要插入A的子节点div，同时也要插入A的兄弟节点，也就是另一个A的子节点div。所以说appendAllChildren也是一个递归的过程（这个过程其实跟beginWork和completeWork流程是一样的）。

首先插入的时候会先从当前节点开始往下递归，如果查到节点是DOM节点或者文本节点，那么就是我们想要的节点了直接插入即可。如果不是DOM节点或者文本节点，就继续往下查找，一直到node为空，也就是没有子节点的时候，那么开始查找兄弟节点，查看他们是否是DOM节点或者文本节点，逻辑跟前面的一样，没有兄弟节点就继续往回归，一直归到node与最顶部的wip相等。

这就是appendAllChildren的逻辑。

最后，还要记得把instance赋值给wip的stateNode。

有了HostComponent为基础，实现HostText类型的completeWork就简单了

```typescript
// 1. 构建DOM
const instance = createTextInstance(newProps.content);
// 最后把instance赋值给，wip的stateNode
wip.stateNode = instance;
```

只需要实现两步即可，因为文本节点没有什么子节点可言。

至此，我们在beginWork和completeWork执行完之后，我们可以得到一棵workInProgress fiberNode树，以及这棵fiberNode树里面的某一些节点被标记副作用的flags。那么接下来我们肯定要找到哪些节点被标记flags并对它执行对应的操作。那么这个寻找的过程，如果我们继续深度优先遍历这棵树的话，显然这样的性能不是很高效，那么我们就可以利用completeWork向上遍历的流程，将子fiberNode的flags冒泡到父fiberNode，这样一级一级往上冒泡。这样就可以很清楚地知道某一棵子树中是否存在flags。

我们来看一下具体实现：

```typescript
function bubbleProperties(wip: FiberNode) {
	let subtreeFlags = NoFlags;
	let child = wip.child;

	while (child !== null) {
		// 执行下面两步操作之后，subtreeFlags就会包含当前节点的子节点的flags以及子节点的subtreeFlags
		subtreeFlags |= child.subtreeFlags;
		subtreeFlags |= child.flags;

		child.return = wip;
		child = child.sibling;
	}
	wip.subtreeFlags |= subtreeFlags;
}
```

也就是把子节点的flags和subtreeFlags都冒泡到父节点的subtreeFlags上。

因此，fiberNode上的flags代表的当前这个fiber的副作用，而subtreeFlags代表的是子孙fiberNode所拥有的所有flags。

最终，我们回到workLoop流程。

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
  const finishedWork = root.current.alternate;
  root.finishedWork = finishedWork;
  
  commitRoot(root)
}
```

我们在workLoop执行完之后，就可以开始commit阶段，根据workInProgress fiberNode树，以及树中的flags，执行具体的DOM操作。

那么下一节课，我们就会实现ReactDOM这个宿主环境下的Host类型组件的首屏渲染流程。
