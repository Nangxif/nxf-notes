# single-spa的实现【上】

还记得上一节我们single-spa是怎么使用的吗？，简化来说就是这样的

```
let app1 = {
    bootstrap: [
        async () => console.log('app1 bootstrap1'),
        async () => console.log('app1 bootstrap2')
    ],
    mount: [
        async (props) => {
            console.log('app1 mount1', props)
        },
        async () => {
            console.log('app1 mount2')
        }
    ],
    unmount: async (props) => {
        console.log('app1 unmount')
    }
}
let app2 = {
    bootstrap: async () => console.log('app2 bootstrap1'),
    mount: [
        async () => {
            return new Promise((resolve,reejct)=>{
                setTimeout(()=>{
                    console.log('app2 mount')
                    resolve()
                },1000)
            })
        }
    ],
    unmount: async () => {
        console.log('app2 unmount')
    }
}
// 当路径是#/a 的时候就加载 a应用
// 当路径是#/b 的时候就加载 b应用
// 所谓的注册应用 就是看一下路径是否匹配，如果匹配则“加载”对应的应用
registerApplication('a', async () => app1, location => location.hash.startsWith('#/a'), { a: 1 })
registerApplication('b', async () => app2, location => location.hash.startsWith('#/b'), { a: 1 })

// 开启路径的监控，路径切换的时候 可以调用对应的mount unmount
start()
```

registerApplication的作用是根据路径加载应用，而start的作用是开启应用并且挂载组件。

我们先来看一下registerApplication的实现

## 一、registerApplication的实现

```
export const apps = []
export function registerApplication(appName,loadApp,activeWhen,customProps){
    const registeration = {
        name:appName,
        loadApp,
        activeWhen,
        customProps,
        status:NOT_LOADED
    };
    apps.push(registeration);
    reroute();
}
```

registerApplication会在内部创建一个registeration对象，这个对象的status属性记录了当前注册的应用的状态，应用的初始状态都是NOT_LOADED。

应用的状态有如下几种

* NOT_LOADED表示没有被加载
* LOADING_SOURCE_CODE表示路径匹配了，要去加载这个资源
* LOAD_ERROR表示加载失败

启动的过程中的状态

* NOT_BOOTSTRAPED表示资源加载完毕了
* BOOTSTRAPING表示启动中
* NOT_MOUNTED表示已经启动了但是还没有被挂载

挂载流程的状态

* MOUNTING表示正在挂载
* MOUNTED表示挂载完成

卸载流程的状态

* UNMOUNTING表示卸载中

registerApplication每调用一次都会将创建出来的registeration对象存放到全局的apps中，接着调用reroute检查哪些应用要被加载，还有哪些应用要被挂载，还有哪些应用要被移除。

一个应用会经历以下这几个阶段

未加载 --> 加载 --> 挂载 --> 卸载

reroute会调用getAppChanges方法将当前注册的应用分类为将被加载的应用（appsToLoad），将被挂载的应用（appsToMount），以及将被卸载的应用（appsToUnmount）。

```
export function getAppChanges() {
    const appsToLoad = [];
    const appsToMount = [];
    const appsToUnmount = [];

    apps.forEach((app) => {
        let appShouldBeActive = shouldBeActive(app)
        switch(app.status) {
            case NOT_LOADED:
            case LOADING_SOURCE_CODE:
                // 1） 标记当前路径下 哪些应用要被加载
                if(appShouldBeActive) {
                    appsToLoad.push(app)
                }
                break;
            case NOT_BOOTSTRAPED:  
            case BOOTSTRAPING:
            case NOT_MOUNTED:
                // 2) 当前路径下 哪些应用要被挂在
                if(appShouldBeActive) {
                    appsToMount.push(app)
                }
                break;
            case MOUNTED:
                // 3） 当前路径下 哪些应用要被卸载
                if(!appShouldBeActive) {
                    appsToUnmount.push(app)
                }
                break
            default:
                break;
        }
    });
    return {appsToLoad,appsToMount,appsToUnmount};
}
```

getAppChanges将所有已经注册的应用进行分类，遍历当前所有的应用，如果发现应用的状态为NOT_LOADED（未加载）或者LOADING_SOURCE_CODE（正在加载资源），那么再判断应用是否应该被激活（appShouldBeActive），如果为是的话，那么将此应用放到appsToLoad；如果发现应用的状态为NOT_BOOTSTRAPED（未启动），或者是BOOTSTRAPING（启动中）、NOT_MOUNTED（未挂载），那么再判断应用是否应该被激活（appShouldBeActive），如果为是的话，那么将此应用放到appsToMount；如果发现应用的状态为MOUNTED（已挂载），那么需要再判断应用是否不应该被激活，如果是的话，那么将此应用放到appsToUnmount。

PS：appShouldBeActive是根据什么来判断的呢？

答案：根据应用传进来的activeWhen

```
let appShouldBeActive = shouldBeActive(app);
export function shouldBeActive(app){
    return app.activeWhen(window.location)
}
```

还记得我们前面说过的”registerApplication的作用是根据路径加载应用，而start的作用是开启应用并且挂载组件“吗？

那当逻辑只执行到registerApplication注册应用，还没开启应用的时候，会先进行什么操作？前面已经说过了**根据路径加载应用**，好好理解一下这句话，根据路径，然后加载应用。

根据路径我们这一步已经在getAppChanges处理过了，将注册的应用进行分类，那么接下来我们就要将分类出来的appsToLoad遍历加载。

```
function loadApps() {
    // 应用的加载
    return Promise.all(appsToLoad.map(toLoadPromise)) // 到目前为止我们还没有调用start 
}
```

那么toLoadPromise究竟是做什么的呢？

```
export function toLoadPromise(app){
    return Promise.resolve().then(()=>{
        if(app.status !== NOT_LOADED){
            // 此应用加载完毕了 
            return app;
        }
        app.status = LOADING_SOURCE_CODE; // 正在加载应用

        // loadApp 对于之前的内容 System.import()
        return app.loadApp(app.customProps).then(v=>{
            const {bootstrap,mount,unmount} = v;
            app.status = NOT_BOOTSTRAPED;
            app.bootstrap = flattenArrayToPromise(bootstrap);
            app.mount = flattenArrayToPromise(mount);
            app.unmount = flattenArrayToPromise(unmount);

            return app
        })
    })
}
```

很简单，先判断应用的状态是否不等于NOT_LOADED（未加载），因为状态属于未加载的应用才需要加载嘛~，如果不是NOT_LOADED的话直接返回该应用。如果等于NOT_LOADED 的话，那么就调用注册应用的时候传进来的loadApp方法，加载完之后就需要修改状态为NOT_BOOTSTRAPED（已加载未挂载），并且要重新处理一下注册的时候传进来的生命周期钩子bootstrap、mount、unmount。因为传进来的生命周期钩子可能是一个返回Promise的函数，也可能是由几个返回Promise的函数组合而成的数组，因此需要用flattenArrayToPromise进行处理。

```
function flattenArrayToPromise(fns) {
    fns = Array.isArray(fns) ? fns : [fns]
    return function(props){ 
        return fns.reduce((rPromise,fn)=>rPromise.then(()=>fn(props)), Promise.resolve())
    }
}
```

