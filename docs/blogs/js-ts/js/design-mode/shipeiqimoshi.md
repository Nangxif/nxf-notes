# 模式八——适配器模式

将一个类的接口转换成客户希望的另一个接口。适配器模式让那些不兼容的类可以一起工作。

下面的例子，腾讯地图和百度地图渲染的方法不一样，如果在同一个项目里面，不同的开发者分别使用了这两个地图的api，但是如果稍不留神，比如A开发在百度地图使用了show方法（之所以使用show方法是因为腾讯地图就是这么调用了），那么这个方法会因为找不到而报错。那么为了适配，我们就需要写个适配器，让百度地图也能调用show方法。

```
class TencentMap {
	show() {
		console.log("开始渲染腾讯地图");
	}
}
class BaiduMap {
	display() {
		console.log("开始渲染百度地图");
	}
}
class BaiduMapAdapter extends BaiduMap {
	constructor() {
		super();
	}
	show() {
		this.display();
	}
}
```

