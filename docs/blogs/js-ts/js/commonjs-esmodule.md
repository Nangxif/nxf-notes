# CommonJS和ESModule的区别

参考链接：https://juejin.cn/post/6844904067651600391#heading-0

1. CommonJS模块输出的是一个值的拷贝，ES6 模块输出的是值的引用;

2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口

   CommonJS其实加载的是一个对象，这个对象只有在脚本运行时才会生成，而且只会生成一次，这个后面我们会具体解释。但是ES6模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成，这样我们就可以使用各种工具对JS模块进行依赖分析，优化代码，而Webpack中的 `tree shaking` 和 `scope hoisting` 实际上就是依赖ES6模块化。

   因此我们常说CommonJS是动态的，ESModule是静态的。动态是指对于模块的依赖关系建立在代码执行阶段， 静态是指对于模块的依赖关系建立在代码编译阶段。

   CommonJS是一种用于服务器端JavaScript（最初用于Node.js）的模块系统，它是动态的。在CommonJS中，模块是在运行时同步加载的。这意味着你可以根据条件动态地要求（require）模块，例如：

   ```javascript
   if (someCondition) {
     const myModule = require('myModule');
   }
   ```

   由于模块是在代码执行时加载的，因此你可以在代码的任何地方导入模块，甚至可以在函数内部导入。

   当然，下面这么写也不会报错

   ```javascript
   // a1.js
   const a = 2;
   module.exports = a;
   
   // index.js
   const index = 1;
   const a = require('./a' + index + '.js');
   console.log(a);
   ```

   ES Modules (ESM) 是ECMAScript标准的官方模块系统，它是静态的。在ES Modules中，模块关系必须在解析时确定，不能在运行时改变。这意味着你必须在模块的顶层使用`import`和`export`语句，例如：

   ```javascript
   import myModule from 'myModule';
   ```

   由于ESM是静态的，你不能在条件语句中导入模块，也不能在函数内部导入。这种静态结构使得工具（如打包器和静态分析工具）能够在代码执行之前分析模块依赖关系，进行树摇（tree-shaking）以移除未使用的代码，或者进行代码拆分（code splitting）。

3. 关于模块顶层的`this`指向问题，在CommonJS顶层，`this`指向当前模块；而在ES6模块中，`this`指向`undefined`；

4. 关于两个模块互相引用的问题，在ES6模块当中，是支持加载**CommonJS**模块的。但是反过来，**CommonJS**并不能`require`ES6模块，在NodeJS中，两种模块方案是分开处理的。