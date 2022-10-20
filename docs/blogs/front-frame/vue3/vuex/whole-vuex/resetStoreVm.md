# vuex增加响应式效果

上一节有个问题。如何实现state和getters的响应式？

我们可以借助vue的data属性以及computed来实现

## 1.state变成响应式

很简单！！在递归安装完模块之后，state会变成这样

<Image :src="'/front-frame/vue3/vuex/whole-vuex/installModule/1.png'" />

我们直接将这个对象放到data的$$state属性下即可

```
store._vm = new Vue({
    data: {
      $$state: state,
    },
    computed,
});
```

取值的时候用Store类的属性访问器获取

```
get state() {
    return this._vm._data.$$state;
}
```

## 2.getters变成响应式

与simple-vuex的实现方式一致

```
let computed = {};
store.getters = {};
// 让getters定义在store上
forEach(wrappedGetters, (fn, key) => {
    // 通过computed实现缓存效果
    computed[key] = function () {
      return fn();
    };
    Object.defineProperty(store.getters, key, {
      get: () => store._vm[key],
    });
});
store._vm = new Vue({
	computed,
});
```

至此一个完整的vuex流程就结束了。下面会讲解vuex的动态注册模块，插件，辅助函数等功能的实现。