# 函数柯里化

## 一、柯里化的概念
柯里化是指把接收多个参数的函数变换成接收单一参数的函数，嵌套返回直到所有参数都被使用并返回最终结果。更简单地说，柯里化是一个函数变换的过程，是将函数从调用方式：f(a,b,c)变换成调用方式：f(a)(b)(c)的过程。柯里化不会调用函数，它只是对函数进行转换。
举个栗子
```
function add(x, y, z) {
  return x + y + z;
}
console.log(add(1, 2, 3)); // 6
var add = function(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
}
var add1 = add(1);
var add2 = add1(2);
var add3 = add2(3);
console.log(add3);
```
这里我们定义了一个add函数，它接受一个参数并返回一个新的函数。调用add之后，返回的函数就通过闭包的方式记住了add的第一个参数。
## 二、偏函数
其实柯里化函数就是偏函数的其中一种应用，偏函数是指固定多元函数的部分参数，并返回一个可以接受剩余部分参数的函数的转换过程。JavaScript开发过程中，有一个很常用的函数就是我们所谓的偏函数bind！！！
```
function add(a, b, c) {
  return a+b+c;
}
var getResult = add.bind(this, 1, 2);
getResult(3)
```
## 三、偏函数(Partial Application) 与 柯理化(Currying)的异同
1、它们都是高阶函数（一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数）
2、它们都是把多元函数转换成更低元的函数
3、都是减少重复传参，提高函数的适用性
4、偏函数只返回一次接受剩余参数的函数，柯理化会追溯到所有参数补齐才会真正执行
5、柯理化就是自动化的偏函数应用
## 四、柯里化的用处
### 1.延迟计算
这个很简单，柯里化函数可以把一个函数分成好几步去执行，这样开发者想什么时候执行下一步就什么时候执行
### 2.参数复用

这里举个栗子
假设现在有个商家在做打折促销活动，店里所有商品一律九折，那么最后每件商品的价格就是这么算的
```
function discount(originPrize, discountNum){
  return originPrize* discountNum;
}
// 顾客买了20块钱苹果，那么价格就是
discount(20, 0.9);
// 顾客买了30块钱梨，那么价格就是
discount(30, 0.9);
// 我们会发现0.9这个参数都是一样的，那么我们可以这么写，写一个打九折的基础函数，只需要传入价格就可以了
function discount9(originPrize) {
  return discount(originPrize, 0.9)
}
// 最后只需要通过这样就可以算出价格
discount9(20);
discount9(30);
// 这样的话假设哪一天商场想打八折，容易，再创建一个打八折的基础函数，照样可以很方便地算出价格
```
### 3.动态生成函数

这里举一个实际例子。我们都知道为了兼容IE和其他浏览器的添加事件方法，通常会以下面代码进行兼容行处理：
```
const addEvent = (ele, type, fn, capture) => {
	if (window.addEventListener) {
		ele.addEventListener(type, (e) => fn.call(ele, e), capture);
	} else if (window.attachEvent) {
		ele.attachEvent('on'+type, (e) => fn.call(ele, e));
	}
}
```
这里会有一个问题，就是在每一次绑定事件的时候，都需要一次环境的判断，再去进行绑定，如果我们将上面的函数进行柯里化，就能规避这个问题，在使用前是做一次判断即可。
```
const addEvent = (function() {
	if (window.addEventListener) {
		return function(ele) {
			return function(type) {
				return function(fn) {
					return function(capture) {
						ele.addEventListener(type, (e) => fn.call(ele, e), capture);
					}
				}
			}
		}
	} else if (window.attachEvent) {
		return function(ele) {
			return function(type) {
				return function(fn) {
					return function(capture) {
						ele.addEventListener(type, (e) => fn.call(ele, e), capture);
					}
				}
			}
		}
	}
})();
// 调用
addEvent(document.getElementById('app'))('click')((e) => {console.log('click function has been call:', e);})(false);
// 分步骤调用会更加清晰
const ele = document.getElementById('app');
// get environment
const environment = addEvent(ele)
// bind event
environment('click')((e) => {console.log(e)})(false);
```
利用柯里化的函数可以实现动态的生成不同的函数。实际场景这些代码还可以进行优化
## 五、偏函数实现原理
首先，偏函数也是一个高阶函数，其实现符合高阶函数的模型：
它需要一个函数作为第一个参数，并且返回值也是一个函数
```
function partial(fn){
    return function restFn(){
        // ...
    }
}
```
其次，偏函数创建时可以固定部分参数，也即除第一个参数fn以外的参数，都是预置参数。
```
function partial(fn){
    var args = [].slice.call(arguments,1)
    return function restFn(){
        // ...
    }
}
```
最后，接受剩余参数，并和预置参数整合，作为fn的参数执行应用。
```
function partial(fn){
    var args = [].slice.call(arguments,1)
    return function(){
        var rest = [].slice.call(arguments)
        return fn.apply(null, args.concat(rest))
    }
}
// 使用方式
var add=partial((a,b)=>{return a+b},1)
add(3)
```
## 六、如何将普通的函数变成柯里化的函数
```
// 柯里化函数
const curry = function (fn) {
    return function nest(...args) {
        if (args.length === fn.length) {
            // 最后所有的参数接收完毕才调用初始函数
            return fn(...args);
        } else {
            return function (arg) {
                return nest(...args, arg);
            }
        }
    }
}
最后这个柯里化函数是这么使用的
function addNum(a, b, c) {
    return a + b + c;
}
const addCurry = curry(addNum);
addCurry(1)(2)(3);// 6
```
这个curry函数我们可以这么理解，先看看最后它是怎么使用的，反推出curry的实现逻辑
调用curry函数（函数的参数是需要转换的原始函数），返回一个柯里化的函数，所以我们知道curry函数返回的一定是柯里化个函数（一个可以这样的函数a()()()……），所以我们先整理出第一步
```
const curry = function (fn) {
    return function nest() {
    }
}
```
第二步，如果还没调用到最后一个参数，那么这时候会一直返回柯里化的函数（这个柯里化函数的特点就是传参只有一个，但是还是返回一样的柯里化函数），以供最后一次调用的使用，这里肯定会用到递归，那么这个递归要怎么写呢？
```
const curry = function (fn) {
    // 这一步已经到了curry(addNum);的返回值
    return function nest(arg) {
        // 下一次调用会走这里，所以返回一个柯里化函数，只接受一个参数，并且返回柯里化函数
        return nest(arg)
    }
}
```
怎么看起来有点奇怪？是的，递归的话，需要有个终止条件，这里我先说终止条件是什么，就是当柯里化函数调用的次数与原始函数参数个数一样的时候，会终止递归，然后一次性调用原始函数，那么这样的话，我们肯定要存储之前每一次传进来的参数
```
function curry(fn){
    const args =[];
    return function nest(arg){
        args.push(arg);
        if(args.length===fn.length){
           return fn(...args)
        }else{
            return nest
        }
    }
}
```
第三步，简化。args其实是可以省略的，我们可以用nest的形参来存储之前所有传进来的参数
```
const curry = function (fn) {
    return function nest(...args) {
        if (args.length === fn.length) {
            return fn(...args);
        } else {
            return function (arg) {
                // 这里通过function（arg）再包一层
                return nest(...args, arg);
            }
        }
    }
}
```