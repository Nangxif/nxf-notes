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

Fragment标签是用来包裹一堆其他的节点的，在渲染的时候Fragment标签在节点上并不会有体现。