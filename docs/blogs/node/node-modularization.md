# node模块化

关于node模块化，一个js文件就是一个模块。在node中，通过require()函数来引入外部的模块。

require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块。

这里的路径，如果使用相对路径，必须以.或者..开头。

```
require("module.js"); // 不能这么写
require("./module.js"); // 要这么写
```

现在加入我们有两个文件a.js和b.js

```
// a.js
console.log("我是A模块");
var x = 10;
var y = 20;

// b.js
require("./a.js");
console.log(x);
```

此时运行b.js会报错x is not defined。

这是为何？

使用require()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块。既然这么说，那我们换一种方式在b文件里面获取a文件的x。

```
var md = require("./a.js");
console.log(md.x); // 这里会输出undefined
```

为啥这里获取不到x的值呢，我们看看md是啥……

```
console.log(md); // 这里会输出{}一个空对象
```

在node中，每一个js文件的js代码都是独立运行在一个函数中，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法直接访问。我们不要看着a.js里面写的是全局的代码，其实在node环境运行是相当于这样的。

```
(function () {
    console.log("我是A模块");
    var x = 10;
    var y = 20;
})()
```

这样x和y在全局肯定是找不到的。

但是这样的话，模块就没有意义了，如果说我们有些变量或者函数想让外部模块可以获取到，那应该怎么处理呢？

我们可以通过exports向外部暴露变量或者方法，只需要将需要暴露给外部的变量或方法设置为exports的属性即可。

```
// a.js
exports.x = 10;
exports.y = 10;

// b.js
const md = require("./a,js");
console.log(md); // {x:10,y:10}
```

我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块。

模块分为两大类

- 核心模块：由node引擎提供的模块（核心模块的标识就是模块的名字，比如require('fs')）
- 文件模块：由用户自己创建的模块（文件模块的标识就是文件的绝对路径或相对路径）

在node中没有window，但是它有一个全局变量global，它的作用和网页中window相似，在文件模块的全局中创建的变量都会作为global的属性保存，在文件模块的全局中创建的函数都会作为global的方法保存。

```
var a = 10;
console.log(global.a); // undefined
```

为了证明我们上述的说法，我们写了上面的代码来证明，但是却输出undefined，这是为何？

因为我们说了，其实上面这段代码是运行在一个函数里面，函数里面用var声明变量，就变成局部变量了，我们把var去掉，global.a就可以获取到了。

如果说这样还没有说服力，你说这些代码都是在一个函数里执行的那他就是啊？我们刚刚上面的代码只是证明了`var a= 10`是一个局部变量，但是并没有证明它外面有套一层函数啊。那么我们接下来就来证明。

有没有什么东西在函数里面有的，但是在全局作用域里面没有的。

arguments！！！

我们直接输出`console.log(arguments);`

 <Image :src="'/node/node-modularization/1.png'" />

 居然有5个实参。如果觉得还是不够具有说服力，那么我们能不能看到这个函数？

我们用arguments.callee来获取当前执行的函数对象

```
console.log(arguments.callee);
```

会输出

```
[Function (anonymous)]
```

我们为了能够看到这个函数长这么样，我们用空字符串拼接后输出

```
console.log(arguments.callee + "");

// function (exports, require, module, __filename, __dirname) {    
	console.log(arguments.callee + "");
}
```

这个就是函数的本体，这个是nodejs给我们加的，当node在执行模块中的代码时，它会首先在代码的最顶部添加如下代码

```
function (exports, require, module, __filename, __dirname) {
```

而且在最底部添加如下代码

```
}
```

而且由此我们可以看出exports和require都是从函数的形参来的。

函数有五个形参：

- exports

  该对象用来将变量或函数暴露到外部

- require

  函数，用来引入外部的模块

- module

  - 代表的是当前模块本身
  - exports就是module的属性`console.log(exports === modules.exports);`所以既可以用exports导出，也可以用modules.exports导出，那么他们有没有什么区别，我们待会说

- __filename

   当前模块的完整路径

- __dirname

  当前模块所在文件夹的路径

# exports与module.exports

```
// module1.js
exports.name = "曩昔";
exports.age = 5000;

// app1.js
var hello = require("./module1");
console.log(hello.name);
console.log(hello.age);

// module2.js
module.exports.name = "曩昔";
module.exports.age = 5000;

// app2.js
var hello = require("./module2");
console.log(hello.name);
console.log(hello.age);
```

效果是一样的，那么上面两种写法有什么区别。

假设我们觉得上面的写法很繁琐，我们可以改成

```
// module.js
module.exports = {
  name: "曩昔",
  age: 5000
}
```

这样在下面这段代码中

```
var module = require("./module");
console.log(module.name);
console.log(module.age);
```

也可以正常输出。

但是如果用

```
exports = {
  name: "曩昔",
  age: 5000
}
```

那么就报错了，module里面啥都取不到。

为什么module.exports就可以exports就不行？

上面写了那么多，其实我们本质上改的就是module.exports！！！

module.exports和exports的关系就像下面这个例子

```
var obj = {};
obj.a ={};
var a = obj.a;
// a和obj.a指向的是同一个对象
console.log(a === obj.a); //true
a.name ="曩昔";
console.log(obj.a.name);// 曩昔  因为a和obj.a指向同一个对象
// 如果此时我们给a赋值一个新的对象
a = {};
// 那么
console.log(obj.a.name); //曩昔
console.log(a.name);// undefined，因为a与obj.a的联系断了
```

所以，exports和module.exports的区别是

- 通过exports只能使用.的方式来向外暴露内部函数

  exports.xxx = xxx;

- 而module.exports既可以通过.的形式，也可以直接赋值

  ```
  module.exports.xxx = xxx;
  module.exports = {};
  ```

  