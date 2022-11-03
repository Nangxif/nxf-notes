# runtime-dom

我们先讲一下runtime-dom的由来吧。vue3有一部分逻辑就是创建一个渲染器，渲染器上有一个render方法，render方法会将虚拟节点转换为真实节点，真实节点挂载到真实根节点上，在更新的时候采用diff算法进行更新以提升性能等。那么在render进行这些工作的过程中，会使用到创建节点，创建文本节点，插入元素节点，删除元素节点等操作，那么这些操作，其实是可以解耦出来的，为什么这么说？在小程序平台，浏览器平台，还有其他的一些适合使用vue这种渲染逻辑的平台，他们的创建节点的方式，插入元素的方式，肯定是不一样的，例如，小程序肯定没有浏览器的`document.createElement()`，那么我们如果要使用vue的diff算法，靶向更新，虚拟节点转换为真实节点等功能，总不能一个平台写一份代码吧，其实我们可以定义好一些操作（将元素创建，插入节点封装成一个个的api）作为配置，然后传给createRenderer去创建渲染器，因此，runtime-dom就是提供这份api配置的一个包，而runtime-core就是提供创建渲染器方法（createRenderer）的一个包，这个渲染器的render可以使用runtime-dom提供的基于浏览器的配置。当然，如果你想在小程序使用，你也可以自己写一个配置包，自己提供小程序的元素创建方法，元素插入等方法。

## 一、runtime-dom大致架构

<Image :src="'/front-frame/vue3/sound-code/runtime-dom/1.png'" />

## 二、代码解析

### 1.目录结构

```
- index.ts
- nodeOps.ts
- patchProp.ts
- modules
  - attr.ts
  - class.ts
  - event.ts
  - style.ts
```

### 2.index.ts入口文件

```
// 这个包本质上啥都没做，就封装了一些平台上运行的代码
// 然后去调用内部的创建渲染器进行渲染
import { createRenderer } from '@vue/runtime-core';
import { nodeOps } from './nodeOps';
import { patchProp } from './patchProp';

// 这里提供了一些domAPI和属性API
const renderOptions = Object.assign(nodeOps, { patchProp });

// createRenderer方法是用来创建一个渲染器
// h方法是用来创建虚拟DOM的

// 在创建渲染器的时候传入选项
export function render(vnode, container) {
  createRenderer(renderOptions).render(vnode, container);
}

// h和createRenderer都可以在runtime-dom包直接拿到
export * from '@vue/runtime-core';
```

### 3.nodeOps.ts操作节点的api

```
export const nodeOps = {
  // 增加 删除 修改 查询
  // anchor参照物，把谁插到谁的前面去
  insert(child, parent, anchor = null) {
    // 当anchor = null时，insertBefore相当于appendChild
    parent.insertBefore(child, anchor);
  },
  //   删除节点
  remove(child) {
    const parentNode = child.parentNode;
    if (parentNode) {
      parentNode.removeChild(child);
    }
  },
  //   文本节点，元素中的内容
  setElementText(el, text) {
    // 切记改文本不可以用innerHTML操作，因为这个操作可以执行js脚本
    el.textContent = text;
  },
  setText(node, text) {
    node.nodeValue = text;
  },
  querySelector(selector) {
    return document.querySelector(selector);
  },
  parentNode(node) {
    return node.parentNode;
  },
  nextSibling(node) {
    return node.nextSibling;
  },
  createElement(tagName) {
    return document.createElement(tagName);
  },
  createText(text) {
    return document.createTextNode(text);
  },
};
```

### 4.patchProp.ts创建和处理属性的api

```
// 对属性进行处理，属性的操作
// 我们在更新属性，创建属性，要有一个前后的对比
// 这个方法既能创建，又能修改，又能移除

import { patchAttr } from './modules/attr';
import { patchClass } from './modules/class';
import { patchEvent } from './modules/event';
import { patchStyle } from './modules/style';

// 所以才单独把对属性的处理抽出来
export function patchProp(el, key, prevValue, nextValue) {
  // 类名 el.className
  if (key === 'class') {
    patchClass(el, nextValue);
  } else if (key === 'style') {
    // 样式el.style
    patchStyle(el, prevValue, nextValue);
  } else if (/^on[^a-z]/.test(key)) {
    // events addEventListener
    patchEvent(el, key, nextValue);
  } else {
    // 普通属性 el.setAttribute
    patchAttr(el, key, nextValue);
  }
}
```

### 5.patch方法汇总

```
// attr.ts 处理属性
export function patchAttr(el, key, nextValue) {
  if (nextValue) {
    el.setAttribute(key, nextValue);
  } else {
    el.removeAttribute(key);
  }
}
// class.ts 处理样式类
export function patchClass(el, nextValue) {
  if (nextValue) {
    el.className = nextValue;
  } else {
    el.removeAttribute('class');
  }
}
// event.ts 处理事件
function createInvoker(callback) {
  const invoker = (e) => invoker.value(e);
  invoker.value = callback;
  return invoker;
}
// eg
// 第一次绑定了onClick事件a el._vei = {click:onClick} el.addEventListener(click,(e)=>a(e))
// 第一次绑定了onClick事件b el._vei = {click:onClick} el.addEventListener(click,(e)=>b(e))
// 第一次绑定了onClick事件 null el.removeEventListener(click,(e)=>b(e)) el._vei = {}
// export function patchEvent(el, eventName, nextValue) {
//   // 事件都缓存到了当前dom上
//   /**
//    * 可以先移除掉事件，再重新绑定事件，但是这样每次都要调用addEventListener和removeEventListener
//    * 这样很耗性能
//    * 因此我们可以用类似以下这种形式
//    * add = () => {
//    *    drink()//每次要修改直接改掉drink这个方法，只需要一开始绑定add这个方法就好了
//    * }
//    * */
//   //   .vei用来缓存绑定的事件
//   let invokers = el._vei || (el.vei = {});
//   //   先看一下缓存上面有没有绑定过这个事件
//   let exits = invokers[eventName];
//   if (exits && nextValue) {
//     exits.value = nextValue; //没有卸载函数，只是改了invoker.value属性
//   } else {
//     // 如果之前没有缓存过
//     let event = eventName.slice(2).toLowerCase();
//     if (nextValue) {
//       const invoker = (invokers[eventName] = createInvoker(nextValue));
//       el.addEventListener(event, invoker);
//     } else if (exits) {
//       // 如果有老值，需要将老的绑定事件移除掉
//       el.removeEventListener(event, exits);
//       invokers[eventName] = undefined;
//     }
//   }
// }

export function patchEvent(el: HTMLElement, eventName: string, nextValue: any) {
  // vei：vnode event invoker
  let invokers = el._vei || (el.vei = {});
  let exist = invokers[eventName];
  if (exist) {
    // 之前绑定过该事件，并且有更新的事件，那么需要更改绑定
    if (nextValue) {
      invokers[eventName].value = nextValue;
    } else {
    // 之前绑定过该事件，并且没有更新的事件，那么就需要移除绑定
      el.removeEventListener(eventName.slice(2).toLowerCase(), exist);
      invokers[eventName] = undefined;
    }
  } else {
    // 之前没绑定过该事件
    let event = eventName.slice(2).toLowerCase(); // onClick => click
    if (nextValue) {
      const invoker = (invokers[eventName] = createInvoker(nextValue));
      el.addEventListener(event, invoker);
      el._vei = invokers;
    }
  }
}
// style.ts 处理样式
export function patchStyle(el, prevValue, nextValue) {
  // 因为可能下一次更新的时候都没有style了，也就是说nextValue可能为null，为了下面不报错，所以要给个默认的{}
  nextValue = nextValue || {};
  // 样式需要比对差异
  for (let key in nextValue) {
    //    用新的直接覆盖即可
    el.style[key] = nextValue[key];
  }
  // 不能直接这么写
  //   el.style = nextValue;
  // 直接这样写是改变不了样式的
  if (prevValue) {
    // 如果之前的style有一个fontSize之后没有，那么需要删掉
    for (let key in prevValue) {
      if (nextValue[key] == null) {
        el.style[key] = null;
      }
    }
  }
}
```

