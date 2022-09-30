# 实现一个Pinia

## 一、项目目录

```
- pinia
  - createPinia.js
  - index.js
  - rootStore.js
  - store.js
```

## 二、前言

在开始讲解源码之前，我们先说一下一个vue api——effect

假设现在有这样一段代码

```
const state = reactive({name:'nangxi'});
const e1 = effect(()=>{
     console.log(state.name)
})
const e2 = effect(()=>{
     console.log(state.name)
})
```

如果我想停止e1和e2的依赖收集，那么我需要

```
e1.effect.stop();
e2.effect.stop();
state.name = 'nangxif';
state.name = 'nangxif1';
```

如果我有一千一万个effect需要我stop，那岂不是很麻烦？当然我们可以用一个map来存这些effect，然后用循环清除，但是还是很麻烦！这时候有个新的api——effectScope可以解决这个问题，用一个scope来收集这些effect。

```
const state = reactive({name:'nangxi'});
const scope = effectScope(true);
scope.run(()=>{
     effect(()=>{
         console.log(state.name);
     })
     effect(()=>{
         console.log(state.name);
     })
})
scope.stop()
```

好了，知道了这个前置知识之后我们开始讲源码……

## 三、流程

 <Image :src="'/front-frame/vue3/pinia/2.png'" />

## 四、createPinia的由来

pinia是怎么注入到vue里面的呢

```
import { createPinia } from '@/pinia'

const pinia = createPinia();
app.use(pinia)
```

由此我们根据vue插件的开发规范我们可以知道createPinia返回的肯定是一个有install方法的对象

```
// createPinia.js
import { effectScope, markRaw, ref } from 'vue'
import type { App } from 'vue'
import { setActivePinia, piniaSymbol, Pinia } from './rootStore'
/**
 * 返回一个pinia对象，内部提供install方法，方便注册
 * _a 用于保存Vue的实例对象
 * _s 参数用于保存所有的模块
 * _e 最外层的作用域scope
 * _p 所有注册的pinia插件
 * state 通过作用域创建的ref对象,初始值是一个空对象{}
 */
export function createPinia() {
  // 创建顶effectScope，存放于pinia._e
  const scope = effectScope(true)
  // 创建ref对象用于存放每个store的state，存放于pinia.state
  const state: any = scope.run(() => ref({}))
  // 创建一个数组用于存放每个插件plugin，存放于pinia._p
  const _p: Pinia['_p'] = []
  // 使用markRaw标记pinia使其不会被转为响应式
  const pinia: Pinia = markRaw({
    install(app: App) {
      setActivePinia(pinia)
      // 创建一个对象用于存放Vue实例，存放于pinia._a
      pinia._a = app
      // 将pinia注入组件，后续在useStore里面通过inject获取注入的这个pinia
      app.provide(piniaSymbol, pinia)
      // 将pinia挂载到全局
      app.config.globalProperties.$pinia = pinia
    },
    // 暴露一个方法用于插入pinia组件，pinia.use，返回this可以链式调用
    use(plugin: never) {
      _p.push(plugin)
      return this
    },
    _p,
    _a: null,
    _e: scope,
    // 创建Map用于存放每个store，存放于pinia._s
    _s: new Map(),
    state
  })
  return pinia;
}
```

我们有时候会脱离组件使用store，如果我们只有inject方法注入pinia的话，在没有组件的环境比如我想在路由里面使用store，这样的话会获取不到pinia，因此我们才考虑让pinia通过setActivePinia的方法放在全局上。那为啥有setActivePinia了还要用inject呢，因为有些人可能没有通过app.use调用pinia的install，所以没有调用setActivePinia，导致还是没有全局变量。

## 五、defineStore

我们在使用defineStore的时候是这样的

```
export const useCounterStore = defineStore('counter',{
	// 上面的counter也可以写在对象里面
	// id: 'counter',
	state: () => {
		return {
			count: 0
		}
	},
	getters: {
		dobule() {
			return this.count * 2
		}
	},
	actions: {
		increment(payload) {
			this.count += payload
		}
	}
});
<script setup>
	import { useCounterStore } from './stores/counter';
	const store = useCountStore();
</script>
```

这说明了一个问题，defineStore会返回一个函数，这个函数调用之后会返回defineStore定义过的store。

defineStore会区分参数定义id和options，定义useStore并返回。useStore会通过inject获取从createPinia注入的pinia对象，从里面获取_s判断是否有创建过当前仓库，若有则直接返回，没有则创建。

创建的过程会区分options创建方式（createOptionsStore）和setup创建方式（createSetupStore），取决于defineStore第二个参数是对象还是函数，是对象的话用createOptionsStore，函数的话用createSetupStore。

```
/**
 * 参可能的值
 * id + options
 * options
 * id + setup
 * 因为我们在使用defineStore的时候，是返回一个useStore
 * 最后这个useStore在使用的时候，是useStore()然后返回一个store，那么说明useStore是一个函数
 * */
export function defineStore(idOrOptions: any, setup?: any, setupOptions?: any) {
  let id: string
  let options: any

  // 第一个传是ID
  if (typeof idOrOptions === 'string') {
    id = idOrOptions
    options = setup
  } else {
    // 对象
    options = idOrOptions
    id = idOrOptions.id
  }
  // 判断setup是否为一个函数
  const isSetupStore = typeof setup === 'function'
  // 创建store 并添加到pinia._m中
  function useStore() {
    // 获取当前组件的实例
    let instance = getCurrentInstance();
    // 使用inject获取在createPinia注入的pinia
    let pinia = instance && inject(piniaSymbol);
    if (pinia) setActivePinia(pinia)
    // 全局变量给你，这个一定存在
    pinia = activePinia
    // 第一次如果，没有这个id, 则创建仓库
    if (!pinia?._s.has(id)) {
      // 如果setup参数是一个函数，那么就创建一个setupStore，否则创建一个optionsStore
      if (isSetupStore) {
        createSetupStore(id, setup, pinia)
      } else {
        createOptionsStore(id, options, pinia)
      }
    }
    const store = pinia?._s.get(id)
    return store
  }
  return useStore
}
```

createOptionsStore和createSetupStore有部分逻辑是一致的。换种说法，在useStore里面，会区分传给defineStore的参数是什么类型的，如果参数有options那么就调用createOptionsStore创建一个store，而createOptionsStore的功能就是将传给defineStore的options拼凑成一个setup，然后再传给createSetupStore去创建一个store，如果参数有setup，那么就直接调用createSetupStore去创建一个store，而createSetupStore里面会将自带的methods添加到store上面。

### 1.createOptionsStore

```
function createOptionsStore(id, options, pinia) {
  const { state, actions, getters } = options;
  function setup() {
    // 这里面会对用户传递的state，actions getters 做处理
    pinia.state.value[id] = state ? state() : {};
    // localState不做处理的话就是一个普通的对象
    // 我们需要将状态转成ref，因为普通值是没有响应式的，需要转换成ref才具备响应式
    const localState = toRefs(pinia.state.value[id]);
    // getters
    // 解决this问题
    /**
     * const store = useCounter();
     * store.increment();
     * 这么写increment的this指向肯定是store，如果通过解构呢？
     * const { increment } = useCounter();
     * increment(); 如果不做处理的话，this指向就不是store了
     * */
    return Object.assign(
      localState, // 用户的状态
      actions, // 用户的动作
      Object.keys(getters || {}).reduce((memo, name) => {
        // 用户计算属性
        memo[name] = computed(() => {
          let store = pinia._s.get(id);
          return getters[name].call(store);
        });
        return memo;
      }, {})
    );
  }
  const store = createSetupStore(id, setup, pinia, true);
  //   只有options api才有$reset方法，setup api没有
  //   因为setup api我们不知道初始状态是什么
  store.$reset = function () {
    const newState = state ? state() : {};
    store.$patch((state) => {
      // 默认状态覆盖掉老状态
      Object.assign(state, newState);
    });
  };
}
```

### 2.createSetupStore

```
function createSetupStore(id, setup, pinia, isOption) {
  let scope;
  function $patch(partialStateOrMutatior) {
    if (typeof partialStateOrMutatior === 'object') {
      // 用新的状态合并老的状态
      mergeReactiveObject(pinia.state.value[id], partialStateOrMutatior);
    } else {
      partialStateOrMutatior(pinia.state.value[id]);
    }
  }
  // 当用户状态变化的时候 可以监控到变化 并且通知用户 发布订阅
  let actionSubscribes = [];
  const partialStore = {
    // 批处理的api
    $patch,
    // 监听属性变化
    $subscribe(callback, options) {
      // watch，这里之所以用scope包一层是为了后面$dispose之后，$subscribe的监听也可以失效
      scope.run(() =>
        watch(
          pinia.state.value[id],
          (state) => {
            // 监控状态变化
            callback({ type: 'dirct' }, state);
          },
          options
        )
      );
    },
    // 监听触发action
    $onAction: addSubscription.bind(null, actionSubscribes),
    $dispose: () => {
      scope.stop(); // 清除响应式
      actionSubscribes = []; //取消订阅
      pinia._s.delete(id); // 删除store, 数据变化了不会再更新视图
    },
  };

  // 后续一些不是用户定义的属性和方法，内置的api会增加到这个store上
  const store = reactive(partialStore); // store就是一个响应式对象而已

  const initialState = pinia.state.value[id]; //对于setup api 没有初始化过状态

  if (!initialState && !isOption) {
    // 这样才能表示是一个setup api
    pinia.state.value[id] = {};
  }

  // 父亲可以停止所有 , setupStore 是用户传递的属性和方法
  // _e 能停止所有的store
  // 每个store还能停止自己的
  const setupStore = pinia._e.run(() => {
    scope = effectScope(); // 自己可以停止自己
    return scope.run(() => setup());
  });
  function wrapAction(name, action) {
    return function () {
      // 触发action的时候 可以触发一些额外的逻辑
      const afterCallbackList = [];
      const onErrorCallbackList = [];

      function after(callback) {
        afterCallbackList.push(callback);
      }

      function onError(callback) {
        onErrorCallbackList.push(callback);
      }

      // 触发actionSubscriptions中订阅的store.$Action的全部回调函数,并将参数传入
      // 此时store.$Action的callback已经执行,但是after onError的回调函数尚未执行
      // 触发action
      triggerSubscription(actionSubscribes, {
        after,
        onError,
        store,
        name,
      });

      let ret;
      try {
        ret = action.apply(store, arguments); // 直接出错
      } catch (error) {
        triggerSubscription(onErrorCallbackList, error);
      }

      if (ret instanceof Promise) {
        return ret
          .then((value) => {
            triggerSubscription(afterCallbackList, value);
          })
          .catch((error) => {
            triggerSubscription(onErrorCallbackList, error);
            return Promise.reject(error);
          });
      } else {
        triggerSubscription(afterCallbackList, ret);
      }
      return ret;
    };
  }
  for (let key in setupStore) {
    const prop = setupStore[key];
    if (typeof prop == 'function') {
      // 你是一个action
      // 对action中的this 和 后续的逻辑进行处理 ， 函数劫持
      setupStore[key] = wrapAction(key, prop);
    }
    // 如何看这个值是不是状态state，如果这个值是一个ref或者reactive，不包括computed，那么他就可以认为是store的state
    // computed也是ref
    if ((isRef(prop) && !isComputed(prop)) || isReactive(prop)) {
      if (!isOption) {
        pinia.state.value[id][key] = prop;
      }
    }
  }
  Object.defineProperty(store, '$state', {
    get: () => pinia.state.value[id],
    set: (state) => $patch(($state) => Object.assign($state, state)),
  });

  store.$id = id;
  pinia._s.set(id, store); // 将store 和 id映射起来

  pinia._p.forEach((plugin) => {
    // 将插件的返回值作为store的属性
    Object.assign(
      store,
      scope.run(() => plugin({ store }))
    );
  });

  Object.assign(store, setupStore);
  return store;
}
```

PS：为什么$patch要用mergeReactiveObject去合并对象，而不用Object.assign合并，因为Object.assign只能合并一层，没办法合并对象中的对象，所以还是要自己实现

```
function mergeReactiveObject(target, state) {
  for (let key in state) {
    let oldValue = target[key];
    let newValue = state[key];
    // 新值和老值也可能是对象，所以合并的时候可能要递归
    if (isObject(oldValue) && isObject(newValue)) {
      target[key] = mergeReactiveObject(oldValue, newValue);
    } else {
      target[key] = newValue;
    }
  }
  return target;
}
```

### 3.addSubscription以及triggerSubscription

```
export const noop = () => {};

export function addSubscription(
  // 这个数组是pinia内部定义的，里面存放的是第二个参数callback
  subscriptions,
  callback,
  detached,
  onCleanup = noop
) {
  subscriptions.push(callback);

  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  // 如果$onAction的第二个参数是true，那么在组件卸载的时候，$onAction订阅的回调还会被触发
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }

  return removeSubscription;
}

export function triggerSubscription(subscriptions, ...args) {
  subscriptions.forEach((cb) => cb(...args));
}
```

## 六、storeToRefs

如果我们在使用store的时候采用解构的方式

```
const { count, dobule } = store; // 这种写法没有响应式
const { count, dobule } = toRefs(store); //这种写法有响应式
// pinia还提供了一个storeToRefs()
// 我们用pinia解构store的时候不要用toRefs，要用storeToRefs，可以跳过函数的处理
const { count, dobule } = storeToRefs(store); //这种写法有响应式
```

源码

```
import { isReactive, isRef, toRaw, toRef } from 'vue';

export function storeToRefs(store) {
  // store是proxy，里面会有store的自定义方法和属性，但是这些属性我们是不需要解构的，我们需要解构的是我们自己定义的state，getter
  // 因此我们才会在遍历store属性的时候判断是否为ref或者是否为reactive
  store = toRaw(store);
  const refs = {};
  for (let key in store) {
    const value = store[key];
    if (isRef(value) || isReactive(value)) {
      refs[key] = toRef(store, key);
    }
  }
}
```

## 七、体验

<Codesandbox :src="'https://codesandbox.io/p/github/Nangxif/pinia-project/draft/friendly-cray?file=%2FREADME.md'"/>