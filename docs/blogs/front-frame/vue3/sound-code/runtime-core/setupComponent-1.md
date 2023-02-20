# setup组件的创建和更新【上】

这个章节的内容比较长，我就分为上下章节来讲解

在[【createRenderer创建渲染器】](https://nangxif.github.io/nxf-notes/blogs/front-frame/vue3/sound-code/runtime-core/createRenderer.html)一节中，patch的最后一个判断

```
if (shapeFlag & ShapeFlags.COMPONENT) {
  // 函数式组件和状态组件都走这里
  processComponent(n1, n2, container, anchor);
}
```

就是处理组件的创建和更新。还是按照前面几种类型的处理方式，n1为null表示需要走创建流程，不为null表示需要走更新流程。

```
const processComponent = (n1, n2, container, anchor) => {
    // 统一处理组件，里面再区分是普通组件还是函数式组件
    if (n1 == null) {
      // 组件创建
      mountComponent(n2, container, anchor);
    } else {
      // 如果是外面的render导致组件发生变化，那么会走这段逻辑
      // 组件更新靠的是props
      updateComponent(n1, n2);
    }
};
```

## 一、组件的创建mountComponent

这个过程分为三步：

1. 创建组件实例
2. 处理这个实例，给实例赋值
3. 创建实例的副作用

首先我们先写第一步

### 1.创建组件实例

```
let instance = (vnode.component = createComponentInstance(vnode));
```

将创建出来的实例放到虚拟节点的component属性上。

createComponentInstance就是先初始化一个component实例对象

```
function createComponentInstance(vnode) {
  const instance = {
    // 组件的实例
    data: null,
    vnode,
    subTree: null, //vnode组件的虚拟节点，subTree渲染的组件内容
    isMounted: false, //组件是否挂载
    update: null, //组件的render方法
    propsOptions: vnode.type.props,
    props: {}, //组件的props
    attrs: {}, //组件的attrs
    proxy: null,
    render: null,
    component: null,
    next: null,
    setupState: {}, //setup如果返回的是对象的话，这个就存储这个返回值
    slots: {}, //这里边就是插槽相关内容
  };
  return instance;
}
```

### 2.给实例赋值

```
setupComponent(instance);
```

这里还可以细分成以下几个步骤

①初始化props以及attrs

②初始化插槽

③赋值实例上的proxy属性

④处理组件的data

⑤处理组件的setup函数

⑥初始化出实例的render函数

我们setup组件可能是这么使用的

```
const VueComponent = {
  props: {
    address: String,
  },
  setup(props) {
    const name = ref('珠峰');
    const age = ref('13');
    setTimeout(() => {
      age.value++;
    }, 1000);
    return { name, age, address: props.address + '北京' };
  },
  render() {
    return h(Fragment, [this.name, this.age, this.address]);
  },
};
render(h(VueComponent, { address: '地球' }), app);
```

因此在这里会先处理组件的属性，将虚拟节点上props属性根据组件在使用时定义的props映射表，分类成组件的props以及attrs。并且把props变成响应式的。

```
const initProps = (instance, rawProps) => {
  const props = {};
  const attrs = {};
  // instance.propsOptions = vnode.type.props
  // 看到这里突然从node上的type上面取props的值有点纳闷，但是回去看源码就懂了
  // 组件类型的type是一个对象，类似这样
  // const VueComponent = {
  //   props: {
  //     address: String,
  //   },
  //   setup(props) {
  //     const name = ref('曩昔');
  //     const age = ref('27');

  //     setTimeout(() => {
  //       age.value++;
  //     }, 1000);
  //     return h(Fragment, [name.value, age.value, props.address]);
  //   },
  // };
  const options = instance.propsOptions || {};
  if (rawProps) {
    for (let key in rawProps) {
      const value = rawProps[key];
      if (hasOwn(options, key)) {
        props[key] = value;
      } else {
        attrs[key] = value;
      }
    }
  }
  //   这里props不希望在组件内部被更改，但是props得是响应式的，因为后续属性变化了要更新视图，用的应该是shallowReactive，但是我们没写shallowReactive，所以用reactive代替
  instance.props = reactive(props);
  instance.attrs = attrs;
};
```

接着需要初始化插槽

```
function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & ShapeFlags.SLOTS_CHILDREN) {
    instance.slots = children;
  }
}
```

第三步，赋值实例上的proxy属性

我们生成的这个proxy，后续这个组件在取data上面的属性的时候，在取setupState上面的属性的时候，在取props上面的熟悉的时候，甚至是取$attr和$slots的值的时候，都会在这个代理对象上拿。

因此，通过上面我们可以知道，在实例上取属性，首先会先检查data上面有没有这个属性，再去检查setupState，最后检查props上面的属性。

```
instance.proxy = new Proxy(instance, publicInstanceProxy);

const publicInstanceProxy = {
  get(target, key) {
    const { data, props, setupState } = target;
    if (data && hasOwn(data, key)) {
      return data[key];
    } else if (setupState && hasOwn(setupState, key)) {
      return setupState[key];
    } else if (props && hasOwn(props, key)) {
      return props[key];
    }
    let getter = publicPropertyMap[key]; //this.$attrs
    if (getter) {
      return getter(target);
    }
  },
  set(target, key, value) {
    const { data, props, setupState } = target;
    if (data && hasOwn(data, key)) {
      data[key] = value;
      return true;
      // 用户操作的是代理对象，这里屏蔽了
      // 但是我们可以通过instance.props拿到真实的props
    } else if (setupState && hasOwn(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (props && hasOwn(props, key)) {
      // 通过这里我们可以知道，实例上的props是不能修改的
      console.warn(`attempting to mutate prop ${key as string}`);
      return false;
    }
    return true;
  },
};
```

第四步，处理组件的data

```
let data = type.data;
if (data) {
    if (!isFunction(data)) {
      return console.warn('data option must be a function');
    }
    instance.data = reactive(data.call(instance.proxy));
}
```

由上面这一段就可以看出data必须是一个函数，最后执行完返回的对象还要包一层reactive，实现响应式。data函数里面的this指向instance.proxy。

第五步，处理组件的setup函数

```
let setup = type.setup;
if (setup) {
    const setupContext = {
      emit: (event, ...args) => {
        // 事件的实现原理
        const eventName = `on${event[0].toUpperCase() + event.slice(1)}`;
        const handler = instance.vnode.props[eventName];
        handler && handler(...args);
      },
      attrs: instance.attrs,
      slots: instance.slots,
    };
    setCurrentInstance(instance);
    const setupResult = setup(instance.props, setupContext);
    // setup执行完之后置空
    setCurrentInstance(null);
    if (isFunction(setupResult)) {
      // render函数
      instance.render = setupResult;
    } else if (isObject(setupResult)) {
      // 对内部的ref进行取消.value
      instance.setupState = proxyRefs(setupResult);
    }
}
```

setup函数参数有两个，一个是props，是一个上下文对象（这个上下文对象里面包含emit方法以及attrs和slots对象）。

与此同时要给全局变量currentInstance赋值，将当前生成的这个实例存放到该变量上，在其他地方可以通过`const getCurrentInstance = () => currentInstance;`取到当前的组件实例。

最后要执行一下setup函数，判断一下setupResult的值是一个函数还是一个对象，如果是函数的话，那么这个函数就是render函数，如果是对象的话，那么这个对象就是实例上的setupState。

至此一个实例就创建完成了。

