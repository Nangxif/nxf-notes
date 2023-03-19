# single-spa实战

## 1.安装脚手架

```
npm install create-single-spa -g
```

## 2.创建基座

我们通过single-spa的脚手架来创建基座以及子应用，这个脚手架会自动帮我们生成一个可以作为基座或者是子应用的模板。

```
create-single-spa substrate
// 输入之后会弹出下面几个选项
# 创建一个子应用（application）或者物料（parcel--多个应用之间共享的东西）
single-spa application / parcel
# 用于跨应用共享JavaScript逻辑的微应用
in-browser utility module (styleguide, api cache, etc)
# 创建基座容器
single-spa root config
```

我们先来看看webpack.config.js

```
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "nangxi";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",  // 最后名字会拼成@nangxi/root-config
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    plugins: [
      new HtmlWebpackPlugin({ // 这个插件可以支持ejs模板
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
    ],
  });
};
```

然后再看看index.ejs

```
#1
<script type="systemjs-importmap">
    {
      "imports": {
        "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
      }
    }
</script>

#2
<script type="systemjs-importmap">
    {
      "imports": {
        "@nangxi/root-config": "//localhost:9000/jw-root-config.js",
        "@nangxi/react":"//localhost:3000/jw-react.js",
        "@nangxi/vue":"//localhost:4000/js/app.js"
      }
    }
</script>

#3
<script>
    System.import('@nangxi/root-config');
</script>
```

看到这里会不会觉得特别熟悉，跟我们上一节讲的东西一样。上面代码中，我用#作为锚点方便后续讲解。

执行#3的时候，会在#2找到对应的import模块地址，根据systemjs-importmap的映射，我们找到基座项目的jw-root-config.js文件。这个文件就是用来注册应用的。按照下面的代码来说，是注册了一个远程应用，名为@single-spa/welcome，当路径为**/**的时候，就会去加载welcome远程模块。

```
// jw-root-config.js

import { registerApplication, start } from "single-spa";

// 注册应用
registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import( // 远程加载模块
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location)=>location.pathname === '/' ,
});

start({
  urlRerouteOnly: true,
});
```

接着我们来创建一个react框架的子应用

## 3.react子应用的创建

```
create-single-spa react-project
```

接着配置路由

```
npm install react-router-dom

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home.js'
import About from './components/About.js'
export default function Root(props) {
    return <Router basename="/react">
        <div>
            <Link to="/">Home React</Link>
            <Link to="/about">About React</Link>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
}
```

然后修改webpack.config.js配置

```
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "nangxi",
    projectName: "react", // @nangxi/react
    webpackConfigEnv,
    argv,
  });
  delete defaultConfig.externals; // 让react 和 react-dom 就打包到当前项目中
  return merge(defaultConfig, {
    devServer:{
      port:3000 // react 项目
    }
  });
};
```

用下面的命令行跑项目

```
npm run start
```

跑完项目之后，我们可以在浏览器看到它暴露出一个路径，这个路径就是webpack打包之后生成的文件

```
http://localhost:3000/nangxi-react.js
```

接下来我们把子项目集成到父应用

在主应用的jw-root-config.js中添加

```
registerApplication({
  name: "@nangxi/react", // 不重名即可
  app: () =>
    System.import('@nangxi/react'),
  activeWhen: (location)=>location.pathname.startsWith('/react')  ,
});
```

然后在主应用的ejs文件中添加

```
<script type="systemjs-importmap">
    {
      "imports": {
        "@nangxi/root-config": "//localhost:9000/jw-root-config.js",
        "@nangxi/react":"//localhost:3000/jw-react.js",
      }
    }
</script>
```

## 4.vue子应用的创建

```
create-single-spa vue-project
```

然后我们需要将vue的配置修改一下

```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 设置静态资源路径，否则静态资源地址会有问题
    publicPath: 'http://localhost:3002',
    // 定义端口号
    devServer: {
    	port: 3002
    },
    chainWebpack: (config) => {
       // 这段配置不加的话，vue3会报错，这个插件引起的
        if (config.plugins.has("SystemJSPublicPathWebpackPlugin")) {
        	config.plugins.delete("SystemJSPublicPathWebpackPlugin");
        }
    }
})
```

修改路由配置

```
const router = createRouter({
  history: createWebHistory('/vue'),
  routes
})
```

用下面的命令行跑项目

```
npm run serve
```

跑完项目之后，我们可以在浏览器看到它暴露出一个路径，这个路径就是webpack打包之后生成的文件

```
http://localhost:4000/js/app.js
```

接下来我们把子项目集成到父应用

在主应用的jw-root-config.js中添加

```
registerApplication({
  name: "@nangxi/vue", // 不重名即可
  app: () =>
    System.import('@nangxi/vue'),
  activeWhen: (location)=>location.pathname.startsWith('/vue')  ,
});
```

然后在主应用的ejs文件中添加

```
<script type="systemjs-importmap">
    {
      "imports": {
        "@nangxi/root-config": "//localhost:9000/jw-root-config.js",
        "@nangxi/react":"//localhost:3000/jw-react.js",
        "@nangxi/vue":"//localhost:4000/js/app.js"
      }
    }
</script>
```

