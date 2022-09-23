# Pinia介绍

## 一、Pinia的特点

* pinia是用来取代vuex的，非常小巧，支持vue2也支持vue3，ts类型支持也非常好，我们在使用pinia之后就不用写类型。

* 默认支持多仓库，vuex典型的单仓库，$store.state会导致所有的状态都放到一个store里面

  1. 有人说，我可以用模块来区分不同的store呀，但是vuex有一个特点

     举个栗子：

  ​       store.state.a 此时又有一个a模块，此时会产生一个冲突，模块a的状态会放到store里面去，所以要保证模块和状态名字要区分开。

  2. 同时，vuex的树状结构不好维护，store.state.a.b.c.xxx，调用非常长。所以pinia不采用命名空间的方式来管理，pinia采用拍平的方式，将每个状态都可以是单独的store（userStore.xxx，productStore.xxx）。
  3. pinia用起来很方便，store之间可以相互调用。

* pinia还解决了vuex的一个痛点，vuex中所有的状态。

  组件（取决于我们的状态）->我们通过action去请求接口->通过mutation去修改状态

  action和mutation的区别，action这一层的诞生是为了什么？

  是为了复用commit，我们一般在开发过程中，可能会出现这种情况

  ```
  组件1 -> commit(mutation) ->
          commit(mutation) ->
          commit(mutation) ->
          commit(mutation) -> 状态
  组件2 -> commit(mutation) ->
          commit(mutation) ->
          commit(mutation) ->
          commit(mutation) -> 状态
  ```

  这些重复的commit可以合并成一个action，组件可以直接调用action去嵌套多个commit，也可以去进行异步操作，反正最后要修改状态是通过mutation。所以action起到的作用是封装。

  pinia把所有的更改（mutation，action）改成都只有action可以更新状态了。

* pinia的优点：扁平化，多个store，没用mutation，支持ts，支持devtool，而且为了兼容vue2，把vuex的辅助函数mapState，mapGetters，mapActions都支持了。

## 二、Pinia使用

```
import { createPinia } from 'pinia';
// 这里使用插件的写法，由此我们可以大概知道pinia长这样
// function createPinia () {
	// vue的插件要求返回的对象里有个install方法
// 	return {
// 		install(app){}	
// 	}
// }
const app = createApp(App);
app.use(createPinia());
```

### 1.options API使用方式

我们得先有一个store，在src目录下创建stores

```
- stores
  - counter.js

import { defineStore } from 'pinia';

// defineStore中的id是独一无二的
// 最终我们的pinia需要管理所有的状态，那我怎么知道哪个状态对应的是哪个store，那么就可能大概需要这么一个映射表
/**
	{
		counter => state, 
		xxx => state
	}
*/
export const useCounterStore = defineStore('counter',{
	// 上面的counter也可以写在对象里面
	// id: 'counter',
	state: () => {
		return {
			count: 0
		}
	},
	getters: {
		dobule() {
			return this.count * 2
		}
	},
	actions: {
		increment(payload) {
			this.count += payload
		}
	}
});
```

```
// 使用
<script setup>
	import { useCounterStore } from './stores/counter';
	const store = useCountStore();
</script>

<template>
	{{ store.count }}
	{{ store.dobule }}
	// 如果我要修改状态，有下面几种方式
	// 第一种比较暴力
	<button @click="()=>store.count++">修改状态</button>
	// 第二种用action
	<button @click="store.increment(3)">修改状态</button>
</template>
```

### 2.composition API使用方式

```
- stores
  - counter.js

import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCounterStore = defineStore('counter',() => {
	const count = ref(10);
	const increment = () => {
		count.value = 2
	}
	const dobule = computed(() => {
		return count.value + 2
	})
	return {
		count,
		dobule,
		increment
	}
});
```

### 3.使用store自带的methods

 <Image :src="'/front-frame/vue3/pinia/1.png'" />

pinia的store自带有以下这些属性和方法

| 方法名/属性名 | 参数                                                         | 用途                                                         |
| ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| $dispose      | 无                                                           | 停止store的依赖收集                                          |
| $onAction     | callback：回调函数，会被push到subscriptions里面<br />detach：在组件卸载的时候是否保留callback这个订阅<br />onCleanup：移除订阅后调用的函数 | 一旦调用了action就会触发                                     |
| $patch        | 对象/函数                                                    | 如果传参是一个函数，那么就调用这个函数，并且将当前的store作为函数参数，如果传参不是一个函数而是一个对象，那么将该对象与store合并 |
| $reset        | 无                                                           | 重置store的state的值为初始值                                 |
| $subscribe    | 回调函数和传给watch的第三个参数的options                     | 监听store的数据变化，一单有变化就会触发回调                  |
| $id           | 无                                                           | store的id                                                    |
| $state        | 无                                                           | 整个store响应式对象                                          |

```
<script setup>
	import { useCounterStore } from './stores/counter';
	const store = useCountStore();
	// 调用之后会停止store的所有依赖收集，以及清除所有的订阅，并且删除store
	// store.$dispose();
	// store.$patch(($store) => {
	//   这里会输出Proxy{ count:1 }
    //   console.log($store);
    // });
    // 直接将state重置为初始值
    // store.$reset();
    // 当任何一个数据发生变化都会触发
    // store.$subscribe((obj, store) => {
    //   obj -> {events:{},storeId:'counter',type:'direct'}
    //   store -> 当前的store
    //   console.log(obj, store);
    // });
</script>
```

$onAction我这里单独拎出来讲解一下

假设现在有个App.vue，引入了一个HelloWorld.vue组件，同时有一个按钮可以卸载HelloWorld组件

```
// App.vue
<script setup>
import { ref } from 'vue';
import { useCounterStore } from './stores/counter';
import HelloWorld from './components/HelloWorld.vue';
const showHello = ref(true);
const store = useCounterStore();
// $onAction的本体是pinia源码里面的addSubscription，这个函数接收四个参数，
// 参数1是subscriptions，这是pinia在createSetupStore里面定义的一个数组，用来存放订阅的回调函数
// 参数2是一个订阅的回调，也就是传给$onAction的第一个参数，这个回调的参数是一个option，这个option可以解构出
//   - after: 一个函数，可以接收一个回调，这个回调在action修改数据后触发
//   - onError: 一个函数，可以接收一个回调，这个回调在action修改数据时如果有错误就触发
//   - args: 一个数组，表示传给action的payload
//   - name： 当前store的id
//   - store: 当前的store
//  参数3是一个detached布尔值，也就是传给$onAction的第二个参数，这个参数表示组件卸载的时候是否保留这个订阅
//  参数4是一个函数，也就是传给$onAction的第三个参数，这个参数虽然在ts类型声明里面是没有的，但是是可以使用的，在detached为false，并且组件卸载的时候会触发
store.$onAction(
  (option) => {
    // 这个option总共有以下几个属性
    let { after, onError, args, name, store } = option;
    // after是一个函数，这个函数的参数是一个回调函数，这个回调函数会在
    console.log('数据被action修改之前触发', store.count);
    after(() => {
      console.log('数据被action修改之后触发', store.count);
    });
  },
  false,
  () => {
    console.log('已清除订阅');
  }
);
</script>

<template>
  {{ store.count }}
  {{ store.dobule }}
  <button @click="store.increment(3)">修改状态</button>
  <hello-world v-if="showHello" />
  <button @click="showHello = false">关闭hello</button>
</template>
```

```
// HelloWorld.vue
<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
const store = useCounterStore();

store.$onAction(
  (option) => {
    console.log('helloworld');
  },
  false,
  () => {
    console.log('已清除helloworld订阅');
  }
);
</script>

<template>我是hello</template>
```

此时点击“修改状态”按钮会输出

```
数据被action修改之前触发 0
helloworld里面-数据被action修改之前触发 0
数据被action修改之后触发 3
helloworld里面-数据被action修改之后触发 3
```

点击”关闭hello“按钮会输出

```
已清除helloworld订阅
```

此时无论怎么点击“修改状态”按钮，HelloWorld里面对action变化的订阅都不再会被触发，只会输出

```
数据被action修改之前触发 3
数据被action修改之后触发 6
```

如果将HelloWorld.vue里面$onAction的第二个参数改为true，那么点击”关闭hello“按钮就不会触发HelloWorld里面$action的第三个参数（回调函数），同时继续点击“修改状态”按钮会输出

```
数据被action修改之前触发 3
helloworld里面-数据被action修改之前触发 3
数据被action修改之后触发 6
helloworld里面-数据被action修改之后触发 6
```

HelloWorld组件虽然被卸载，但是对action的订阅依然有效

$state我这里也单独拎出来讲解一下

$state的底层其实也是$patch，$state的本质是一个defineProxy，获取的时候会触发get，然后会从store里面获取相应的state，getter或action，设置值的时候会调用$patch，具体源码下一节讲解。