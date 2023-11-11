# 实现深拷贝

**深拷贝：创建一个新的对象，将一个对象从内存中完整地拷贝出来一份给该新对象，并从堆内存中开辟一个全新的空间存放新对象，且新对象的修改并不会改变原对象，二者实现真正的分离。**

**常见的方法有：**

方法1：JSON.stringify()

JSON.stringfy() 其实就是将一个 JavaScript 对象或值转换为 JSON 字符串，最后再用 JSON.parse() 的方法将JSON 字符串生成一个新的对象。

```
function deepClone(target) {
    if (typeof target === 'object' && target !== null) {
        return JSON.parse(JSON.stringify(target));
    } else {
        return target;
    }
}
```

方法2：使用递归进行深拷贝

```
function deepClone(obj) {
	if (typeof obj === 'object' && obj !== null) {
		let cloneObj = Array.isArray(obj) ? [] : {}
		for (let key in obj) { //遍历
			if (typeof obj[key] === 'object') {
				cloneObj[key] = deepClone(obj[key]) //是对象就再次调用该函数递归
			} else {
				cloneObj[key] = obj[key] //基本类型的话直接复制值
			}
		}
		return cloneObj
	} else {
		return obj;
	}
}

let obj1 = {
    name:'wb',
    info:{
        address: 'guangzhou'    
    } 
} 
let obj2 = deepClone(obj1);
obj1.name = 'weibin';
console.log(obj2)
```

<Image :src="'/js-ts/js/js-api/deep-clone/1.png'" />

上边两种已经可以满足大部分应用场景，但是对于Symbol类型的数据和不可枚举属性以及RegExp、Date、Map、Set、Function等引用类型无法进行拷贝。

在方法1中，JSON在执行字符串化的这个过程时，会先进行一个JSON格式化，获得安全的JSON值，因此如果是非安全的JSON值，就会被丢弃掉。JSON.stringfy() 存在以下一些问题:

1、执行会报错：存在BigInt类型、循环引用。

2、拷贝Date引用类型会变成字符串。

3、键值会消失：对象的值中为Function、Undefined、Symbol 这几种类型。

4、键值变成空对象：对象的值中为Map、Set、RegExp这几种类型。

5、无法拷贝：不可枚举属性、对象的原型链。

在方法2中，如果存在循环引用的话，以上代码会导致无限递归，从而使得堆栈溢出

```
var data = {
  name: 'snail',
  obj: null,
}
data.obj = data;
console.log(data, 'is data');
console.log(deepClone(data));
```

<Image :src="'/js-ts/js/js-api/deep-clone/2.png'" />

下面是优化的方法：

```
function deepClone(obj) {
  const hash = new WeakMap();
  // 初次调用deepCopy时，参数会创建一个WeakMap结构的对象，这种数据结构的特点之一是，存储键值对中的健必须是对象类型。
  // 首次调用时，weakMap为空，不会走if(hash.has())语句，如果待拷贝对象中有属性也为对象时，则将该待拷贝对象存入weakMap中，此时的健值和健名都是对该待拷贝对象的引用然后递归调用该函数再次进入该函数，传入了上一个待拷贝对象的对象属性的引用和存储了上一个待拷贝对象引用的weakMap，
  // 因为如果是循环引用产生的闭环，那么这两个引用是指向相同的对象的，因此会进入if(hash.has())语句内，然后return，退出函数，所以不会一直递归进栈，以此防止栈溢出。

  function isObject(obj) {
    return (typeof obj === 'object' && obj) || typeof obj === 'function';
  }

  function clone(data) {
    if (!isObject(data)) {
      return data; // 基础数据类型
    }
    if ([Date, RegExp].includes(data.constructor)) {
      return new data.constructor(data); // 日期对象直接返回一个新的日期对象，正则对象直接返回一个新的正则对象
    }
    if (typeof data === 'function') {
      return new Function('return ' + data.toString())();
    }

    //如果循环引用了就用 weakMap 来解决，weakMap为弱引用，会自动进行垃圾回收~~~~
    if (hash.has(data)) {
      return hash.get(data);
    }

    if (data instanceof Map) {
      const result = new Map()
      hash.set(data, result)
      data.forEach((val, key) => {
        if (isObject(val)) {
          result.set(key, clone(val));
        } else {
          result.set(key, val);
        }
      })
      return result
    }

    if (data instanceof Set) {
      const result = new Set()
      hash.set(data, result)
      data.forEach(val => {
        if (isObject(val)) {
          result.add(clone(val));
        } else {
          result.add(val);
        }
      })
      return result
    }

	  // 针对能够遍历对象的不可枚举属性以及 Symbol 类型，我们可以使用 Reflect.ownKeys()
    // 在遍历 Object 类型数据时，我们需要把 Symbol 类型的键名也考虑进来，所以不能通过 Object.keys 获取键名或 for...in 方式遍历，而是通过Reflect.ownKeys()获取所有自身的键名

    // Reflect.owmKeys(obj)方法类似于 Object.keys(obj)， 但是后者会受enumerable影响，前者不会，使用这个方法可以将Symbol类型的数据也进行拷贝。
    // 详见 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
    
    const keys = Reflect.ownKeys(data);

    // 遍历所有键的特征，Object.getOwnPropertyDescriptors(obj)返回的是一个对象，对象的属性名就是源对象的属性名，属性值就是该对象的描述对象（即访问器属性或数据属性）
    const allDesc = Object.getOwnPropertyDescriptors(data);

    // 遍历传入参数所有键的特性
    // Object.assign() 方法只能拷贝源对象的可枚举的自身属性，同时拷贝时无法拷贝属性的特性们，而且访问器属性会被转换成数据属性，也无法拷贝源对象的原型，该方法配合 Object.create() 方法可以实现上面说的这些。
    // 详见  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors#%E6%B5%85%E6%8B%B7%E8%B4%9D%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1
   	const cloneObj = Object.create(Object.getPrototypeOf(data), allDesc);
    hash.set(data, cloneObj)
    keys.forEach(key => {
      const val = data[key]
      if (isObject(val)) {
        cloneObj[key] = clone(val)
      } else {
        cloneObj[key] = val
      }
    })
    return cloneObj
  }

  return clone(obj)
}

  // const player = { name: 'Allen Iverson', [Symbol('birthday')]: '1975/06/07', };
	// let obj = {
	// 	age: 18,
	// 	name: "cwb",
	// 	education: ["小学", "初中", "高中", "大学", undefined, null],
	// 	likesFood: new Set(["fish", "banana"]),
	// 	friends: [
	// 		{ name: "yiyi", sex: "woman" },
	// 		{ name: "erer", sex: "woman" },
	// 		{ name: "sansan", sex: "man" }],
	// 	work: {
	// 		time: "2022",
	// 		project: { name: "1111111", obtain: ["css", "html", "js"] }
	// 	},
	// 	play: function () { console.log("打羽毛球"); }
	// }
	// let obj1 = deepClone(obj0);
	// console.log(obj1, 'obj1=========')
	
```

<Image :src="'/js-ts/js/js-api/deep-clone/3.png'" />

```
const data = { name: 'Allen Iverson', [Symbol('birthday')]: '1975/06/07', };
const keys111 = Object.keys(data)
const keys = Reflect.ownKeys(data);
console.log(keys111, 'Object.keys')
console.log(keys, 'Reflect.ownKeys(data)')
```

<Image :src="'/js-ts/js/js-api/deep-clone/4.png'" />