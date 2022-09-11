# reactive

Vue3提供的reactive方法可将一个对象包装成一个proxy对象，从而实现对这个对象的依赖收集，reactive采用了一种懒代理的方式，当我们传给reactive的对象例如是这样的

```
const reactiveData = reactive({
	a: 1,
	b: {
		c: 2
	}
})
```

那我们在取reactiveData的时候我们会发现它是一个proxy，但是b却还不是一个proxy，但是当我们取reactiveData.b的时候，我们就发现它变成了一个proxy，这就是懒代理，与Vue2的处理方式有很大的不同，Vue2在一开始的时候，就利用递归将嵌套对象都用dineProperty转换了一遍，这样很耗性能。

## 一、reactive代码片段

```
import { isObject } from '@vue/shared';
import { mutableHandlers, ReactiveFlags } from './baseHandler';
// 将数据转化成响应式的数据，只能做对象的代理
// 因为同一个对象可以被多次代理，浪费性能，所以需要加一个缓存
const reactiveMap = new WeakMap(); // key只能是对象

// 判断一个对象是否是reactive代理对象
export function isReactive(value) {
  return !!(value && value[ReactiveFlags.IS_REACTIVE]);
}

export function reactive(target: Record<string, any>) {
  if (!isObject(target)) {
    return;
  }
  if (target[ReactiveFlags.IS_REACTIVE]) {
    // target[ReactiveFlags.IS_REACTIVE]这里会触发下面的get
    return target;
  }
  /* 并没有重新定义属性，只是代理，在取值的时候会调用get
   当赋值的时候会调用set
  */
  let exisitingProxy = reactiveMap.get(target);
  if (exisitingProxy) {
    return exisitingProxy;
  }
  /**
 * 有可能会出现这种写法
 *  const state1 = reactive(data);
    const state2 = reactive(state1);
    因此在代理之前需要判断有没有被代理过
 * */
  //   第一次普通对象代理，我们会通过new Proxy代理一次
  // 下一次你传递的是proxy，我们可以看一下她有没有代理过
  //   如果访问这个proxy 有get方法的时候说明就访问过了

  const proxy = new Proxy(target, mutableHandlers);
  reactiveMap.set(target, proxy);
  return proxy;
}

/** 上面的get之所以不用return target[key]，
 * 是因为可能会出现这种类型的代理数据
 * let target = {
 *      name: 'zf',
 *      get alias(){
 *          return this.name
 *      }
 * }
 * const proxy = new Proxy(target, {
    get(target, key, receiver) {
      return target[key];
    },
    set(target, key, value, receiver) {
      target[key] = value;
        return true;
    },
  });
  
    这样如果我要取值proxy[alias]，那么get只会执行一次，而不会执行两次
    为何说要执行两次，因为alias里面还有获取当前上下文的name值，而如果用
    target[key]这种方式取值的话，this.name的this指向的是target，target是
    源对象并不是代理对象，自然不会重新走一次get
*/
```

PS：reative总共就做了这么几件事

1. 判断是否为对象，如果不是对象的话就直接返回undefined；
2. Vue3为reactive对象提供了一个自定义的属性叫`__v_isReactive`，只有reactive对象才可以拿到 `__v_isReactive`属性，当我们对一个reactive对象再进行reactive的时候，那么会去判断对象里面有没有`__v_isReactive`，有的话直接返回reactive过的对象；
3. 如果拿一个对象多次进行reative，那么它只会代理一次，后面直接从reactiveMap里面取缓存。

## 二、mutableHandlers代码片段

```
import { isObject } from '@vue/shared';
import { activeEffect, track, trigger } from './effect';
import { reactive } from './reactive';
export enum ReactiveFlags {
  IS_REACTIVE = '__v_isReactive',
}
export const mutableHandlers = {
  get(target: Record<string, any>, key: string | symbol, receiver: any) {
    if (key === ReactiveFlags.IS_REACTIVE) {
      return true;
    }
    // 我们需要把activeEffect和key关联在一起，就是说哪个属性对应的effect是谁
    // 所以我们进行依赖收集
    // 一个属性可以对应多个effect
    /**
     * effect(()=>{state.name})
     * effect(()=>{state.name})
     * 上面的name对应两个effect
     * 一个对象上的某个属性可能对应多个effect
     * 我们可以用一个weakmap结构，下面的name指的是属性，Set指的是effect
     * WeakMap = {对象:Map{name:Set}}
     */
    track(target, 'get', key);
    // 去代理对象上取值，就走get
    // 这里可以监控到取值了
    // return target[key]
    // 有可能获取到的这个值还是对象，这个对象也要做代理
    let res = Reflect.get(target, key, receiver);
    if (isObject(res)) {
      return reactive(res); //深度代理的实现，性能好，取值就可以进行代理，不取就不代理，vue2是一上来就递归代理，性能方面可想而知
    }
    return res as any;
  },
  set(
    target: Record<string, any>,
    key: string | symbol,
    value: any,
    receiver: any
  ) {
    // 去代理设置值，执行set
    let oldValue = target[key as string];
    let result = Reflect.set(target, key, value, receiver);
    if (oldValue !== value) {
      // 值变化了 要更新了
      trigger(target, 'set', key, value, oldValue);
    }
    // 这里可以监控到设置值了
    return result;
  },
};
```

reactive之所以做成代理对象，那是因为需要用它来做依赖收集以及依赖的触发，当我们取值的时候进行依赖收集，当我们设置值的时候需要触发收集的依赖，并且把之前收集的依赖清除掉再重新收集。

