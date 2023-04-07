# qiankun实战

## 一、创建一个基座（主应用）

PS：基座为React

### 1.定义子应用路由

```
<BrowserRouter>
  <Link to="/react">React应用</Link>
  <Link to="/vue">Vue应用</Link>
</BrowserRouter>

<!-- 子应用挂载的节点 -->
<div id='container'></div>
```

### 2.注册应用并定义生命周期

```
registerMicroApps([
    {
        name: 'reactApp',
        entry: '//localhost:40000', // 默认react启动的入口是10000端口
        activeRule: '/react', // 当路径是 /react的时候启动
        container: '#container', // 应用挂载的位置
        loader,
        props: { a: 1, util: {} }
    },
    {
        name: 'vueApp',
        entry: '//localhost:20000', // 默认react启动的入口是10000端口
        activeRule: '/vue', // 当路径是 /react的时候启动
        container: '#container', // 应用挂载的位置
        loader,
        props: { a: 1, util: {} }
    }
], {
    beforeLoad() {
        console.log('before load')
    },
    beforeMount() {
        console.log('before mount')
    },
    afterMount() {
        console.log('after mount')
    },
    beforeUnmount() {
        console.log('before unmount')
    },
    afterUnmount() {
        console.log('after unmount')
    }
})
```

### 3.启动应用

```
start();
```

## 二、创建子应用

### 1.vue子应用

```
// 在main.js

// 作为子应用打开项目的时候，静态资源路径需要更改
if(window.__POWERED_BY_QIANKUN__){
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let history;
let router;
// 定义render方法在生命周期mount的时候使用，此时主应用在打开子应用的时候会传一个props，这个props里面有container属性，表示子应用的挂载节点
function render(props) {
    app = createApp(App);
    // 作为子应用打开的话需要添加路径前缀/vue
    history = createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/vue' : '/');
    router = createRouter({
        history,
        routes
    });
    app.use(router);
    const container = props.container;
    // 如果检测到有container，说明是作为子应用打开的，那么就找container下面的#app节点
    app.mount(container ? container.querySelector('#app'):document.getElementById('app'));
}

// qiankun 提供了一些标识，用于表示当前应用是否在父应用中被引入过
// 如果不作为子应用打开，而是独立打开的话，直接执行render
if(!window.__POWERED_BY_QIANKUN__){
    render({});
}

// 定义子应用的生命周期
export async function bootstrap() {
    console.log('vue bootsrap');
}
export async function mount(props) {
    render(props);
}
export async function unmount() {
    app.unmount();
    history.destroy();
    app = null;
    router = null;
}
```

```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:20000,
    headers:{
      'Access-Control-Allow-Origin':"*"
    }
  },
  configureWebpack:{
  	// qiankun 要求应用暴露的方式需要时umd格式 
    output:{
      libraryTarget:'umd',
      library:'m-vue'
    }
  }
})
```

### 2.react子应用

```
if(window.__POWERED_BY_QIANKUN__){
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

let root;
function render(props) {
    const container = props.container
    root = ReactDOM.createRoot(container ? container.querySelector('#root') : document.getElementById('root'));
    root.render(
        <App />
    );
}
// qiankun 提供了一些标识，用于表示当前应用是否在父应用中被引入过
if (!window.__POWERED_BY_QIANKUN__) {
    render({}); // 独立运行调用render方法
}

// qiankun 要求应用暴露的方式需要时umd格式
export async function bootstrap(props) {
    console.log(props)
}
export async function mount(props) {
	// 监听主应用传进来的参数的变化
    props.onGlobalStateChange((newVal, oldVal) => {
        console.log('child', newVal, oldVal)
    })
    // 修改主应用的状态
    props.setGlobalState({ name: 'jw2' })
    // 外层基座的容器叫container容器
    render(props); // 父应用挂载的时候会传递props， props有挂载点container
}
export async function unmount(props) {
    root.unmount();
}
```

因为我们没办法直接修改通过create-react-app脚手架创建的react项目的webpack配置，因此我们需要安装一个包**@rescripts/cli**，来配合我们重写webpack配置。

```
// scripts脚本改为
"scripts": {
    "start": "rescripts start",
    "build": "rescripts build",
    "test": "rescripts test",
    "eject": "rescripts eject"
},
```

创建一个.rescriptsrc.js文件

```
module.exports = {
    webpack:(config)=>{
        config.output.libraryTarget = 'umd';
        config.output.library = 'm-react'; // 打包的格式是umd格式
        return config
    },
    devServer:(config)=>{
        config.headers = {
            'Access-control-Allow-Origin':"*"
        }
        return config
    }
}
```

修改env环境变量

```
PORT=40000
WDS_SOCKET_PORT=40000
```

### 3.原生子应用

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>静态应用</title>
</head>

<body>
    <div id="static"></div>
    <script >
        const app = document.getElementById('static');
        // 最终导出接入协议即可
        function render() {
            app.innerHTML = 'static'
        }
        if (!window.__POWERED_BY_QIANKUN__) {
            render()
        }
		// 其实vue和react框架作为子应用，用umd模式打包出来的文件就是长这样的，targetName挂载到window上
        window['m-static'] = {
            bootstrap: async () => {
                console.log('static bootstrap')
            },
            mount: async () => {
                render()
            },
            unmount: async () => {
                app.innerHTML = ''
            }
        }
    </script>
</body>

</html>
```

如果我们这次将子应用通过动态的形式引入，那么我们将在主应用做如下的注册

```
// 给这个子应用一个节点
<div ref={containerRef}></div>

const containerRef = React.createRef();
 
useEffect(()=>{
    loadMicroApp({
      name:'m-static',
      entry: 'http://localhost:30000',
      container:containerRef.current
    })
})
```

