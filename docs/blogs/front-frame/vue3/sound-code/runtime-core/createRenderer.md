# createRenderer创建渲染器

## 一、createRenderer流程图

<Image :src="'/front-frame/vue3/sound-code/runtime-core/createRenderer/1.png'" />

## 二、createRenderer创建渲染器提供render渲染方法

我们在vue中使用的render，其实是在runtime-dom里面实现的，而runtime-dom里面的render，是基于runtime-core的createRenderer创建的渲染器提供的render渲染方法实现的。

```
export function render(vnode, container) {
  createRenderer(renderOptions).render(vnode, container);
}
```

因此createRenderer中的render接收两个参数，虚拟dom以及虚拟dom挂载的真实dom节点。

```
export function createRenderer(renderOptions) {
  const render = (vnode, container) => {
	// TODO
  };
  return {
    render,
  };
}
```

结构就是这样。那么这个render方法的核心是干什么的呢？

1. 将当前将要渲染的虚拟dom数据与上一次渲染的虚拟dom数据进行对比；
2. 如果当前将要渲染的虚拟dom是空的，而且上一次有在当前这个真实dom节点渲染过，那么就要卸载当前这个真实dom下的所有子节点-【unmount】；
3. 如果当前将要渲染的虚拟dom不为空，而且上一次有在当前这个真实dom节点渲染过，那么就要执行diff算法更新页面-【patch】。

```
export function createRenderer(renderOptions) {
  // 结构在runtime-dom传进来的renderOptions参数，里面提供了浏览器平台操作dom的方法。
  const {
    insert: hostInsert,
    remove: hostRemove,
    setElementText: hostSetElementText,
    setText: hostSetText,
    querySelector: hostQuerySelector,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    createElement: hostCreateElement,
    createText: hostCreateText,
    patchProp: hostPatchProp,
  } = renderOptions;
  const unmount = (vnode) => {
    hostRemove(vnode.el);
  };
  const render = (vnode, container) => {
	// 渲染过程是用你传入的renderOptions来渲染
    // 如果当前vnode是空的话
    if (vnode == null) {
      // 卸载逻辑
      if (container._vnode) {
        // 之前有渲染过，才需要卸载
        unmount(container._vnode);
      }
    } else {
      // 挂载逻辑
      // 这里既有初始化的逻辑又有更新的逻辑
      // 第一次初始化的时候，将虚拟节点存放到节点的_vnode属性上
      // 下一次这个节点更新的时候，可以直接从container上拿到这个旧的虚拟节点
      patch(container._vnode || null, vnode, container);
    }
    // 在unmount或者patch逻辑执行完成之后，要将当前的虚拟节点放在真实节点的_vnode属性上，以便下一次更新时执行同样的对比操作
    container._vnode = vnode;
  };
  return {
    render,
  };
}
```

## 三、核心逻辑patch

patch方法其实接收四个传参

1. n1-上一次渲染的虚拟dom数据
2. n2-当前即将渲染的虚拟dom数据
3. container-要挂载的真实节点
4. anchor-如果有要创建节点，那么需要一个参照的节点（container的子节点）

patch函数其实还不是真正的执行diff操作的，由于文本，Fragment，元素节点和函数式组件等的diff流程不一样，所以patch其实是一个分流的函数，通过判断当前要渲染的虚拟dom节点的类型，将文本，Fragment，元素节点和函数式组件等形式的节点分别执行他们对应的diff流程。

```
const patch = (n1, n2, container, anchor = null) => {
    // 核心patch方法
    if (n1 === n2) return;
    // 之所以把更新的第一步放在这里，是因为如果是一个节点从元素变为文本
    // 或者一个节点从文本变为元素，那么就没必要走下面的process，因为流程都是一样的，需要删除后重新插入
    // 但是我们不能直接通过n1===n2去判断两个节点是否一致，因为两个相同的对象也是不会相等的

    if (n1 && !isSameVnode(n1, n2)) {
      // 如果旧的虚拟节点存在，并且旧的虚拟节点和新的虚拟节点的type（这里的type是指'div','span',Text,Fragment等）以及key不一样，那么就要卸载掉这个旧的虚拟节点，并且将旧的虚拟节点置为null
      unmount(n1); //删除老的
      // 这一步很妙，因为n1设置为null了，他去走下面的process逻辑的话，就会自动走里面的创建逻辑
      n1 = null;
    }
    const { type, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container);
        break;
      case Fragment: //无用标签
        processFragment(n1, n2, container);
        break;
      default:
        if (shapeFlag & ShapeFlags.ELEMENT) {
          // 初次渲染
          /**
       * render(
        h('h1', { style: { color: 'red' }, onClick: () => alert(1) }, [
          h('span', 'world'),
          '123',
        ]),
        app
      );
       * 像上面那种情况，123是渲染不出来的，因为123会走到下面的mountElement然后传给n2，
      因为123是一个字符串，字符串里面没有type属性，所以会被创建一个undefined节点
       * */
          // 后续还有组件的初次渲染，目前是元素的初始化渲染
          processElement(n1, n2, container, anchor);
        } else if (shapeFlag & ShapeFlags.COMPONENT) {
          // 函数式组件和状态组件都走这里
          processComponent(n1, n2, container, anchor);
        }
    }
};
```

接下来就是各种类型的diff算法，我们下一节讲解。