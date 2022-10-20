# 动态注册模块

如果我定义完`new Vuex.Store({})`之后后悔了，觉得不够用，我们还可以动态注册模块。

```
store.registerModule(['e', 'f'], {
  state: {
    myAge: 100,
  },
});
```

上面这段代码的意思是在e模块下再添加f模块，但是前提是得现有e模块，不然这么注册模块会报错。

## registerModule的实现

registerModule可以传两个参数（path，rawModule）,path可以传字符串也可以传数组，rawModule传我们前面有提到的一个名词“原对象”

```
registerModule(path, rawModule) {
    if (typeof path === 'string') path = [path];
    // 模块注册
    this._modules.register(path, rawModule);
    // 安装模块 动态地将状态新增上去
    // 第四个参数是一个Module实例，所以要处理一下rawModule
    installModule(this, this.state, path, rawModule.newModule);
    // 但是到这位置，动态新增模块还有一点小bug，计算属性都没有实现
    // 重新定义getters，在这之前要清空掉之前的vue实例
    resetStoreVm(this, this.state);
}
```

我们在动态注册模块的时候，会重新进行模块注册->递归安装模块->给state和getters赋予响应式。但是在重新执行`resetStoreVm`的时候，我们还需要判断一下之前是否有实例化过vue，有的话要将其进行清除，不然会造成内存泄露。

因此`resetStoreVm`变为

```
function resetStoreVm(store, state) {
  const wrappedGetters = store._wrappedGetters;
  let oldVm = store._vm;
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
  // 实现让状态变成响应式
  store._vm = new Vue({
    data: {
      $$state: state,
    },
    computed,
  });
  if (oldVm) {
    Vue.nextTick(() => oldVm.$destroyed());
  }
}
```



