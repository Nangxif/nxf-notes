# vuex辅助函数

我们最直接的使用vuex的state，getters，mutations，以及actions是这样使用的。

```
$store.state.age;
$store.getters.getAge;
$store.commit('changeAgeMutation', payload);
$store.dispatch('changeAgeAction', payload);
```

但是每次这样写会显得特别麻烦特别长。

因此我们可以换一种写法

```
<script>
export default {
  computed: {
    age() {
       return this.$store.state.age;
    },
    getAge() {
       return this.$store.getters.getAge;
    },
  },
  methods: {
    changeAgeMutation(payload) {
      this.$store.commit('changeAgeMutation', payload);
    },
    changeAgeAction(payload) {
      this.$store.dispatch('changeAgeAction', payload);
    },
  },
}
</script>
```

这样写就可以直接在template中使用age以及getAge等响应式变量，以及changeAgeMutation和changeAgeAction等函数。

但是这么写还不够简洁。因此vuex提供了mapState，mapGetters，mapMutations，mapActions这些辅助函数。

使用方式如下

```
<script>
export default {
  computed: {
    ...mapState(['age']),
    ...mapGetters(['getAge'])
  },
  methods: {
  	...mapMutations(['changeAgeMutation']),
  	...mapActions(['changeAgeAction'])
  },
}
</script>
```

到此我们突然意识到，那上面的写法不就是辅助函数的实现原理吗？我们整理成一个helper.js文件

```
// helper.js
// 传给辅助函数的参数arrList是一个数组，需要遍历
export const mapState = (arrList) => {
  let obj = {};
  for (let i = 0; i < arrList.length; i++) {
    let stateName = arrList[i];
    obj[stateName] = function () {
      return this.$store.state[stateName];
    };
  }
  return obj;
};

export const mapGetters = (arrList) => {
  let obj = {};
  for (let i = 0; i < arrList.length; i++) {
    let getterName = arrList[i];
    obj[getterName] = function () {
      return this.$store.getters[getterName];
    };
  }
  return obj;
};

export const mapMutations = (arrList) => {
  let obj = {};
  for (let i = 0; i < arrList.length; i++) {
    let mutationName = arrList[i];
    obj[mutationName] = function (payload) {
      this.$store.commit(mutationName, payload);
    };
  }
  return obj;
};

export const mapActions = (arrList) => {
  let obj = {};
  for (let i = 0; i < arrList.length; i++) {
    let actionName = arrList[i];
    obj[actionName] = function (payload) {
      this.$store.dispatch(actionName, payload);
    };
  }
  return obj;
};
```

到此完整的vuex就全部结束了。