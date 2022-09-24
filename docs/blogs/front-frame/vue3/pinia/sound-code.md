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
      // 创建一个对象用于存放Vue实例，存放于pinia.__a
      pinia._a = app
      // 将pinia注入组件，后续在useStore里面通过inject获取注入的这个pinia
      app.provide(piniaSymbol, pinia)
      // 将pinia挂载到全局
      app.config.globalProperties.$pinia = pinia
    },
    // 暴露一个方法用于插入pinia组件，pinia.use
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
    const currentInstance = getCurrentInstance()
    // 使用inject获取在createPinia注入的pinia
    let pinia: Pinia | undefined | null = currentInstance && inject(piniaSymbol)
    if (pinia) setActivePinia(pinia)
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
function createOptionsStore(id: string, options: any, pinia) {
  const { state, getters, actions } = options
  function setup() {
    // 这里会对用户传递state，actions，getters做处理
    pinia.state.value[id] = state ? state() : {}
    const localState = toRefs(pinia.state.value[id])
    // 解决this问题
    /**
     * const store = useCounter();
     * store.increment();
     * 这么写increment的this指向肯定是store，如果通过解构呢？
     * const { increment } = useCounter();
     * increment(); 如果不做处理的话，this指向就不是store了
     * */
    return Object.assign(
      localState,
      actions,
      Object.keys(getters || {}).reduce((computeGetters, name) => {
        // 用户计算属性
        computeGetters[name] = computed(() => {
          return getters[name].call(store, store)
        })
        return computeGetters
      }, {})
    )
  }
  const store = createSetupStore(id, setup, pinia)
  // 重置
  store.$reset = () => {
    const newState = state ? state() : {}
    store.$patch($state => {
      Object.assign($state, newState)
    })
  }
  return store as any
}
```

### 2.createSetupStore

```
function createSetupStore(id, setup, pinia) {
  let scope
  // _e 能停止所有的store
  // 每个store还能停止自己的
  const setupStore = pinia._e.run(() => {
    scope = effectScope()
    return scope.run(() => setup())
  })
  function wrapAction(name, action) {
    return function () {
      // 触发action的时候 可以触发一些额外的逻辑
      const afterCallbackList: any = []
      const onErrorCallbackList: any = []
	  // 定义after函数作为$onAction回调函数的参数，当外部使用此函数时，会往afterCallbackList插入回调函数，后续action执行完成之后会遍历afterCallbackList数组并逐一触发
      function after(callback) {
        afterCallbackList.push(callback)
      }
	  // 定义onError函数作为$onAction回调函数的参数，当外部使用此函数时，会往onErrorCallbackList插入回调函数，后续action执行错误之后会遍历onErrorCallbackList数组并逐一触发
      function onError(callback) {
        onErrorCallbackList.push(callback)
      }
      // 触发actionSubscriptions中保存的store.$onAction的全部回调函数，并将after,onError,store,name参数合并成一个option传入
      // 触发action的时候，此时store.$onAction的callback已经执行,但是after onError的回调函数尚未执行
      triggerSubscription(actionSubscribes, {
        after,
        onError,
        store,
        name
      })

      let ret
      try {
        // 解决this问题
        /**
         * const store = useCounter();
         * store.increment();
         * 这么写increment的this指向肯定是store，如果通过解构呢？
         *
         *
         * const { increment } = useCounter();
         * increment(); 如果不做处理的话，this指向就不是store了
         * */
        ret = action.apply(store, arguments)
      } catch (error) {
        triggerSubscription(onErrorCallbackList, error)
      }

      if (ret instanceof Promise) {
        return ret
          .then(value => {
            triggerSubscription(afterCallbackList, value)
          })
          .catch(error => {
            triggerSubscription(onErrorCallbackList, error)
            return Promise.reject(error)
          })
      } else {
        triggerSubscription(afterCallbackList, ret)
      }
      return ret
    }
  }

  for (const key in setupStore) {
    const prop = setupStore[key]
    // 如果prop是一个函数，那么认为他就是一个action，因为有一个自定义methods叫$action需要action调用的时候去触发他的回调函数，所以需要在wrapAction里面进行处理
    if (typeof prop === 'function') {
      setupStore[key] = wrapAction(key, prop)
    }
  }

  function $patch(partialStateOrMutation) {
    if (typeof partialStateOrMutation === 'function') {
      partialStateOrMutation(store)
    } else {
      mergeReactiveObject(store, partialStateOrMutation)
    }
  }

  // 用于监听state中属性的变化
  // 当用户状态变化的时候 可以监控到变化 并且通知用户 发布订阅
  let actionSubscribes = []
  const partialStore = {
    $patch,
    $subscribe(callback, options) {
      // watch
      scope.run(() =>
        watch(
          pinia.state.value[id],
          state => {
            // 监控状态变化
            callback({ type: 'dirct' }, state)
          },
          options
        )
      )
    },
    // $onAction的本体是addSubscription
    $onAction: addSubscription.bind(null, actionSubscribes),
    $dispose: () => {
      scope.stop()
      actionSubscribes = []
      pinia._s.delete(id) // 删除store, 数据变化了不会再更新视图
    }
  }

  // 每一个store都是一个响应式对象
  const store = reactive(partialStore)

  Object.defineProperty(store, '$state', {
    get: () => pinia.state.value[id],
    set: state => $patch($state => Object.assign($state, state))
  })

  // 最终会将处理好的setupStore 放到store的身上
  Object.assign(store, setupStore) // reactive 中放ref 会被拆包  store.count.value

  // 每个store 都会应用一下插件
  pinia._p.forEach(plugin => Object.assign(store, plugin({ store, pinia, app: pinia._a, id })))

  pinia._s.set(id, store)
  return store as any
}
```

### 3.addSubscription以及triggerSubscription

```
export const noop = () => {}

export function addSubscription<T extends _Method>(
  // 这个数组是pinia内部定义的，里面存放的是第二个参数callback
  subscriptions: T[],
  callback: T,
  detached?: boolean,
  onCleanup: () => void = noop
) {
  subscriptions.push(callback)

  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback)
    if (idx > -1) {
      subscriptions.splice(idx, 1)
      onCleanup()
    }
  }
  // 如果$onAction的第二个参数是true，那么在组件卸载的时候，$onAction订阅的回调还会被触发
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription)
  }

  return removeSubscription
}

export function triggerSubscription(subscriptions, ...args) {
  subscriptions.forEach(cb => cb(...args))
}
```

## 六、体验

<Codesandbox :src="'https://codesandbox.io/p/github/Nangxif/pinia-project/draft/friendly-cray?file=%2FREADME.md'"/>