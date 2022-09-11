# 自定义postcss插件

最近在搭建一个umi移动端的项目，本来打算用@alitajs/hd这种适配方案，也就是把px单位转换成rem单位。其实我不太喜欢rem单位的适配方案，因为这个方案还不能很完美的适配每一种移动端机型，我想要的适配方案，是可以跟图片一样的，等比例放大，等比例缩小，目前来说，vw这种单位的适配方案，是最合适的。

这个项目是用less写的，所以我用的方法是

1.less定义一个变量@vw: 1/375 * 100vw;，

2.使用的时候width: 100 * @vw;

但是每个单位都用* @vw来写的话，感觉很麻烦，所以我打算写一个postcss插件，来替代我做这些事。

查了好多文档，好像postcss到版本8的时候plugin的写法都不一样了

因为我的umi项目用的postcss版本还没有升级到8+，所以我这里先用8以下的版本写一个插件，再用8以上的版本写一个插件，在此把整个开发包括联调测试的流程记录下来。

postcss8支持新版本的写法和老版本的插件写法，但是postcss7及以下版本不支持使用新版本写法的插件，会提示需要使用postcss8

Error: PostCSS plugin postcss-px-to-vw requires PostCSS 8.

## 一、开发环境搭建

因为打包过程用的是commonjs，所以我们的插件用module.exports来暴露

我打算创建一个项目，写一个8以下版本的插件（以下为了方便统称v7）和一个8版本的插件（以下为了方便统称v8），然后我们来看一下有什么区别

项目目录：


```js
--postcss-demo
----plugins
------v7
------v8
----v7-test
----v8-test
```

plugins文件夹里面有v7和v8两个版本的插件，v7-test和v8-test分别用的postcss版本是7和8

初始化v7插件项目


```js
npm init -y
npm i postcss@7.0.39
```

然后把package.json里面的main指向同级目录下的index.js文件

v8版本插件的创建流程同上，只是把postcss安装命令改成


```js
npm i postcss@next
```

然后选择自己想要的8以上版本，我用的是8.3.11

初始化v7测试项目（v8测试项目与v7创建流程相同，只是v7版本的postcss-loader版本为4.3.0，v8的postcss-loader版本为6.2.0）

webpack.config.js配置文件v7-test与v8-test基本相同


```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PostcssPluginPxToVw7 = require('postcss-plugin-px-to-vw7');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: "production",
  entry: path.join(__dirname, './src/index.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: './js/[name].[contenthash:5].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [PostcssPluginPxToVw7()],
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
    new CleanWebpackPlugin()
  ],
};
```

test项目主要目的就是把css通过postcss-plugin转译之后打包成独立的css文件然后引入html文件，我们验证自己写的插件是否生效的方法就是查看打包之后的dist文件夹里面css文件的px单位是否被转换成vw单位。

## 二、插件编写

### 1.v8以下版本写法


```js
const postcss = require('postcss');
function pxtovw(data) {
  const transformData = Number(data.slice(0, -2));
  return `${transformData * (1 / 375) * 100}vw`;
}
module.exports = postcss.plugin('postcss-px-to-vw', (opts) => {
  return (root) => {
    root.walkRules((rule) => {
      rule.walkDecls(function (decl, i) {
        if (/\d+px/g.test(decl.value)) {
          const transformData = decl.value.split(/\s+/);
          const targetText = transformData.reduce((total, cur) => {
            if (/\d+px/g.test(cur)) {
              return `${total} ${pxtovw(cur)}`;
            } else {
              return `${total} ${cur}`;
            }
          }, '');
          decl.value = targetText;
        }
      });
    });
  };
});

```

### 2.v8写法


```js
function pxtovw(data) {
  const transformData = Number(data.slice(0, -2));
  return `${transformData * (1 / 375) * 100}vw`;
}
module.exports = (options = {}) => {
  return {
    postcssPlugin: 'postcss-px-to-vw',
    Declaration(decl) {
      if (/\d+px/g.test(decl.value)) {
        const transformData = decl.value.split(/\s+/);
        const targetText = transformData.reduce((total, cur) => {
          if (/\d+px/g.test(cur)) {
            return `${total} ${pxtovw(cur)}`;
          } else {
            return `${total} ${cur}`;
          }
        }, '');
        decl.value = targetText;
      }
    },
  };
};
module.exports.postcss = true;

```
PS：一开始我是用参考链接提供的
```
 module.exports = {
    postcssPlugin: 'postcss-dark-theme-class',
    Once (root) {}
}
```
进行插件的封装，但是在运行的时候一直报错*** is not a function，其实静下心来想，postcss-loader在使用插件的时候，如果插件需要传参，一般都会采用


```js
{
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [['postcss-plugin-px-to-vw8',{传给插件的参数}]],
      },
    },
}
```

或者是

```js
const PostcssPluginPxToVw8 = require('postcss-plugin-px-to-vw8');
{
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [PostcssPluginPxToVw8(传给插件的参数)],
      },
    },
}
```

所以暴露出来的必须是一个可以接收参数的函数，而不是一个对象

因此改为


```js
module.exports = (options = {}) => {
  return {
    postcssPlugin: 'postcss-px-to-vw',
    Declaration(decl) {}
  }
}
module.exports.postcss = true;
```
## 三、插件调试

以v7插件调试为例

在plugins/v7里面输入命令行

```js
npm link
```
在全局的node_modules目录下创建一个postcss-plugin-px-to-vw7插件的映射

v7-test项目里面运行

```js
npm link postcss-plugin-px-to-vw7
```
链接上v7插件的那个映射，这样直接在webpack.config.js项目里面可以直接通过require('postcss-plugin-px-to-vw7')的方式导入插件，甚至在postcss-loader里面用['postcss-plugin-px-to-vw7']的方式使用插件

最后查看打包出来的/dist/css下的文件的px单位是否已经被转换

## 四、参考链接

https://www.w3ctech.com/topic/2226

项目仓库：https://github.com/Nangxif/postcss-demo


