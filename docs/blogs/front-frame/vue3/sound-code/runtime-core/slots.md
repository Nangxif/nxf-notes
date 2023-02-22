# 组件插槽

其实我们在前两节将组件的创建和更新的时候，已经顺带地把这一部分的知识点说了一部分了。

**组件的插槽是一个对象，放着映射关系，渲染组件的时候去映射表中查找。**

我们先来看一下slot是怎么使用的

```
const MyComponent = {
    render() {
      return h(Fragment, [
        h('div', this.$slots.header()),
        h('div', this.$slots.footer()),
      ]);
    },
};
const VueComponent = {
    render() {
      // children如果是对象说明是组件的插槽
      // 对象不能写在第二个参数，会被认为是属性
      return h(MyComponent, null, {
        header: () => h('p', 'header'),
        footer: () => h('p', 'footer'),
      });
    },
};
render(h(VueComponent), app);
```

还记得h函数的原理吗？h的原理就是已整理参数，最后调用createVnode创建虚拟节点。

正如上面这种用法

```
h(MyComponent, null, {
    header: () => h('p', 'header'),
    footer: () => h('p', 'footer'),
})
```

最后传给createVnode的参数是这样的

```
createVnode(MyComponent, null, {
    header: () => h('p', 'header'),
    footer: () => h('p', 'footer'),
})
```

在createVnode里面，如果type是一个函数，那么shapeFlag就被打上**ShapeFlags.STATEFUL_COMPONENT**标签。再加上children也是一个对象，所以这个虚拟节点的vnode.shapeFlag为

```
ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.SLOTS_CHILDREN;
```

意为有插槽的组件。因此在patch的时候会走processComponent流程。

在setupComponent的时候会进行插槽的初始化initSlots

```
initSlots(instance, children);


function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & ShapeFlags.SLOTS_CHILDREN) {
    instance.slots = children;
  }
}
```

这个children就是上面的对象

```
{
    header: () => h('p', 'header'),
    footer: () => h('p', 'footer'),
}
```

正如我们开头所讲**组件的插槽是一个对象，放着映射关系，渲染组件的时候去映射表中查找**，到这一步就存放起了这个映射关系。

那如果子组件要取slots的话要怎么取呢？

还记得我们上一节讲的给组件的实例赋值吗？

```
instance.proxy = new Proxy(instance, publicInstanceProxy);
```

在这一步的时候，publicInstanceProxy里面的get处理了子组件在取$slots的时候应该怎么取

```
const publicPropertyMap = {
  $attrs: (i) => i.attrs,
  $slots: (i) => i.slots,
};

let getter = publicPropertyMap[key]; //this.$attrs
if (getter) {
  return getter(target);
}
```

所以，上面的这个例子

```
h('div', this.$slots.header())
```

`this.$slots.header`取到的是`() => h('p', 'header')`，是一个函数。

h在处理的时候，如果只有两个参数，并且第二个参数是一个vnode的话，直接通过下面的代码创建虚拟节点

```
createVnode(type, null, [this.$slots.header()])
```

以上就是slot的流程。