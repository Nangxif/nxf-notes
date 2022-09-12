# webpack打包vue3

我们用webpack5+pnpm来打包vue3

## 一、项目目录

```
- scripts
  - webpack.config.dev.js
  - webpack.config.base.js
  - webpack.config.prod.js
- src
- babel.config.js
- package.json
- pnpm-lock.yaml
- tsconfig.json
```

PS：因为我们一个项目肯定会分成开发和发布，所以我们将webpack.config.base.js配置拆分成prod和dev版本的配置，公有配置都放置于webpack.config.base.js。

## 二、详细配置

### 1.开发时

`webpack.config.dev.js`

```
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
  },
  cache: {
    type: 'filesystem',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
```

### 2.打包时

`webpack.config.prod.js`

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      //创建插件的实例对象
      template: './src/index.html', //指定要用到的模板文件，会自动引入打包后的资源
      filename: 'index.html', //指定生成的文件的名称，该文件存在于内存中，在目录中不显示
      minify: {
        //可以减少打包后html一些体积的操作
        removeAttributeQuotes: true, //是否去掉html里面的可以去掉的双引号
        collapseWhitespace: true, //移除空格，生成的html变成一行
        removeComments: true, //移除注释
      },
      hash: true, //生成的html里面引入的入口文件是否有hash戳eg：bandle.js?hash戳
    }),
  ],
};
```

### 3.基础配置

`webpack.config.base.js`

```
const path = require('path');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackBar = require('webpackbar');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const prodWebpackConfig = require('./webpack.config.prod');
const devWebpackConfig = require('./webpack.config.dev');

const mergeConfig =
  process.env.NODE_ENV === 'production' ? prodWebpackConfig : devWebpackConfig;
module.exports = merge(
  {
    entry: path.join(__dirname, '../src/main.ts'),
    output: {
      path: path.join(__dirname, '../dist'),
      filename: './js/[name].[contenthash:5].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                happyPackMode: false,
                appendTsSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader',
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.less$/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            'postcss-loader',
            'less-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext][query]',
          },
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ],
    },
    resolve: {
      extensions: [
        '.tsx',
        '.ts',
        '.mjs',
        '.js',
        '.jsx',
        '.vue',
        '.json',
        '.wasm',
      ],
      alias: {
        '@': path.join(__dirname, '../src'),
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/main.css',
      }),
      new OptimizeCssAssetsWebpackPlugin(),
      new VueLoaderPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new WebpackBar({
        color: '#85d', // 默认green，进度条颜色支持HEX
        basic: false, // 默认true，启用一个简单的日志报告器
        profile: false, // 默认false，启用探查器。
      }),
    ],
  },
  mergeConfig
);
```

### 4.babel配置

`babel.config.js`

```
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
};
```

### 5.ts配置

`tsconfig.json`

```
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "useDefineForClassFields": true,
    "noImplicitAny": false,
    "sourceMap": true,
    "baseUrl": ".",
    "types": [
      "webpack-env"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

### 6.scripts运行命令

```
"scripts": {
    "dev": "cross-env NODE_ENV=development webpack serve  --config ./script/webpack.config.base.js",
    "build": "cross-env NODE_ENV=production webpack --config ./script/webpack.config.base.js"
  },
```

## 三、需注意的点

### 1.类型声明

`因为我们使用了<script lang="ts">`，所以为了ts能够兼容vue文件，我们需要在src`目录下创建一个shims-vue.d.ts`文件，内容如下

```
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
```

### 2.当style拥有scoped

如果vue文件里面的style使用了scoped，css样式域的写法，`我们需要将原来的MiniCssExtractPlugin.loader`换成`vue-style-loader`

### 3.图片类型的loader

图片类型的loader在webpack5已经被内置了，采用`asset/resource`

### 4.记得在resolve添加后缀自动补齐的配置

```
extensions: [
    '.tsx',
    '.ts',
    '.mjs',
    '.js',
    '.jsx',
    '.vue',
    '.json',
    '.wasm',
]
```

### 5.解析vue文件

解析vue文件除了需要`vue-loader`之外还需要一个plugin

```
{
  test: /\.vue$/,
  exclude: /node_modules/,
  loader: 'vue-loader',
}
```

```
const { VueLoaderPlugin } = require('vue-loader');
plugins: [
	new VueLoaderPlugin()
]
```

### 6.webpack转译Typescript

webpack转译Typescript现有方案

| 进程                                   |                                                              |                                                 |                                        |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------- | -------------------------------------- |
| 单进程方案(类型检查和转译在同一个进程) | ts-loader(transpileOnly为false)                              | awesome-typescript-loader                       |                                        |
| 多进程方案                             | ts-loader(transpileOnly为true) + fork-ts-checker-webpack-plugin | awesome-typescript-loader + 自带的CheckerPlugin | babel + fork-ts-checker-webpack-plugin |

综合考虑性能和扩展性，目前比较推荐的是`babel+fork-ts-checker-webpack-plugin`方案

用实例解释一下吧。

首先是单进程方案：

```
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use:{
          loader: 'ts-loader', // ? 单进程，只使用ts-loader进行'转译'和‘类型检查’
          options: {
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ]
}
```

单进程因为是同步所以webpack可以收集错误信息，并通过dev-server反馈到浏览器:

<img :src="$withBase('/automation/webpack/webpack-vue3/1.png')">

现在试试多进程方案：

```
module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use:{
          loader: 'ts-loader',
          options: {
            transpileOnly: true  // ? 关闭类型检查，即只进行转译
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({ // ? fork一个进程进行检查，并设置async为false，将错误信息反馈给webpack
      async: false,
      eslint: false
    })
  ]
}
```
Ok，同样可以工作:

<img :src="$withBase('/automation/webpack/webpack-vue3/2.png')">

对于babel还是atl，配置方式同理, 只是把ts-loader替换而已。

fork-ts-checker-webpack-plugin，顾名思义就是创建一个新进程，专门来运行Typescript类型检查。这么做的原因是为了利用多核资源来提升编译的速度. 所以大多数CLI都是这样子配置的：

```
addLoader({
      loader: 'ts-loader',
      options: {
        // ? 禁用Typescript类型检查，只做转译。这里面速度就可以很快了，因为转译不过是删除掉类型注释。
        // 现在ts-loader基本已经被babel(babel7支持Typescript)取代了
        transpileOnly: true,
        appendTsSuffixTo: ['\\.vue$'],
        // https://github.com/TypeStrong/ts-loader#happypackmode-boolean-defaultfalse
        happyPackMode: useThreads
      }
    })
    
    // ...
          config
        .plugin('fork-ts-checker')
          // ? 引进fork-ts-checker-webpack-plugin专门在一个进程中进行类型检查
          .use(require('fork-ts-checker-webpack-plugin'), [{
            vue: true,
            tslint: options.lintOnSave !== false && fs.existsSync(api.resolve('tslint.json')),
            formatter: 'codeframe',
            // https://github.com/TypeStrong/ts-loader#happypackmode-boolean-defaultfalse
            checkSyntacticErrors: useThreads
          }])
```

因为fork-ts-checker-webpack-plugin是在单独的进程跑的，**所以它的错误或警告信息是异步回传给到webpack进程的**。而当webpack自己处理完转译任务后，会将结果同步报告给浏览器去显示。将async设置为false后，就要求webpack等待fork-ts-checker-webpack-plugin进程返回信息。不过这样做也可能会拖慢整个webpack的转译等待时间。这就要看怎么选择了。

### 7.babel配置

用vue-cli创建的vue项目，我们可以发现他在预设里面只有一个预设配置

```
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"]
};
```

确实，我们自己搭建的项目只需要用这个就好了，这个里面就集成了包括

- @babel/core
- @vue/babel-preset-app
- babel-loader
- thread-loader

等等，而@vue/babel-preset-app又包含了

- @babel/core
-  @babel/helper-compilation-targets
- @babel/helper-module-imports
- @babel/plugin-proposal-class-properties
- @babel/plugin-proposal-decorators
- @babel/plugin-syntax-dynamic-import
- @babel/plugin-syntax-jsx
- @babel/plugin-transform-runtime
- @babel/preset-env
- @babel/runtime
- @vue/babel-plugin-jsx
-  @vue/babel-preset-jsx
- babel-plugin-dynamic-import-node
- core-js
- core-js-compat

其实我们大概可以猜到，这个预设已经把@babel/preset-env都给配置好了。

一开始想在vue里面用jsx的写法，查了很多资料都说用 @vue/babel-preset-jsx，还有的说用@vue/babel-plugin-jsx，害得我是一顿配置，其实不用配置了，@vue/cli-plugin-babel/preset里面都有。至于上面的@vue/babel-preset-jsx是用来干嘛的？

### 8.@vue/babel-preset-jsx

Vue JSX 插件的可配置预设。

此 repo 仅与 Babel 7.x 兼容，对于 6.x，请使用[vuejs/babel-plugin-transform-vue-jsx](https://github.com/vuejs/babel-plugin-transform-vue-jsx)

用法：

```
module.exports = {
  presets: [
    [
      '@vue/babel-preset-jsx',
      {
        vModel: false,
        compositionAPI: true,
      },
    ],
  ],
}
```

参数说明：

- `compositionAPI`- Enables @vue/babel-sugar-composition-api-inject-h and @vue/babel-sugar-composition-api-render-instance, support returning render function in `setup`.
  - The default value is `false`;
  - When set to `'auto'` (or `true`), it will detect the Vue version in the project. If it's >= 2.7, it will import the composition utilities from `vue`, otherwise from `@vue/composition-api`;
  - When set to `'native'` (or `'naruto'`), it will always import the composition utilities from `vue`
  - When set to `plugin`, it will always import the composition utilities from `@vue/composition-api`, but it will redirect to `'vue'` itself when the vue version is `2.7.x`
  - When set to `vue-demi`, it will always import the composition utilities from `vue-demi`
  - When set to an object like `{ importSource: string; }`, it will always import the composition utilities from the importSource you set
- `functional` [@vue/babel-sugar-functional-vue](https://npmmirror.com/package/@vue/babel-preset-jsx) - Functional components syntactic sugar
- `injectH` [@vue/babel-sugar-inject-h](https://npmmirror.com/package/@vue/babel-preset-jsx) - Automatic `h` injection syntactic sugar
- `vModel` [@vue/babel-sugar-v-model](https://npmmirror.com/package/@vue/babel-preset-jsx) - `vModel` syntactic sugar
- `vOn` [@vue/babel-sugar-v-on](https://npmmirror.com/package/@vue/babel-preset-jsx) - `vOn` syntactic sugar