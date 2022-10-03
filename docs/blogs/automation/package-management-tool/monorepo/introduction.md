# monorepo介绍


## 一、前言
关于代码仓库的管理，我们一般有两种方案，多仓库（multirepo）和单仓库（monorepo）。那他们各自的优缺点是什么呢？

**multirepo**

优点：每个开发人员都可以独自开发自己的仓库不受拘束

缺点：如果有多个项目都用到这个包，那么这个包一旦有修改，那么就需要将这个修改同步到多个项目，非常麻烦

**monorepo**

优点：如果有多个项目使用到同一个包，那么如果这个包需要做升级，也不用在每个项目上做修改

缺点：在写包的时候比较耗费时间

选择那种方式要根据实际情况而定。

因为我们这里主要讲的是monorepo，所以我们说说什么是monorepo

按照以前的多仓库管理，假设现在有三个仓库

```
repo-a
  - react-app-a
repo-b
  - react-app-b
repo-c
  - react-app-c
```

此时有个需求，三个项目都需要使用到一个日历组件，那么如果是多仓库管理的话，就需要在三个仓库里面逐一开发（写三次）。那么如果我们用单仓库管理模式的话，我们可以把这个日历组件抽离出来

```
repo
  - components
    - datepicker
  - react-app-a
  - react-app-b
  - react-app-c
```

这样我们只需要开发一个日历组件，就可以在三个仓库里面共用。

## 二、目前monorepo的方案

1. lerna
2. yarn-workspace
3. pnpm-workspace