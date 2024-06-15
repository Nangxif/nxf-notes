# 实现同步更新流程（一）

更新到底是同步还是异步？

```typescript
class App extends React.Component {
	onClick() {
    this.setState({a:1});
    console.log(this.state.a);
  }
  // ... 	省略其他代码
}
```

当前的现状：

* 从触发更新到render，再到commit都是同步的
* 多次触发更新会重复多次更新流程

可以改进的地方：多次触发更新，只进行一次更新流程「Batched Updates（批处理）」：多次触发更新，只进行一次更新流程

将多次更新合并为一次，理念上有点类似防抖，节流，我们需要考虑合并的时机是：

* 我们是在宏任务中合并呢？
* 还是在微任务中合并呢？

我们用三款框架实现的Batched Updates来检验一下他们的合并时机是在宏任务中还是微任务中。

这三个框架分别是React，Vue3，Svelte

```html
<!-- Svelte -->
<script>
	let count = 0;
  let dom;
  const onClick = () => {
    count++;
    count++;
    count++;
    console.log("同步结果：", dom.innerText);
    Promise.resolve().then(() => {
    	console.log("微任务结果：", dom.innerText);
    })
    setTimeout(() => {
    	console.log("宏任务结果：", dom.innerText);
    })
  }
</script>

<h1 bind:this={dom} on:click={onClick}>{count}</h1>
```

最后打印的结果是：

```javascript
// '同步结果：' '0'
// '微任务结果：' '3'
// '宏任务结果：' '3'
```

这代表在微任务里面，dom.innerText已经变成3了，但是在同步的时候还没有变成3，还是0，这个就说明了Svelte是在微任务中做的批处理。

```html
<!-- Vue -->
<template>
	<h1 ref="dom" @click="onClick">{{count}}</h1>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        count: 0,
        dom: null
      }
    },
    methods: {
      onClick() {
        this.count++;
        this.count++;
        this.count++;
        console.log("同步结果：", this.$refs.dom.innerText);
        Promise.resolve().then(() => {
          console.log("微任务结果：", this.$refs.dom.innerText);
        })
        setTimeout(() => {
          console.log("宏任务结果：", this.$refs.dom.innerText);
        })
      }
    }
  }
</script>
```

最后打印的结果是：

```javascript
// '同步结果：' '0'
// '微任务结果：' '3'
// '宏任务结果：' '3'
```

这代表在微任务里面，this.$refs.dom.innerText已经变成3了，但是在同步的时候还没有变成3，还是0，这个就说明了Vue和Svelte一样是在微任务中做的批处理。

```typescript
// react
import React, { useRef, useState, useTransition } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, updateCount] = useState(0);
  const [isPending, startTransition] = useTransition();
  const domRef = useRef();
  const onClick = () => {
    startTransition(() => {
      updateCount((count) => count + 1);
      updateCount((count) => count + 1);
      updateCount((count) => count + 1);
      console.log("同步结果：", domRef.current.innerText);
      Promise.resolve().then(() => {
        console.log("微任务结果：", domRef.current.innerText);
      })
      setTimeout(() => {
        console.log("宏任务结果：", domRef.current.innerText);
      })
    })
  }
  
  return <h1 ref={domRef} onClick={onClick}>{count}</h1>
}

const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<App/>)
```

最后打印的结果是：

```javascript
// '同步结果：' '0'
// '微任务结果：' '0'
// '宏任务结果：' '3'
```

这代表在宏任务里面，domRef.current.innerText才变成3，在同步和微任务的时候还没有变成3，还是0。那么就是说对于react的并发更新，它的批处理是在宏任务中执行的。但是这么说并不准确。

```typescript
// react
import React, { useRef, useState, useTransition } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, updateCount] = useState(0);
  const domRef = useRef();
  const onClick = () => {
    updateCount((count) => count + 1);
    updateCount((count) => count + 1);
    updateCount((count) => count + 1);
    console.log("同步结果：", domRef.current.innerText);
    Promise.resolve().then(() => {
      console.log("微任务结果：", domRef.current.innerText);
    })
    setTimeout(() => {
      console.log("宏任务结果：", domRef.current.innerText);
    })
  }
  
  return <h1 ref={domRef} onClick={onClick}>{count}</h1>
}

const root = document.querySelector("#root");
ReactDOM.createRoot(root).render(<App/>)
```

如果我们把useTransition干掉，执行结果会变成

```javascript
// '同步结果：' '0'
// '微任务结果：' '3'
// '宏任务结果：' '3'
```

这代表在微任务里面，domRef.current.innerText已经变成3了，这种正常的情况下，react的批处理时机跟Svelte和Vue一样。都是在微任务中处理的，只有当react使用了useTransition时，批处理逻辑才会在宏任务中处理。