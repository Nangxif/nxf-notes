# Webpack5性能优化

## 一、分析打包数据

### 1、日志美化

friendly-errors-webpack-plugin可以识别某些类别的webpack错误，并清理，聚合和优先级，以提供更好的开发人员体验

friendly-errors-webpack-plugin  node-notifier

### 2、速度分析

speed-measure-webpack5-plugin可以分析打包速度

## 二、文件体积监控

webpack-bundle-analyzer是一个webpack插件，需要配合webpack和webpack-cli一起使用，这个插件的功能是生成代码分析报告，帮助提升代码质量和网站性能

它可以直观分析打包出的文件包含哪些，大小占比如何，模块包含关系，依赖想，文件是否重复，压缩后大小如何，针对这些，我们可以进行文件分割等操作

## 三、编译时间优化

* 减少要处理的文件

* 缩小查找的范围

### 1、缩小查找范围

#### （1）extensions

指定extensions之后不可以用在require或是import的时候加文件拓展名

查找的时候会依次尝试添加拓展名进行匹配

```javascript
resolve: {
	extensions: [".js", ".jsx", ".json"]
}
```

#### （2）alias

配置别名可以加快webpack查找模块的速度

每当引入bootstrap模块的时候，它会直接引入bootstrap，而不需要从node_modules文件夹中按模块的查找规则查找

```javascript
resolve: {
  alias: {
    bootstrap: path.resolve(__dirname, "node_modules/bootstrap/dist/css/bootstrap.css")
  }
}
```

#### （3）modules

* 对于直接声明依赖名的模块，webpack会使用类似Node.js一样进行路径搜索，搜索node_modules目录

* 如果可以确定项目内所有的第三方依赖模块都是在项目根目录下的node_modules中的话可以直接指定

* 默认配置

  ```javascript
  resolve: {
  	modules: ["node_modules"]
  }
  
  // 也可以这么设置，先找c盘的，再找当前项目的
  resolve: {
  	modules: ["c:/node_modules", "node_modules"]
  }
  ```

#### （4）mainFields

默认情况下package.json文件则按照文件中main字段的文件名来查找文件

```javascript
resolve: {
	// 配置target === 'web' 或者target === 'webworker'时mainFields默认值是
  mainFields: ['bowser', 'module', 'main'],
  // target的值为其他时，mainFields默认值为
  mainFields: ['module', 'main'],
  // 如果找不到mainFields的话，会找索引文件，index.js
  mainFile: ["index"]
}
```

#### （5）oneOf

每个文件对于rules中的所有规则都会遍历一遍，如果使用oneOf就可以解决问题，只要能匹配一个即可退出

在oneOf中不能两个匹配处理同一种类型文件

#### （6）external

如果我们想引用一个库，但是又不想让webpack打包，并且又影响我们在程序中以CMD，AMD或者window/global全局等方式进行使用，那就可以配置externals

#### （7）resolveLoader

如果我们自己写了一个loader，但是没有发布到npm市场，那么我们可以用这个属性进行loader包的查找，不然打包会报错

```
Can't resolve 'xxx-loader' in xxx
```

```javascript
// loaders/logger-loader.js
function loader(source) {
  return source;
}
module.exports = loader;
// webpack.config.js
resolveLoader: {
  modules: [path.resolve(__dirname, "loaders")]
}
```

### 2、noParse

* Module.noParse字段，可以用于配置哪些模块文件等内容不需要进行解析
* 不需要解析依赖（即无依赖）的第三方大型类库等，可以通过这个字段来配置，以提高整体的构建速度
* 使用noParse进行忽略模块文件中不能使用import，require等语法

```
module: {
	// 如果模块的路径匹配此正则的话，就不需要对这些文件进行解析，也不能出现require import这种导入包的方式，不然会出错
	noParse: /title.js/,
}
```

### 3、IgnorePlugin

* Ignore-plugin用于忽略某些特定的模块，让webpack不把这些指定的模块打包进去
* requestRegExp匹配资源请求路径的正则表达式
* contextRegExp（可选）匹配资源上下文（目录）的正则表达式
* moment会将所有本地化内容和核心功能一起打包，你可以使用IgnorePlugin在打包时忽略本地化内容

```
plugins: [
	new webpack.IgnorePlugin({
		resourceRegExp: /^\.\/locale$/, // 资源正则
		contextRegExp: /moment$/, // 上下文，目录正则
	})
]
```

### 4、thread-loader（多进程）

* 把thread-loader放置在其他loader之前，放置在这个loader之后的loader就会在一个单独的workder池（work pool）中运行
* include表示哪些目录中的.js文件需要进行babel-loader
* exclude表示哪些目录中的.js文件不需要进行babel-loader
* exclude的优先级高于include，尽量避免exclue，更倾向于使用include

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      use: [
        // 不要轻易使用，因为开启线程池都需要时间
        {
          loader: 'thread-loader',
          options: {
            // 一般开启的线程数量是当前电脑的核数减一
            workers: 3
          },
        },
        'babel-loader'
      ]
    }
  ]
}
```

### 5、利用缓存

#### （1）babel-loader

* Babel在转译js文件过程中消耗性能较高，将babel-loader执行的结果缓存起来，当重新打包构建时，会尝试读取缓存，从而提高打包构建速度，降低消耗
* 默认存放位置是node_modules/.cache/babel-loader

```javascript
{
	loader: 'babel-loader',
	options: {
		cacheDirectory: true
	}
}
```

#### （2）cache-loader

* 在一些性能开销较大的cache-loader之前添加此loader，可以将结果缓存在磁盘中
* 默认存放的位置是node_modules/.cache/cache-loader

```javascript
{
  test: /\.css$/,
  use: [
    "cache-loader",
    "style-loader",
    "css-loader"
  ]
}
```

（3）hard-source-webpack-plugin

* HardSourceWebpackPlugin为模块提供了中间缓存，缓存默认存放的路径是node_modules/.cache/hard-souce
* 配置hard-source-webpack-plugin后，首次构建时间并不会有太大变化，但是从第二次开始，构建时间大约可以减少80%
* webpack5中已经内置了模块缓存，不需要再使用此插件

## 四、编译体积优化

### 1、压缩js、css、HTML和图片

* optimize-css-assets-webpack-plugin是一个优化和压缩css资源的插件
* terser-webpack-plugin是一个优化和压缩js资源的插件
* image-webpack-loader可以帮助我们对图片进行压缩和优化

```javascript
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = reuqire('terser-webpack-plugin');


{
  test: /\.(jpg|png|gif|bmp)$/,
  use: [
    {
      loader: "image-webpack-loader",
      options: {
        mozjpeg: {
          progressive: true,
        },
        optipng: {
          enabled: false
        },
        pngquant: {
          quality: [0.65, 0.90],
          speed: 4
        },
        gifsicle: {
          interlaced: false
        },
        webp: {
          quality: 75
        }
      }
    }
  ]
}
optimization: {
  minimize: true, // 开始最小化
  minimizer: [
    new TerserPlugin(); // 压缩js
  ]
}
plugins: [
  // 压缩HTML
  new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {
      // 去掉空格
      collapseWhitespece: true,
      // 去掉注释
      removeComments: true
    }
  }),
  // 压缩css
  new OptimizeCssAssetsWebpackPlugin()
]
```

#### 2、清除无用的css

* purgecss-webpack-plugin和mini-css-extract-plugins单独提取css并清除用不到的css