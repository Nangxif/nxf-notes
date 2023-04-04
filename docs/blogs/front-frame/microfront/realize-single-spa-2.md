# single-spa的实现【下】

## 二、start的实现

注册完应用之后，那么就需要挂载应用。

start的实现很简单，修改一下全局状态started为true，表示用户已经启动了，同时再次调用reroute。

```
export let started = false; // 默认没有调用start方法
export function start(){
    started = true; // 用户启动了
    reroute()
}
```

至此我们之前实现的reroute就不够用了。因为之前实现的reroute只满足于注册应用的时候，由于start的时候要进行的操作是：**启动对应的应用 --> 卸载之前的 --> 挂载对应的应用**。因此之前的reroute已经不够用了，我们需要继续完善。

因为start的时候将started设置为true，因此当started为false的时候，就表示当前还是在注册应用的状态，还没有执行start，此时调用loadApps。当started为true的时候，我们就执行performAppChange。

```
function performAppChange(){
    // 将不需要的应用卸载掉, 返回一个卸载的promise
    // 1) 稍后测试销毁逻辑
    const unmountAllPromises = Promise.all(appsToUnmount.map(toUnmountPromise))
    // 流程加载需要的应用 -》 启动对应的应用 -》 卸载之前的 -》 挂载对应的应用
    // 2) 加载需要的应用（可能这个应用在注册的时候已经被加载了）
    // 默认情况注册的时候路径是/a, 但是当我们start的时候应用是/b
    const loadMountPromises = Promise.all(appsToLoad.map(app=> toLoadPromise(app).then(app=>{
        // 当应用加载完毕后需要启动和挂载，但是要保证挂载前先卸载应用
        return  tryBootstrapAndMount(app,unmountAllPromises)
    })));
    const mountPromises = Promise.all(appsToMount.map(app=> tryBootstrapAndMount(app,unmountAllPromises)))
    function tryBootstrapAndMount(app,unmountAllPromises){
        if(shouldBeActive(app)){
            // 保证卸载完毕在挂载
            return toBootstrapPromise(app).then(app=> unmountAllPromises.then(()=> toMountPromise(app)))
        }
    }
    return Promise.all([loadMountPromises,mountPromises])  
}
```

如果应用没有加载，那么流程就是加载 --> 启动 --> 卸载 --> 挂载（loadMountPromises），如果应用已经加载过了，那么就直接启动 --> 挂载 --> 卸载（mountPromises）。

toUnmountPromise的实现逻辑跟toLoadPromise类似

```
export function toUnmountPromise(app){
    return Promise.resolve().then(()=>{
        if(app.status !== MOUNTED){
            return app;
        }
        app.status = UNMOUNTING;
        return app.unmount(app.customProps).then(()=>{
            app.status = NOT_MOUNTED;
        })
    })
}
```

如果应用的状态不是MOUNTED（已挂载），那么肯定不属于即将卸载的范畴，直接返回该应用。如果应用的状态是MOUNTED，那么在卸载之前把状态改为UNMOUNTING（卸载中），卸载完成之后再把状态改成NOT_MOUNTED（未挂载）。

toBootstrapPromise的实现逻辑也是

```
export function toBootstrapPromise(app){
    return Promise.resolve().then(()=>{
        if(app.status !== NOT_BOOTSTRAPED){
            // 此应用加载完毕了 
            return app;
        }
        app.status = BOOTSTRAPING

        return app.bootstrap(app.customProps).then(()=>{
            app.status = NOT_MOUNTED;
            return app
        })
    })
}
```

如果应用的状态不是NOT_BOOTSTRAPED（未启动），那么肯定不属于即将挂载载的范畴，直接返回该应用。如果应用的状态是NOT_BOOTSTRAPED，那么在卸载之前把状态改为BOOTSTRAPING（启动中），卸载完成之后再把状态改成NOT_MOUNTED（未挂载）。

## 三、监听路由变化重新执行reroute

我们通过下面的方式更新路由

```
<a href="#/a">a应用</a>
<a href="#/b">b应用</a>
```

这种调用方式在window.addEventListener的回调里面就可以拿到event对象。

接下来我们要监听路由变化重新执行reroute。

```
function urlRoute() {
	// 这里传的arguments参数后续会用到
    reroute(arguments)
}

window.addEventListener('hashchange', urlRoute)
window.addEventListener('popstate', urlRoute);
```

如果我们在外部对**hashchange**或者是**popstate**也有监听。

```
window.addEventListener('hashchange', function () {
    console.log(window.location.hash, 'p----')
})
```

那么会出现一种情况，就是在外部监听的回调会比在内部监听的回调先执行。这是有问题的，上面这个监听操作应该被延迟到当应用挂载完毕后再执行。所以我们还要做一下处理。先用一个对象（capturedEventListeners）将对应的外部事件监听回调缓存起来。如果是在注册的时候，那么就在应用全部加载完成之后执行缓存起来的回调。

```
function loadApps() {
    // 应用的加载
    return Promise.all(appsToLoad.map(toLoadPromise)).then(callEventListener)// 目前我们没有调用start 
}
```

如果是在start的时候，那么就在应用全部加载完成之后执行缓存起来的回调。如果是在start的时候，那么就在挂载完之后执行缓存起来的回调。

```
function performAppChange(){
	……
	return Promise.all([loadMountPromises,mountPromises]).then(()=>{ 		 // 卸载完毕后
        callEventListener();
    })
}
```

至于capturedEventListeners是怎么来的。我们需要劫持原生的路由事件，重写window.addEventListener方法，当监听到触发的是hashchange或popstate事件时，将该回调存放到capturedEventListeners。注意：

```
window.addEventListener('hashchange', urlRoute)
window.addEventListener('popstate', urlRoute);
```

这一步必须放在重写的逻辑之前，因为这一步不需要放到capturedEventListeners。

```
const capturedEventListeners = {
    hashchange: [],
    popstate: []
}

const listentingTo = ['hashchange','popstate']
const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;

window.addEventListener = function(eventName,callback){
    // 有要监听的事件， 函数不能重复
    if(listentingTo.includes(eventName) && !capturedEventListeners[eventName].some(listener=>listener === callback)){
        return capturedEventListeners[eventName].push(callback)
    }
    return originalAddEventListener.apply(this,arguments)
}
window.removeEventListener = function(eventName,callback){
    // 有要监听的事件， 函数不能重复
    if(listentingTo.includes(eventName) ){
        capturedEventListeners[eventName] = capturedEventListeners[eventName].filter(fn=> fn!== callback)
        return 
    }
    return originalRemoveEventListener.apply(this,arguments)
}
```

至于callEventListener的逻辑

```
function reroute(event) {
	function callEventListener(){
        callCaptureEventListeners(event)
    }
}

export function callCaptureEventListeners(e){
    if(e){
        const eventType = e[0].type;
        if(listentingTo.includes(eventType)){
            capturedEventListeners[eventType].forEach(listener => {
                listener.apply(this,e)
            });
        }
    }
}
// 记得上面留下来的一个问题吗？arguments的作用是什么？window.addEventListener('hashchange', urlRoute)里面，urlRoute作为回调函数的时候，会接收到一个event对象，这个对象可以获取到urlRoute是由hashchange触发的还是popstate触发的。
function urlRoute() {
    reroute(arguments)
}
```

如果我们跳转路由的方式换成下面这种，会有什么样的影响呢？

```
<a onclick="go('#/a')">a应用</a>
<a onclick="go('#/b')">b应用</a>

function go(url) {
    history.pushState({}, null, url)
}
```

这种跳转路由的方式，用户调用pushState或replaceState方法不会被popstate监听到，需要我们手动触发，所以我们需要重写history上面的pushState和replaceState。

```
window.history.pushState = patchFn(window.history.pushState,'pushState')
window.history.replaceState = patchFn(window.history.replaceState,'replaceState')
```

```
function patchFn(updateState,methodName){
    return function(){
        const urlBefore = window.location.href;
        const r = updateState.apply(this,arguments); // 调用此方法 确实发生了路径的变化
        const urlAfter = window.location.href;

        if(urlBefore !== urlAfter){
            // 手动派发popstate事件
            window.dispatchEvent(new PopStateEvent("popstate"))
        }
        return r;
    }
}
```

当我们用下面这种方式跳转页面的时候

```
<a href="#/a">a应用</a>
<a href="#/b">b应用</a>
```

会触发hashchange事件和popstate事件，此时会导致urlRoute走了两次，如果此时注册应用的时候，mount里面是这样的

```
mount: [
  async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('app2 mount');
        resolve();
      }, 1000);
    });
  },
],
```

那么app2 mount会在控制台输出两次，这显然是不合理的，因此我们要做一个防抖。

```
let appChangeUnderWay = false;
let peopleWaitingOnAppChange = []

export function reroute(event) {
    // 如果多次触发reroute 方法我们可以创造一个队列来屏蔽这个问题
    if(appChangeUnderWay){
        return new Promise((resolve,reject)=>{
            peopleWaitingOnAppChange.push({
                resolve,reject
            })
        })
    }
    // ...
    function performAppChange(){
    	return Promise.all([loadMountPromises,mountPromises]).then(()=>{
            callEventListener();
            appChangeUnderWay = false;
            if(peopleWaitingOnAppChange.length > 0){
                peopleWaitingOnAppChange = []; // 多次操作 我缓存起来，。。。。
            }
        })
    }
}
```

