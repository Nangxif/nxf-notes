# 实现事件系统

事件系统本质上植根于浏览器事件模型，所以它隶属于ReactDOM，在实现时要做到对Reconciler 0侵入。

实现事件系统需要考虑：

* 模拟实现浏览器捕获，冒泡流程
* 实现合成事件对象
* 方便后续扩展（后面我们可能针对不同的事件增添不同的优先级，因此在这套事件系统中，要方便后续拓展）

## 一、步骤一：实现ReactDOM与Reconciler对接

将事件回调保存在组件的props中，那么ReactDOM如何拿到组件的props呢？对于每个ReactDOM，我们将它对应的props保存在对应的DOM对象上面。

那么在什么时机适合保存呢？

* 创建DOM时
* 更新属性时

### 1、创建DOM时（completeWork）

在completeWork中，对于HostComponent，在mount时会调用createInstance创建对应的DOM Element。createInstance在react-dom包中的hostConfig中实现的。逻辑就是通过宿主环境的document.createElement创建一个DOM Element。这里为了连接ReactDOM和Reconciler，我们在React包下新建一个SyntheticEvent文件（这里就会放所有跟ReactDOM相关的事件系统）。
那么现在我们要做的事情就是：

在一个dom下的某一个属性xxx保存它对应的组件的props

```typescript
dom[xxx] = reactElement props
```

我们要先定义，在dom的哪个字段下保存

```typescript
export const elementPropsKey = '__props';
```

定义了key以后，我们还要定义对应的方法来执行上面的操作【”在一个dom下的某一个属性xxx保存它对应的组件的props“】

```typescript
export function updateFiberProps(node: DOMElement, props: Props) {
	node[elementPropsKey] = props;
}
```

因此，在创建DOM时，需要对createInstance添加一些新的操作。

```typescript
export const createInstance = (type: string, props: Props): Instance => {
	const element = document.createElement(type) as unknown;
	updateFiberProps(element as DOMElement, props);
	return element as DOMElement;
};
```

### 2、更新属性时（commitWork）

在completeWork中，对于HostComponent，在update时会判断props是否发生变化，比如之前的props里面有个onClick，赋值了一个函数，接下来onClick变成了另一个函数，那么这种情况下就属于变化。就需要给fiber打一个Update的flag。那么到commitWork阶段，就会判断到有Update的flag，就会触发commitUpdate

```typescript
export const commitUpdate = (fiber: FiberNode) => {
	switch (fiber.tag) {
		case HostText:
			const text = fiber.memoizedProps.content;
			return commitTextUpdate(fiber.stateNode, text);
		default:
			if (__DEV__) {
				console.warn('未实现的Update类型', fiber);
			}
			break;
	}
};
```

在commitUpdate里目前我们只实现了对HostText的处理，那么此时按道理得加上对HostComponent的处理，那么对HostComponent在update的时候要做什么处理呢？其实我们就会执行createInstance里面的updateFiberProps方法。正常的流程应该是这样子的。但是这里有一个问题，如果我们要这么实现的话，那么在completeWork中的HostComponent update判断props是否发生变化的时候，我们显然不可能只判断onClick事件是否发生变化，我们还有其他的props需要判断是否发生变化。其实判断的过程并不难。但是这个过程我们在这里就不实现了。但是此时除了需要判断props发生变化并打上标记flag，同时也要将变了之后的值保存下来，我们在这里这么保存

```typescript
updateFiberProps(wip.stateNode, newProps);
```

至此我们就已经实现了ReactDOM与Reconciler对接。

## 二、步骤二：模拟实现浏览器事件流程

### 1、基本流程

首先，整个设计的流程图大概是这样的

<Image :src="'/front-frame/react/sound-code/event-system/1.png'" />

在目标DOM元素（targetElement）上面，如果我们要触发一个点击事件，那么这个点击事件触发以后，这个事件会被代理到container（应用根节点那个DOM元素）下面。代理完之后，接下来我们要收集触发事件的DOM Element到Container之间所有祖先Element的props种对应事件的回调。比如说触发的是点击事件，那么在react中，点击事件有两种，对于捕获阶段触发的点击事件，回调名叫onClickCapture，对于冒泡阶段的点击事件，回调名叫onClick。所以说接下来我们要做的就是一层一层向上遍历找到目标元素到container之间的所有祖先元素的elementPropsKey中（也就是props中）有没有对应的事件回调。对于onClickCapture我们就保存在capture数组中，对于onClick我们就保存在bubble数组中。遍历完了之后我们就得到了这两个数组。capture就是所有捕获阶段应该执行的回调，bubble就是所有冒泡阶段需要执行的回调。

### 二、container代理流程

接下来，我们得实现上面讲到的container代理流程

```typescript
export function initEvent(container: Container, eventType: string) {
	if (!validEventTypeList.includes(eventType)) {
		console.warn('当前不支持', eventType, '事件');
	}
	if (__DEV__) {
		console.log('初始化时间', eventType);
	}

	// 在root节点绑定eventType，然后点击某个元素的时候，e这个Event对象指的就是当前点击的对象，可以通过e.target获取到DOMElement
	container.addEventListener(eventType, (e) => {
		dispatchEvent(container, eventType, e);
	});
}
```

而initEvent将会在react的入口处被调用

```typescript
export function createRoot(container: Container) {
	const root = createContainer(container);
	return {
		render(element: ReactElementType) {
			initEvent(container, 'click');
			updateContainer(element, root);
		}
	};
}
```

### 3、dispatchEvent

而上面提到的dispatchEvent具体是在干嘛的呢？

1. 收集沿途的事件
2. 构造合成事件
3. 遍历capture
4. 遍历bubble

```typescript
function dispatchEvent(container: Container, eventType: string, e: Event) {
	const targetElement = e.target;
	if (targetElement === null) {
		console.warn('事件不存在target', e);
		return;
	}
	// 1. 收集沿途的事件
	const { bubble, capture } = collectPaths(
		targetElement as DOMElement,
		container,
		eventType
	);
	// 2. 构造合成事件
	const se = createSyntheticEvent(e);
	// 3. 遍历capture
	triggerEventFlow(capture, se);
	// 4. 遍历bubble
	if (!se.__stopPropagation) {
		triggerEventFlow(bubble, se);
	}
}
```

#### （1）收集沿途的事件

```typescript
function collectPaths(
	targetElement: DOMElement,
	container: Container,
	// 收集什么类型的事件
	eventType: string
) {
	const paths: Paths = {
		capture: [],
		bubble: []
	};
	while (targetElement && targetElement !== container) {
		// 收集
		const elementProps = targetElement[elementPropsKey];
		if (elementProps) {
			const callbackNameList = getEventCallbackNameFromEventType(eventType);
			if (callbackNameList) {
				callbackNameList.forEach((callbackName, i) => {
					const eventCallback = elementProps[callbackName];
					if (eventCallback) {
						// 为什么capture需要反向插入
						/**
						 * div onClick onClickCapture
						 *   div onClick onClickCapture
						 *     p targetElement onClick
						 * 比如有这么一个结构
						 * 其中p是targetElement，也就是触发事件的element
						 *
						 * bubble的数组最后会是这样的
						 * [p onClick, div onClick, container onClick]
						 * capture的数组最后会是这样的
						 * [container onClickCapture, div onClickCapture]
						 */
						if (i === 0) {
							// capture
							paths.capture.unshift(eventCallback);
						} else {
							paths.bubble.push(eventCallback);
						}
					}
				});
			}
		}
		targetElement = targetElement.parentNode as DOMElement;
	}
	return paths;
}

function getEventCallbackNameFromEventType(
	eventType: string
): string[] | undefined {
	return {
		// 第一项对应的是捕获阶段，第二项对应的是冒泡阶段
		click: ['onClickCapture', 'onClick']
	}[eventType];
}
```

我们从上面的collectPaths方法的第一个参数可以知道，当我们点击某一个元素时，targetElement就是被点击的那个元素。从当前这个targetElement一直往上遍历，直到targetElement为container为止。沿途中出现的捕获事件和冒泡事件都收集起来。

当然，这里要注意的是capture需要反向插入，具体什么原因，代码注释也有提到。

#### （2）构造合成事件

```typescript
function createSyntheticEvent(e: Event) {
	const syntheticEvent = e as SyntheticEvent;
	syntheticEvent.__stopPropagation = false;
	const originStopPropagation = e.stopPropagation;
	// 重写原始的stopPropagation
	syntheticEvent.stopPropagation = () => {
		syntheticEvent.__stopPropagation = true;
		if (originStopPropagation) {
			originStopPropagation.call(e);
		}
	};
	return syntheticEvent;
}
```

这里会将点击事件获取到的event进行二次封装，给它添加了一个自定义属性__stopPropagation，同时也重写了stopPropagation方法，方便后续我们在react中自定义控制禁止冒泡。

#### （3）遍历capture

因为捕获阶段是先执行的，因此得先遍历capture

```typescript
triggerEventFlow(capture, se);
```

下面是遍历方法的原码实现

```typescript
function triggerEventFlow(paths: EventCallback[], se: SyntheticEvent) {
	for (let i = 0; i < paths.length; i++) {
		const callback = paths[i];
		callback.call(null, se);
		if (se.__stopPropagation) {
			// 如果阻止了冒泡的话，就得阻止事件传播
			break;
		}
	}
}
```

#### （4）遍历bubble

capture遍历完了之后我们还需要判断一下是否禁止冒泡!se.__stopPropagation，如果是的话，那么就不用执行bubble了，如果没有禁止的话，就进行遍历

```typescript
triggerEventFlow(bubble, se);
```

这里有个问题，为什么triggerEventFlow里面也判断了__stopPropagation，在bubble遍历执行之前也要判断一次呢？

这是因为遍历之前的判断是判断当前节点的点击事件是否禁止冒泡，如果没有禁止冒泡的话，那么triggerEventFlow里面会执行一次当前节点的点击事件回调，如果在回调里面，执行了stopPropagation，那么se.__stopPropagation就会变为true，后续的循环才会终止。

## 三、提出几个问题

### 1、下面的例子输出顺序是什么

```typescript
function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    ref1.current.addEventListener(
      "click",
      () => {
        console.log("ref1 origin capture");
      },
      true
    );
    ref1.current.addEventListener(
      "click",
      () => {
        console.log("ref1 origin bubble");
      },
      false
    );

    ref2.current.addEventListener(
      "click",
      () => {
        console.log("ref2 origin capture");
      },
      true
    );
    ref2.current.addEventListener(
      "click",
      () => {
        console.log("ref2 origin bubble");
      },
      false
    );
  }, []);
  return (
    <div
      onClick={() => {
        console.log("ref1 bubble");
      }}
      onClickCapture={() => {
        console.log("ref1 capture");
      }}
      ref={ref1}
    >
      <div
        onClick={() => {
          console.log("ref2 bubble");
        }}
        onClickCapture={() => {
          console.log("ref2 capture");
        }}
        ref={ref2}
      >
        点击
      </div>
    </div>
  );
}
```

点击之后输出结果为

```typescript
ref1 origin capture
ref2 origin capture
ref2 origin bubble
ref1 origin bubble
ref1 capture
ref2 capture
ref2 bubble
ref1 bubble
```

捕获流程肯定是由外到内，因此ref1的捕获事件会比ref2的捕获事件先执行。但是为什么是原始事件比合成事件先执行呢？因为合成事件是当真实事件冒泡到container节点之后，才开始收集和执行的。当然我们这种实现跟真实的情况还是有差异的，真实的react是这么返回的

```typescript
ref1 capture
ref2 capture
ref1 origin capture
ref2 origin capture
ref2 origin bubble
ref1 origin bubble
ref2 bubble
ref1 bubble
```

那么我们之前的处理方式跟真实react的处理方式有什么不同呢？答案是，我们上面container代理事件的时候，只代理了捕获事件，其实还需要代理冒泡事件。因此有几个方法需要适当做一些修改。

initEvent需要区分捕获阶段和冒泡阶段

```typescript
export function initEvent(container: Container, eventType: string) {
	if (!validEventTypeList.includes(eventType)) {
		console.warn('当前不支持', eventType, '事件');
	}
	if (__DEV__) {
		console.log('初始化时间', eventType);
	}
	container.addEventListener(
		eventType,
		(e) => {
			dispatchEvent(container, eventType, e, true);
		},
		true
	);
	container.addEventListener(
		eventType,
		(e) => {
			dispatchEvent(container, eventType, e, false);
		},
		false
	);
}
```

dispatchEvent在捕获阶段时不执行bubble，在冒泡阶段时不执行capture

```typescript
function dispatchEvent(
	container: Container,
	eventType: string,
	e: Event,
	isCapture: boolean
) {
	const targetElement = e.target;
	if (targetElement === null) {
		console.warn('事件不存在target', e);
		return;
	}
	// 1. 收集沿途的事件
	const { bubble, capture } = collectPaths(
		targetElement as DOMElement,
		container,
		eventType
	);
	// 2. 构造合成事件
	const se = createSyntheticEvent(e);
	// 3. 遍历capture
	if (isCapture) {
		triggerEventFlow(capture, se);
	}
	// 4. 遍历bubble
	if (!isCapture && !se.__stopPropagation) {
		triggerEventFlow(bubble, se);
	}
}
```

### 2、为什么要有合成事件？

React 使用合成事件（Synthetic Events）是为了在不同浏览器之间提供一致的事件行为，并提高性能。以下是一些详细的原因：

#### 1. 跨浏览器兼容性

不同浏览器对原生事件的实现可能存在差异。React 的合成事件将这些差异抽象出来，提供一个统一的接口，使得开发者不必担心在不同浏览器中处理事件的细微差别。

#### 2. 性能优化

合成事件系统在事件处理过程中进行了多种优化。例如，React 会将事件处理程序绑定到最顶层的元素，而不是每个具体的元素。这种事件委托机制减少了需要绑定的事件处理程序的数量，从而提高了性能。

#### 3. 事件池化

React 使用事件池来复用事件对象，这样可以减少垃圾回收的压力。事件对象在事件处理函数调用结束后会被放回池中，供后续事件使用。

#### 4. 一致的事件接口

合成事件提供了一个与原生事件接口一致的API，使得开发者可以像使用原生事件一样使用合成事件，同时享受跨浏览器兼容和性能优化的好处。例如，合成事件对象有相同的属性和方法，如 `stopPropagation` 和 `preventDefault`。

#### 5. 事件优先级管理

React 18 引入了并发模式（Concurrent Mode），合成事件系统可以更好地与并发渲染协调工作。React 可以更灵活地管理事件的优先级，从而提高应用的响应性。
