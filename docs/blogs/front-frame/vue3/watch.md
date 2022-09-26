# watch

watch相对computed来说就简单很多

## 一、watch的使用

下面只实现比较简单的watch的源码，所以对于watch的使用的演示，我们也基于下面的源码来

```
<script lang="ts" setup>
import { reactive, watch } from "vue";
const counter = reactive({ count: { num: 1 } });
watch(counter, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});
watch(counter.count, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});
watch(
  () => counter.count.num,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
);
// PS: watch监听的必须是一个reactive，ref或者function，不能是一个常量，因此下面这种写法是错误的
watch(
  counter.count.num,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
);
watch(
  () => counter.count.num,
  (newVal, oldVal, onCleanup) => {
    console.log("watch", newVal, oldVal);
    onCleanup(() => {
      // onCleanup会在下一次数据更新的时候触发，onCleanup能保存上一次watch的状态
      console.log("onCleanup", newVal, oldVal);
    });
  }
);
</script>

<template>
  {{ counter.count.num }}
  <button type="button" @click="counter.count.num++">变更</button>
</template>
```

## 二、watch流程图

 <Image :src="'/front-frame/vue3/watch/1.png'" />

## 三、watch流程

其实wacth就是监听reactive，ref等响应式数据的变化，我们可以用reactiveEffect来实现这个功能。reactiveEffect需要收集watch监听的对象依赖，当依赖发生变化的时候，会触发scheduler，scheduler有以下三个任务

1. 触发cleanup函数（如果有的话），
2. 执行watch回调，
3. 旧值赋值新值

```
function traversal(value, set = new Set()) {
  // 考虑如果对象中有循环引用的问题
  // 如果不是对象，那么直接返回
  if (!isObject(value)) {
    return value;
  }
  // 如果是一个对象，那么判断这个对象是否在set里面，有的话直接返回
  if (set.has(value)) {
    return value;
  }
  // 如果没有的话就add
  set.add(value);
  for (let key in value) {
    traversal(value[key], set);
  }
  return value;
}

// source使用户传入的对象，cb就是对应的用户回调
export function watch(source, cb) {
  let getter;
  if (isReactive(source)) {
    // 对我们用户传入的数据进行循环（递归循环，只要循环就会访问对象上的每一个属性，访问属性的时候会收集effect）
    // 之所以要递归，是因为是深层监听
    getter = () => traversal(source);
  } else if (isFunction(source)) {
    getter = source;
  } else {
    return;
  }
  let cleanup: () => void;
  const onCleanup = (fn: () => void) => {
    // 这里是一个闭包，保存的是上一次的cleanup
    cleanup = fn; //保存用户的函数
  };
  let oldValue: any;
  const job = () => {
    if (cleanup) cleanup();
    const newValue = effect.run();
    cb(newValue, oldValue, onCleanup);
    // 等cb把老值返回之后，再把新值赋值给老值
    oldValue = newValue;
  };
  // 监控自己构造的函数，变化后重新执行job
  const effect = new ReactiveEffect(getter, job);
  // 收集getter里面的依赖并且返回最新值，这是watch第一次监听的时候返回的旧值
  oldValue = effect.run();
}
```

