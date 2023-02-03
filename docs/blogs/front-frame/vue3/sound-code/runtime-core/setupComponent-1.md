# setup组件的创建和更新【上】

这个章节的内容比较长，我就分为上下章节来讲解

在[【createRenderer创建渲染器】](/nxf-notes/blogs/front-frame/vue3/sound-code/runtime-core/createRenderer.html)一节中，patch的最后一个判断

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
initProps = (instance, rawProps) => {
  const props = {};
  const attrs = {};
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

