# Babel相关

## 一、babel是什么
babel是一个JavaScript转换器

一些比较新颖的JavaScript语法无法在老旧的浏览器上面运行，所以babel可以把这些语法转换成旧版本浏览器可以执行的代码，简而言之

1. 语法转换
2. 通过polyfill方式在目标环境中添加缺失的属性（通过第三方polyfill模块，例如core-js等实现
3. 源码转换

## 二、babel如何配置
babel是通过配置文件进行配置的，eslint和prettier也有类似的配置文件分别为.eslintrc，.prettierrc

babel有babel.config.json和.babelrc.json

.babelrc.json这种方式和直接在package.json的babel字段直接设置的效果是一样的，只会影响本项目中的代码

babel.config.json会影响整个项目中的代码，包含node_modules中的代码

推荐使用babel.config.json格式配置文件

## 三、babel配置两个主要的的配置项plugin和preset
plugin和preset，这两者的区别是什么呢？

babel插件一般尽可能拆成小的力度，比如一个promise，或者一个weakmap的低版本浏览器兼容polyfill，都是被写成单独的一个插件，开发者可以按需引进，这样的好处显而易见，提高了性能，也提高了扩展性，但是我们在开发的时候，总没有办法说，我在项目代码里面到底有多少个新的js语法被使用，然后一个个的去引入polyfill吧。所以就出现了preset这种东西，有开发者发现了这个问题，所以就写了一些preset，可以理解为babel plugin的集合（也就是先把一些常用的plugin给你打包在一块了），现在市面上有好几种babel preset，他们可以大致满足不同的项目（vue的项目或者react的项目）需求

官方已经针对常用的环境编写了一些预设

* @babel/reset-env for compiling ES2015 + syntax
* @babel/preset-typescript for TypeScript
* @babel/preset-react for React
* @babel/preset-flow for Flow

## 四、plugin和preset的执行顺序
可以同时使用多个plugin和preset，此时，它们的执行顺序非常重要

1. 先执行完所有的plugin，再执行preset
2. 多个plugin，按照声明次序顺序执行
3. 多个preset，按照声明次序逆序执行

## 五、babel转译方案
### 1.@babel/preset-env+@babel/polyfill（升级前）
@babel/preset-env+@babel/polyfill可以完全实现ES基础语法的转译+新API的转译，这是配置babel转码的第一种方式

基本的语法转换，需要添加预设@babel/preset-env

①安装依赖包
```
yarn add @babel/preset-env -D
```
②添加配置
```
{
  "presets": [
    [
       "@babel/preset-env",
       {
         "modules": false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
       }
    ]
  ],
  "plugins": []
}
```
babel默认只转换新的JavaScript语法（@babel/preset-env默认只转换新的JavaScript语法，比如const和箭头函数,rest运算符），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

转译新的API，需要借助polyfill方案去解决，使用@babel/polyfill或@babel/plugin-transform-runtime，二选一即可。

@babel/polyfill还是@babel/plugin-transform-runtime?

本质上@babel/polyfill是core-js库的别名，随着core-js@3的更新，@babel/polyfill无法从2过度到3，所以@babel/polyfill已经被放弃，这里只是为了讲解，现在升级到core-js3后都不用这个@babel/polyfill

①安装依赖包
```
yarn add @babel/polyfill -S
```
②.babelrc 文件写上配置，@babel/polyfill 不用写入配置，会根据useBuiltIns参数去决定如何被调用。
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "modules": false,
        "corejs": 2, // 新版本的@babel/polyfill包含了core-js@2和core-js@3版本，所以需要声明版本，否则webpack运行时会报warning，此处暂时使用core-js@2版本（末尾会附上@core-js@3怎么用）
      }
    ]
  ]
}
```
③配置参数

(1)modules，"amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false，默认值是 auto。

用来转换 ES6 的模块语法。如果使用 false，将不会对文件的模块语法进行转化。

如果要使用 webpack 中的一些新特性，比如 tree shaking 和 sideEffects，就需要设置为 false，对 ES6 的模块文件不做转化，因为这些特性只对 ES6 的模块有效。

(2)useBuiltIns，"usage" | "entry" | false，默认值是 false。

false：需要在 js 代码第一行主动 import '@babel/polyfill'，会将@babel/polyfill 整个包全部导入。

（不推荐，能覆盖到所有 API 的转译，但体积最大）

(3)entry：需要在 js 代码第一行主动 import '@babel/polyfill'，会将 browserslist 环境不支持的所有垫片都导入。

（能够覆盖到‘hello‘.includes(‘h‘)这种句法，足够安全且代码体积不是特别大）

usage：项目里不用主动 import，会自动将代码里已使用到的、且 browserslist 环境不支持的垫片导入。

（但是检测不到‘hello‘.includes(‘h‘)这种句法，对这类原型链上的句法问题不会做转译，书写代码需注意）

其实学到这里的时候，我对useBuiltIns和corejs属性是有混淆的，corejs 参数仅仅是指定使用哪个版本的，并未导入。怎样导入，导入哪些，是否需要手动 import，由 useBuiltIns 参数决定。所以useBuiltIns为entry并且手动在文件里面导入@babel/polyfill的时候，corejs属性无论怎么设置都是没用的

core-js@3 的更新，带来了新的变化，@babel/polyfill 无法提供 core-js@2 向 core-js@3 过渡，所以现在有新的方案去替代 @babel/polyfill。需要 babel-loader 版本升级到 8.0.0 以上，@babel/core 版本升级到 7.4.0 及以上。

上面说到@babel/polyfill在升级之后已经被抛弃，现在@babel/polyfill 不必再安装，转而需要依靠 core-js 和 regenerator-runtime

在useBuiltIns为entry或者false的时候

安装依赖
```
yarn add core-js regenerator-runtime
```
js代码里取代原先的import '@babel/polyfill'，做如下修改：
```
import "core-js/stable"
import "regenerator-runtime/runtime"
```
### 2.@babel/preset-env + @babel/plugin-transform-runtime + @babel/runtime-corejs2
@babel/preset-env + @babel/plugin-transform-runtime 搭配使用，可以完成基本语法转译 + ES 新语法的按需加载，这是配置 Babel 转码的第二种方式。@babel/preset-env 也因 core-js@3 的原因，需要配置 corejs 参数去指定使用的corejs 版本，否则 webpack 运行时会报 warning

①安装依赖包
```
yarn add @babel/plugin-transform-runtime -D
```
PS：

(1)如果配置参数 corejs 未设置或为 false，需安装依赖@babel/runtime（这部分代码会被抽离并打包到应用 js 里，所以可以安装在 dependencies 里），仅对 es6 语法转译，而不对新 API 转译。
```
yarn add @babel/runtime
```
(2)如果配置参数 corejs 设置为 2，需安装依赖@babel/runtime-corejs2（同上，推荐安装在 dependencies 里。），对语法、新 API 都转译。
```
yarn add @babel/runtime-corejs2
```
(3)推荐使用corejs:2，但是，检测不到‘hello‘.includes(‘h‘)这种句法，所以存在一定隐患，书写代码时需注意。
(4)@babel/runtime 和 @babel/runtime-corejs2 这两个库唯一的区别是：corejs2 这个库增加了对 core-js（用来对 ES6 各个语法 polyfill 的库）这个库的依赖，所以在 corejs 为 false 的情况下，只能做语法的转换，并不能 polyfill 任何新 API。

②.babelrc 文件写上配置
```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2 // 推荐
      }
    ]
  ]
}
```
③配置参数

(1)corejs，默认值是 false，只对语法进行转换，不对新 API 进行处理；当设置为 2 的时候，需要安装@babel/runtime-corejs2，这时会对 api 进行处理。
(2)helpers，默认值是 true，用来开启是否使用 helper 函数来重写语法转换的函数。
(3)useESModules，默认值是 false，是否对文件使用 ES 的模块语法，使用 ES 的模块语法可以减少文件的大小。、

这种方式的升级方案直接把corejs的2改成3就可以了

## 六、@babel/polyfill和@babel/plugin-transform-runtime两种方案有什么区别
首先要确认，@babel/polyfill和@babel/plugin-transform-runtime各自都可以完成ES新API的转译，ES新语法只是由@babel/preset-env完成转译，所以@babel/polyfill、@babel/plugin-transform-runtime都需各自搭配@babel/preset-env一起使用。

到这不知道大家有没有发现一个问题，就是如果已经在preset 中使用core-js@3进行 polyfill，那么transform-runtime有没有必要安装@babel/runtime-corejs3开启corejs选项？core-js@3和@babel/runtime-corejs3有何差别？

已经在 @babel/preset-env 中配置了polyfill，那么你连 @babel/plugin-transform-runtime 都是不必要的（他们二者都可以提供ES新API的垫片，在这一项功能上是重复的。@babel/preset-env 除了提供 polyfill 垫片，还提供 ES 新语法的转译，这一点 @babel/plugin-transform-runtime 做不了；@babel/preset-env 提供的polyfill垫片会污染原型链，这个既是缺点，也是优点，缺点是在开发第三方 JS 库时不能这么干，会影响使用方的代码，优点是在开发自己的web应用时，一劳永逸，而 @babel/plugin-transform-runtime 不会污染原型链，且按需加载；@babel/preset-env 在提供 polyfill 垫片时，是既可以按需也可以不按需，取决于使用者怎么配置 useBuiltIns 参数及是否 import 了垫片），简单推荐一下：@babel/preset-env 可以搞定你的所有事情，配置 useBuiltIns 并按规则导入 polyfill，不必使用 @babel/plugin-transform-runtime；如果是开发 js 库，才用 @babel/plugin-transform-runtime，同时使用 @babel/preset-env 去转译语法，但不用它的 polyfill。

上面提到@babel/preset-env提供的polyfill垫片会污染原型链，@babel/plugin-transform-runtime不会，我做了一个实验

我直接用babel提供的@babel/cli编译js文件，用webpack+babel-loader打包出来的文件会大很多，因为webpack会重写require等导入导出方法

实验一：

我们直接用@babel/cli编译index.js文件
```
const a = new Promise((resolve) => {
  resolve();
}).then(() => {
  console.log(1);
});
class A {
  constructor() {}
  name() {}
}
```
配置为
```
{
    "presets": [],
    "plugins": []
}
```
编译后index.js文件没变，因为没有@babel/preset-env进行编译

实验二：

配置改为
```
{
    "presets": ["@babel/preset-env"],
    "plugins": []
}
```
编译出来是这样的
```
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var a = new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log(1);
});

var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "name",
    value: function name() {}
  }]);

  return A;
}();
```
因为@babel/preset-env进行语法编译了，所以箭头函数、const和class都被编译成ES5语法，但是没有使用polyfill进行新API的编译，所以promise就没有被编译

实验三：

配置改为
```
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ]
    ],
    "plugins": []
}
```
编译出来是这样的
```
"use strict";

require("core-js/modules/es.object.define-property.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var a = new Promise(function (resolve) {
  resolve();
}).then(function () {
  console.log(1);
});

var A = /*#__PURE__*/function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "name",
    value: function name() {}
  }]);

  return A;
}();
```
直接通过@babel/preset-env+polyfill编译出来的文件有下面两个问题：

1.promise用导入的es.promise.js重写了。babel 的 polyfill 机制是，对于例如 Array.from 等静态方法，直接在 global.Array 上添加；对于例如 includes 等实例方法，直接在 global.Array.prototype 上添加。这样直接修改了全局变量的原型，有可能会带来意想不到的问题。这个问题在开发第三方库的时候尤其重要，因为我们开发的第三方库修改了全局变量，有可能和另一个也修改了全局变量的第三方库发生冲突，或者和使用我们的第三方库的使用者发生冲突。公认的较好的编程范式中，也不鼓励直接修改全局变量、全局变量原型。

2.babel 转译 syntax 时，有时候会使用一些辅助的函数来帮忙转，例如我们用class方式写类的时候，babel 自定义了 _classCallCheck这个函数来辅助；typeof 则是直接重写了一遍，自定义了 _typeof 这个函数来辅助。这些函数叫做 helpers。从上图中可以看到，helper 直接在转译后的文件里被定义了一遍。如果一个项目中有100个文件，其中每个文件都写了一个 class，那么这个项目最终打包的产物里就会存在100个 _classCallCheck 函数，他们的长相和功能一模一样，这显然不合理。

实验四：

实验四可以完善上面说到的两个问题，因为@babel/plugin-transform-runtime不会污染原型链，同时它的配置项helpers属性可以解决多个文件多个helper的问题

配置改为
```
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 3,
                "helpers": true,
            }
        ],
    ]
}
```
编译出来是这样的
```
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));


var a = new _promise.default(function (resolve) {
  resolve();
}).then(function () {
  console.log(1);
});

var A = /*#__PURE__*/function () {
  function A() {
    (0, _classCallCheck2.default)(this, A);
  }

  (0, _createClass2.default)(A, [{
    key: "name",
    value: function name() {}
  }]);
  return A;
}();
```
从上面可以看到，在引入了 transform-runtime 这个插件后：

api 从之前的直接修改原型改为了从一个统一的模块中引入，避免了对全局变量及其原型的污染，解决了第一个问题
helpers 从之前的原地定义改为了从一个统一的模块中引入，使得打包的结果中每个 helper 只会存在一个，解决了第二个问题。

## 七、真实情况下如何抉择
如果不是开发库，可以干脆不装 @babel/plugin-transform-runtime 只使用 @babel/preset-env 就够了。那么如果是开发库，需要同时安装 @babel/plugin-transform-runtime 和 @babel/preset-env，但 polyfill 的事情交给 @babel/plugin-transform-runtime来处理。在开发库的时候不能直接只用@babel/cli转译文件，还需要配合webpack等打包工具，因为只用@babel/cli转译文件的话，编译出来的文件会有require或者类似import这种浏览器还无法执行的内置方法，打包工具在打包的时候会用闭包的形式重新实现这些方法，达到兼容。

​