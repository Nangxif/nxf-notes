# 初探reconciler

reconciler是React核心逻辑所在的模块，中文名叫协调器，协调器（reconciler）就是diff算法的意思

## 一、reconciler有什么用？

jquery工作原理（过程驱动）：

<Image :src="'/front-frame/react/sound-code/first-exploration-reconciler/1.png'" />

当我们使用前端框架之前，我们一般使用jquery进行开发页面，jquery的工作原理我们可以理解为过程驱动，也就是说开发者使用jquery调用浏览器宿主环境的api，然后宿主环境的api执行以后再显示真实的UI。

当我们拥有前端框架之后呢，工作方式就发生了改变，我们由过程驱动变成了状态驱动：

<Image :src="'/front-frame/react/sound-code/first-exploration-reconciler/2.png'" />

当使用前端框架是，变成了前端的运行时核心模块调用宿主环境的api，在react中这个核心模块叫recondiler，在vue里面叫renderer。那么开发者需要做的事情就是描述UI，在react中使用JSX语法描述，在vue中使用模板语法描述。在模板描述到运行时核心模块，这个过程是可能有编译优化的，但是在react中并没有，vue是有编译优化的。

* 对于react来说，它消费的是jsx，不支持模板语法

* react没有编译优化，react是一个纯运行时的前端框架

* 开放通用的API供不同的宿主环境使用

## 二、核心消费模块（renconciler）消费JSX的过程

核心模块操作的数据结构是？

当前已知的数据结构：ReactElement(JSX转换)

那么ReactElement能不能作为我们操作的数据结构呢？答案是不行的

ReactElement如果作为核心模块操作的数据结构，会存在哪些问题：

- 无法表达节点之间的关系
- 字段有限，不好拓展（比如无法表达当前这个ReactElement接下来的状态会发生什么样的变化）

所以，需要一种新的数据结构，他的特点：

- 介于ReactElement与真实UI节点之间
- 能够表达节点之间的关系（就是说我们可以通过这样一个数据结构，知道当前的节点跟其他节点是父子关系还是兄弟节点关系）
- 方便拓展（不仅可以作为数据存储单元，也能作为工作单元）

这就是FiberNode（虚拟DOM在React中的实现），而虚拟DOM在vue中的实现叫VNode。

## 三、renconciler的工作方式

对于同一个节点，比较ReactElement与fiberNode，生成子fiberNode，并根据比较的结果生成不同标记（插入，删除，移动……），对应不同宿主环境API对执行。

比如，我们要挂载<div></div>这么一个JSX

1. 首先jsx经过babel转换为jsx("div")，那么执行完的结果就是一个type为div的ReactElement
2. 这个ReactElement就会跟对应的fiberNode比较，但是当前并没有fiberNode，所以是null
3. 比较完的结果就会生成子fiberNode
4. 同时会对应标记一个Placement，这个标记对应着插入，所以我们接下来要做的操作就是插入一个div到dom中

接下来如果将<div></div>更新为<p></p>

1. 首先jsx经过babel转换为jsx("p")，那么执行完的结果就是一个type为p的ReactElement
2. 接下来我们就要将p的ReactElement跟他对应的fiberNode，也就是FiberNode(type: 'div')比较，那么这个FiberNode是这么来的呢？就是div的FiberNode的父亲FiberNode和父亲FiberNode的ReactElement比较后生成的。
3. 当p和FiberNode比较完之后就会生成子FiberNode，并且对应两个标记Deletion Placement。Deletion是我们发现当p和div比较之后，两个的类型是不一样的，所以我们就要先删除之前的div，然后再标记p为插入。

当所有ReactElement比较完之后，会生成一棵fiber树，一共会存在两棵fiber树：

* current: 与视图中真实UI对应的fiberNode树，这个树中的每个节点我们称之为current

* workInProgress: 触发更新后，正在reconciler中计算的fiberNode树，这个树中的每个节点我们称之为workInProgress

workInProgress生成之后会有很多标记，这些标记就对应了宿主环境api的执行，执行完之后真实的UI就会更新。

更新完之后workInProgress树就会变成current树。所以说这两棵树会来回地替换。这叫双缓存技术。

因此fiberNode的数据结构如下：

```typescript
export class FiberNode {
	type: any;
	tag: WorkTag;
	key: Key;
	stateNode: any;
	ref: Ref;
	return: FiberNode | null;
	sibling: FiberNode | null;
	child: FiberNode | null;
	index: number;
	// 开始准备工作的时候的props
	pendingProps: Props;
	// 工作完了确定下来的props是什么
	memoizedProps: Props | null;
	memoizedState: any;
	alternate: FiberNode | null;
	// 对应的标记
	flags: Flags;
	// 子树中包含的flags
	subtreeFlags: Flags;
	lanes: Lanes;
	// 存放effect链表
	updateQueue: unknown;
	// 存放需要被删除的子fiber
	deletions: FiberNode[] | null;
	constructor(tag: WorkTag, pendingProps: Props, key?: Key) {
		// 实例的属性
		this.tag = tag;
		this.key = key || null;
		// fiber节点对应的真实节点
		this.stateNode = null;
		// 如果fiber节点的类型是FunctionComponent的话，那么type对应的就是()=>{}
		this.type = null;
		// 构成树状结构
		// 指向父fiberNode
		this.return = null;
		// 指向下一个兄弟fiberNode
		this.sibling = null;
		// 指向子fiberNode
		this.child = null;
		// <ul><li></li><li></li></ul>第一个li的index是0，第二个是1
		this.index = 0;
		this.ref = null as unknown as Ref;

		// 构成工作单元
		// 这个工作单元准备开始的时候的props是什么，也就是初始props
		this.pendingProps = pendingProps;
		// 这个工作单元工作完的时候的props是什么，也就是最终props
		this.memoizedProps = null;
		this.memoizedState = null;
		this.updateQueue = null;

		this.alternate = null;
		// 副作用
		this.flags = NoFlags;
		this.subtreeFlags = NoFlags;
		this.deletions = null;
		this.lanes = NoLanes;
	}
}
```

## 四、JSX消费的顺序

以DFS深度优先遍历的顺序遍历ReactElement，这意味着：

- 如果有子节点，遍历子节点
- 如果没有子节点，遍历兄弟节点
  这是个递归的过程，存在递，归两个段
- 递：对应beginWork
- 归：对应completeWork

因此我们可以基于上面的消费顺序，搭建一个基础的框架。

```typescript
let workInProgress: FiberNode | null = null;

function prepareFreshStack(root: FiberNode) {
  workInProgress = fiber;
}

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

function workLoop() {
  while (workInProgress !== null) {
    performUnitOrWork(workInProgress);
  }
}

function performUnitOrWork(fiber: FiberNode) {
  const next = beginWork(fiber);
  fiber.memoizedProps = fiber.pendingProps;
  if (next === null) {
    // 没有子fiber的话就说明递归到最深层了
    completeUnitOfWork(fiber);
  } else {
    workInProgress = next;
  }
}

function completeUnitOfWork(fiber: FiberNode) {
  let node = fiber;
  do {
    completeWork(node);
    const sibling = node.sibling;
    if (sibling !== null) {
      workInProgress = sibling;
      return;
    }
    // 兄弟节点不存在，就该归，往上了
    node = node.return;
    workInProgress = node;
  } while (node !== null)
}
```

我们这里也就是大概搭建了一个递和归的流程，至于renderRoot该谁调用呢？也就是它初始化之前要做些什么呢？还有就是beginWork和completeWork里面具体要实现一些什么东西？这些内容我们在下一节实现。
