# 模式十一——观察者模式

观察者模式包含观察目标和观察者两类对象，

一个目标可以有任意数目的与之相依赖的观察者。

一旦观察目标的状态发生改变，所有的观察者都将得到通知。

当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新，解决了主体对象与观察者之间功能的耦合，即一个对象状态改变给其他对象通知的问题。

```
class Sub {
	constructor() {
		this.observers = [];
	}
	add(observer) {
		this.observers.push(observer);
	}
	// 如果不想观察了，那么也可以取消观察
	remove(observer) {
		this.observers = this.observers.filter(item => item !== observer);
	}
	notify() {
		this.observers.forEach(item => {
			item.update();
		})
	}
}
class Observer {
	// 可以给这个观察者定义一个名字方便区分
	constructor(name) {
		this.name = name;
	}
	update() {
		console.log("update", this.name);
	}
}
const subject = new Subject();
const observer1 = new Observer("nangxi1");
const observer2 = new Observer("nangxi2");

subject.add(observer1);
subject.add(observer2);
// 只要subject这个主体对象有任何风吹草动，也就是调用了notify，那么就可以调用所有的观察者的update方法，这样观察者就得到一个通知了
```

上面的观察者模式是最基本的一套写法。

接下来我们用一个例子来实践一下，比如现在有个后台管理系统，菜单栏有首页、用户管理、权限管理、新闻管理这几个模块，点击相应模块会在内容区显示面包屑。

```
<header class="header">
	<!-- 这里用来显示路径信息 -->
</header>
<div class="box">
	<div class="left">
		<ul>
			<li>首页</li>
			<li>用户管理</li>
			<li>权限管理</li>
			<li>新闻管理</li>
		</ul>	
	</div>
	
	<div class="right">
		<div class="bread"></div>
	</div>
</div>


class Sub {
	constructor() {
		this.observers = [];
	}
	add(observer) {
		this.observers.push(observer);
	}
	remove(observer) {
		this.observers = this.observers.filter(item => item !== observer);
	}
	notify(data) {
		this.observers.forEach(item => {
			item.update(data);
		})
	}
}
class Observer {
	// 可以给这个观察者定义一个名字方便区分
	constructor(name) {
		this.el = document.querySelector(name);
	}
	update(data) {
		this.el.innerHTML = data;
	}
}
const subject = new Subject();
const observer1 = new Observer(".bread");
const observer2 = new Observer(".header");

subject.add(observer1);
subject.add(observer2);

let oli = document.querySelectorAll(".left li");
for(let i = 0;i < oli.length;i++) {
	oli[i].onclick = function() {
		subject.notify(this.innerHTML);
	}
}
```

优势：目标者与观察者，功能耦合度降低，专注于自身的功能逻辑；观察者被动接收更新，时间上解耦，实时接收目标者更新状态。

缺点：观察者模式虽然实现了对象间依赖关系的低耦合，但却不能对事件通知进行细分管控，如筛选通知，指定主题事件通知。

这个不能细分管控是什么意思呢？

比如上面侧边栏的例子。如果我们现在要在mouseover的时候也要触发，但是我们这种观察者模式，在这一步并不能做事件管控

```
for(let i = 0;i < oli.length;i++) {
	oli[i].onclick = function() {
		subject.notify(this.innerHTML);
	}
}
```

也就是说我们要想触发，就一个notify，notify之后就调用它的update，那有人说了，我可以在观察者和目标者之间多加update1，notify1还需要的话再加update2，notify2，这样耦合度又变高了，因此才说没办法进行细分管控。

因此才衍生出了发布订阅模式，观察者模式和下一节的发布订阅模式极为相似。所以其实也可以认为发布订阅模式是为了解决观察者模式这种弊端而出现的一种设计模式，或者也可以说是解耦之后的观察者模式。