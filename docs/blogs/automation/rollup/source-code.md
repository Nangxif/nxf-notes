# 实现一个简单的rollup

## 一、前置知识

### 1.涉及到的库

```
magic-string
acron
```

### 2.magic-string

Magic-string是一个操作字符串和生成source-map的工具

```
var MagicString = require('magic-string');
var magicString = new MagicString("export var name = 'nangxi'");
// 返回magicString的克隆，删除原始字符串开头和结尾字符之前的所有内容，截取0-6的字符，类似于subString
console.log(magicString.snip(0,6).toString());
// 从开始到结束删除字符，删除0-7的字符
console.log(magicString.remove(0,7).toString());
// 使用MagicString.Bundle可以联合多个源代码
let bundleString = new MagicString.Bundle();
bundleString.addSource({
	content: 'var a = 1;',
	separator: '\n'
})
bundleString.addSource({
	content: 'var b = 2;',
	separator: '\n'
})
console.log(bundleString.toString());
```

### 3.AST

通过Javascript Parser（Acron）可以把代码转化为一棵抽象语法树AST，这棵树定义了代码的结构，我们可以精准定位到声明语句，赋值语句，运算语句等等，实现对代码的分析、优化和变更等操作。

AST工作流

* Parsse（解析）将源代码转换成抽象语法树，树上有很多的estree节点
* Transform（转换）对抽象语法树进行转换
* Generate（代码生成）将上一步经过转换的抽象语法树生成新的代码

### 4.作用域

* 在js中，作用域是用来规定变量访问范围的规则
* 作用域链是由当前执行环境与上层执行环境的一系列变量对象组成的，它保证了当前执行环境对符合访问权限的变量和函数的有序访问

### 5.scope.js