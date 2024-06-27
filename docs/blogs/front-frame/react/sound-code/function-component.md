# 初探函数组件

FunctionComponent的实现需要考虑的问题

* 如何支持FC
* 如何维持Hooks？（下一节课讲解）

## 一、如何支持FC

FC的工作流程同样植根于：

* beginWork
* completeWork

### 1、beginWork的处理

```typescript
export const beginWork = (wip: FiberNode) => {
	switch (wip.tag) {
      ...
      case FunctionComponent:
        // 这个传renderLane是因为里面也会触发更新
        return updateFunctionComponent(wip);
  }
}


function updateFunctionComponent(wip: FiberNode) {
	const nextChildren = renderWithHooks(wip, renderLane);
	reconcileChildren(wip, nextChildren);
	return wip.child;
}
```

FunctionComponent的nextChildren的本质就是执行FunctionComponent的之后的返回值，因此renderWithHooks里面其实执行了FunctionComponent函数。

```typescript
function App() {
	return <img/>
}
```

所以，从这个例子来说，对于App的nextChildren，就是img标签。

```typescript
function renderWithHooks(wip: FiberNode) {
  const Component = wip.type;
  const props = wip.pendingProps;
  const children = Component(props);
  return children;
}
```

### 2、completeWork的处理

```typescript
export const completeWork = (wip: FiberNode) => {
	// 最终返回子fiberNode
	const newProps = wip.pendingProps;
	const current = wip.alternate;
	switch (wip.tag) {
		...
    case FunctionComponent:
      bubbleProperties(wip);
			return null;
	}
}
```

到这里我们就实现了FunctionComponent的基本功能。很简单，至于FunctionComponent里面的hook机制，我们后面会讲。