# 模式十八——模板方法模式

> 模板方法模式由两部分组成，第一部分是抽象父类，第二部分是具体的实现子类。通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺序。子类通过继承这个抽象类，也绩承了整个算法结构，并且可以选择重写父类的方法。

```
var Container = function(param) {
	var render = function(list) {
		conosle.log("render-list", list);
	}
	var getData = param.getData || function() {
		throw new Error("必须传递getData方法");
	}
	var F = function() {}; //对象 类
	// 封装子类中所有方法的执行顺序
	F.prototype.init = async function() {
		let list = await getData();
		render(list);
	}
	return F;
}

var MyClass1 = Container({
	getData() {
		console.log("获取数据");
		return [1,2,3];
	}
})
new MyClass1().init();
var MyClass2 = Container({
	getData() {
		console.log("获取数据");
		return [4,5,6];
	}
})
new MyClass2().init();
```

