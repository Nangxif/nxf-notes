# hook机制

## 一、涉及到的文件

```js
packages
- react
  - index.ts  // 把hook暴露给使用者
- shared
  - internals.ts // 内部数据共享层
- react-reconciler
  - fiberHooks.ts // hook的实现
  
```

## 二、hook是如何实现只能在函数式组件调用的

首先在react包的index.ts中我们会发现它把所有hook都从这个文件里面暴露出去了

```javascript
import currentBatchConfig from './src/currentBatchConfig';
import currentDispatcher, {
	Dispatcher,
	resolveDispatcher
} from './src/currentDispatcher';
import { jsx, jsxDEV } from './src/jsx';
export {
	REACT_FRAGMENT_TYPE as Fragment,
	REACT_SUSPENSE_TYPE as Suspense
} from 'shared/ReactSymbols';
export { createContext } from './src/context';

export const useState: Dispatcher['useState'] = (initialState) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useState(initialState);
};
export const useEffect: Dispatcher['useEffect'] = (create, deps) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useEffect(create, deps);
};

export const useTransition: Dispatcher['useTransition'] = () => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useTransition();
};

export const useRef: Dispatcher['useRef'] = (initialValue) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useRef(initialValue);
};

export const useContext: Dispatcher['useContext'] = (context) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.useContext(context);
};

export const use: Dispatcher['use'] = (usable) => {
	const dispatcher = resolveDispatcher();
	return dispatcher.use(usable);
};

// 内部数据共享层
export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
	currentDispatcher,
	currentBatchConfig
};
export default {
	version: '0.0.0',
	createElement: jsxDEV
};
```

同时我们也发现了，每个hook在被调用之后，都会先执行一下这段代码

```javascript
const dispatcher = resolveDispatcher();
```

然后再从dispatcher重获取相应的hook，那么这个resolveDispatcher究竟干了什么事呢？

```javascript
const currentDispatcher: { current: Dispatcher | null } = {
	current: null
};

// 定义一个方法，更容易获取dispatcher里面的hook
export const resolveDispatcher = (): Dispatcher => {
	const dispatcher = currentDispatcher.current;
	// 如果没有在函数组件中执行，那么dispatcher是不会被赋值的
	if (dispatcher === null) {
		throw new Error('hook只能在函数组件中执行');
	}
	return dispatcher;
};
export default currentDispatcher;
```

我们发现hook的真实实现都会被挂在currentDispatcher的current上面，而currentDispatcher最终会被挂载到内部数据共享层上

```javascript
// 内部数据共享层
export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
	currentDispatcher
};
```

到这一步为止，__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED还是在react包中的，而shared包会将这个数据共享层引进来，然后再暴露出去给react-reconciler用

```javascript
import * as React from 'react';
const internals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
export default internals;
```

因为react和react-reconciler是两个单独使用的包。

在开始将下面hook的实现逻辑之前，我们得先通过一个图来了解一下里面几个关键的数据结构之间的关系

<Image :src="'/front-frame/react/sound-code/hook/1.png'" />

hook的实现是在react-reconciler的fiberHook中的，我们以useState来举例

函数组件在执行的时候，其实是执行renderWithHooks

```javascript
export function renderWithHooks(wip: FiberNode, lane: Lane) {
	// 赋值操作
	currentlyRenderingFiber = wip;
	// 重置 hooks 链表
	wip.memoizedState = null;
	// 	重置effect链表
	wip.updateQueue = null;
	renderLane = lane;
	const current = wip.alternate;
	if (current !== null) {
		// update
		currentDispatcher.current = HookDispatcherOnUpdate;
	} else {
		// mount
		currentDispatcher.current = HookDispatcherOnMount;
	}
	const Component = wip.type;
	const props = wip.pendingProps;
	const children = Component(props);
	// 重置操作
	currentlyRenderingFiber = null;
	workInProgressHook = null;
	currentHook = null;
	renderLane = NoLane;
	return children;
}
```

而renderWithHooks在执行的时候，就会区分当前是在挂载阶段还是更新阶段，如果是在挂载阶段，那么currentDispatcher.current就是HookDispatcherOnMount，而更新阶段的时候currentDispatcher.current就是HookDispatcherOnUpdate，那么HookDispatcherOnMount和HookDispatcherOnUpdate究竟是什么？它跟数据共享层究竟是一个什么样的关系？

<Image :src="'/front-frame/react/sound-code/hook/2.png'" />

由上图我们可以看出，其实在挂载阶段和更新阶段，hook的执行内容都是不一样的，因此会将hook在挂载阶段的实现和更新阶段的实现分开。然后用户在使用hook的时候，就会通过resolveDispatcher去currentDispatcher.current里面取相应的hook实现。

我们上面有提到resolveDispatcher的实现

```javascript
export const resolveDispatcher = (): Dispatcher => {
	const dispatcher = currentDispatcher.current;
	// 如果没有在函数组件中执行，那么dispatcher是不会被赋值的
	if (dispatcher === null) {
		throw new Error('hook只能在函数组件中执行');
	}
	return dispatcher;
};
```

我们会发现dispatcher为空的时候，就说明当前的hook不在函数组件中执行，因为dispatcher是在renderWithHooks时（也就是函数组件执行时）才会被赋值，这也就回答了我们在当前章节提出的问题，当然这只是其中的一种判断方式。

```javascript
const HookDispatcherOnMount: Dispatcher = {
	useState: mountState,
	useEffect: mountEffect,
	useTransition: mountTransition,
	useRef: mountRef,
	useContext: readContext,
	use
};

const HookDispatcherOnUpdate: Dispatcher = {
	useState: updateState,
	useEffect: updateEffect,
	useTransition: updateTransition,
	useRef: updateRef,
	useContext: readContext,
	use
};
```

useState在挂载阶段的时候会执行mountState

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

在mount阶段的state会执行mountWorkInProgressHook去获取当前的hook

```javascript
// mount阶段查找当前的hook，并且把某个函数组件里面的hook串联起来
function mountWorkInProgressHook(): Hook {
	const hook: Hook = {
		// update的时候存放setState最新的值
		memoizedState: null,
		updateQueue: null,
		baseQueue: null,
		baseState: null,
		// 指向下一个hook
		next: null
	};
	if (workInProgressHook === null) {
		// mount时，而且是第一个hook
		if (currentlyRenderingFiber === null) {
			// 在函数组件外调用hook的时候，currentlyRenderingFiber是不会被赋值的
			// 这个表示我们没有在一个函数组件内调用Hook
			throw new Error('请在函数组件内调用hook');
		} else {
			workInProgressHook = hook;
			// mount时第一个hook
			currentlyRenderingFiber.memoizedState = workInProgressHook;
		}
	} else {
		// mount时，同一个函数组件里面后续的hook会一个一个往workInProgressHook链表上添加
		// 然后把第二个hook添加到第一个hook的next上面去
		workInProgressHook.next = hook;
		// 并且把workInProgressHook指向第二个hook
		workInProgressHook = hook;
	}
	return workInProgressHook;
}
```

我们发现上面的代码会先构建一个hook的初始化数据结构，然后检查workInProgressHook是否为空，因为workInProgressHook的作用是指向hook链表的最后一个hook，因此如果它是空的话，说明当前执行到的hook是mount阶段的第一个hook，这个时候，开始检查currentlyRenderingFiber是都为空，currentlyRenderingFiber存放当前函数组件的workInProgress fiber，因此如果这个fiber是空的话，那么就说明我们使用hook的时候，不是在函数组件里面使用的，至此也可以回答我们这个章节提出来的问题。如果currentlyRenderingFiber不为空，那么说明当前是在函数组件里面调用，并且是第一个hook，此时workInProgressHook指向当前的hook，然后将当前的hook存放在currentlyRenderingFiber.memoizedState上，currentlyRenderingFiber.memoizedState的作用就是指向mount时第一个hook。如果执行到了第二个hook，那么workInProgressHook就不为空了，因此将当前的hook存放到workInProgressHook.next上，而workInProgressHook则会指向最新的hook，也就是hook环状链表的最后一个hook。

在update阶段的state会执行updateWorkInProgressHook去获取当前的hook

```javascript
function updateWorkInProgressHook(): Hook {
	// hook的数据从哪里来？从current的memoizedState来
	/**
	 *
	 * 什么情况下会触发updateWorkInProgressHook？
	 * 第一种情况：交互阶段触发的更新
	 * <div onClick={()=>update(1)}></div>
	 * 第二种情况：render阶段触发的更新
	 * function App () {
	 *  const [num,setNum] = useState(0);
	 * // 触发更新
	 *  setNum(100);
	 * return <div>{num}</div>
	 * }
	 */
	let nextCurrentHook: Hook | null;
	if (currentHook === null) {
		// 这是一个FC update时的第一个hook
		const current = currentlyRenderingFiber?.alternate;
		if (current !== null) {
			nextCurrentHook = current?.memoizedState;
		} else {
			// mount阶段，应该走不到这里，因为updateWorkInProgressHook只有在update的时候才会执行到
			nextCurrentHook = null;
		}
	} else {
		// 这个FC update时，后续的hook
		nextCurrentHook = currentHook.next;
	}

	if (nextCurrentHook === null) {
		// 在mount的时候或者在上一次update的时候，有三个hook，u1，u2，u3
		// 在本次update时，有四个hook                      u1，u2，u3，u4
		throw new Error(
			`组件${currentlyRenderingFiber?.type}本次执行时的Hook比上次执行时多`
		);
	}
	// 接下来开始复用nextCurrentHook
	currentHook = nextCurrentHook as Hook;
	const newHook = {
		memoizedState: currentHook.memoizedState,
		updateQueue: currentHook.updateQueue,
		baseState: currentHook.baseState,
		baseQueue: currentHook.baseQueue,
		next: null
	} as Hook;
	if (workInProgressHook === null) {
		if (currentlyRenderingFiber === null) {
			// 在函数组件外调用hook的时候，currentlyRenderingFiber是不会被赋值的
			// 这个表示我们没有在一个函数组件内调用Hook
			throw new Error('请在函数组件内调用hook');
		} else {
			workInProgressHook = newHook;
			currentlyRenderingFiber.memoizedState = workInProgressHook;
		}
	} else {
		// mount时，同一个函数组件里面后续的hook会一个一个往workInProgressHook链表上添加
		// 然后把第二个hook添加到第一个hook的next上面去
		workInProgressHook.next = newHook;
		// 并且把workInProgressHook指向第二个hook
		workInProgressHook = newHook;
	}
	return workInProgressHook;
}
```

updateWorkInProgressHook的整体实现逻辑就是，通过之前mount阶段的hook链表，从链表的第一项开始（也就是current树的memoizedState），找到update阶段的hook对应的mount阶段的hook，然后基于mount阶段的hook数据，复用或者修改，从而形成一个新的hook。这个时候currentHook就派上用场了，currentHook的作用是在update阶段，每执行到一个hook就会指向那个hook，也就相当于一个游标。currentHook如果为空那么就说明当前即将处理的是update阶段的第一个hook，因此

```javascript
nextCurrentHook = current?.memoizedState
```

如果nextCurrentHook为空，那么就表示当前update的时候的hook比mount阶段时的hook多了，这个也是有问题的，因为可能hook被写到if等判断语句里面了。

接下来就得基于nextCurrentHook去改造出新的hook

```javascript
const newHook = {
  memoizedState: currentHook.memoizedState,
  updateQueue: currentHook.updateQueue,
  baseState: currentHook.baseState,
  baseQueue: currentHook.baseQueue,
  next: null
} as Hook;
```

然后将当前这个hook添加到workInProgressHook上，最后workInProgressHook指向的就是update阶段的hook链表的最后一项。这里不用担心mount阶段的hook和update阶段的hook混在一起，因为renderWithHooks结束的时候，这些指针都会被重置。

这就是react hook的整体基础流程。