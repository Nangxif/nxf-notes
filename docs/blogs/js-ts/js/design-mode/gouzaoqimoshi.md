# 模式一——构造器模式

如果现在有一个员工录入系统，要将员工的信息录入到系统中。我们用一个对象来表示一个员工。

```
// 员工一
var employee1 = {
	name: "nangxi",
	age: 100
}
// 一个对象只能表示一个员工，所以我们要表示其他的员工只能多创建一个对象
var employee2 = {
	name: "wangzai",
	age: 100
}
```

现在有两个员工我们就要创建两个对象，那么有十个员工我们就要创建十个对象。当我们的数据量增大之后，代码的冗余程度就可想而知，因此我们就引申出我们的构造器模式，通过构造函数的形式，传入参数直接为我们生成员工对象。

在ES6还没出世之前，我们是这么使用构造器模式的

```
function Employee(name, age) {
	this.name = name;
	this.age = age;
	// 如果我们要在这个构造器里面加一个方法
	this.say = function (){
		console.log(this.name + "-" + this.age);
	}
}
var employee1 = new Employee("nangxi", 100);
var employee2 = new Employee("wangzai", 100);
employee1.say();
employee2.say();
```

最刚开始我们创建一个员工就得复制很多冗余的代码。现在在构造器模式下我们只需要new一下构造函数，传入相应的参数我们就可以得到一个员工，很多代码都得到复用。每次调用new都会申请新的内存空间，所以employee1和employee2是互不影响的。