# Vue3渲染的几种方式

## 1.template标签

```
<template>
  <div>123</div>
</template>
```

## 2.setup的return

```
<script lang="ts">
import { h } from "vue";
export default {
  name: "App",
  setup() {
    return () => {
      return h("div", 123);
    };
  }
};
</script>
```

```
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return () => <div>123</div>;
  }
});
```

下面这种写法是错误的

```
<script lang="ts">
export default {
  name: "App",
  setup() {
    return () => {
      return <div>123</div>;
    };
  }
};
</script>
```

## 3.render

```
<script lang="ts">
import { h } from "vue";
export default {
  name: "App",
  render() {
    return h("div", 123);
  }
};
</script>
```

```
import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return <div>123</div>;
  }
});
```

下面这种写法是错误的

```
<script lang="ts">
export default {
  name: "App",
  render() {
    return <div>123</div>;
  }
};
</script>
```

