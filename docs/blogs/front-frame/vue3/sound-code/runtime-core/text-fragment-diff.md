# 文本和无用标签(Fragment)的diff算法

上一节【createRenderer创建渲染器】的末尾我们提供了patch的源码。这段源码中。会首先通过switch将新虚拟节点是文本类型的和无用标签的都单独抽离出来处理。

## 一、文本类型的diff-processText

如果新的虚拟节点是文本类型。那么可能会出现两种情况

1. 旧的虚拟节点不存在-那么意味着要创建
2. 旧的虚拟节点存在，并且新的虚拟节点的子节点（也就是文本）与旧的虚拟节点的子节点不一样（也就是文本内容不一样）-那么意味着要更新

如果代码执行到processText函数了，那么新的虚拟节点一定是存在的，因为在render函数里面，新的虚拟节点如果为null的话，有可能会进行卸载操作，否则才会走到patch逻辑，进而执行processText流程。

```
const processText = (n1, n2, container) => {
    if (n1 === null) {
      // 创建
      /**
       * n2
       * {type: Symbol(Text), props: null, children: '123', el: null, key: undefined, …}children: "123"el: textkey: undefinedprops: nullshapeFlag: 8type: Symbol(Text)__v_isVnode: true[[Prototype]]: Object
       * n2.children
       * '123'
       * */
      hostInsert((n2.el = hostCreateText(n2.children)), container);
    } else {
      // 文本更新流程
      // 文本的内容变化了，我可以复用老的节点
      const el = (n2.el = n1.el); // 这里给新的虚拟节点的el属性赋值上真实的dom节点
      if (n1.children !== n2.children) {
        hostSetText(el, n2.children);
      }
    }
};
```

## 二、无用标签(Fragment)的diff-processFragment

在这之前我们得先了解Fragment标签是干嘛用的。

Fragment标签是用来包裹一堆其他的节点的，在渲染的时候Fragment标签在真实节点上并不会有体现。

因此。Fragment的diff算法，就是对每个子节点逐一执行patch流程。

```
const processFragment = (n1, n2, container) => {
	// 如果旧的虚拟节点不存在，那么就需要循环遍历n2的子节点并且逐一挂载
    if (n1 == null) {
      mountChildren(n2.children, container);
    } else {
    // 如果旧的虚拟节点存在，那么就需要循环遍历比较n1的子节点和n2的子节点
      patchChildren(n1, n2, container);
    }
};
```

### 1.mountChildren

```
const mountChildren = (children, container) => {
    for (let i = 0; i < children.length; i++) {
      // 处理后要进行替换，否则children中存放的依旧是字符串
      let child = normalize(children, i);
      patch(null, child, container);
    }
};
```

因为Fragment的子节点里面可能会有文本，可能会有数字

```
<Fragment>
	123
	<div>文本1</div>
	文本2
</Fragment>
```

如果出现像上面123这种数字类型的子节点，或者像“文本2”这种类型的子节点，我们需要把它转成`Text`文本虚拟节点。下面`normalize`函数的功能就是将数字和文本全部转换为`Text`虚拟节点。

```
const normalize = (children, i) => {
    if (isString(children[i]) || isNumber(children[i])) {
      let vnode = createVnode(Text, null, children[i]);
      children[i] = vnode;
    }
    return children[i];
};
```

### 2.patchChildren

patchChildren就是面试经常会问到的diff算法的核心部分，由于这部分内容与下个章节内容重合，因此这部分我们在下节【元素节点组件的diff算法】讲解。