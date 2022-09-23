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

## 三、入口文件

```
// index.js

export { createPinia } from './createPinia';
export { defineStore } from './store';
```

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
  // 创建一个scope用于控制依赖收集
  const scope = effectScope(true)
  // 初始化一个state 用于保存store所有的状态
  const state: any = scope.run(() => ref({}))
  const _p: Pinia['_p'] = []
  const pinia: Pinia = markRaw({
    install(app: App) {
      setActivePinia(pinia)
      // 保存Vue的实例对象
      pinia._a = app
      // 将pinia注入组件
      app.provide(piniaSymbol, pinia)
      // 将pinia挂载到全局
      app.config.globalProperties.$pinia = pinia
    },
    use(plugin: never) {
      _p.push(plugin)
      return this
    },
    _p,
    _a: null,
    _e: scope,
    _s: new Map(),
    state
  })
  return pinia;
}

```

