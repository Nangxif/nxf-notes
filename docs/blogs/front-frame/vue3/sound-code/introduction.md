# Vue3介绍

## 一、Vue设计思想

1. Vue3.0更注重模块上的拆分，在2.0中无法单独使用部分模块，需要引入完整的Vuejs(例如只想使用响应式部分，但是需要引入完整的Vuejs)，Vue3中的模块之间耦合度低，模块可以独立使用。拆分模块
2. Vue2中很多方法挂载到了实例中导致没有使用也会被打包(还有很多组件也是一样)。通过构建工具Tree-shakina机制实现按重引入，减少用户打包后体积，重写API
3. Vue3允许自定义渲染器，扩展能力强。不会发生以前的事情，改写Vue源码改造渲染方式。扩展更方便
4. 依然保留Vue2的特色

## 二、声明式框架

Vue3依旧是声明式的框架，用起来简单。

**命令式和声明式区别**

1. 早在JQ的时代编写的代码都是命令式的，命令式框架重要特点就是关注过程
2. 声明式框架更加关注结果。命令式的代码封装到了Vuejs中，过程靠vuejs来实现

```
命令式编程:
let numbers = [1,2,3,4,5]; 
let total = 0;
for(let i = 0; i < numbers.length; i++){ 
	total += numbers[i] - 关注了过程
}
console.log(total)

- 声明式编程:
let total2 = numbers.reduce(function (memo,current) {
	return memo + current
},0)
console.log(total2)
```

## 三、采用虚拟DOM

传统更新页面，拼接一个完整的字符串innerHTML全部重新渲染，添加虚拟DOM后，可以比较新旧虚拟节点，找到变化在进行更新。虚拟DOM就是一个对象，用来描述真实DOM的

```
const vnode = {
	__v_isVNode: true,
	__v_skip: true, 
	type, 
	props,
	key: props && normalizeKey(props), 
	ref: props && normalizeRef(props), 
	children,
	component: null, 
	el:null, 
	patchflag, 
	dynamicProps,
	dynamicChildren: null, 
	appContext:null
}
```

## 四、区分编译时和运行时

- 我们要有一个虚拟DOM，调用渲染方法将虚拟DOM渲染成真实DOM（缺点就是虚拟DOM编写麻烦）

- 专门写一个编译时可以将模板编译成虚拟DOM