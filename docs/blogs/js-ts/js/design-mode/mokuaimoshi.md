# 模式十三——模块模式

> 模块化模式最初被定义为在传统软件工程中为类提供私有和公共封装的一种方法。
>
> 能够使一个单独的对象已拥有公共/私有的方法和变量，从而屏蔽来自全局作用域的特殊部分。这可以减少我们的函数名与页面中其他脚本区域内定义的函数名冲突的可能性。
>

### 1.闭包

```
var testModule = (function(){
	var count = 0;
	return {
		increment() {
			return ++count;
		},
		reset() {
			count = 0;
		},
		decrement() {
			return --count;
		}
	}
})()
```

### 2.ES6模块化

```
export default {
	name: "moduleA",
	test() {
		return "test"
	}
}

<script>
	import moduleA from './1.js';
	console.log(moduleA);
</script>
```

module模式使用了闭包封装“私有”状态和组织，它提供了一种包装混合公有/私有方法和变量的方式，防止其泄露至全局作用域，并与别的开发人员的接口发生冲突。通过该模式，只需要返回一个公有的API，而其他的一切则都维持在私有闭包里。