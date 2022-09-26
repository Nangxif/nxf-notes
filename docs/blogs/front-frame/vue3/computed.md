# computed

**computed特点：缓存 基于effect实现**

## 一、Composition API

​    \* 在Vue2中采用的是OptionsAPI，用户提供的data，props，methods，computed，watch等属性（用在负责的业务逻辑中会出现反复横跳的问题）

​    \* Vue2中所有的属性都是同this访问，this存在指向明确问题

​    \* Vue2中很多未使用方法或属性依旧会被打的包，并且所有全局API都在Vue对象公开，CompositionAPI对treeshaking更加友好，代码也更容易压缩

​    \* 组件逻辑共享问题，Vue2采用mixins实现组件质检的逻辑共享，但是会有数据来源不明确，命名冲突等问题，Vue3采用CompositionAPI提取公共逻辑非常方便

## 二、computed的使用

```
const state = reactive({ firname: 'Nang', lastname: 'xi' });
// computed参数为对象
const fullName = computed({
    get() {
      // Object.defineProperty中的getter
      return state.firname + state.lastname;
    },
    set(newValue) {
      // Object.defineProperty中的setter
    },
});
// fullName = 100 不能这么写
fullName.value = 100;
fullName.value = 200;

// computed参数为函数，此时的函数就是一个get方法
const fullName = computed(() => {
	return state.firstname + state.lastname
})
```

我们输出一下computed，我们会发现它是长这样的

```
/**
* ComputedRefImpl{
*    dep:[], // 用于存储收集到的依赖
*    effect: ReactiveEffect， // 用于收集computed里面的依赖的一个effect 
*    __v_isReadonly: false, // 是否是只读的
*    __v_isRef: true,
*    _cacheable: true, // 
*    _dirty: false, // 判断这个ComputedRefImpl是否变为脏值，如果依赖发生变化，那么就变成脏值，如果没有变化，那么就不是脏值
*    _setter: set, // 对应computed的set
*    _value: "Nangxi", // computed的get执行的结果
*    getter, // constructor参数，computed的getter
*    setter, // constructor参数，computed的setter
* }
* */
```

这说明computed返回的是一个实例，computed里面肯定会实例化一个ComputedRefImpl对象。

## 三、computed入口

computed的作用是拆分处理传进来的options（因为他的参数可能是一个getter/setter对象，也可能是一个getter函数），并且用处理过的参数实例化一个ComputedRefImpl对象。

```
export function computed(getterOrOptions) {
  //   如果是个函数，那么就肯定是个getter
  let onlyGetter = isFunction(getterOrOptions);
  let getter;
  let setter;
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      console.warn('no set');
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  return new ComputedRefImpl(getter, setter);
}
```
## 四、源码流程图

 <Image :src="'/front-frame/vue3/computed/1.png'" />

 <Image :src="'/front-frame/vue3/computed/2.png'" />

## 五、核心ComputedRefImpl

computed`在取值的时候我们是这么取值的fullName.value`，因此ComputedRefImpl的初始结构是这样的

```
class ComputedRefImpl {
	public _value;
	constructor(public getter,public setter) {}
	get value() {
		return this._value
	}
	set value(newValue) {
		this.setter(newValue);
	}
}
```

computed其实也类似reactive，只不过computed里面包着reactive，一层套一层，computed也跟reactive一样，在被读取的时候会执行到get，在被设值的时候执行到set。

get里面执行依赖收集，收集那些用到当前这个computed的effect，将其放在ComputedRefImpl实例化对象的dep上，然后重新执行computed的getter获取最新的值，并将这个最新值作为get的return返回给effect。

因为computed 的getter里面也有reactive，我们需要实现reactive发生变化的时候，也可以重新通知effect执行，叫他获取最新的值，因此我们需要监听getter里面的依赖的变化，所以getter需要包一层reactiveEffect，当getter收集的reactive发生变化时，触发computedEffect的scheduler，scheduler去遍历执行收集到的外层的effect，让effect去获取最新的computed。

然后我们再来看一个例子

```
const state = reactive({ firname: 'Nang', lastname: 'xi' });
const fullName = computed({
    get() {
      console.log('runner');
      return state.firname + state.lastname;
    },
	set(newValue) {},
});
fullName.value;
fullName.value;
```

上面个例子虽然fullName.value取值了两次，但是get只执行了一次，那么说明计算属性中肯定要有一个缓存的标识，如果这个依赖有变化，那么要重新执行get，没有变化就不重新执行get。因此ComputedRefImpl里面有个属性dirty，代表这个实例是否是脏的。能执行到scheduler，那么说明这个值确实脏了，因此把dirty设为true，然后重新执行外面的effect，外面的effect又会重新触发computed的get，get里面就会用到这个dirty，如果dirty不脏，那么直接返回之前的_value，如果脏了，那么重新执行computed的getter获取最新的值。

```
class ComputedRefImpl {
  public effect;
  public _dirty = true; //默认第一次取值的时候是脏的，要执行getter
  public __v_isReadonly = true;
  public __v_isRef = true;
  public _value;
  public dep = new Set();
  constructor(public getter, public setter) {
    // 第一个放入用户执行的函数，第二个参数放入一个scheduler
    /**
     * getter是例子中的()=>{
     *      return state.firname + state.lastname
     * }
     * 这样就会对getter中的属性进行依赖收集
     * 我们将用户的getter放到effect中，这里面firstname和lastname就会被这个effect收集起来
     * */
    // computed的底层就是一个effect,
    // 当getter里面的依赖变化的时候，就会触发scheduler
    this.effect = new ReactiveEffect(getter, () => {
      // 稍后依赖的属性变化会执行此调度函数,getter里面的依赖发生变化的时候会执行
      if (!this._dirty) {
        this._dirty = true;
        // 实现一个触发更新，更新收集到的外面的有用到computed的effect
        // 这里会把收集到的外面的所有的effect重新执行一次，然后又会执行到下面的get，然后又进行依赖收集trackEffects，幸好依赖收集里面有去重
        // 然后发现this._dirty又变成了true，所以执行了一次this.effect.run获取最新的值
        triggerEffects(this.dep);
      }
    });
  }
  //   这个就是computed的value
  get value() {
    // 做依赖收集，等会依赖的值发生变化
    // 收集依赖，这里收集的是
    // effect(() => {
    //   app.innerHTML = fullName.value;
    // });
    // 这个effect
    // ①firname要依赖于计算属性的effect
    // ②计算属性收集了外层的effect
    // 依赖的值变化了会触发计算属性effect重新执行，计算属性重新执行的时候会触发【【【【外层】】】effect来执行
    // reactive也是在get的时候收集依赖
    trackEffects(this.dep);
    // 第一次获取的时候这个值是脏值，需要获取最新的数据
    if (this._dirty) {
      // 说明这个值是脏值
      this._dirty = false;
      // 看代码看多了这里有个误区scheduler并不是由this.effect.run触发的
      // 这里的run()就是getter()，这里才开始收集computed里面的getter的依赖
      this._value = this.effect.run();
    }
    return this._value;
  }
  set value(newValue) {
    this.setter(newValue);
  }
}
```

