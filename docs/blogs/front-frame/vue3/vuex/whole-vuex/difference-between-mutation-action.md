# 区分mutation和action

我们一直在说修改state一定要通过mutation来修改，但是我们在实际操作的时候

```
$store.state.age += 1
```

这种方式还是可以成功修改state。其实vuex的Store配置项还有一个属性叫strict，设置为true，表示开启严格模式，严格模式下，只能通过mutation更改状态，其他都不可以。如果还强行更改，控制台会报错！！！（*虽然会飘红报错，但是页面上的数据还是被更改了*）

<Image :src="'/front-frame/vue3/vuex/whole-vuex/difference-between-mutation-action/1.png'" />

我们可以在Store实例添加一个_committing属性（没有默认值），当这个属性为true的时候，说明正在通过commit的方式（也就是mutation的方式）更改state，这个时候控制台不会报错，当这个属性为false的之后，说明在mutation之外更改了数据，这时候控制台会报错。

那么就是说，我们在合法地更改state地方，要将_committing设置为true，当值更改完之后要重置为false。

那么我们可以在Store实例上添加一个_withCommitting方法，这个方法的参数是一个函数，这个方法在调用的时候会将 _withCommitting变为true，在执行参数函数之后 _withCommitting会重置为false。

```
_withCommitting(fn) {
    let committing = this._committing;
    this._committing = true; //在函数调用前 表示_committing为true
    fn();
    this._committing = committing;
}
```

有了这个高阶函数，我们就可以在合法更改state的地方用_withCommitting包裹起来

```
// 第一个地方：installModule（两处）
if (path.length > 0) {
    let parent = path.slice(0, -1).reduce((memo, current) => {
      return memo[current];
    }, rootState);
    store._withCommitting(() => {
      Vue.set(parent, path[path.length - 1], module.state);
    });
}
module.forEachMutation((mutation, type) => {
    store._mutations[namespace + type] =
      store._mutations[namespace + type] || [];
    store._mutations[namespace + type].push((payload) => {
      store._withCommitting(() => {
        mutation.call(store, getState(store, path), payload);
      });
      store._subscribers.forEach((sub) => sub({ mutation, type }, store.state));
    });
});

// 第二个地方：replaceState
replaceState(newState) {
    this._withCommitting(() => {
      this._vm._data.$$state = newState;
    });
}
```

接下来我们该怎么实现这个报错？

在实现resetStoreVm的时候。我们可以通过vue的实例的$watch来监听store._vm. _data.$$state的变化，如果在变化的时候store. _committing为true，那么就说明是一次合规的对state的操作，如果为false，那么说明是一次不合规的操作。当然，这些功能可以使用的前提是有配置strict:true

```
if (store.strict) {
    // 只要状态一变化，会立即执行，在状态变化后同步执行
    store._vm.$watch(
      () => store._vm._data.$$state,
      () => {
        console.assert(store._committing, '在mutation之外更改了状态');
      },
      {
      	// 配置deep，state有深层嵌套也可以监听到
        deep: true,
        // 配置同步，才可以及时地拿到_committing的最新值
        sync: true,
      }
    );
}
```

到这里mutation和action的区别也就出来了：

1. action里面是不可以直接修改state的，只能通过调用mutation去修改

   ```
   actions: {
       changeAge({ state,commit }) {
         setTimeout(() => {
         	// 这种情况下_committing为false，会报错
           state.age += 1;
         }, 3000);
       },
   },
   ```

2. mutation里面不可以异步更改state

   ```
   mutations: {
       // vue中的方法，唯一可以改状态的方法
       // 更改状态的方式必须是同步的
       changeAge(state, payload) {
         // 如果我在mutation里面写了异步的逻辑就会报错
         setTimeout(() => {
           // 此时this._committing为false
           state.age += payload;
         }, 1000);
       },
   }
   ```

   

