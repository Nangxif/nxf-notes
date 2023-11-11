# 实现instanceof操作符

用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上

```
function Person(name) {
	this.name = name;
}
const child = new Person("李四");

console.log(child instanceof Person);
console.log(child instanceof Object);

function myInstanceof(left, right) {
	// 获取对象原型
	let proto = Object.getPrototypeOf(left);
	// 获取构造函数的prototype属性
	const prototype = right.prototype;
	while(true) {
		if(!proto) return false;
		if(proto === prototype) return true;
		proto = Object.getPrototypeOf(proto);
	}
}
```

