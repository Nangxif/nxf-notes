# vuex插件

如果我们要实现一个状态数据持久化的功能，我们可以通过vuex插件的形式来做

先写好一个插件

```
function persists(store) {
  let local = localStorage.getItem('VUEX:STATE');
  if (local) {
    // 更新原有状态
    store.replaceState(JSON.parse(local));
  }
  // 什么时候执行回调呢？状态变化就执行回调
  store.subscribe((mutation, state) => {
    // 只要频繁操作，那么要考虑防抖节流
    localStorage.setItem('VUEX:STATE', JSON.stringify(state));
  });
}
```

使用插件

```
new Vuex.Store({
  plugins: [persists],
})
```

vuex插件其实就只是一个函数，vuex在注册的时候会给这个函数传当前的Store实例

## 1.plugins的实现

插件的实现很简单，在Store构造函数里面添加

```
options.plugins.forEach((plugin) => plugin(this));
```

## 2.subscribe的实现

我们在开头的插件案例里面发现Store实例的subscribe方法可以监听state的变化，其实这个也是一个发布订阅

现在Store构造函数里面定义一个数组，这个数组用来存放订阅的函数

```
this._subscribers = [];
```

那什么之后执行_subscribers里面的函数呢？vuex规定只有mutation可以修改state，那么就是说在mutation触发的时候，会执行所有的 _subscribers。

```
// 在installModule里面遍历mutation的时候，执行_subscribers
module.forEachMutation((mutation, type) => {
    // changeAge:[fn,fn,fn] 发布订阅
    store._mutations[namespace + type] =
      store._mutations[namespace + type] || [];
    store._mutations[namespace + type].push((payload) => {
      mutation.call(store, getState(store, path), payload);
      // 调用subscribe订阅的时间
      store._subscribers.forEach((sub) => sub({ mutation, type }, store.state));
    });
});
```

## 3.replaceState的实现

我们在开头的插件案例里面还发现Store实例的replaceState方法可以直接修改state

它的实现更简单

```
replaceState(newState) {
    // 用最新的状态替换掉
    this._vm.data.$$state = newState;
}
```

