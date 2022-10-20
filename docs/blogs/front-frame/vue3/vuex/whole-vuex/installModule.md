# 递归安装模块以及格式化vuex

递归安装模块并且格式化vuex的state，mutations，actions，getters，这块逻辑我们都放在`installModule`函数里面。

上一章节【ModuleCollection的实现】最后我们抛出了一个问题，为什么会有路径这个东西？

vuex有模块的概念，但是这个模块的概念对于state以及剩余的getters，mutations以及actions来说，处理方式还有点不一样，我先总结成一句话，state的模块化与namespaced属性无关，getters，mutations以及actions的模块化与namespaced属性有关。

1. state的模块化与namespaced属性无关

   ```
   new Vuex.Store({
   	state: {
   		age: 26
   	},
   	modules: {
   		a: {
   			state: {
   				c: 100
   			}
   		}
   		b: {
   			state: {
   				d: 100
   			}
   		}
   		e: {
   			state: {}
   		}
   	}
   })
   ```

   这种结构最后生成的Store实例的state属性结构如下

    <Image :src="'/front-frame/vue3/vuex/whole-vuex/installModule/1.png'" />

   我们可以看出结构跟代码的结构几乎一致。
   
2. getters，mutations以及actions的模块化与namespaced属性有关
   

与上面同样的结构，我们给每个模块的mutations添加changeAge，看看最终的结构会是什么样的

   ```
 new Vuex.Store({
   	state: {
   		age: 26
   	},
   	mutations: {
   		changeAge(state, payload) {
            state.age += payload;
        }
   	},
   	modules: {
   		a: {
   			state: {
   				c: 100
   			},
   			mutations: {
           	    changeAge(state, payload) {
             	        console.log('c更新');
           	    },
         	},
   		}
   		b: {
   			state: {
   				d: 100
   			},
   			mutations: {
           	    changeAge(state, payload) {
             	    console.log('d更新');
           	    },
         	},
         	modules: {
         		c: {
         			state: {},
                    mutations: {
                        changeAge(state, payload) {
                            console.log('d更新');
                        }
                    }
         		}
         	}
   		}
   		e: {
   			state: {}
   		}
   	}
})
   ```
   <Image :src="'/front-frame/vue3/vuex/whole-vuex/installModule/2.png'" />

我们可以看到每个模块下的changeAge方法，都被挂靠在根模块下的changeAge数组中，每次commit调用changeAge的时候，会循环执行根模块下changeAge数组存放的所有方法。

其实，我们上面看到虽然是模块的写法，但是vuex真正的将一个模块识别为模块，取的是模块上的namespaced属性，这个属性设置为true，vuex才识别为真正的模块。所以

```
new Vuex.Store({
   	state: {
   		age: 26
   	},
   	mutations: {
   		changeAge(state, payload) {
            state.age += payload;
        }
   	},
   	modules: {
   		a: {
   			namespaced: true,
   			state: {
   				c: 100
   			},
   			mutations: {
           	    changeAge(state, payload) {
             	        console.log('c更新');
           	    },
         	},
   		}
   		b: {
   			state: {
   				d: 100
   			},
   			mutations: {
           	    changeAge(state, payload) {
             	    console.log('d更新');
           	    },
         	},
         	modules: {
         		c: {
   					namespaced: true,
         			state: {},
                    mutations: {
                        changeAge(state, payload) {
                            console.log('d更新');
                        }
                    }
         		}
         	}
   		}
   		e: {
   			state: {}
   		}
   	}
})
```

<Image :src="'/front-frame/vue3/vuex/whole-vuex/installModule/3.png'" />

我们可以看出a下的changeAge存放在a/changeAge数组中，b下的changeAge由于b没有设置namespaced属性，因此不认为是一个模块，因此changeAge存放在changeAge数组中，c有设置namespaced属性，但是由于b没有，所以changeAge存放在c/changeAge数组中。

因此我们可以得出结论

每个模块下的getters，mutations，actions，会跟原型链一样往上查找namespaced属性，一旦找到就用“/”符号拼接模块名称，直至找到根模块。

## 1.递归安装模块前准备工作

①生成一棵树

```
this._modules = new ModuleCollection(options);
```

②定义模块的state，getters，mutations，actions存放的容器

```
let state = this._modules.root.state;
this._mutations = {}; // 存放所有模块中的mutations，先不考虑命名空间
this._actions = {}; // 存放所有模块中的actions
this._wrappedGetters = {}; // 存放所有模块中的getters
```

③开始递归安装模块

```
// this 当前的Store实例
// state 根模块的state
// [] 路径
// this._modules.root 之前生成的树的根节点
installModule(this, state, [], this._modules.root);
```

## 2.递归安装模块

①获取当前路径

```
let namespace = store._modules.getNamespace(path);
```

②安装mutations

将所有的mutations收集到_mutations

```
module.forEachMutation((mutation, type) => {
    // changeAge:[fn,fn,fn] 发布订阅
    store._mutations[namespace + type] =
      store._mutations[namespace + type] || [];
    store._mutations[namespace + type].push((payload) => {
      // 内部可能会替换状态，这里如果一直使用module.state，可能是老的状态
      // mutation.call(store, module.state, payload);
      mutation.call(store, getState(store, path), payload);
    });
});
```

这上面有段注释，我们来讲解一下。调用mutation实际是通过调用

```
() => {
	mutation.call(store, module.state, payload);
}
```

但是这样会有一个问题，这个函数是一个闭包，会保存之前旧的数据，导致mutation拿到的state有可能不是最新的，因此我们可以改成用getState这个方法去取最新的值

```
function getState(store, path) {
  return path.reduce((newState, current) => {
    return newState[current];
  }, store.state);
}
```

③安装actions

将所有的actions收集到_actions

```
module.forEachAction((action, type) => {
    store._actions[namespace + type] = store._actions[namespace + type] || [];
    store._actions[namespace + type].push((payload) => {
      action.call(store, store, payload);
    });
});
```

④安装getters

将所有的getters收集到_wrappedGetters

```
module.forEachGetters((getter, key) => {
    // getters重名会覆盖
    store._wrappedGetters[namespace + key] = function () {
      // return getter(module.state);
      return getter(getState(store, path));
    };
});
```

⑤遍历模块的子模块，然后递归调用installModule

```
module.forEachChild((child, key) => {
    installModule(store, rootState, path.concat(key), child);
});
```

⑥将子模块的state挂到父级模块上

递归的时候发现path路径的长度不为0，因此是子模块

```
if (path.length > 0) {
    // 说明是子模块的循环，需要将子模块的状态定义到根模块上
    // 又要开始找爸爸
    let parent = path.slice(0, -1).reduce((memo, current) => {
      return memo[current];
    }, rootState);

    // 这个api可以新增属性，如果本身对象不是响应式，则会直接复制
    // Vue.set会区分是否是响应式数据
    Vue.set(parent, path[path.length - 1], module.state);
}
```

但是到目前为止，我们的state和getters还没实现响应式，也就是说state更新了不会触发视图更新。这个要怎么处理呢？下个章节【vuex增加响应式效果】会进行讲解。