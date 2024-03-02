# Rollup介绍

## 一、前言

其实我学rollup的过程也是参照着webpack的配置学的

1. 首先从最简单的开始，rollup配置的入口和出口，然后将打包后的文件放在html模板上；

2. css/less/sass各种样式文件的打包，然后放到html模板上；

3. 图片等各种资源的打包；

4. vue，ts的转译；

5. babel的编译；
   
6. 起一个服务，热更新；
   
7. 优化（包括代码压缩，代码分割等）。

我基本上是照着这个流程入门rollup打包工具的。

## 二、背景

* webpack打包非常繁琐，打包体积比较大
* rollup主要是用来打包js库的
* Vue/react/angular都在用rollup作为打包工具

## 三、初次使用

1.打包的文件格式

`output.format`

* AMD（Asynchronous Module Definition）异步模块定义
* ESModule
* IIFE（Immediately Invoke Function Expression） 即立即执行函数表达式
* UMD（Universal Module Definition），也就是通用模块定义
* CJS是nodejs采用的模块化标准

如果打包为iife，umd，则需要指定一个全局变量`output.name`
