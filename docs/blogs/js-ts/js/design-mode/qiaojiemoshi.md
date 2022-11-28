# 模式十四——桥接模式

将抽象部分与它的实现部分分离，使他们都可以独立地变化。

使用场景：一个类存在两个或多个独立变化的维度，且这两个维度都需要进行拓展

**优点：**

把抽象与实现隔离开，有助于独立地管理各组成部分。

**缺点：**

每使用一个桥接元素都要增加一次函数调用，这对应用程序的性能会有一些负面影响——提高了系统的复杂程度。

举个例子：某车企的工厂有三种发动机平台A、B、C，并且有三种引擎A、B、C，因此可以发动机A和引擎A组合进行组装汽车，发动机A和引擎B组合进行组装汽车，发动机A和引擎C组合进行组装汽车，以此类推。

```
function Aodi1(engine) {
	this.engine = engine;
}
Aodi1.prototype.planform = function() {
	console.log("Aodi1 平台");
}
Aodi1.prototype.loadEngine = function() {
	this.engine.run();
}

// 这样子Aodi1平台就可以根据传进来的是哪个引擎进行汽车的组装

function V6() {
	this.run = function() {
		console.log("V6发动机");
	}
}
function V8() {
	this.run = function() {
		console.log("V8发动机");
	}
}

let aodi1 = new Aodi1(new V6());
let aodi2 = new Aodi1(new V8());

aodi1.loadEngine();
```

这只是一个辅助我们理解的例子，那我们写前端页面的时候，这种设计模式在什么场景下可以使用呢？

比如在项目中，我们可能会使用modal、message、toast三种弹窗，每一种弹窗的出现都有响应的动画。

```
const Animates = {
	bounce: {
		show(ele) {
			console.log(ele, "弹跳显示");
		},
		hide(ele) {
			console.log(ele, "弹跳隐藏");
		}
	},
	slide: {
		show(ele) {
			console.log(ele, "滑动显示");
		},
		hide(ele) {
			console.log(ele, "滑动隐藏");
		}
	},
	rotate: {
		show(ele) {
			console.log(ele, "旋转显示");
		},
		hide(ele) {
			console.log(ele, "旋转隐藏");
		}
	}
}

// 现在有个动画库，modal、message、toast三种弹窗都可以分别结合这三种动画进行使用，因为这三种弹窗都需要有动画进行弹出和隐藏，那么我们就可以把这块逻辑抽象出来，形成这个动画库。


function Toast(ele, animation) {
	this.ele = ele;
	this.animation = animation;
}
Toast.prototype.show = function () {
	this.animation.show();
}
Toast.prototype.hide = function () {
	this.animation.hide();
}

const toast = new Toast("div1", Animates.bounce);
```

