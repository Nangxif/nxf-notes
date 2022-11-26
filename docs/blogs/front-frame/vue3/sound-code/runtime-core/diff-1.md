# 元素节点组件的diff算法【上】

在【createRenderer创建渲染器】的末尾我们提供了patch的源码。这段源码中。会首先通过switch将新虚拟节点是文本类型的和无用标签的都单独抽离出来处理，然后再将剩余的类型进行判断，如果发现虚拟节点的`shapeFlag`属性是属于`ShapeFlags.ELEMENT`元素节点类型的，那么就执行`processElement`函数。

## 一、processElement创建流程

还是按照老规矩，先判断旧的虚拟节点是否为null，如果为null的话就是需要进行创建节点和挂载节点的操作

```
const processElement = (n1, n2, container, anchor) => {
    if (n1 === null) {
      mountElement(n2, container, anchor);
    } else {
      // 更新流程
      // 元素节点更新比对，diff算法，比较麻烦，因为要比较儿子
      patchElement(n1, n2);
    }
};
```

如果旧的虚拟节点不存在，要进行创建和挂载节点的操作，执行的`mountElement`函数里面还是需要进行一些判断操作的

1. 创建真实的dom节点，然后赋值给虚拟节点的el属性；
2. 处理props；
3. 判断虚拟节点的子节点类型，如果子节点是文本，那么就需要将这些文本插入到el指向的真实dom节点上。如果子节点是元素节点，那么处理方式就跟Fragment处理子节点的方式一样，调用`mountChildren`函数对每一个子节点进行循环创建和挂载；
4. 将上面处理后的el属性，插入到`container`容器的参照物节点`anchor`之前。

```
const mountElement = (vnode, container, anchor) => {
    const { type, props, children, shapeFlag } = vnode;
    // 将真实的元素挂载到虚拟节点上，后续用于复用节点和更新
    let el = (vnode.el = hostCreateElement(type));
    if (props) {
      for (let key in props) {
        hostPatchProp(el, key, null, props[key]);
      }
    }
    if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
      //如果孩子是文本
      hostSetElementText(el, children);
    } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
      // 如果孩子是一个数组，那么就需要循环了
      mountChildren(children, el);
    }
    hostInsert(el, container, anchor);
};
```

## 二、processElement更新流程

如果在执行`processElement`的时候，我们发现新虚拟节点和旧虚拟节点都存在，那么就需要执行更新流程`patchElement`。

```
const patchElement = (n1, n2) => {
    // 先复用节点，这样就不用再创建一个节点（浪费性能），然后再比较属性，再比较儿子
    let el = (n2.el = n1.el);
    let oldProps = n1.props || {};
    let newProps = n2.props || {};
    patchProps(oldProps, newProps, el);
    // 比完属性之后开始比较儿子
    // n2 = normalizeNode(n2);
    // debugger;
    patchChildren(n1, n2, el);
};
```

`patchChildren`函数是整个diff算法的核心，下面我把它单独抽离成一个板块来讲。

## 三、diff算法的核心patchChildren

接下来我们就是要开始比较两个虚拟节点的儿子的差异。

因为一个节点的子节点可能有，也可能没有，子节点有可能是文本，有可能是数组，这些情况对应的处理方式都不一样，所以我们先整理一下，看看子节点有可能是什么情况。

| 新儿子 | 旧儿子 | 操作方式                 |
| ------ | ------ | ------------------------ |
| 文本   | 数组   | 删除老儿子，设置文本内容 |
| 文本   | 文本   | 更新文本即可             |
| 文本   | 空     | 更新文本即可，与上面一致 |
| 数组   | 数组   | diff算法                 |
| 数组   | 文本   | 清空文本，进行挂载       |
| 数组   | 空     | 进行挂载，与上面相似     |
| 空     | 数组   | 删除所有儿子             |
| 空     | 文本   | 清空文本                 |
| 空     | 空     | 无需处理                 |

```
const patchChildren = (n1, n2, el) => {
    // 比较两个虚拟节点的儿子的差异，el是当前的父节点
    const c1 = n1.children;
    const c2 = n2.children;
    //  比较两个儿子的差异
    // 儿子有可能是文本，有可能没儿子，有可能是数组
    const prevShapeFlag = n1.shapeFlag;
    const shapeFlag = n2.shapeFlag;
    // 子元素比较情况
    // 新节点为文本
    if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
      // 文本      数组      （删除老儿子，设置文本内容）
      if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
        unmountChildren(c1);
      }
      // 文本      文本      （更新文本即可）不需要删除老儿子
      if (c1 !== c2) {
        hostSetElementText(el, c2);
      }
    } else {
      // 新的为数组或者为空
      if (prevShapeFlag & ShapeFlags.ARRAY_CHILDREN) {
        if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
          // diff算法
          // 全量diff，vue3还有一个diff叫靶向diff
          // 这个性能相对会比较低
          // 比如
          /**
           * <div>
           *    <span>123</span>
           *    <span>{{name}}</span>
           * </div>
           * 全量更新的话，会从div开始全部比对，但是靶向更新的话就只是比对name那部分
           * */
          patchKeyChildren(c1, c2, el);
        } else {
          //  空        数组      （删除所有儿子）
          // 新的不是数组（文本，或者空）
          unmountChildren(c1);
        }
      } else {
        if (prevShapeFlag & ShapeFlags.TEXT_CHILDREN) {
          // 数组      文本      （清空文本，进行挂载）
          hostSetElementText(el, '');
        }
        if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
          // 数组      文本      （清空文本，进行挂载）
          mountChildren(c2, el);
        }
      }
    }
};
```

如果新的虚拟节点的子节点是数组，旧的节点的子节点也是数组，那么就得执行`patchKeyChildren`。这个函数也就是面试常常会问到的`diff`算法的核心。

下面我们按照简单的情况到复杂的情况来讲解这个diff算法的细节。

`diff`算法的核心代码有四个指针i1（旧子节点从前往后遍历的指针）、i2（新子节点从前往后遍历的指针）、e1（旧子节点从后往前遍历的指针）、e2（新子节点从后往前遍历的指针）。因为i1和i2是同步的，所以在代码的行为上就只用一个指针i表示。

```
let i = 0;
let e1 = c1.length - 1;
let e2 = c2.length - 1;
```

### 1.sync from start

假设现在有如下的旧子节点和新子节点，那么这些指针的指向如下。

<Image :src="'/front-frame/vue3/sound-code/runtime-core/diff/1.png'" />

我们将旧子节点和新子节点翻译成两个数组。

```
[a,b,c]   旧子节点数组
[a,b,d,e] 新子节点数组
```

我们先从前往后遍历这两个数组，如果在遍历的时候，相同的索引对应的虚拟节点是一样的，那么这两个相同的节点就执行`patch`操作，其余的继续往后遍历，直到发现两个节点不一样，就停止遍历。

```
// c1指的是旧的虚拟节点数组，c2指的是新的虚拟节点数组
while (i <= e1 && i <= e2) {
  // 有任何一方停止循环就直接跳出
  const n1 = c1[i];
  const n2 = c2[i];
  if (isSameVnode(n1, n2)) {
    // 如果发现这两个节点是一样的，那么我们就开始比较属性和子节点，递归了
    patch(n1, n2, el);
  } else {
    // 此时的i就记录了第一个长得不一样的指针
    break;
  }
  i++;
}
```

上面的例子在进行完遍历之后

i=2，e1=2，e2=3

这个过程就叫**sync from start**。

### 2.async from end

从前往后比较完之后我们从后往前开始比较

假设现在有如下的旧子节点和新子节点，那么这些指针的指向如下。

<Image :src="'/front-frame/vue3/sound-code/runtime-core/diff/2.png'" />

我们将旧子节点和新子节点翻译成两个数组。

```
[a,b,c]   旧子节点数组
[d,e,b,c] 新子节点数组
```

我们先从后往前遍历这两个数组，如果在遍历的时候，相同的索引对应的虚拟节点是一样的，那么这两个相同的节点就执行`patch`操作，其余的继续往前遍历，直到发现两个节点不一样，就停止遍历。

```
// e1和e2不能小于i，因为i之前都已经比较过了是相同的
while (i <= e1 && i <= e2) {
  const n1 = c1[e1];
  const n2 = c2[e2];
  if (isSameVnode(n1, n2)) {
    patch(n1, n2, el);
  } else {
    break;
  }
  e1--;
  e2--;
}
```

上面的例子在进行完遍历之后

i=0，e1=0，e2=1

这个过程就叫**sync from end**。

前面这两个步骤，能适用的情况只有从前往后遍历的时候，前面有一部分或者全部是一样的，或者从后往前遍历的时候，后面一部分或者全部是一样的。

上面说新旧子节点序列只能满足从前往后遍历有一部分一致，或者从后往前只有一部分一致，那么就如下面四个例子

第一个例子

旧节点为a,b新节点为a,b,c 那么c就是需要挂载上去的，而且执行完`async from start`之后i=2,e1=1,e2=2。

<Image :src="'/front-frame/vue3/sound-code/runtime-core/diff/3.png'" />

第二个例子

旧节点为a,b  新节点为c,a,b那么c是需要挂到前面的，而且执行完`async from end`之后i=0,e1=-1,e2=0。

<Image :src="'/front-frame/vue3/sound-code/runtime-core/diff/4.png'" />

我们通过上面两个例子可以发现一个规律：**i比e1大说明最前或者最后有新增的，i和e2之间的是新增的部分，这种情况很特殊，仅限于旧子节点，新子节点的头部或者旧子节点，新子节点尾部都一样的情况。此时我们要进行同序列新增。**

第三个例子

旧节点为a,b,c新节点为a,b那么c就是需要卸载的，而且执行完`async from start`之后i=2,e1=2,e2=1。

<Image :src="'/front-frame/vue3/sound-code/runtime-core/diff/5.png'" />

第四个例子

旧节点为a,b,c新节点为b,c那么a就是需要卸载的，而且执行完`async from end`之后i=0,e1=0,e2=-1。

<Image :src="'/front-frame/vue3/sound-code/runtime-core/diff/6.png'" />

我们通过上面两个例子可以发现一个规律：**i比e2大说明最前或者最后有要卸载的，i到e1之间就是要卸载的。此时我们要进行同序列卸载。**

### 3.common sequence + mount（同序列新增）

```
if (i > e1) {
  if (i <= e2) {
    // 这部分是新增的部分
    while (i <= e2) {
      // 创建新节点 扔到容器中
      // patch(null, c2[i], e1);如果直接这么写的话，那么默认都是往后appendChild插入节点，这个就有问题了
      // 因为新增的节点可能是新增在前面的
      // 这时候我们可以通过判断e2指针后面是否还有兄弟节点的指针来判断是往前插入还是往后插入
      const nextPos = e2 + 1;
      const anchor = nextPos < c2.length ? c2[nextPos].el : null;
      patch(null, c2[i], el, anchor);
      i++;
    }
  }
}
```

patch的第一个参数为null，会认为是插入元素，底层会调用`insertBefore(child, anchor)`来插入元素，当`anchor = null`时，`insertBefore`相当于`appendChild`。

在同序列新增的流程中，如果e2指针后面还有兄弟节点指针（例子一），那么说明新的子节点是要插入到前面的，因此`anchor`取值`c2[nextPos].el`。

比如在例子一中，开始遍历i到e2的部分，那么第一次遍历，anchor就是a。c会插入到a的前面。

在同序列新增的流程中，如果e2指针后面没有兄弟节点指针（例子二），那么说明新的子节点是要插入到后面的，因此`anchor`取值null。

### 4.common sequence + unmount（同序列卸载）

```
if (i > e2) {
  if (i <= e1) {
    // 这部分是卸载的部分
    while (i <= e1) {
      unmount(c1[i]);
      i++;
    }
  }
}
```

比如例子三，i是2，e1也是2，那么开始递增i，开始循环卸载，c就被卸载掉了。
