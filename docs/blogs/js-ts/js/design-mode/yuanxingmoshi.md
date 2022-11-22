# 模式二——原型模式

我们接着上一个模式的代码【构造器模式】来讲

```
function Employee(name, age) {
	this.name = name;
	this.age = age;
	this.say = function (){
		console.log(this.name + "-" + this.age);
	}
}
```

我们每次在new Employee的时候，say函数都是一样的，但是每次实例化的时候，都会随着一起开辟一个内存空间来存储say这个函数。

这个时候就有点没必要了，因为我们无论new多少个Employee，我们这个say都是一样的，但是当数据量大的时候，就很占内存空间了。这样也不太复合我们代码的可复用性的原则。因此我们可以根据原型模式，来优化这种写法。函数的原型是唯一的，它在内存中只有一份，那么就达到了我们共用的原则。

```
function Employee(name, age) {
	this.name = name;
	this.age = age;
}
Employee.prototype.say = function (){
	console.log(this.name + "-" + this.age);
}
```

ES6出现之后，我们有了新的写法

```
class Employee {
	constructor(name, age) {
        this.name = name;
        this.age = age;
	}
	say (){
        console.log(this.name + "-" + this.age);
    }
}
```

这种写法的say是在Employee类的原型上的。

接下来我们用一个例子来实践这种设计模式。

假设现在页面有多个选项卡，或者页面中有多个轮播。页面上每个选项卡的tab点击的时候我们需要绑定点击事件，点击之后下面显示相应的content内容。如果我们按照面向对象的思维方式去做，我单独创建一个对象，那么这个对象里面是不是得有这几个选项卡按钮，还有下面对应的内容，还得有方法让它点完之后能够完成切换。一个对象里面就要有这个东西，那么我们有多个选项卡的时候，岂不是要创建多个对象？这显然是不合理的。所以下面我们用原型模式的写法来实现这个功能。

**ES5写法**

```
<div class="container1">
	<ul class="header">
		<li class="active">1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
	</ul>
	<ul class="box">
		<li class="active">111</li>
		<li>222</li>
		<li>333</li>
		<li>444</li>
		<li>555</li>
	</ul>
</div>
<div class="container2">
	<ul class="header">
		<li class="active">1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
	</ul>
	<ul class="box">
		<li class="active">111</li>
		<li>222</li>
		<li>333</li>
		<li>444</li>
		<li>555</li>
	</ul>
</div>
```

```
function Tabs(selector, type){
	this.selector = document.querySelector(selector);
	this.headerItems = this.selector.querySelectorAll(".header li");
	this.boxItems = this.selector.querySelectorAll(".box li");
	this.type = type;
	this.change();
}
Tabs.prototype.change = function() {
	for(let i = 0;i < this.headerItems.length;i++) {
		this.headerItems[i].addEventListener(this.type,() => {
			for(let m = 0;m < this.headerItems.length;m++) {
				this.headerItems[m].classList.remove("active");
				this.boxItems[m].classList.remove("active");
			}
			this.headerItems[i].classList.add("active");
			this.boxItems[i].classList.add("active");
		},false);
	}
}
new Tabs(".container1", "click");
new Tabs(".container2", "mouseover");
```

**ES6写法**

```
class Tabs{
	constructor(selector, type) {
        this.selector = document.querySelector(selector);
        this.headerItems = this.selector.querySelectorAll(".header li");
        this.boxItems = this.selector.querySelectorAll(".box li");
        this.type = type;
        this.change();
	}
	change() {
        for(let i = 0;i < this.headerItems.length;i++) {
            this.headerItems[i].addEventListener(this.type,() => {
                for(let m = 0;m < this.headerItems.length;m++) {
                    this.headerItems[m].classList.remove("active");
                    this.boxItems[m].classList.remove("active");
                }
                this.headerItems[i].classList.add("active");
                this.boxItems[i].classList.add("active");
            },false);
        }
    }
}
new Tabs(".container1", "click");
new Tabs(".container2", "mouseover");
```

