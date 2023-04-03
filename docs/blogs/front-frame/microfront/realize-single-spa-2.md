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