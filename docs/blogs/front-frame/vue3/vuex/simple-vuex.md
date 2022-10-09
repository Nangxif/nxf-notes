# 实现一个基础vuex

vuex无法脱离vue，因为内部创建了一个vue实例。

## 一、入口文件

因为我们使用vuex是这样使用的

```
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	getters: {},
	mutations: {},
	actions: {}
})
```

因此我们可以看出vuex导出的是一个install方法和Store类

```
// index.js

// 主文件的作用一般就是整合操作
import { Store, install } from './store';
export default {
  Store,
  install,
};

// 我们有可能采用
// import {Store} from 'vuex'
export { Store, install };
```

## 二、install方法

install方法的作用就是保存Vue实例，并且new Vue的时候传进来的store赋值到每个Vue组件实例的$store属性上。

```
// _Vue是Vue.use的时候用户传过来的
const install = (_Vue) => {
  Vue = _Vue;
  //   install的目的是什么
  //   目的是将store定义在每个组件上
  applyMixin(Vue);
};

const applyMixin = (Vue) => {
  // 一般插件的混合都在beforeCreate阶段
  // 每个组件都会mixin这块vuexInit逻辑，这样就可以实现每个组件实例上都有store
  Vue.mixin({
    // 在这个阶段做vuex的初始化
    beforeCreate: vuexInit,
  });
};

// 组件的创建过程是先父组件再创建子组件
function vuexInit() {
  const options = this.$options;
  //   一开始的时候，只有根实例上才有store
  if (options.store) {
    // 根实例
    this.$store = options.store;
  } else if (options.parent && options.parent.$store) {
    // 父亲有了store，儿子才能继承
    // 子组件
    this.$store = options.parent.$store;
  }
}
```

## 三、Store类

这个类会处理state，getters，mutations，actions

### 1.先讲state

如果直接将state定义在实例上，稍后这个状态发生变化，视图是不会更新的，也就是说不会有响应性。

```
this._vm = new Vue();
this._vm.state = state;

// 这种写法的state不具备响应性的
```

我们可以充分利用Vue实例的data。vue中定义数据，属性名是有特点的，如果属性名是通过$xxx命名的，那么这个属性是不会被代理到vue的实例上，但是会在实例的_data里面。

 <Image :src="'/front-frame/vue3/vuex/simple-vuex/1.png'" />

我们在组件里面取值的时候，会采取

```
$store.state.xxx
```

去获取state。其中`$store`是在`vueInit`中被赋值到每个组件实例上的Store实例，我们通过state去获取其中某个状态的时候，其实调用的是Store的类属性访问器。

为了实现state的响应性，我们可以用Vue的data属性将其进行包装

```
class Store{
	constructor(options) {
	    let state = options.state;
	    this._vm = new Vue({
          data() {
            // 这里state就可以进行依赖收集了
            return { $$state: state };
          }
        });
	}
	//   类的属性访问器，当用户去这个实例上取state属性时，会执行此方法
    get state() {
      return this._vm._data.$$state;
    }
}
```

### 2.再来讲讲getters

我们发现，当我们在定义getters的时候，它的每一个属性都是一个函数，比如

```
getters: {
    getAge(state) {
      return state.age + 10;
    },
},
```

但是当我们使用的时候，却是一个属性

```
$store.getters.getAge
```

我们可以发现有一种结构很适合这么使用，那就是`Object.defineProperty`的`get`，`get`就是一个函数。因此我们来初步实现getters，因为getters有多个，所以需要遍历。

```
this.getters = {};
forEach(options.getters, (fn, key) => {
  Object.defineProperty(this.getters, key, {
    get: () => fn(this.state),
  });
});
```

但是上面这种写法会出现一种现象，如果在页面上使用`$store.state.getAge`，恰好如果此时还有一个state为a，而且在点击按钮的时候更新a的数据，那么getAge的代理上的get还会重新执行。

为什么没有改变getAge依赖的age的值，还会重新执行getAge的代理上的get呢？这是因为getAge到现在为止还没有做缓存机制，每次重新渲染页面肯定重新执行get。我们可以利用Vue的computed

```
this.getters = {};
const computed = {};
forEach(options.getters, (fn, key) => {
  // 通过计算属性实现懒加载
  computed[key] = () => {
    return fn(this.state);
  };
  Object.defineProperty(this.getters, key, {
    get: () => this._vm[key],
  });
});
this._vm = new Vue({
  data() {
    // 这里state就可以进行依赖收集了
    return { $$state: state };
  },
  // 计算属性会将自己的属性放到实例上
  computed,
});
```

### 3.最后讲讲mutations和actions

这两个采用的是发布订阅的模式。将用户定义的mutation和action先保存起来，稍后当调用commit时，就找到订阅的mutation方法，调用dispatch就找对应的action方法。

```
this._mutations = {};
forEach(options.mutations, (fn, key) => {
  this._mutations[key] = (payload) => fn.call(this, this.state, payload);
});
this._actions = {};
forEach(options.actions, (fn, key) => {
  this._actions[key] = (payload) => fn.call(this, this, payload);
});
```

同时Store类要暴露`commit`方法和`dispatch`方法

```
// 采用箭头函数的原因是用户在使用的时候可能会采用解构的方式使用commit，导致this错乱let {commit} = store
commit = (type, payload) => {
	this._mutations[type](payload);
};
dispatch = (type, payload) => {
	this._actions[type](payload);
};
```

下一章我们要开始讲vuex的modules，上面这些思想基本上是不变的，但是整个写法会有很大的调整。