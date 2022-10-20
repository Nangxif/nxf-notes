# ModuleCollection的实现

因为要处理模块的数据，如果我们直接按照`new Store`所写的结构来进行处理，会不是很直观，因此我们提出了一种树形结构

```
// this.root = {
//   _raw: xxx, // 原始的用户的配置
//   _children: {
//     a: {
//       _raw: xxx,
//       state: a.state,
//     },
//     b: {
//       _raw: xxx,
//       _children: {},
//       state: b.state,
//     },
//   },
//   //   我们还可以把状态拿出来
//   state: this.root.state,
// };
```

我们要将实例化的时候传给Store构造函数的参数进行ModuleCollection处理，因此ModuleCollection的作用就是将模块转变为一棵树状的结构，然后将其赋值给Store实例的_modules属性

```
class Store {
  constructor(options) {
  	this._modules = new ModuleCollection(options);
  }
}
```

ModuleCollection类的主要逻辑在register函数，这个函数会采取递归的方式注册模块。最后生成的树存放在ModuleCollection实例的**root**属性上。

## 1.register函数

register函数是要用来将模块转变成树状结构的，那我们要传给register的参数是什么？

* 参数1【path】：一个数组，用来存放当前的module路径，比如根模块下的a模块，那么就表示为['a']，a模块下的b，那么就表示为['a','b']以此类推。
* 参数2【options】：每个模块对应的module原对象，就是`{state:{},getters:{},mutations:{},actions:{}}`这些（**以下都以“module原对象”来表示用户在使用时定义的这个对象**）。

然后我们一开始要先定义整棵树的节点结构

```
let newModule = {
	// 存放原对象
    _raw: rootModule,
    // 存放子模块
    _children: {},
    // 存放当前模块的state
    state: rootModule.state,
};
```

接着开始递归遍历module原对象

如果path的长度为0，那么说明是第一次遍历，正在遍历module原对象的根，因此

```
if (path.length === 0) {
  this.root = newModule;
}
```

到目前为止根就遍历好了，然后我们需要判断module原对象是否定义了modules属性，如果有的话说明可能有子模块，因此我们需要将这个modules里面的模块进行遍历注册。

在这之前我们提供一个遍历工具函数，**这个函数会贯穿整个vuex的实现过程**。

```
export const forEach = (obj = {}, fn) => {
  Object.keys(obj).forEach((key, index) => fn(obj[key], key));
};
```

然后我们接着写遍历子模块的逻辑，这里开始就要递归register了。

```
if (rootModule.modoles) {
  forEach(rootModule.modoles, (module, moduleName) => {
  	// 每次遍历子模块，都会重新拼接path，将当前的与自己的父级模块路径拼接起来，同时传入属于当前模块的module原对象
    this.register([...path, moduleName], module);
  });
}
```

在进行递归的时候，path的长度不是0了，因此，我们需要把每个模块各自对应的newModule放到父级newModule的_children里面。

```
let parent = path.slice(0, -1).reduce((memo, current) => {
  return memo._children[current];
}, this.root);
parent._children[path[path.length - 1]] = newModule;
```

完整代码如下

```
export default class ModuleCollection {
  constructor(options) {
    // 注册模块 肯定有个递归的操作，递归注册，我们注册完根模块之后，再把子模块注册到根模块上
    // vuex通过一个数组来记录每次要递归的状态
    this.register([], options);
  } 
  register(path, rootModule) {
    // 类似ast语法树解析
    let newModule = {
      _raw: rootModule,
      _children: {},
      state: rootModule.state,
    };
    if (path.length === 0) {
      this.root = newModule;
    } else {
      // 递归第二次就走到这里
      // [b,c]，b模块下的c
      // 这里应该有个找父亲的过程
      //   [a,b,c]，先把c去掉，reduce出来的就是c的根
      let parent = path.slice(0, -1).reduce((memo, current) => {
        return memo._children[current];
      }, this.root);
      parent._children[path[path.length - 1]] = newModule;
    }
    // 如果有modules说明有子模块
    if (rootModule.modoles) {
      forEach(rootModule.modoles, (module, moduleName) => {
        this.register([...path, moduleName], module);
      });
    }
  }
}
```

但是代码直接这样写会觉得有点啰嗦，如果用面向对象的思想，如果涉及到对一个东西操作了，比如增删改查，那我们可以搞一个类来封装这个操作。我们发现newModule这个东西完全可以作为一个类的实例，这个类用有获取子节点，添加子节点等功能。

## 2.Module类

上一段讲到这个类有获取子节点和添加子节点的功能，为了后续的一些需要，我们在这总结这个类全部的属性以及方法。

| 方法/属性       | 用途                         |
| --------------- | ---------------------------- |
| namespaced      | 当前原对象上的namespaced配置 |
| getChild        | 获取当前模块的子模块         |
| addChild        | 为当前模块添加子模块         |
| forEachMutation | 遍历当前模块的mutations      |
| forEachAction   | 遍历当前模块的actions        |
| forEachGetters  | 遍历当前模块的getters        |
| forEachChild    | 遍历当前模块的子模块         |

```
export default class Module {
  constructor(rootModule) {
  	// module原对象
    this._rawModule = rootModule;
    // 存放子模块
    this._children = {};
    // 存放当前模块的state
    this.state = rootModule.state;
  }
  get namespaced() {
    return this._rawModule.namespaced;
  }
  getChild(key) {
    return this._children[key];
  }
  addChild(key, module) {
    this._children[key] = module;
  }
  forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEach(this._rawModule.mutations, fn);
    }
  }
  forEachAction(fn) {
    if (this._rawModule.actions) {
      forEach(this._rawModule.actions, fn);
    }
  }
  forEachGetters(fn) {
    if (this._rawModule.getters) {
      forEach(this._rawModule.getters, fn);
    }
  }
  forEachChild(fn) {
    // 孩子肯定是有的，默认空对象
    forEach(this._children, fn);
  }
}
```

有了这个类之后，我们就可以对上面的写法进行改进。

```
import { forEach } from '../util';
import Module from './module';

export default class ModuleCollection {
  constructor(options) {
    // 注册模块 肯定有个递归的操作，递归注册，我们注册完根模块之后，再把子模块注册到根模块上
    // vuex通过一个数组来记录每次要递归的状态
    this.register([], options);
  }
  register(path, rootModule) {
    // 类似ast语法树解析
    // 抽离成Module类
    let newModule = new Module(rootModule);
    // 在当前要注册的模块上，做一个映射，这一步主要是为了在store.registerModule安装模块的时候，里面的installModule第四个参数能拿到Module实例
    rootModule.newModule = newModule;
    if (path.length === 0) {
      this.root = newModule;
    } else {
      // 递归第二次就走到这里
      // [b,c]，b模块下的c
      // 这里应该有个找父亲的过程
      //   [a,b,c]，先把c去掉，reduce出来的就是c的根
      let parent = path.slice(0, -1).reduce((memo, current) => {
        return memo.getChild(current);
      }, this.root);
      parent.addChild(path[path.length - 1], newModule);
    }
    // 如果有modules说明有子模块
    if (rootModule.modules) {
      forEach(rootModule.modules, (module, moduleName) => {
        this.register([...path, moduleName], module);
      });
    }
  }
  // 获取命名空间
  getNamespace(path) {
    let root = this.root;
    return path.reduce((namespace, key) => {
      // 这里要看看当前的模块有没有namespace
      root = root.getChild(key);
      return namespace + (root.namespaced ? key + '/' : '');
    }, '');
  }
}
```

我们可以看到改进后的ModuleCollection类多了getNamespace这么一个方法，这个方法是根据原模块上的namespaced，来拼接出完整的路径

比如，有个模块的结构是这样的

```
new Vuex.Store({
	state:{},
	modules:{
		a: {
			namespaced: true,
			state: {},
			modules: {
				b: {
					namespaced: true,
					mutations: {
						changeAge(){}
					}
				}
			}
		}
	}
})
```

那么b模块里面changeAge的路径就是`a/b/changeAge`，如果去掉a模块下的namespaced，那么b模块里面changeAge的路径就是`b/changeAge`。为什么会有路径这个东西？我们在下一个章节【递归安装模块以及格式化vuex】会讲到。