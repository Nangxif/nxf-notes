# vuepress和vitepress遇到的坑

## 1.sidebar

**vuepress的sidebar**

```
sidebar：{
	'/blogs/front-frame/': [
        {
          title: 'Vue3',
          children: [
            {
              title: 'Vue3介绍',
              path: '/blogs/front-frame/vue3/introduction',
            },
          ]
       }
    ]
}
```

**vitepress的sidebar**

```
sidebar：{
	'/blogs/front-frame/': [
        {
          text: 'Vue3',
          items: [
            {
              text: 'Vue3介绍',
              link: '/blogs/front-frame/vue3/introduction',
            },
          ]
       }
    ]
}
```

## 2.public位置变更

**vuepress的public**

`/docs/.vuepress/public`

**vitepress的public**

`/docs/public`

## 3.$withBase报错问题

在vitepress项目中使用

```
<img :src="$withBase('xxxx')">
```

会报错_ctx.$withBase is not defined

解决了很久还是解决不了，索性自己封装一个Image组件

```
<template>
  <img :src="src" data-fancybox="gallery" />
</template>

<script lang="ts">
import { toRefs, computed, onBeforeMount } from 'vue';

export default {
  name: 'Image',
  props: {
    src: String,
  },
  setup(props) {
    const { src } = toRefs(props);

    onBeforeMount(() => {
      if (window.location.pathname.startsWith('/nxf-notes')) {
        src.value = `/nxf-notes${src.value}`;
      }
    });
    return { src };
  },
};
</script>
```

组件记得在enhanceApp全局注册！！！

## 4.vitepress的enhanceApp位置更改了

**vuepress的enhanceApp**

`/docs/.vuepress/enhanceApp.js`

```
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
}
```

**vitepress的enhanceApp**

`/docs/.vieepress/theme/index.js`

```
import Theme from "vitepress/theme";
import Image from '../../../src/components/Image.vue';
export default {
  ...Theme,
  enhanceApp({ app, options, router, siteData }) {
    app.component(Image.name, Image);
  },
};
```

## 5.window带来的问题

在封装Image组件的时候，因为拿不到process，所以想着直接通过pathname是否带有/nxf-notes/来判断是开发环境还是生产环境，所以一开始直接在setup里面这么写了

```
<script lang="ts">
export default{
	setup(){
		window.location.pathname
	}
}
</script>
```

在build的时候会报错

当你在开发一个 VuePress 应用时，由于所有的页面在生成静态 HTML 时都需要通过 Node.js 服务端渲染，因此所有的 Vue 相关代码都应当遵循 [编写通用代码](https://ssr.vuejs.org/zh/universal.html)的要求。简而言之，请确保只在 `beforeMount` 或者 `mounted` 访问浏览器 / DOM 的 API。

[官方解决方案](https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6)

因此，我改成在`onBeforeMount`里面调用。

## 6.部署问题

部署分为以下几个步骤

1. 创建workflows

   有两种创建方式

   一种就是自己手动创建，在根目录创建一个`.github/workflows/xxx.yml`配置文件

   另外一种是在github上进行可视化创建

   点击`Actions`

   <Image :src="'/front-frame/vue3/vuepress-vitepress/1.png'" />

   选择一个工作流模板

   <Image :src="'/front-frame/vue3/vuepress-vitepress/2.png'" />

   修改模板后点击`start commit`

   <Image :src="'/front-frame/vue3/vuepress-vitepress/3.png'" />

   PS：.yml配置文件解析

   ```
   # name 可以自定义
   name: Deploy nxf-notes
   
   # 触发条件：在 push 到 main/master 分支后，新的 Github 项目 应该都是 main，而之前的项目一般都是 master
   on:
     push:
       branches:
         - master
   
   # 任务
   jobs:
     build-and-deploy:
       # 服务器环境：最新版 Ubuntu
       runs-on: ubuntu-latest
       steps:
         # 拉取代码
         - name: Checkout
           uses: actions/checkout@v2
           with:
             persist-credentials: false
   
         # 生成静态文件
         - name: Build
           run: npm install && npm run docs:build
   
         # 部署到 GitHub Pages
         - name: Deploy
         # uses应该是使用的包，下面的with是指传给这个包的参数，下面这个包应该是用来发布的
           uses: JamesIves/github-pages-deploy-action@releases/v3
           with:
             ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }} # 也就是我们刚才生成的 secret
             BRANCH: gh-pages # 部署到 gh-pages 分支，因为 main 分支存放的一般是源码，而 gh-pages 分支则用来存放生成的静态文件
             FOLDER: docs/.vitepress/dist # vuepress 生成的静态文件存放的地方
   ```

2. 生成ACCESS_TOKEN
   
   点击头像选择`Settings`

   <Image :src="'/front-frame/vue3/vuepress-vitepress/4.png'" />

   选择`Developer settings`

   <Image :src="'/front-frame/vue3/vuepress-vitepress/5.png'" />

   选择`Personal access tokens`，点击`Generate new token`

   <Image :src="'/front-frame/vue3/vuepress-vitepress/6.png'" />
   
   自定义token名称，选择有效期，还有权限

   <Image :src="'/front-frame/vue3/vuepress-vitepress/7.png'" />

   点击创建然后将token放至这个位置
   
   <Image :src="'/front-frame/vue3/vuepress-vitepress/8.png'" />
   
   PS：Name一定要跟.yml里面对上，在这里我们是`ACCESS_TOKEN`
## 7.文件夹命名

文件夹的命名一定不要出现&符号