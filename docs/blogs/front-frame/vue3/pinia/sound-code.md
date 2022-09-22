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

```
// createPinia.js

```

