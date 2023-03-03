# 模式四——抽象工厂模式

抽象工厂模式并不直接生成实例，而是用于对产品类簇的创建。

在模式三【工厂模式】里面我们举了一个侧边栏的例子，我们根据传入的内容，函数返回一个关键的User实例，但是这个真的够用的吗？光管理好侧边栏就够用了吗？我们在那个章节中，其实每个角色都是有首页这个权限的，但是方法里面的逻辑还不一样，所以我们就会发现，光有这个类是不够用的

```
function User(role, pages) {
	this.role = role;
	this.pages = pages;
	// 那在这里，他们都应该有一个数据可视化的方法，但是不用的方法，不用角色里面的逻辑还不太一样，所以我们就会发现，光在这个类里面写这些是不够用的，我们需要有一个数据可视化的方法，但是我们在这里写的方法是死的，如果说我们要把它写成每个页面里面的dataShow方法功能不一样的话，那么我们也可以给dataShow这个方法传参数，传page进去，然后再里面区分不同的page执行不同的逻辑。但是这个显然是不合理的，这样写代码太复杂，这就说明工厂模式已经不适用了。
	this.dataShow = function (){}
}
```

因此我们就引入了新的一种设计模式——抽象工厂模式

抽象工厂模式其实不生产水，它只是大自然的搬运工。

比如上面这个例子，我们就可以新建一个类User，然后我们基于这个类继承衍生分别创建出SuperAdmin，Admin，Editor这三个类，然后我们把pages放在User里面，把dateShow也放在User里面，然后在实现SuperAdmin，Admin，Editor这三个类的时候，将User类的dataShow方法进行重写，然后再针对不同的角色，单独对增加它们自己的逻辑。那么此时我们已经有三个类了，我们可以不可以根据不同的角色new出不同的类呢？当然可以这么做，但是我们依然要写一个方法，来管理这三个类，也就是说我们要写一个抽象的函数，这个函数只是返回你该用那个类，而不是直接把实例好的对象给你。所以它这里抽象的意思就是不直接生成一个具体的实例给你，只是根据这不同的产品类，给你返回这个类，让你自己去new，去传什么参数。

```
class User {
	constructor(name, role, pages) {
		this.name = name;
		this.role = role;
		this.pages = pages;
	}
	welcome() {
		console.log("欢迎回来",this.name);
	}
	dataShow() {
		// abstract在js中虽然保留了抽象这个关键字，但是却还没有抽象类这种东西，所以我们只能尽量去模拟
		throw new Error("抽象方法不允许直接调用");
	}
}
class SuperAdmin extend User {
	constructor(name) {
		super(name, "superadmin", ["home","user-manage","right-manage","news-manage"]);
	}
	dataShow() {
		console.log("superadmin-datashow");
	}
	// 添加权限
	addRight() {}
	// 添加用户
	addUser() {}
}
class Admin extend User {
	constructor(name) {
		super(name, "admin", ["home","user-manage","news-manage"]);
	}
	dataShow() {
		console.log("admin-datashow");
	}
	// 添加用户
	addUser() {}
}
class Editor extend User {
	constructor(name) {
		super(name, "editor", ["home","news-manage"]);
	}
	dataShow() {}
}
function getAbstractUserFactory(role) {
	switch(role) {
		case "superadmin":
			return SuperAdmin;
		case "admin":
			return Admin;
		case "editor":
			return Editor;
		dafault:
			throw new Error("参数错误");
	}
}
let UserClass = getAbstractUserFactory("superadmin");
let user = new UserClass("nangxi");
```

这种设计模式比之前的模式解耦多了，而且也很松散。