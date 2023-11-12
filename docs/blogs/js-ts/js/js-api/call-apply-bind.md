# 实现call,apply,bind

```
Function.prototype.myCall = function (context, ...args) {
  // 判断调用myCall的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myCall - 被调用的对象必须是函数");
  }
  // 如果没有传入上下文对象，则默认为全局对象
  // ES11 引入了 globalThis，它是一个统一的全局对象
  // 无论在浏览器还是 Node.js 中，都可以使用 globalThis 来访问全局对象。
  context = context || globalThis;
  // 用Symbol来创建唯一的fn，防止名字冲突
  let fn = Symbol("key");
  // this是调用myCall的函数，将函数绑定到上下文对象的新属性上
  context[fn] = this;
  // 传入MyCall的多个参数
  const result = context[fn](...args);
  // 将增加的fn方法删除
  delete context[fn];
  return result;
};
```

```
Function.prototype.myApply = function (context, argsArr) {
  // 判断调用myApply的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myApply - 被调用的对象必须是函数");
  }
  // 判断传入的参数是否为数组
  if (argsArr && !Array.isArray(argsArr)) {
    throw new TypeError("Function.prototype.myApply - 第二个参数必须是数组");
  }
  // 如果没有传入上下文对象，则默认为全局对象
  // ES11 引入了 globalThis，它是一个统一的全局对象
  // 无论在浏览器还是 Node.js 中，都可以使用 globalThis 来访问全局对象。
  context = context || globalThis;
  // 用Symbol来创建唯一的fn，防止名字冲突
  let fn = Symbol("key");
  // this是调用myApply的函数，将函数绑定到上下文对象的新属性上
  context[fn] = this;
  // 传入myApply的多个参数
  const result = Array.isArray(argsArr)
    ? context[fn](...argsArr)
    : context[fn]();
  // 将增加的fn方法删除
  delete context[fn];
  return result;
};
```

```
Function.prototype.myBind = function (context, ...args) {
  // 判断调用myBind的是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.myBind - 被调用的对象必须是函数");
  }
  // 如果没有传入上下文对象，则默认为全局对象
  // ES11 引入了 globalThis，它是一个统一的全局对象
  // 无论在浏览器还是 Node.js 中，都可以使用 globalThis 来访问全局对象。
  context = context || globalThis;
  // 保存原始函数的引用，this就是要绑定的函数
  const _this = this;
  // 返回一个新的函数作为绑定函数
  return function fn(...innerArgs) {
    // 判断返回出去的函数有没有被new
    if (this instanceof fn) {
      return new _this(...args, ...innerArgs);
    }
    // 使用apply方法将原函数绑定到指定的上下文对象上
    return _this.apply(context,args.concat(innerArgs));
  };
};
```

