# 前言

上一节我们讲解的vuex是脱离modules概念的一个简单的实现，这一节开始我们把核心概念modules也加进来。

我们先来看一个用法

```
// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    age: 26,
  },
  getters: {
    getAge(state) {
      return state.age + 10;
    },
  },
  mutations: {、
    changeAge(state, payload) {
      state.age += payload;
    },
  },
  modules: {
    a: {
      state: {
        c: 100,
      },
      mutations: {
        changeAge(state, payload) {
          console.log('c更新');
        },
      },
    },
    b: {
      state: {
        d: 100,
      },
      mutations: {
        changeAge(state, payload) {
          console.log('d更新');
        },
      },
    },
  },
});

// App.vue
<template>
  <div id="app">
    年龄：{{ $store.state.age }}<br />
    计算年龄：{{ $store.getters.getAge }}<br />
    <button @click="$store.commit('changeAge', 5)">同步更新状态</button>
    {{ $store.state.a.c }}
    {{ $store.state.b.d }}
  </div>
</template>
```

我们发现每次点击“同步更新状态”按钮的时候，控制台也会输出“c更新”，“d更新”，也就是说每个模块下面与`changeAge`同名的mutations都被触发了，好像没作用域一样。其实内部会把同名的mutations放在同一个数组里面，一旦`commit`就会触发这个数组下面所有被订阅的函数。默认的模块是没有作用域问题的。

我们再来看一个例子

```
modules:{
	b: {
      state: {
        d: 100,
      },
      modules: {
      	d: {
      	  state: {
      	  	e: 500
      	  }
      	}
      }
    },
}
```

我们可以看到b下面的state有个d状态，同时b的modules下面也有个d模块，那么我们取值`$store.state.b.d`，拿的是d状态还是d模块呢？

经检验会在页面上显示 `{ "e": 500 }`，也就是说拿的是d模块。

所以我们在书写的时候要尽量避免一个问题，就是状态不要和模块的名字相同。

还有一个例子

```
modules:{
	b: {
      state: {
        d: 100,
      },
      getters: {
      	getD(state) {
      		return state.d + 100
      	}
      }
    },
}

$store.getters.b.getD; //这样是取不到值的，getters.b is undefined
$store.getters.getD; //这样才取得到值
```

再来看看最后一个例子

```
eg1
modules: {
    a: {
      namespaced: true,
      state: {
        c: 100,
      },
      mutations: {
        changeAge(state, payload) {
          console.log('c更新');
        },
      },
    },
}

$store.commit('a/changeAge', 5); //需采用/的形式调用a模块下的mutations

eg2
modules: {
	a: {}
	b: {
		modules: {
            c: {
              namespaced: true,
              state: {
                e: 500,
              },
              mutations: {
                changeAge(state, payload) {
                  console.log('b/c 更新');
                },
              },
          },
      },
	}
}
$store.commit('b/c/changeAge', 5); // 这种情况下用b/c是取不到changeAge的，因为b这个模块没有定义namespaced:true
$store.commit('c/changeAge', 5); // 这样才能取到c模块下的changeAge

eg3
modules: {
	a: {}
	b: {
        namespaced: true,
		modules: {
            c: {
              state: {
                e: 500,
              },
              mutations: {
                changeAge(state, payload) {
                  console.log('b/c 更新');
                },
              },
          },
      },
	}
}

$store.commit('b/changeAge', 5); // c没有定义namespaced，因此mutations挂载在b模块上
```

因此通过上面四个例子我们可以得出下面的结论：

1. 默认模块没有作用域的问题
2. 状态不要和模块的名字相同
3. 默认计算属性，直接通过getters取值
4. 如果增加namespaced:true，则会将这个模块的属性，都封装到这个作用域下
5. 默认会找当前模块上是否有namespaced，并且将父级的namespaced一同算上，做成命名空间

接下来我们根据上面五点，来实现一个完整的vuex

我这里先把源码放上来，大家可以配合文档一起“食用”

<Codesandbox :src="'https://codesandbox.io/p/github/Nangxif/vue-vuex/draft/wild-forest?file=%2FREADME.md'"/>
