# 模式十——代理模式

代理模式（Proxy），为其他对象提供一种代理以控制对这个对象的访问。

代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象：文件，资源，内存中的对象，或者是一些难以复制的东西。

我们来举个例子，比如明星是不可以自己接戏的，需要经纪人跟对方公司谈妥了，低于某个价格，不能接，高于某个价格才能接。

```
class Star {
	play() {
		console.log("演戏");
	}
}

class StarProxy {
	constructor() {
		this.superStar = new Star();
	}
	talk(price) {
		if(price >= 1000) {
			this.superStar.play();
		}else {
			throw new Error("价钱不合适");
		}
	}
}

let jr = new StarProxy();
jr.talk(1000);
```

代理模式并不是说要限制我们去访问源对象，而仅仅是代理的功能。

对于这种模式，后来ES6提供了一个新的api可以供我们实现这种模式，也就是Proxy，包括vue3都是使用这个api。

```
var star = {
	name: "nangxi",
	workprice: 1000
};
let proxy = new Proxy(star, {
	get(target, key) {
		if(key === "workprice") {
			console.log("访问了");
		}
		return target[key];
	},
	set(target, key, value) {
		if(key === "workprice") {
			console.log("设置了");
			if(value > 1000) {
				console.log("可以合作");
			} else {
				throw new Error("价钱不合适");
			}
		}
	}
});

proxy.workprice = 1000;
```

接下来我们简单实现一个vue的响应式

```
<div id="box"></div>
let vueObj = {};
let proxy = new Proxy(vueObj, {
	get(target, key) {
		console.log("get", target[key]);
		return target[key];
	}
	set(target, key, value) {
		console.log("set", target, key, value);
		if(key === "data") {
			box.innerHTML = value;
		}
		target[key] = value;
	}
});
vueObj.data = "222";
```

