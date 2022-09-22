# rollup打包vue3

我们用rollup+pnpm来打包vue3

## 一、打包顺序

我们先来猜想用rollup打包一个vue3项目，编译的顺序应该是什么样的

1. 编译.vue文件（先将.vue文件编译成js或者ts等文件）
2. 编译ts文件
3. 打包第三方包
4. babel转译
5. 打包css/less/sass和图片
6. 压缩代码
7. 将打包好的js插入html
8. 启动一个服务，并且有热更新

其实这大致也就是我们rollup的plugins的配置和执行顺序

## 二、心路历程

我在src目录下按照平时我们使用的vue3项目写了一些东西，目录如下

```
- src
  - components
    - title.tsx
  - images
    - logo.png
  - App.vue
  - index.html
  - main.ts 入口文件
  - shims-vue.d.ts
```

我最终的目的就是打包这堆东西，最后能在浏览器上面跑起来。

### 1.html

首先我先实现只打包一个js文件然后将其放到html上，为什么要从这一步开始，因为一切的打包，最后我们在浏览器上面显示不出来，那都是徒劳的，所以我们先解决这一步。

将js插入html这个过程我找了三个plugin

* @rollup/plugin-html
* @web/rollup-plugin-html
* rollup-plugin-generate-html-template

那么这三个插件到底哪一个符合我的要求，我的选择是rollup-plugin-generate-html-template，我们接着往下看

1. [@rollup/plugin-html](https://github.com/rollup/plugins/tree/master/packages/html#readme)

   这个插件可以传这么一些属性

   ```
   export interface RollupHtmlOptions {
     title?: string;
     attributes?: Record<string, any>;
     fileName?: string;
     meta?: Record<string, any>[];
     publicPath?: string;
     template?: (templateoptions?: RollupHtmlTemplateOptions) => string;
   }
   ```

    虽然可以实现生成一个html，并且插入我们打包出来的js，但是他的template不是我想要的，没办法根据我们自己的html生成最后的html，毕竟我们使用vue的时候，html里面需要有个id为app的div节点。

2. [@web/rollup-plugin-html](https://modern-web.dev/docs/building/rollup-plugin-html/)

   ```
   html({
       input:path.resolve(__dirname, '../', './src/index.html')
   })
   ```

   这个插件只是单纯地把html拷贝，没办法插入js，所以也不是我想要的

3. [rollup-plugin-generate-html-template](https://github.com/bengsfort/rollup-plugin-generate-html-template)

   这个插件虽然用户量少，但是可以满足需求

   ```
   html({
     template: path.resolve(__dirname, '../', './src/index.html'),
   }),
   ```

每次打包的时候，rollup都不会帮我们删掉上次打包出来的dist文件

### 2.clear dist

```
import del from 'rollup-plugin-delete';

plugins: [
	del({ targets: 'dist/*' })
]
```

PS：这个一定要放在plugins的第一个，因为每次打包都要先删掉之前的dist

rollup-plugin-cleaner这个插件也许也可以实现一样的效果

### 3.引入第三方包、转译.vue/.tsx/.css/图片

```
import babel from '@rollup/plugin-babel';
// 用来告诉 Rollup 如何查找外部模块
import resolve from '@rollup/plugin-node-resolve';
// 用来将 CommonJS 转换成 ES2015 模块的
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import vuePlugin from 'rollup-plugin-vue';
import html from 'rollup-plugin-generate-html-template';
import del from 'rollup-plugin-delete';
const path = require('path');

export default {
  input: 'src/main.ts',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'bandleName',
  },
  plugins: [
    del({ targets: 'dist/*' }),
    vuePlugin(),
    typescript(),
    resolve(),
    commonjs(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      skipPreflightCheck: true,
      extensions: ['.ts', '.js', '.tsx'],
    }),
    url(),
    postcss({
      extensions: ['.css', '.less'],
      extract: 'index.css',
    }),
    html({
      template: path.resolve(__dirname, '../', './src/index.html'),
    }),
  ],
};

```

这里有几个需要注意的点：

1. vuePlugin要写在前面，要先把.vue文件转变成js或者ts，rollup才能进行下一步处理；
2. babel的extensions参数一定要有.tsx，不然代码里面jsx写法会报错；
3. 图片除了可以使用@rollup/plugin-url，还可以使用@rollup/plugin-image，图像使用 base64 编码，这意味着它们将比磁盘上的大小大 33%，这个其实是不合理的，会使我们的包变得很大；
4. typescript现在使用rollup-plugin-typescript2，这是对[原版](https://github.com/rollup/rollup-plugin-typescript/tree/v0.8.1) `rollup-plugin-typescript`的重写。

到这一步就可以成功打包了，但是当我们在浏览器打开html时，我们发现有报错

```
Uncaught ReferenceError: process is not defined
```

这时我们需要在vueplugin下面再加一个插件

```
import replace from 'rollup-plugin-replace';

plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser'),
    })
]
```

把 process.env.NODE_ENV这个替换掉。

### 4.babel配置文件

```
module.exports = {
  presets: [['@vue/cli-plugin-babel/preset']],
};
```

至此直接点击html文件就能跑起来了。

### 5.起一个服务/热更新

```
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

plugins:[
	// 热更新
	livereload({
      watch: ['dist'],
      verbose: false,
    }),
	// 服务
	serve({
      open: true, // 自动打开页面
      port: 8000,
      openPage: '/dist/index.html', // 打开的页面
      contentBase: '',
    })
]
```

### 6.优化

```
import { terser } from 'rollup-plugin-terser';
import strip from '@rollup/plugin-strip';

plugins:[
	// 放在html插件之前
	terser(),
	// 去掉代码中的console，debugger等
	strip(),
]
```

