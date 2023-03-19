# SystemJS剖析

SystemJS 是一个通用的模块加载器，它能在浏览器上动态加载模块。微前端的核心就是 加载微应用，我们将应用打包成模块，在浏览器中通过 SystemJS 来加载模块。

SystemJS也是一个模块规范，跟CommonJs和ESModule是一样的。规范的意思就是说，我定义了一套写法，你需要按照我定义的写法写代码，就可以实现模块。

接下来我们要来了解一下SystemJS的使用方式以及它的核心原理

## 一、搭建环境

我们首先简单地搭建一个react的项目

```
// webpack.config.js
output: {
    // 指定生产模式下采用systemjs模块规范
    // 我们在应用的过程中，我们将子应用打包成类库，在主应用中加载这个库（systemjs）
    libraryTarget: env.production ? 'system' : ''
},

// 生产环境下不打包react,react-dom。（这里也可以打包到当前项目下均可）
externals: env.production ? ['react', 'react-dom'] : [],
```

PS：上面为何要设置externals配置呢？

打包的时候可能多个项目都是用到了react相关的包，这些包都打进去的话，无疑会增加包的大小，因此我们要考虑公共模块是否要打包进去。

接下来我们来看一下，最后采用system模式打包出来的产物是什么样子的。

## 二、打包的产物

```
System.register(["react-dom","react"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_react_dom__ = {};
	var __WEBPACK_EXTERNAL_MODULE_react__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react_dom__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_react__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					// findDomNode,render ....  {}; 将加载后的资源对象赋予给 react-dom上
					__WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					// 将加载后的react模块放到这个对象上
					__WEBPACK_EXTERNAL_MODULE_react__[key] = module[key];
				});
			}
		],
		execute: function() {}
	};
});
```

此时我们将编写的react项目打包成了systemjs，后续可以直接使用这个模块，但是要求通过systemjs来进行加载（这其实也是这种规范的一个缺点）。

接着我们回到即将使用systemjs模块（子应用）的index.html文件（主应用/基座）

```
<div id="root"></div>
<script type="systemjs-importmap">
    {
        "imports":{
            "react-dom":"https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.development.js",
        "react":"https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.js"
        }
    }
</script>
<script src="https://cdn.bootcdn.net/ajax/libs/systemjs/6.10.1/system.min.js"></script>
<script>
	// 直接加载子应用, 导入打包后的包来进行加载，采用的system规范
	System.import('./index.js');
</script>
```

还记得上面那个systemjs模块吗？register的第一个参数是一个数组，代表需要引入的是哪两个模块。那么这两个模块要从哪里加载呢？这其实也是systemjs的规范之一，我们需要在html文件中，用type为"systemjs-importmap"的script去定义一个json，这个json对应的就是模块要加载的来源（映射表）。与此同时也需要在html中引入systemjs的sdk文件，引入之后才会有System对象可供使用。

那么接下来我们不引入systemjs的sdk文件，我们自己来实现一个。

## 三、SystemJS源码

先看上面打包后的结果：

**System.register(依赖列表，回调函数[返回值包含setters和execute])**

上面的包中出现一个System对象，并且这个对象提供了一个register方法，该方法的第一个参数就是我们在webpack配置里面externals设置的不需要打包的两个模块。加载完依赖列表的模块之后，再执行register的回调函数。register的回调函数会返回一个对象，其中包含setters属性和execute属性。

setters：该方法会对应依赖列表里面模块的个数，提供相同个数的方法，这些方法会将加载后的模块上的属性，一个个复制到当前模块定义的变量中；

execute：该方法会执行当前包的主要逻辑，要是需要用到依赖列表里面的包的话，去setters复制后的变量里面取值即可。

因此，我们可以将systemjs导入模块的过程总结为下面三个步骤：

1. 定义出这个结构**System.register(依赖列表，回调函数[返回值包含setters和execute])**；
2. react，react-dom加载后调用setters，将对应的结果赋予给webpack；
3. 调用执行逻辑，执行页面渲染。

### 1.流程图

 <Image :src="'/front-frame/microfront/systemjs/1.png'" />

### 2.源码

```
// SystemJS的sdk主要逻辑
// 模块规范 用来加载system模块的
const newMapUrl = {};
// 最后的值为
/**
{
	react:"https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.development.js",
	react-dom:"https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.development.js"
}
*/

// 解析 importsMap
function processScripts() {
    Array.from(document.querySelectorAll('script')).forEach(script => {
        if (script.type === "systemjs-importmap") {
            const imports = JSON.parse(script.innerHTML).imports
            Object.entries(imports).forEach(([key, value]) => newMapUrl[key] = value)
        }
    })
}
// 加载资源
function load(id) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = newMapUrl[id] || id; // 支持cdn的查找
        script.async = true;
        document.head.appendChild(script);
        // 此时会执行代码
        script.addEventListener('load', function () {
            let _lastRegister = lastRegister;
            lastRegister = undefined
            resolve(_lastRegister);
        })
    })
}
let set = new Set(); // 1）先保存window上的属性
function saveGlobalProperty() {
    for (let k in window) {
        set.add(k);
    }
}
saveGlobalProperty();
function getLastGlobalProperty() {  // 看下window上新增的属性
    for (let k in window) {
        if (set.has(k)) continue;
        set.add(k);
        return window[k]; // 我通过script新增的变量
    }
}
let lastRegister;
class SystemJs {
    import(id) { // 这个id原则上可以是一个第三方路径cdn
        return Promise.resolve(processScripts()).then(() => {
            // 1）去当前路径查找 对应的资源 index.js
            const lastSepIndex = location.href.lastIndexOf('/');
            const baseURL = location.href.slice(0, lastSepIndex + 1);
            if (id.startsWith('./')) {
                return baseURL + id.slice(2);
            }
            // http  https
        }).then((id) => {
            // 根据文件的路径 来加载资源
            let execute
            return load(id).then((register) => {
                let { setters, execute:exe } = register[1](() => { })
                execute = exe;
                // execute 是真正执行的渲染逻辑 
                // setters 是用来保存加载后的资源，加载资源调用setters
                return [register[0], setters]
            }).then(([registeration, setters]) => {
                return Promise.all(registeration.map((dep, i) => {
                    return load(dep).then(() => {
                        const property = getLastGlobalProperty()
                        // 加载完毕后，会在window上增添属性 window.React window.ReactDOM
                        setters[i](property)
                    })
                    // 拿到的是函数，加载资源 将加载后的模块传递给这个setter
                }))
            }).then(() => {
                execute();
            })
        })
    }
    register(deps, declare) {
        // 将毁掉的结果保存起来
        lastRegister = [deps, declare]
    }
}
const System = new SystemJs()
```

不知道大家有没有发现，我们在引入依赖的时候，取的cdn链接都是以umd格式的链接，因为这种umd模块定义规范会将包打包成一个对象，然后将对象放到window对象上，比如react包，会打包成React对象，然后放置于window上 ，因此我们可以用window.React使用react包上的东西。

我们在执行setters的时候，会执行下面这段代码

```
function(module) {
    Object.keys(module).forEach(function(key) {
        // findDomNode,render ....  {}; 将加载后的资源对象赋予给 react-dom上
        __WEBPACK_EXTERNAL_MODULE_react_dom__[key] = module[key];
    });
},
```

这个module指的就是依赖列表对应的包，setters和依赖列表的数量是一一对应的，那么这个module要怎么取到呢，在上面的流程图上我们可以看到，可以**通过快照的方式获取依赖的属性**。我们发现，当react包加载完之后，window对象上的属性比较加载之前的属性，多了一个React属性，因此，我们可以在包加载之前保存一遍window对象上的属性（生成一个快照），然后包触发onload事件之后，再检查哪个属性是新增的，通过这样的方式获取到React对象，将这个对象传给module。