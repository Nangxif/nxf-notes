# computed

**computed特点：缓存 基于effect实现**

## 一、Composition API

​    \* 在Vue2中采用的是OptionsAPI，用户提供的data，props，methods，computed，watch等属性（用在负责的业务逻辑中会出现反复横跳的问题）

​    \* Vue2中所有的属性都是同this访问，this存在指向明确问题

​    \* Vue2中很多未使用方法或属性依旧会被打的包，并且所有全局API都在Vue对象公开，CompositionAPI对treeshaking更加友好，代码也更容易压缩

​    \* 组件逻辑共享问题，Vue2采用mixins实现组件质检的逻辑共享，但是会有数据来源不明确，命名冲突等问题，Vue3采用CompositionAPI提取公共逻辑非常方便