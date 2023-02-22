# 生命周期

vue的生命周期有很多，在这里我们只讲四个，能了解原理就行了

* onBeforeMount
* onMounted
* onBeforeUpdate
* onUpdated

我们使用它们可能是这样的

```
const useCounter = () => {
    const state = reactive({ count: 1 });
    const dobuleCount = computed(() => {
      return state.count * 2;
    });
    const handleClick = () => {
      state.count++;
    };
    // 生命周期会自动和当前的组件关联起来
    onBeforeMount(() => {
      console.log('before mount', getCurrentInstance());
    });
    onMounted(() => {
      console.log('mounted1', getCurrentInstance());
    });
    onMounted(() => {
      console.log('mounted2', getCurrentInstance());
    });
    onBeforeUpdate(() => {
      console.log('before update', getCurrentInstance());
    });
    onUpdated(() => {
      console.log('updated', getCurrentInstance());
    });
    console.log('setup');
    return { state, handleClick, dobuleCount };
};
const VueComponent = {
    setup() {
      const { state: counter, handleClick, dobuleCount } = useCounter();
      return {
        ...toRefs(counter),
        dobuleCount,
        handleClick,
      };
    },
    render() {
      console.log('render');
      return h(
        'p',
        { onClick: this.handleClick },
        this.count.value + ':' + this.dobuleCount
      );
    },
};
render(h(VueComponent), app);

// 上面的例子输出的结果为
setup
before mount
render
mounted1
mounted2
// 点击之后
before update
render
updated
```

上面用到的几个生命周期都是从vue直接导出的，而且这些生命周期都是由一个偏函数创造出来的

```
import { currentInstance, setCurrentInstance } from './component';

export const enum LifecycleHooks {
  BEFORE_MOUNT = 'bm',
  MOUNTED = 'm',
  BEFORE_UPDATE = 'bu',
  UPDATED = 'u',
}

function createHook(type) {
  return (hook, target = currentInstance) => {
    // hook需要绑定到对应的实例上，但是我们要怎么知道实例是哪个
    if (target) {
      // 关联此currentInstance和hook
      /**
       *onBeforeMount(() => {
          console.log('before mount', getCurrentInstance());
        });
        onMounted(() => {
          console.log('mounted', getCurrentInstance());
        });
        onBeforeUpdate(() => {
          console.log('before update', getCurrentInstance());
        });
        onUpdated(() => {
          console.log('updated', getCurrentInstance());
        });
       *
       * */
      const hooks = target[type] || (target[type] = []);
      const wrapperHook = () => {
        setCurrentInstance(target);
        hook(); //将当前实例保存到currentInstance上
        // 生命周期执行完之后必须要清空，不然会泄露
        setCurrentInstance(null);
      };
      hooks.push(wrapperHook);
    }
  };
}

// 工厂模式
export const onBeforeMount = createHook(LifecycleHooks.BEFORE_MOUNT);
export const onMounted = createHook(LifecycleHooks.MOUNTED);
export const onBeforeUpdate = createHook(LifecycleHooks.BEFORE_UPDATE);
export const onUpdated = createHook(LifecycleHooks.UPDATED);
```

一开始并不是将hook再进行一层包装，变成wrapperHook，而是直接采用

```
hooks.push(hook)
```

这样会导致在生命周期钩子函数里面获取当前实例的时候都返回null。

***生命周期是在setup之后才执行的，因为生命周期表示的是一个节点的周期，而不是setup的周期，setup只是把当前的instance和生命周期做一个绑定。***

***但是在component的代码里面我们能看到setup之后instance就被清空了，所以不做处理的话生命周期里面去获取instance肯定是null，需要做一个闭包。***

***假设onBeforeMount在同一个setup中被使用了多次，也没有影响，因为每个onBeforeMount都是一个wrapperHook闭包，里面会有存放外面函数的target。***

***遍历执行onBeforeMount生命周期函数的时候，都会setCurrentInstance，等这个hook执行完之后立马清空，相当于每个生命周期函数里面都复制了一份instance。***

我们来看看之前写在setupComponent里面的源码

如果发现传进来的对象里面有setup属性，那么这里有一段处理值得分析

```
setCurrentInstance(instance);
const setupResult = setup(instance.props, setupContext);
// setup执行完之后置空
setCurrentInstance(null);
```

在上面执行setup的时候，如果我们调用了生命钩子，那么createHook返回的函数的第二个参数target，肯定就拿到了当前的组件实例。这个组件实例拿到之后，直接用wrapperHook包一层，将target存放到每个生命钩子中，形成一个闭包，这也就是上面的斜体加粗部分真正的含义。

那么这几个生命钩子在什么时候被调用的呢？上面已经说了，当然是在执行setup的时候。那生命钩子里面的回调函数是在什么执行的呢？注意！！这里是有区别的，调用的地方和回调函数执行的时机，是不一样的。

回调函数的执行，在**componentUpdateFn**里面

```
const componentUpdateFn = () => {
  if (!instance.isMounted) {
    let { bm, m } = instance;
    if (bm) {
      invokeArrayFns(bm);
    }
    const subTree = render.call(instance.proxy);
    patch(null, subTree, container, anchor);
    instance.subTree = subTree;
    instance.isMounted = true;
    if (m) {
      invokeArrayFns(m);
    }
  } else {
    let { next, bu, u } = instance;
    if (bu) {
      invokeArrayFns(bu);
    }
    if (next) {
      updateComponentPreRender(instance, next);
    }
    const subTree = render.call(instance.proxy);
    patch(instance.subTree, subTree, container, anchor);
    instance.subTree = subTree;

    if (u) {
      invokeArrayFns(u);
    }
  }
};
```

创建的时候，render之前遍历执行在setup里面挂载的**onBeforeMount**的回调，render之后遍历执行在setup里面挂载的**onMounted**的回调。

更新的时候，render之前遍历执行在setup里面挂载的**onBeforeUpdate**的回调，render之后遍历执行在setup里面挂载的**onUpdated**的回调。