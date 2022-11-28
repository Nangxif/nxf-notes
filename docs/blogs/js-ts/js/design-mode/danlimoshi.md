# 模式六——单例模式

1. 保证一个类仅有一个实例，并提供一个访问它的全局访问点（全局变量容易造成命名空间的污染，而且不小心又会被覆盖掉）；
2. 主要解决一个全局使用的类频繁地创建和销毁，占用内存 。

**ES5写法**

```
var Singleton = (function() {
	var instance;
	function User(name, age) {
		this.name = name;
		this.age = age;
	}
	return function(name, age) {
		if(!instance) {
			// 创建实例
			instance = new User(name, age);
		}
		return instance;
	}
})()

var a = Singleton("nangxi1", 100);
// 后面无论你再怎么改怎么传，返回的实例都是同一个a === b
var b = Singleton("nangxi2", 100);
```

**ES6写法**

```
class Singleton {
	constructor(name, age) {
		if(!Singleton.instance) {
			this.name = name;
			this.age = age;
			Singleton.instance = this;
		}
		return Singleton.instance;
	}
	// 这里可以写a方法b方法，但是new出来都只有一个实例
	a() {}
	b() {}
}

var a = new Singleton("nangxi1", 100);
// 后面无论你再怎么改怎么传，返回的实例都是同一个a === b
var b = new Singleton("nangxi2", 100);
```

redux和vuex都是单例模式，但是这些例子都比较遥远，我们找一个简单的例子。

我们用弹窗来举个例子，一般我们在同一时间只会弹出一个弹窗，那么这个弹窗就没必要多次创建了，用之前创建的那一个弹窗就可以了。

```
.modal {
	position:fixed;
	width:200px;
	height:300px;
	left: 50%;
	top: 50%;
	transform:translate(-50%,-50%);
	// 有人就说了，那我不能直接控制display的显示和隐藏吗？不管用不到，先创建出来，当然可以，但是这种做法还不够优化，如果我们用不上这个弹窗那不是浪费资源了吗？我们要实现的是动态创建，要的时候再创建
	display: none;
}

<div class="modal">
</div>
```

```
const Modal = (function() {
	let instance = null;
	return function() {
		if(!instance) {
			instance = document.createElement("div");
			instance.innerHTML = "弹窗";
			instance.className = "modal";
			instance.style.display = "none";
			document.body.appendChild(instance);
		}
		return instance
	}
})()

document.querySelector("#open").onclick = function() {
	const modal = Modal();
	modal.style.display = "block";
}
document.querySelector("#close").onclick = function() {
	const modal = Modal();
	modal.style.display = "none";
}
```

