# zustand

## 一、基本使用

```react
import { create } from "zustand";
// 先定义一个状态函数，执行它可以返回一个初始状态
const createState = (set) => {
  return {
    number: 0,
    name: "Number",
    add: () => set(state => ({ number: state.number + 1})),
    minus: () => set(state => ({ number: state.number - 1})),
  };
};
// 先创建仓库，也就是状态管理器，然后返回一个自定义hook，调用这个自定义hook可以获取最新的状态
const useStore = create(createState);
function App() {
  const { number, name, add, minus } = useStore();
  return (
    <div>
      <p>
        {name}:{number}
      </p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}
```

## 二、目录结构

```
-- zustand
---- index.js  入口文件
---- react.js  跟react相关的逻辑
---- vanilla.js 这部分代码跟框架没关系，只属于状态管理库的
```

## 三、源码

### 1、编写获取状态

```react
import { create } from "zustand";
// 先定义一个状态函数，执行它可以返回一个初始状态
const createState = () => {
  return {
    number: 0,
    name: "Number"
  };
};
const useStore = create(createState);
function App() {
  const { number, name, add, minus } = useStore();
  return (
    <div>
      <p>
        {name}:{number}
      </p>
    </div>
  );
}
```

```javascript
// react.js
import { createStore } from "./vanilla";
// 跟react相关的代码放这里

export function useStore(api) {
  return api.getState();
}
export const create = (createState) => {
  // 创建仓库
  const api = createStore(createState);
  // 返回一个自定义Hook，里面可以通过useStore获取仓库中最新的状态
  return () => useStore(api);
};
export default create;
```

```javascript
// vanilla.js
// 这个文件名是“原生”的意思，表示这部分代码跟框架没关系
// 接收一个初始状态的方法，返回一个仓库或者说是状态管理器
export const createStore = (createState) => {
  // 保存在内部的状态
  let state;
  // 获取状态的函数
  const getState = () => state;
  // 创建一个api对象
  const api = {
    getState,
  };
  // 调用createState方法获取初始状态
  state = createState();
  return api;
};
export default createStore;
```

### 2、编写更新状态

```react
import { create } from "zustand";
const createState = (set) => {
  return {
    number: 0,
    name: "Number",
    add: () => set((state) => ({ number: state.number + 1 })),
    minus: () => set((state) => ({ number: state.number - 1 })),
  };
};
const useStore = create(createState);
function App() {
  const { number, name, add, minus } = useStore();
  return (
    <div>
      <p>
        {name}:{number}
      </p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}
export default App;
```

```javascript
// vanilla.js
export const createStore = (createState) => {
  // 保存在内部的状态
  let state;
  // 获取状态的函数
  const getState = () => state;
  // 修改状态的函数，参数可以是新状态，也可以是一个更新函数
  const setState = (partial) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    // 判断老状态和新状态是否是同一个对象，如果不是才更新，这是一个优化的手段
    if (!Object.is(nextState, state)) {
      state = Object.assign({}, state, nextState);
    }
  };
  // 创建一个api对象
  const api = {
    getState,
    setState,
  };
  // 调用createState方法获取初始状态
  state = createState();
  return api;
};
export default createStore;
```

到目前这一步，我们就算执行了add方法，或者是执行了minus方法，我们也无法触发页面的render，因为到目前为止，我们的状态跟react的视图更新机制还没有任何关系，所以我们需要借助react提供的一个hook来讲当前的状态和react的视图连接起来。

### 3、连接外部的状态和react内部的render

首先我们得在zustand的内部实现一套发布订阅的逻辑

```javascript
// vanilla.js
// 接收一个初始状态的方法，返回一个仓库或者说是状态管理器
export const createStore = (createState) => {
  // 保存在内部的状态
  let state;
  // 定义一个数组，存放所有的状态变更监听函数
  let listeners = new Set();
  // 获取状态的函数
  const getState = () => state;
  // 修改状态的函数，参数可以是新状态，也可以是一个更新函数
  const setState = (partial) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    // 判断老状态和新状态是否是同一个对象，如果不是才更新，这是一个优化的手段
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = Object.assign({}, state, nextState);
      // 状态变更后一次调用监听函数
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  // 订阅函数，可以让外部监听仓库中的状态变更，状态变更后会调用监听函数
  const subscribe = (listener) => {
    listeners.add(listener);
    // 返回一个取消订阅函数
    return () => listeners.delete(listener);
  };
  // 创建一个api对象
  const api = {
    getState,
    setState,
    subscribe,
  };
  // 调用createState方法获取初始状态
  state = createState(setState, getState, api);
  return api;
};
export default createStore;
```

接下来我们得在react.js里面把state被触发更新的事件通知react

```javascript
import { createStore } from "./vanilla";
import { useSyncExternalStore } from "react";
// 跟react相关的代码放这里
export function useStore(api) {
  const value = useSyncExternalStore(api.subscribe, api.getState);
  return value;
}
export const create = (createState) => {
  // 创建仓库
  const api = createStore(createState);
  // 返回一个自定义Hook，里面可以通过useStore获取仓库中最新的状态
  return () => useStore(api);
};
export default create;
```

接下来我们来了解一下react提供的useSyncExternalStore这个hook

* useSyncExternalStore是一个自定义hook，它提供了一个简单的方法来订阅外部状态管理器，并将其状态同步到react组件中
* useSyncExternalStore函数的第一个参数是一个订阅函数，它接收一个回调函数作为参数，当状态发生变化时，该回调函数将被调用，该回调函数接收两个参数，当前状态值和上一个状态值
* useSyncExternalStore函数的第二个参数是一个获取状态值的函数，当组件需要获取当前状态值时，它将调用该函数并返回当前状态值
* useSyncExternalStore函数返回一个状态值，该值表示当前的状态，当外部状态更新器更新状态时，组件将自动更新状态。

## 四、状态分片

* 状态分片是将整个应用程序的状态（state）拆分成不同的部分，每个部分被称为状态分片（slice）
* 这样可以将状态（state）和状态更新的逻辑细分为多个独立的模块，从而使应用程序的状态管理更加清晰和可维护

举个例子，在之前的代码中，我们每次获取状态的时候，都得将整个状态对象一并返回

```javascript
const { number, name, add, minus } = useStore();
```

如果我只要number和add，那该怎么办？

zustand提供了这样一种方法

```javascript
const { number, add } = useStore(state => ({
	number: state.number,
	add: state.add
}));
```

接下来我们来实现这个功能

因为我们是给useStore传参的，因此我们得改造create函数返回的函数

```javascript
// react.js
export function useStore(api, selector) {
  const value = useSyncExternalStore(api.subscribe, () => {
    return selector ? selector(api.getState) : api.getState;
  });
  return value;
}
export const create = (createState) => {
  // 创建仓库
  const api = createStore(createState);
  // 返回一个自定义Hook，里面可以通过useStore获取仓库中最新的状态
  return (selector) => useStore(api, selector);
};
export default create;
```

但是直接这么写的话，页面会报错

```javascript
The result of getSnapshot should be cached to avoid an infinite loop
```

这是因为本来useSyncExternalStore是监听状态发生变化之后更新视图的，页面首次render，useSyncExternalStore会执行并返回执行结果，这个执行结果是一个新的对象，导致页面又重新render，紧接着useSyncExternalStore又执行并返回执行结果，这个执行结果又是一个新的对象，这才导致页面不断地在循环更新，因此导致溢出。因此我们得对通过选择器筛选出来的状态值进行缓存。

```javascript
export function useStore(api, selector) {
  // 它用来缓存上一次的整个状态快照
  const lastSnapshotRef = useRef(null);
  // 用来缓存上一次选择的结果对象
  const lastSelectionRef = useRef(null);

  const getSelection = useCallback(() => {
    // 获取上一次的选择值
    let lastSelection = lastSelectionRef.current;
    // 第一次渲染的时候，lastSelection和lastSnapshot都是null
    if (lastSelection === null) {
      // 获取新的完整状态
      const nextSnapShot = api.getState();
      // 获取新的选择值
      const nextSelection = selector(nextSnapShot);
      lastSnapshotRef.current = nextSnapShot;
      lastSelectionRef.current = nextSelection;
      return nextSelection;
    } else {
      // 如果不是第一次
      // 获取老快照
      const lastSnapshot = lastSnapshotRef.current;
      // 获取新快照
      const nextSnapShot = api.getState();
      // 如果快照一样，选择器一样，肯定结果也一样
      // 下面这个判断相当于lastSnapshot === nextSnapShot
      if (Object.is(lastSnapshot, nextSnapShot)) {
        return lastSelection;
      }
      const nextSelection = selector(nextSnapShot);
      lastSnapshotRef.current = nextSnapShot;
      lastSelectionRef.current = nextSelection;
      return nextSelection;
    }
  }, []);
  const value = useSyncExternalStore(api.subscribe, getSelection);
  return value;
}
```

## 五、中间件

zustand也有中间件机制

### 1、logger中间件

中间件的使用方式如下

```javascript
const useStore = create(logger(createState));
```

因此中间件其实就是增强了createState的功能

```javascript
// 比如logger的初始架构是这样的
const logger = (createState) => {
  return (set, get, api) => {
    return createState(set, get, api);
  };
};
export default logger;
```

接下来要重写set方法

```javascript
const logger = (createState) => {
  return (set, get, api) => {
    return createState(
      (...args) => {
        // 在调用set之前，打印老的状态
        console.log('prev state:', get());
        set(...args);
        // 在调用set之后，打印新的状态
        console.log('next state:', get());
      },
      get,
      api
    );
  };
};
```

### 2、persist持久化中间件

中间件的使用方式如下

```javascript
const useStore = create(persist(createState, {
  name: 'counter', // 保存到本地存储中的key
  storage: createJSONStorage(sessionStorage)
}));
```

```javascript
// persist.js
export const createJSONStorage = (storage) => {
  return {
    getItem(name) {
      const str = storage.getItem(name);
      return str ? JSON.parse(str) : {};
    },
    setItem(name, newValue) {
      storage.setItem(name, JSON.stringify(newValue));
    },
  };
};

export const persist = (createState, { name, storage }) => {
  return (set, get, api) => {
    let result = createState(
      (...args) => {
        // 先调用set方法，把新状态保存好
        set(...args);
        // 然后再把新状态保存到本地存储中
        storage.setItem(name, get());
      },
      get,
      api
    );
    // 把本地存储中存的值取出来放到仓库中
    queueMicrotask(() => {
      // 放到微任务里面
      set(storage.getItem(name));
    });
    return result;
  };
};
```

### 3、immer中间件

* 在react应用中我们不希望修改状态对象，但如果每次都创建新的对象又会带来额外的性能开销
* 不可变的数据结构可以每次都返回一个新的对象，又可以共享未修改的部分
* immer以最小的成本实现了不可变结构数据

中间件的使用方式如下

```javascript
const useStore = create(immer(createState));
```

```javascript
import { produce } from "immer";
export const immer = (createState) => {
  return (set, get, api) => {
    api.setState = (updater) => {
      const nextState = produce(updater);
      return set(nextState);
    };
    return createState(api.setState, get, api);
  };
};
```

