# 模式十九——迭代器模式

> 迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而不需要暴露对象的内部表示。迭代器模式可以把迭代过程从业务逻辑中分离出来，在使用迭代器模式之后，及时不关系对象的内部构造，也可以按顺序访问其中的每个元素。

1. 为遍历不同的数据结构的“集合”提供统一的接口；
2. 能遍历访问“集合”数据中的项，不关心项的数据结构

```
var myEach = function(arr, callback) {
	for(let i = 0;i < arr.length;i++) {
		callback(i, arr[i]);
	}
}
myEach([11,22,33,44], function(key, value) {
	console.log(key, value);
})
```

ES6之后出现了新api——Iterator

那么哪些对象拥有这个迭代器呢？

* Array
* Map
* Set
* String
* arguments
* NodeList

这些对象都内置迭代器。

就拿数组为例

```
var arr = ["nangxi1","nangxi2","nangxi3"];
// 因为数组拥有迭代器，所以可以通过for...of遍历数组
for(let i of arr) {
	console.log(i);
}
// 也可以直接将迭代器取出来执行
let it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
```

那么按照这种使用方法，如果某个对象没有迭代器接口，但是我们给他们部署上迭代器接口，那其实也可以实现for...of的遍历。

因为原生对象没有迭代器，我们就以它为例，给它部署一个迭代器

```
var obj = {
	0: "nangxi1",
	1: "nangxi2",
	2: "nangxi3",
	length: 3,
	[Symbol.iterator]: Array.property[Symbol.iterator]
}
for(let i of obj) {
	console.log(i);
}
```

迭代器模式在真实的业务中也可以这么使用

```
var obj = {
	code: 200,
	name: "nangxi",
	list: ["aaa", "bbb", "ccc"],
	[Symbol.iterator]: function() {
		let index = 0;
		return {
			next:() => {
				if(index < this.list.length) {
					return {
						value: this.list[index++],
						done: false,
					}
				}
				return {
					value: undefined,
					done: true,
				}
			}
		}
	}
}
var it = obj[Symbol.iterator]();
it.next();
it.next();
it.next();
```

