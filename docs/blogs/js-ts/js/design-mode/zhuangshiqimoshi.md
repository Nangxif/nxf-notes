# 模式七——装饰器模式

装饰器模式能够很好的对已有的功能进行拓展，这样不会更改原有的代码，对其他的业务产生影响，这方便我们在较少的改动下对软件的功能进行拓展。

```
Function.property.before = function(beforeFn) {
	var _this = this;
	return function() {
		beforeFn.apply(this, argument);
		return _this.apply(this, argument);
	}
}
Function.property.after = function(afterFn) {
	var _this = this;
	return function() {
		var ret = _this.apply(this, argument);
		afterFn.apply(this, argument);
		return ret;
	}
}

function test() {
	console.log("11111");
}
var test1 = test.before(()=>{
	console.log("00000");
}).after(()=> {
	console.log("22222");
})
```

这种模式有很多使用场景，比如ajax在请求之前，我们要修改header里面的参数，我们就可以在ajax请求之前注入这种逻辑，再比如我们进入一个网站要进行数据统计的时候，点击某个按钮要进行埋点统计，那么也可以通过这种设计模式注入逻辑。

我们这里举个例子来使用这种模式

这里我们实现点击某个按钮上传埋点数据。

```
function log() {
	console.log("上传pv,uv数据");
	// 写在这里也可以实现一样的效果，但是毕竟render逻辑不属于log
	// render();
}
function render() {
	console.log("页面处理逻辑");
}
render = render.before(log);
filmbtn.onclick = funciton() {
	render();
}
```

