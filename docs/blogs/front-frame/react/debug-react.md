# 如何调试react源码

我们要了解react的原理，难免需要调试源码，接下来直接进入正题，一步一步傻瓜式地操作下来就可以调试了。
## 1.创建一个react项目

```js
npx create-react-app react-app
```
## 2.运行eject，创建config目录，暴露webpack配置
步骤1创建的项目刚好有一段脚本可以创建config，这个文件夹下面会有可以打包项目的webpack.config.js配置文件。

```js
npm run eject
```
跑完这个命令，会自动把之前启动项目的工具react-scripts替换为eject生成的node scripts/start.js   
跑命令前的样子

<img :src="$withBase('/front-frame/react/debug-react/1.png')">

跑命令后的样子

<img :src="$withBase('/front-frame/react/debug-react/2.png')">

跑完这段命令会创建.git文件夹并在项目生成仓库，如果我们是先进行3步骤再进行2步骤，那么在进行2步骤的时候会报错，说仓库还有未commit的代码，导致eject命令无法执行，这时候我们需要将代码全部commit，再跑这串命令。
## 3.将facebook仓库的react源码clone或者下载，放至src/react目录下

<img :src="$withBase('/front-frame/react/debug-react/3.png')">

## 4.修改react-app/src/index.js里面关于react的引入方式

```js
/**
* 原代码
* import React from 'react';
* import ReactDOM from 'react-dom/client';
*/
// 修改后代码
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
```
## 5.react-app/config/webpack.config.js修改alias指向，指向下载到本地的react代码

```js
alias: {
    // 把之前的指向全部注释掉
    // // Support React Native Web
    // // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
    // 'react-native': 'react-native-web',
    // // Allows for better profiling with ReactDevTools
    // ...(isEnvProductionProfile && {
    //   'react-dom$': 'react-dom/profiling',
    //   'scheduler/tracing': 'scheduler/tracing-profiling',
    // }),
    // ...(modules.webpackAliases || {}),
    // 修改为下面这段指向
    react: path.join(paths.appSrc, 'react/packages/react'),
    'react-dom': path.join(paths.appSrc, 'react/packages/react-dom'),
    shared: path.join(paths.appSrc, 'react/packages/shared'),
    'react-reconciler': path.join(
      paths.appSrc,
      'react/packages/react-reconciler'
    ),
    'legacy-events': path.join(
      paths.appSrc,
      'react/packages/legacy-events'
    ),
    scheduler: path.join(paths.appSrc, 'react/packages/scheduler'),
  },
```
PS：毕竟我们的目的，就是想调试本地的react代码。
## 6.关掉eslint
在react-app/config/webpack.config.js全局搜索disableESLintPlugin
```js
// 将上面这段代码注释
// const disableESLintPlugin = process.env.DISABLE_ESLINT_PLUGIN === 'true';
// 把disableESLintPlugin改为true
const disableESLintPlugin = true;
```
## 7.先将项目运行起来

```js
npm run start
```
我们先将项目跑起来，再看看报什么错。emmm，貌似报了不少错，我们一个个来解决!
## 8.修改第一个遇到的错误

<img :src="$withBase('/front-frame/react/debug-react/4.png')">


```js
// 在文件开头引入SchedulerMock
import * as SchedulerMock from 'scheduler/src/forks/SchedulerMock';
// 然后将后面的
// export const unstable_yieldValue = Scheduler.unstable_yieldValue;
// export const unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue;
// 改为
export const unstable_yieldValue = SchedulerMock.unstable_yieldValue;
export const unstable_setDisableYieldValue = SchedulerMock.unstable_setDisableYieldValue;
```
## 9.项目跑起来了，但是我们依然能在浏览器控制台看到报错

<img :src="$withBase('/front-frame/react/debug-react/5.png')">

看来是环境变量没有设置
在react-app/config/env.js，全局搜索stringified

```js
const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
    // 加上
    __DEV__: true
};
```

<img :src="$withBase('/front-frame/react/debug-react/6.png')">

看来还有未设置的环境变量，那我们继续添加

```js
const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
    __DEV__: true,
    // 加上
    __EXPERIMENTAL__: true
};
```

<img :src="$withBase('/front-frame/react/debug-react/7.png')">

好吧，还有一个环境变量
```js
const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {}),
    __DEV__: true,
    __EXPERIMENTAL__: true,
    // 加上
    __PROFILE__: true
};
```
## 10.解决__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED问题

<img :src="$withBase('/front-frame/react/debug-react/8.png')">

修改react-app/src/react/packages/shared/ReactSharedInternals.js

```js
// 注释这段
// import * as React from 'react';

// const ReactSharedInternals =
//   React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// 添加这段
import ReactSharedInternals from '../react/src/ReactSharedInternals'
export default ReactSharedInternals;
```
## 11.This module must be shimmed by a specific renderer

<img :src="$withBase('/front-frame/react/debug-react/9.png')">

修改react-app/src/react/packages/react-reconciler/src/ReactFiberHostConfig.js

```js
// 注释这段
// throw new Error('This module must be shimmed by a specific renderer.');
// 加入这段
export * from './forks/ReactFiberHostConfig.dom';
```
## 12.跑起来了

<img :src="$withBase('/front-frame/react/debug-react/10.png')">

## 13.开始debug
在app.js文件中加个debugger
```js
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

debugger;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
点击运行调试，选择chrome环境

<img :src="$withBase('/front-frame/react/debug-react/11.png')">

端口改为当前项目的服务端口3000，点击运行和调试

<img :src="$withBase('/front-frame/react/debug-react/12.png')">

## 14.大功告成

<img :src="$withBase('/front-frame/react/debug-react/13.png')">

