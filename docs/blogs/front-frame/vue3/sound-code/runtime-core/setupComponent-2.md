# setup组件的创建和更新【下】

上一节我们讲了setup组件的创建，接下来我们来讲讲更新。

组件是走创建逻辑还是更新逻辑一切的源头都是从**processComponent**判断

```
const processComponent = (n1, n2, container, anchor) => {
    // 统一处理组件，里面再区分是普通组件还是函数式组件
    if (n1 == null) {
      // 组件创建
      mountComponent(n2, container, anchor);
    } else {
      updateComponent(n1, n2);
    }
};
```

## 二、组件的更新updateComponent

如果有新的子节点同时旧的子节点也存在，那么就走**updateComponent**逻辑。

注意，能触发**updateComponent**更新的模式组件的父组件的render导致组件发生变化，才会走这段逻辑，可能是通过props的变化去更新组件。

```
const updateComponent = (n1, n2) => {
    // instance.props是响应式的，而且可以更改 属性的更新会导致页面重新渲染
    // 对于元素而言，复用的是dom节点，对于组件来说复用的是实例
    const instance = (n2.component = n1.component);
    // 我们改成需要更新就强制调用组件的update方法
    if (shouldUpdateComponent(n1, n2)) {
      // 将新的虚拟节点放到实例的next属性上，因为后续还要用到
      instance.next = n2;
      instance.update(); // 无论是组件还是插槽需要更新统一调用update方法来更新，这个update就是一开始setupRenderEffect里面的effect.run/componentUpdateFn
    }
};
```

如何判断一个组件是否需要更新呢？主要是调用**shouldUpdateComponent**这个判断方法

```
const shouldUpdateComponent = (n1, n2) => {
    const { props: prevProps, children: prevChildren } = n1;
    const { props: nextProps, children: nextChildren } = n2;
    if (prevProps === nextProps) return false;
    if (prevChildren || nextChildren) {
      // 插槽要更新
      return true;
    }
    return hasPropsChanged(prevProps, nextProps);
};
```

简而言之就是比较新旧节点的props，以及slots的差异。

props的比较方法**hasPropsChanged**就更新j简单了

```
const hasPropsChanged = (prevProps = {}, nextProps = {}) => {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    // 对比属性前后个数是否一致
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    // 对比属性对应的值是否一致
    const key = nextKeys[i];
    if (nextKeys[key] !== prevProps[key]) {
      return true;
    }
  }
  return false;
};
```

如果最后判断完还是需要更新，那么就将新子节点赋值给实例的**next**属性，并且调用实例上的**update**方法。

那么这个**update**是哪里来的？还记得我们上一节的**componentUpdateFn**方法吗？

我们在**setupRenderEffect**里面的最后将reactiveEffect的run方法挂载到组件实例上，update就是从那里拿的

```
instance.update = effect.run.bind(effect)
```

还记得上一节在讲到创建实例的副作用的时候我们提到了这样一段代码吗？

```
const setupRenderEffect = (instance, container, anchor) => {
  const { render } = instance;
  // 收集组件里面render方法的依赖
  const componentUpdateFn = () => {
  // 区分是初始化还是更新
  if (!instance.isMounted) {
    // 初始化，render的this指向代理对象，执行render就能获取到最新的vnode
    const subTree = render.call(instance.proxy);
    patch(null, subTree, container, anchor); //创造了subTree的真实节点并且插入了
    instance.subTree = subTree;
    instance.isMounted = true;
  } else {
    // 组件内部更新
    // 如果是组件里面自己导致的组件发生变化，那么会走这段逻辑
    TODO: 组件更新流程
  }
};
```

通过**instance.isMounted**来判断组件是在创建的流程还是更新的流程。那么这个更新的流程指的是啥？上面我们说到，如果是父组件更新导致子组件需要更新的话，那么就是比较props和slots，如果需要更新的话就会调用**instance.update**强制更新。setupRenderEffect里面的更新，指的是组件内部的更新，比如下面这种情况

```
render(){
   setTimeout(()=>{
     this.age++
   },1000)
   return h('p',`{this.age}`)
}
```

因为组件内部的响应式变量被effect收集了，因此组件内部的更新会自己触发effect的scheduler

```
let { next } = instance;
if (next) {
  // 更新前我也需要拿到最新的属性来更新
  // 下面这个方法表示组件更新之前我们要做什么事
  updateComponentPreRender(instance, next);
}
/**
 * 组件内部的更新指的是render(){}里面的更新，假设里面有个定时器
 * render(){
 *    setTimeout(()=>{
 *      this.age++
 *    },1000)
 *    return h('p',`{this.age}`)
 * }
 * */
const subTree = render.call(instance.proxy);
patch(instance.subTree, subTree, container, anchor);
// 在patch比较新旧节点之后，记得更新实例上面的subTree，方便下次使用
instance.subTree = subTree;
```

所以，现在知道为什么在实例化effect的时候，需要通过scheduler这种方式去实例化了吧？

因为如果是这么处理的话，外部的更新可以直接调用effect实例暴露出来的run方法，内部更新的话可以直接触发scheduler这个回调。

scheduler回调的本质还是调用绑在组件实例上的update方法。那么按照这么说的话，本来我们直接这么写就可以了

```
const effect = new ReactiveEffect(componentUpdateFn,instance.update);
```

为什么要在**instance.update**的外层包一层**queueJob**呢？

queueJob其实就是一个批量处理的方法，假设现在有这么一种内部更新的情况

```
render(){
   setTimeout(()=>{
     this.age++;
     this.age++
   },1000)
   return h('p',`{this.age}`)
}
```

如果不处理的话改变几次响应式数据就会触发几次scheduler，导致性能变差。

```
const queue = [];
// 是否正在刷新
let isFlushing = false;

const resolvePromise = Promise.resolve();
export function queueJob(job) {
  // 如果定时器内连续多次更新，那么就会触发多次scheduler
  if (!queue.includes(job)) {
    queue.push(job);
  }
  // 多次更新，第一次更新会走下面的if，下次更新就不会走下面的if,job里面就是个render
  if (!isFlushing) {
    // 批处理逻辑
    isFlushing = true;
    resolvePromise.then(() => {
      // 这里是一个微任务
      isFlushing = false;
      let copy = queue.slice(0);
      queue.length = 0;
      for (let i = 0; i < copy.length; i++) {
        let job = copy[i];
        job();
      }
      // 这一步操作不能放在这里，因为执行job的时候，又放了一些任务，那这个任务进入到了queue里面，但是在job执行完之后就清空了，然后就丢失了
      // queue.length = 0;
      copy.length = 0;
    });
  }
}
```

上述就是setup组件的更新流程。