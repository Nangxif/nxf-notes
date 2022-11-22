# 模式四——抽象工厂模式

抽象工厂模式并不直接生成实例，而是用于对产品类簇的创建。

```
class User {
	constructor(name) {
		this.name = name;
	}
	welcome() {
		console.log("欢迎回来",this.name);
	}
	dataShow() {
		throw new Error("抽象方法不允许直接调用");
	}
}
class Editor extend User {
	constructor(name) {
		super(name);
		this.role = "editor";
		this.pages = ["home", "news-manage"];
	}
	dataShow() {
	
	}
}
```

