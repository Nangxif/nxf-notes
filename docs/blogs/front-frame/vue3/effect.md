# effect
## 一、流程图

 <Image :src="'/front-frame/vue3/effect/1.png'" />

## 二、函数概览

在讲effect源码之前，我先列出里面每个函数的功能分别是什么

| 函数名/类名    | 参数                                                         | 功能                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| cleanupEffect  | effect                                                       | 清除这个effect绑定的所有依赖                                 |
| ReactiveEffect | fn、scheduler（调度回调函数）                                | 一个用来执行fn收集依赖，并且当这些依赖有变化的时候，触发更新的类 |
| effect         | fn、options                                                  | 创建一个ReactiveEffect实例                                   |
| track          | target（reactive的原对象）、type（暂时没啥用）、key（传给effect的fn函数里面，有访问到的代理对象属性的key） | 收集依赖，在reactive代理对象的get劫持里面调用，调用effect的fn时会触发，track分为两步，第一步是将依赖收集到一个全局WeakMap对象——targetMap（后续触发更新的时候可以在targetMap上面找需要执行的回调）。第二步是下面的trackEffects |
| trackEffects   | dep                                                          | 给当前活跃的effect对象添加deps                               |
| trigger        | target（reactive的原对象）、type，value，oldValue（暂时没啥用）、key（传给effect的fn函数里面，有访问到的代理对象属性的key） | 当effect收集的依赖发生变化的时候，会触发这些依赖里面的set劫持函数，set里面就会触发trigger，trigger会从targetMap里面找出需要更新的effect，然后通过下面的triggerEffects遍历执行所有需要更新的effects， |
| triggerEffects | effects                                                      | 遍历执行所有需要更新的effects                                |

## 三、示例

我们一般在使用effect的时候是这样使用的

```
const data = { name: 'nangxi', age: 26, address: { num: 200 } };
const state = reactive(data);
effect(() => {
    document.getElementById('app').innerHTML = state.name + '今年' + state.age + '岁了';
});
```

## 四、详解

此effect函数默认会先执行一次，对响应式数据取值，取值的过程中数据会依赖于当前的effect。

调用effect的时候，其实只是在里面创建了一个ReactiveEffect对象，并且返回一个runner

```
export function effect(fn, options: any = {}) {
  // 这里fn可以根据状态变化重新执行 effect可以嵌套着写
  // 为什么可以嵌套着写，因为组件也是基于effect，组件可以嵌套着写
  /**
   * effect(()=>{
   *      effect(()=>{})
   * })
   * */
  const _effect = new ReactiveEffect(fn, options.scheduler);
  //   默认先执行一次
  _effect.run();

  const runner = _effect.run.bind(_effect); //绑定this执行
  runner.effect = _effect; //将effect挂载到runner上
  return runner;
}
```

ReactiveEffect类是用来干什么的呢？用来实例化一个对象，这个对象包含的run方法可以执行传给effect第一个参数的函数，然后清除当前这个effect上一次收集过的依赖，然后重新收集（注意，每次收集的依赖只用于触发一次，在下一次触发之前会将每个effect会将与自己绑定的依赖全部清除然后重新收集，方便下次触发的时候使用），这个实例化的对象还有stop方法，可以停止effect的依赖收集以及触发。

```
export class ReactiveEffect {
  /**
     * 
     * effect(() => {
        document.getElementById('app').innerHTML =
          state.name + '今年' + state.age + '岁了';
      });
      active是激活的话，state.name和state.age才会去关联当前的effect
     */
  // 这里表示在实例上新增了active属性
  public active = true; //这个effect默认是激活状态
  public parent = null;
  // 用来记录effect依赖了哪些属性所关联的effect，deps是一个元素为Set的数组，Set里面都是effect
  public deps = [];
  constructor(public fn, public scheduler?) {}
  run() {
    // run就是执行effect
    if (!this.active) {
      // 这里表示如果是非激活的情况，只需要执行函数，不需要进行依赖收集
      this.fn();
    }
    // 这里就需要进行依赖收集了 核心就是将当前的effect
    // 和稍后渲染的属性关联在一起
    try {
      this.parent = activeEffect;
      activeEffect = this;
      // 这里我们需要在执行用户函数之前将之前收集的内容清空，然后在this.fn()里面再收集
      // activeEffect.deps = [name: Set(),age:Set()]
      // state.name变成state.age那么就要移除state.name的effect
      cleanupEffect(this);
      //   当我们执行this.fn()的时候会执行state.name和state.age等一些取值操作
      //   因为state.name和state.age是响应式数据，所以会走get
      return this.fn(); //当稍后调用取值操作的时候就可以获取到这个全局的activeEffect
    } finally {
      //   activeEffect = undefined;
      activeEffect = this.parent;
      //   这一步写不写都行
      this.parent = null;
    }
  }
  stop() {
    if (this.active) {
      this.active = false;
      // 光改激活不行，数据变了依然会重新run
      cleanupEffect(this); //停止effect的收集
    }
  }
}
```

每一个effect的执行有点类似深度优先遍历

```
// effect1
effect(() => {
	// effect2
	effect(() => {
	
	})
})
// effect 3
effect(() => {})
```

也就是说，上面的三个effect的执行顺序是effect1 -> effect2 -> effect3

本来activeEffect我们也可以用栈的思想来实现，执行时入栈，执行完出栈，比如

```
执行                 栈                 activiteEffect
执行effect1          [effect1]          effect1
执行effect2          [effect1,effect2]  effect2
effect2完毕          [effect1]          effect1
effect1完毕          []                 undefined
执行effect3          [effect3]          effect3
effect3完毕          []                 undefined
```

但是代码实现起来不好理解，所以采用上面这种方式实现

```
try {
	// 先将外层的activiteEffect赋值给当前这个effect的parent
	this.parent = activiteEffect;
	// 再将activiteEffect变为当前活跃的effect
	activiteEffect = this
}finally {
	// 最后在当前的effect.run收集依赖完毕之后，重置为外层的effect
	activiteEffect = this.parent;
	this.parent = undefined;
}
```

下面是依赖收集的主要代码

```
const targetMap = new WeakMap();
export function track(target, type, key) {
  /**
   * effect(()=>{state.name})
   * effect(()=>{state.name})
   * 上面的name对应两个effect
   * 一个对象上的某个属性可能对应多个effect
   * 我们可以用一个weakmap结构，下面的name指的是属性，Set指的是effect
   * WeakMap {
        { name: 'nangxi', age: 26} : Map {
                                       name: dep = Set([activeEffect])
                                       age: dep = Set([activeEffect])
                                   }
	 }
   */
  /**
   * 我们什么时候开始收集呢
   * 我们要在activeEffect有值的时候开始收集，因为有可能会写在这里，最外层effect的外面
   * 只有在effect执行的时候才需要收集属性
   * state.name
   * effect(()=>{})
   * */
  if (!activeEffect) return;
  let depsMap = targetMap.get(target); //第一次没有
  if (!depsMap) {
    // target原对象
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  trackEffects(dep);
  // 上面这部分只是单向记录（属性记录了effect）
  // 但是这是不够的，等会我可能要把effect删掉，删掉的话，那么我就需要把属性里面的effect删掉
  // 所以我们还需要反向记录，应该让effect也记录他被哪些属性收集，这样做的好处是为了可以清理
  /**
   * 什么情况下会删除effect呢
   * eg：
   * effect(()=>{
   *    flag ? this.name : this.age
   * })
   * **/
}

export function trackEffects(dep) {
  // 一个属性可能在effect里面被用了多次，收集一次就够了
  // Set确实会去重，但是为了性能优化，重复的还是先判断一下，不要放进去
  if (activeEffect) {
    let shouldTrack = !dep.has(activeEffect);
    if (shouldTrack) {
      // 这里的dep指的是某个属性对应的所有effect，下面会push到当前活跃的effect的deps，
      // 所以deps里面包含了多个属性的effect
      // dep是一个Set
      dep.add(activeEffect);
      // 让effect记录对应的dep，稍后清理的时候会用到
      // deps记录的是当前属性key对应的effect的Set
      /**
       * deps长这样
       * [Set,Set]
       * */
      activeEffect.deps.push(dep);
    }
  }
}
```

下面是依赖触发的核心代码

```
export function trigger(target, type, key, value, oldValue) {
  const depsMap = targetMap.get(target);
  /**
   * 有可能触发更新的值，不在effect里面，比如
   * effect(() => {
        document.getElementById('app').innerHTML =
          state.name + '今年' + state.age + '岁了';
      });
      setTimeout(() => {
        state.address='';
      });
      这种情况下不用触发effect的回调
   * */
  if (!depsMap) return;
  let effects = depsMap.get(key); //找到了属性对应的effect
  /**
   * let s = new Set([1]);
   * s.forEach(item => {
   *   s.delete(1);
   *   s.add(1);
   * });
  会陷入死循环，所以我们在循环的时候，先复制一份effects
  * */
  if (effects) {
    triggerEffects(effects);
  }
}
export function triggerEffects(effects) {
  effects = new Set(effects);
  // 这样子后面的deps在删除的时候，删的就是原来的，循环的那个数组就不会发生改变
  effects &&
    effects.forEach((effect) => {
      // 我们在执行effect的时候，假设又要执行自己，那我们需要屏蔽掉，不要无限调用
      /**
     * effect(() => {
     * 注意这里
     * state.age++;
       document.getElementById('app').innerHTML =
         state.name + '今年' + state.age + '岁了';
     });
     setTimeout(() => {
       state.age++;
     });
     */
      if (effect !== activeEffect) {
        if (effect.scheduler) {
          effect.scheduler(); //如果用户传入了调度的函数，则用用户的
        } else {
          effect.run(); //否则默认刷新试图
        }
      }
    });
  // 至此先不考虑合并
  /**
   * 什么是合并
   * setTimeout(()=>{
   *   state.age++;
   *    state.age++;
   * })
   */
}
```

