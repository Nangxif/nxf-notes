# 虚拟节点vnode

上一节讲到，runtime-dom提供的render方法会使用到runtime-core提供的createRenderer渲染器创建方法，这个方法创建的渲染器会提供一个render方法，这个方法在进行首次渲染和二次渲染的时候，都是基于虚拟节点（我觉得可以理解成虚拟节点就是渲染器操作的最小单元）进行计算，最后将虚拟节点转换为真实节点。我们经常会用到的vue提供的h方法，就是用来创建虚拟节点的，但是h方法虽然是用来创建虚拟节点的，但是其核心是基于createVnode方法，h方法的功能就是拆分处理传递进来的参数，然后通过调用createVnode创建虚拟节点。

## 一、渲染函数h

h方法是给用户来用的，具备了多样性，它有以下几种传参方式

```
// h('div');
// h('div', { style: { color: 'red' } });
// h('div', { style: { color: 'red' } }, 'hello');
// h('div', 'hello');
// h('div', null, 'hello', 'world');
// h('div', null, h('span'));
// h('div', null, [h('span')]);
// 这样是不行的，只会渲染第一个，第二个参数如果是孩子的话，就不会渲染后面的了，只能看到132，看不到123
// h('h1', h('span', '132'), 123);
// 除非你这样写
// h('h1', [h('span', '132'), 123]);
```

从上面的几种传参方式我们可以总结出以下几个规律

1. 如果参数长度为2，那么第二个参数有可能是
   1. 一个非数组的对象，那么这个对象还有可能是
      1. 一个虚拟节点，那么将其包装成数组然后用createVnode创建虚拟节点`createVnode(type, null, [propsChildren])`
      2. 是一个props属性，那么直接用createVnode创建只有props的虚拟节点`createVnode(type, propsChildren)`
   2. 一个数组或者是一个文本，那么直接用createVnode创建没有props的虚拟节点`createVnode(type, null, propsChildren)`
2. 如果参数大于2，那么要截取大于2的参数，组成一个children数组，用createVnode创建虚拟节点

```
// h.ts源码
// h和createVnode都是创建虚拟DOM的，只不过h调用了createVnode

export function h(type, propsChildren, children) {
  // 其余的除了三个形参之外的肯定是孩子
  const l = arguments.length;
  if (l === 2) {
    if (isObject(propsChildren) && !isArray(propsChildren)) {
      // 如果第二个参数不是一个数组，那么它有可能是属性，也有可能是元素
      //   如果第二个参数是一个元素节点而不是props
      if (isVnode(propsChildren)) {
        // 为什么要将儿子包装成数组，因为元素可以循环创建
        return createVnode(type, null, [propsChildren]);
      }
      //   否则第二个参数是一个props，属性
      return createVnode(type, propsChildren);
    }
    // 如果第二个参数是一个数组，或者是文本，那么就不用包一层[]
    return createVnode(type, null, propsChildren);
  } else {
    if (l > 3) {
      // 参数大于三个
      children = Array.from(arguments).slice(2);
    } else if (l === 3 && isVnode(children)) {
      // 参数等于三个
      children = [children];
    }
    // 其他
    // children的情况有两种 文本/数组
    return createVnode(type, propsChildren, children);
  }
}
```

## 二、核心方法createVnode

createVnode方法就是为了创建出一个结构如下的虚拟节点对象

```
const vnode = {
    type,
    props,
    children,
    el: null, //虚拟节点上对应的真实节点，用于diff算法
    key: props?.key, //用于diff算法
    __v_isVnode: true,
    shapeFlag,
};
```

type，props，children我们知道是从h来的，el，用于存放当前这个虚拟节点对应的真实节点，key是用于diff算法的，__v_isVnode用来标识这个对象是一个虚拟节点，那么shapeFlag是用来干什么的？

这里我们先来介绍一个前置知识点，vue3提供了ShapeFlags标识，这个标识集合有下面这些内容

```
export const enum ShapeFlags {
  // vue3提供的标识
  ELEMENT = 1, // 0001 元素
  FUNCTION_COMPONENT = 1 << 1, // 0010 函数式组件
  STATEFUL_COMPONENT = 1 << 2, // 0100 组件
  TEXT_CHILDREN = 1 << 3, // 1000 子节点是文本
  ARRAY_CHILDREN = 1 << 4, // 10000 子节点是数组
  SLOTS_CHILDREN = 1 << 5, // 100000 组件使用了插槽
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_ALIVE = 1 << 8,
  COMPONENT_KEPI_ALIVE = 1 << 9,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTION_COMPONENT,
}
```

其实vue3的虚拟节点用shapeFlag来区分这个节点是一个什么类型的节点，ELEMENT表示是一个元素节点，FUNCTION_COMPONENT是一个函数式组件，STATEFUL_COMPONENT是一个普通的组件等等。

如果我要表示一个元素里面包含一个数组，那我的shapeFlag可以这么表示

```
let r = ShapeFlags.ELEMENT|ShapeFlags.ARRAY_COMPONENT

0000 0001
或运算，按位或，只要有一个是1就是1
0001 0000
// 结果为
0001 0001
```

后面如果我们要判断一个虚拟节点的子节点是否为一个数组，我们可以这么判断

```
ShapeFlags.ARRAY_COMPONENT & r
```

如果返回0，那么说明不包含，大于0说明包含。

此时上面的结果返回

```
0001 0001
或运算，按位与，两个为1才是1
0001 0000
// 结果为
0001 0000
大于0，说明r包含ShapeFlags.ARRAY_COMPONENT
```

我们可以找一个不包含的shapeFlag来计算一下，用ShapeFlags.TEXT_CHILDREN来计算

```
ShapeFlags.TEXT_CHILDREN & r

0001 0001
&
0000 1000
结果为
0000 0000
结果等于0，说明r不包含ShapeFlags.TEXT_CHILDREN
```

这就是虚拟节点shapeFlag的作用。

createVnode的源码：

```
// 虚拟节点有很多：组件的，元素的，文本的
// ShapeFlag应该是定义 自身类型 | 儿子是数组还是字符串
export function createVnode(type, props, children?) {
  // 组合方案 shapeFlag 我想知道一个元素中包含的是多个儿子还是一个儿子 标识
  // 如果type是一个字符串，那么我就认为是一个元素
  // 当type是一个对象时，我们不能断定他就是ShapeFlags.COMPONENT，type是对象的时候，他是有状态的
  let shapeFlag = isString(type)
    ? ShapeFlags.ELEMENT
    : isObject(type)
    ? ShapeFlags.STATEFUL_COMPONENT
    : 0;
  // 虚拟dom就是一个对象，diff算法，直接创建真实dom的属性会比较多，diff算法很麻烦
  const vnode = {
    type,
    props,
    children,
    el: null, //虚拟节点上对应的真实节点，用于diff算法
    key: props?.key, //用于diff算法
    __v_isVnode: true,
    shapeFlag,
  };

  if (children) {
    let type = 0;
    // 接下来我们判断它的孩子是不是数组
    if (isArray(children)) {
      type = ShapeFlags.ARRAY_CHILDREN;
    } else if (isObject(children)) {
      // 这个组件是带有插槽的
      type = ShapeFlags.SLOTS_CHILDREN;
    } else {
      // 如果不是数组的话我们认为他是字符串
      children = String(children); //这里用String包一下防止报错
      type = ShapeFlags.TEXT_CHILDREN;
    }
    // 这样子就可以把元素本身和儿子的样子都展现出来
    vnode.shapeFlag |= type;
  }
  return vnode;
}
```

## 三、相同的虚拟节点

如何判断两个虚拟节点是否是相同节点？套路是

1. 标签名相同
2. key是一样的

```
export function isSameVnode(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}
```

