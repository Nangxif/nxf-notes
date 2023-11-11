# 实现new操作符

在调用new的过程中，有以下四个步骤：

1. 创建一个新的空对象
2. 设置原型，将对象的原型设置为构造函数的prototype对象
3. 让函数的this指向这个对象，执行构造函数的代码（为这个新对象添加属性）
4. 判断函数的返回值类型，如果是值类型，那么就返回创建的对象。如果是引用类型，就返回这个引用类型的对象

```
// 先看看之前的new是怎么使用的
function Person(name, age) {
	this.name = name;
	this.age = age;
}
new Person("李四", 18)

// 实现
function myNew(constructor, ...args) {
	// 新建空对象，对象原型为构造函数的prototype对象
	const obj = Object.create(constructor.prototype);
	// 将this指向新建对象，并执行构造函数里面的初始化操作，给ob j赋值
	const result = constructor.apply(obj, args);
	// 判断函数的返回值类型
	if (result && (typeof result === "object" || typeof result === 'function')) {
		return result;
	}
	return obj;
}


// 使用
myNew(Object);
myNew(Function);
myNew(String);
myNew(Person, "李四", 18);
```

