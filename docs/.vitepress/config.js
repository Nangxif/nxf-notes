import mdItCustomAttrs from "markdown-it-custom-attrs";
const isProd = process.env.NODE_ENV === "production";
module.exports = {
  title: "Nangxi's blogs",
  description: "Nangxi's blogs",
  base: isProd ? "/nxf-notes/" : "/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: `${isProd ? "/nxf-notes/" : "/"}favicon.ico`,
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js",
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: "框架",
        items: [
          {
            text: "Vue3",
            link: "/blogs/front-frame/vue3/sound-code/introduction",
          },
          { text: "React", link: "/blogs/front-frame/react/introduction" },
          {
            text: "微前端",
            link: "/blogs/front-frame/microfront/introduction",
          },
        ],
      },
      {
        text: "自动化",
        items: [
          { text: "Webpack", link: "/blogs/automation/webpack/introduction" },
          { text: "ESBuild", link: "/blogs/automation/esbuild/introduction" },
          { text: "Rollup", link: "/blogs/automation/rollup/introduction" },
          {
            text: "包管理工具",
            link: "/blogs/automation/package-manage/npm/introduction",
          },
        ],
      },
      { text: "JS&TS", link: "/blogs/js-ts/js/design-mode/introduction" },
      { text: "服务器端", link: "/blogs/server-end/node/introduction" },
      {
        text: "其他",
        items: [
          {
            text: "浏览器",
            link: "/blogs/other/browser/operating-machining",
          },
          {
            text: "网络",
            link: "/blogs/other/network/websocket",
          },
        ],
      },
      {
        text: "关于我",
        items: [
          { text: "github", link: "https://github.com/Nangxif" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/1821245353761704/posts",
          },
        ],
      },
    ],
    sidebar: {
      "/blogs/front-frame/": [
        {
          text: "Vue3",
          items: [
            {
              text: "Vue3源码",
              items: [
                {
                  text: "Vue3介绍",
                  link: "/blogs/front-frame/vue3/sound-code/introduction",
                },
                {
                  text: "Vue3环境搭建",
                  link: "/blogs/front-frame/vue3/sound-code/environment-setup",
                },
                {
                  text: "reactivity",
                  items: [
                    {
                      text: "reactive",
                      link: "/blogs/front-frame/vue3/sound-code/reactivity/reactive",
                    },
                    {
                      text: "effect",
                      link: "/blogs/front-frame/vue3/sound-code/reactivity/effect",
                    },
                    {
                      text: "computed",
                      link: "/blogs/front-frame/vue3/sound-code/reactivity/computed",
                    },
                    {
                      text: "watch",
                      link: "/blogs/front-frame/vue3/sound-code/reactivity/watch",
                    },
                  ],
                },
                {
                  text: "runtime-dom",
                  link: "/blogs/front-frame/vue3/sound-code/runtime-dom",
                },
                {
                  text: "runtime-core",
                  items: [
                    {
                      text: "虚拟节点vnode",
                      link: "/blogs/front-frame/vue3/sound-code/runtime-core/vnode",
                    },
                    {
                      text: "createRenderer创建渲染器",
                      link: "/blogs/front-frame/vue3/sound-code/runtime-core/createRenderer",
                    },
                    {
                      text: "文本和无用标签(Fragment)的diff算法",
                      link: "/blogs/front-frame/vue3/sound-code/runtime-core/text-fragment-diff",
                    },
                    {
                      text: "元素节点组件的diff算法【上】",
                      link: "/blogs/front-frame/vue3/sound-code/runtime-core/diff-1",
                    },
                    {
                      text: "元素节点组件的diff算法【下】",
                      link: "/blogs/front-frame/vue3/sound-code/runtime-core/diff-2",
                    },
                    {
                      text: "组件的创建和更新【上】",
                      link: "/blogs/front-frame/vue3/sound-code/runtime-core/component-1",
                    },
                    {
                      text: "组件的创建和更新【下】",
                      link: "/blogs/front-frame/vue3/sound-code/runtime-core/component-2",
                    },
                    {
                      text: "组件插槽",
                      link: "/blogs/front-frame/vue3/sound-code/runtime-core/slots",
                    },
                    {
                      text: "生命周期",
                      link: "/blogs/front-frame/vue3/sound-code/runtime-core/apiLifecycle",
                    },
                  ],
                },
              ],
            },
            {
              text: "Pinia",
              items: [
                {
                  text: "Pinia介绍以及使用",
                  link: "/blogs/front-frame/vue3/pinia/introduction",
                },
                {
                  text: "实现一个Pinia",
                  link: "/blogs/front-frame/vue3/pinia/sound-code",
                },
              ],
            },
            {
              text: "Vuex",
              items: [
                {
                  text: "Vuex介绍以及使用",
                  link: "/blogs/front-frame/vue3/vuex/introduction",
                },
                {
                  text: "实现一个基础vuex",
                  link: "/blogs/front-frame/vue3/vuex/simple-vuex",
                },
                {
                  text: "完整的vuex",
                  items: [
                    {
                      text: "前言",
                      link: "/blogs/front-frame/vue3/vuex/whole-vuex/introduction",
                    },
                    {
                      text: "ModuleCollection的实现",
                      link: "/blogs/front-frame/vue3/vuex/whole-vuex/ModuleCollection",
                    },
                    {
                      text: "递归安装模块以及格式化vuex",
                      link: "/blogs/front-frame/vue3/vuex/whole-vuex/installModule",
                    },
                    {
                      text: "vuex增加响应式效果",
                      link: "/blogs/front-frame/vue3/vuex/whole-vuex/resetStoreVm",
                    },
                    {
                      text: "动态注册模块",
                      link: "/blogs/front-frame/vue3/vuex/whole-vuex/register-module",
                    },
                    {
                      text: "vuex插件",
                      link: "/blogs/front-frame/vue3/vuex/whole-vuex/plugins",
                    },
                    {
                      text: "区分mutation和action",
                      link: "/blogs/front-frame/vue3/vuex/whole-vuex/difference-between-mutation-action",
                    },
                    {
                      text: "辅助函数",
                      link: "/blogs/front-frame/vue3/vuex/whole-vuex/helper",
                    },
                  ],
                },
              ],
            },
            {
              text: "杂货间",
              items: [
                {
                  text: "Vue3渲染的几种方式",
                  link: "/blogs/front-frame/vue3/groceries/rendering",
                },
                {
                  text: "vuepress和vitepress遇到的坑",
                  link: "/blogs/front-frame/vue3/groceries/vuepress-vitepress",
                },
              ],
            },
          ],
        },
        {
          text: "React",
          items: [
            {
              text: "introduction",
              link: "/blogs/front-frame/react/introduction",
            },
            {
              text: "如何调试react源码",
              link: "/blogs/front-frame/react/debug-react",
            },
            {
              text: "手写react-router",
              link: "/blogs/front-frame/react/react-router",
            },
            {
              text: "状态管理",
              items: [
                {
                  text: "zustand",
                  link: "/blogs/front-frame/react/state-management/zustand",
                },
              ],
            },
            {
              text: "react源码",
              items: [
                {
                  text: "什么是jsx",
                  link: "/blogs/front-frame/react/sound-code/what-is-jsx",
                },
                {
                  text: "初探reconciler",
                  link: "/blogs/front-frame/react/sound-code/first-exploration-reconciler",
                },
                {
                  text: "如何触发更新",
                  link: "/blogs/front-frame/react/sound-code/how-to-trigger-update",
                },
                {
                  text: "初探mount流程（beginWork/completeWork）",
                  link: "/blogs/front-frame/react/sound-code/first-exploration-mount-progress",
                },
                {
                  text: "commit阶段",
                  link: "/blogs/front-frame/react/sound-code/commit-work",
                },
                {
                  text: "hook机制",
                  link: "/blogs/front-frame/react/sound-code/hook",
                },
                {
                  text: "useState",
                  link: "/blogs/front-frame/react/sound-code/useState",
                },
                {
                  text: "实现同步更新流程（一）",
                  link: "/blogs/front-frame/react/sound-code/batched-updates-1",
                },
                {
                  text: "实现同步更新流程（二）",
                  link: "/blogs/front-frame/react/sound-code/batched-updates-2",
                },
                {
                  text: "useEffect",
                  link: "/blogs/front-frame/react/sound-code/useEffect",
                },
                {
                  text: "useRef",
                  link: "/blogs/front-frame/react/sound-code/useRef",
                },
              ],
            },
          ],
        },
        {
          text: "微前端",
          items: [
            {
              text: "微前端概念",
              link: "/blogs/front-frame/microfront/introduction",
            },
            {
              text: "SystemJS剖析",
              link: "/blogs/front-frame/microfront/systemjs",
            },
            {
              text: "single-spa实战",
              link: "/blogs/front-frame/microfront/single-spa-use",
            },
            {
              text: "single-spa的实现【上】",
              link: "/blogs/front-frame/microfront/realize-single-spa-1",
            },
            {
              text: "single-spa的实现【下】",
              link: "/blogs/front-frame/microfront/realize-single-spa-2",
            },
            {
              text: "qiankun实战",
              link: "/blogs/front-frame/microfront/qiankun-use",
            },
            {
              text: "沙箱的原理",
              link: "/blogs/front-frame/microfront/sandbox-theory",
            },
          ],
        },
      ],
      "/blogs/automation/": [
        {
          text: "Webpack",
          items: [
            {
              text: "introduction",
              link: "/blogs/automation/webpack/introduction",
            },

            {
              text: "杂货间",
              items: [
                {
                  text: "Babel相关",
                  link: "/blogs/automation/webpack/groceries/babel",
                },
                {
                  text: "自定义postcss插件",
                  link: "/blogs/automation/webpack/groceries/postcss",
                },
                {
                  text: "webpack打包vue3",
                  link: "/blogs/automation/webpack/groceries/webpack-vue3",
                },
              ],
            },
          ],
        },
        {
          text: "ESBuild",
          items: [
            {
              text: "introduction",
              link: "/blogs/automation/esbuild/introduction",
            },
          ],
        },
        {
          text: "Rollup",
          items: [
            {
              text: "Rollup介绍",
              link: "/blogs/automation/rollup/introduction",
            },
            {
              text: "杂货间",
              items: [
                {
                  text: "rollup打包vue3",
                  link: "/blogs/automation/rollup/groceries/rollup-vue3",
                },
              ],
            },
          ],
        },
        {
          text: "包管理工具",
          items: [
            {
              text: "npm",
              items: [
                {
                  text: "introduction",
                  link: "/blogs/automation/package-manage/npm/introduction",
                },
                {
                  text: "运行 npm run xxx 的时候发生了什么？",
                  link: "/blogs/automation/package-manage/npm/npm-run-xxx",
                },
              ],
            },
            {
              text: "monorepo",
              items: [
                {
                  text: "monorepo介绍",
                  link: "/blogs/automation/package-manage/monorepo/introduction",
                },
                {
                  text: "yarn workspaces创建monorepo项目",
                  link: "/blogs/automation/package-manage/monorepo/yarn-workspaces-monorepo",
                },
                {
                  text: "lerna",
                  link: "/blogs/automation/package-manage/monorepo/lerna",
                },
              ],
            },
            {
              text: "杂货间",
              items: [
                {
                  text: "npx",
                  link: "/blogs/automation/package-manage/groceries/npx",
                },
              ],
            },
          ],
        },
      ],
      "/blogs/js-ts/": [
        {
          text: "JavaScript",
          items: [
            {
              text: "设计模式",
              items: [
                {
                  text: "介绍",
                  link: "/blogs/js-ts/js/design-mode/introduction",
                },
                {
                  text: "模式一——构造器模式",
                  link: "/blogs/js-ts/js/design-mode/gouzaoqimoshi",
                },
                {
                  text: "模式二——原型模式",
                  link: "/blogs/js-ts/js/design-mode/yuanxingmoshi",
                },
                {
                  text: "模式三——工厂模式",
                  link: "/blogs/js-ts/js/design-mode/gongchangmoshi",
                },
                {
                  text: "模式四——抽象工厂模式",
                  link: "/blogs/js-ts/js/design-mode/chouxianggongchangmoshi",
                },
                {
                  text: "模式五——建造者模式",
                  link: "/blogs/js-ts/js/design-mode/jianzaozhemoshi",
                },
                {
                  text: "模式六——单例模式",
                  link: "/blogs/js-ts/js/design-mode/danlimoshi",
                },
                {
                  text: "模式七——装饰器模式",
                  link: "/blogs/js-ts/js/design-mode/zhuangshiqimoshi",
                },
                {
                  text: "模式八——适配模式",
                  link: "/blogs/js-ts/js/design-mode/shipeiqimoshi",
                },
                {
                  text: "模式九——策略模式",
                  link: "/blogs/js-ts/js/design-mode/celuemoshi",
                },
                {
                  text: "模式十——代理模式",
                  link: "/blogs/js-ts/js/design-mode/dailimoshi",
                },
                {
                  text: "模式十一——观察者模式",
                  link: "/blogs/js-ts/js/design-mode/guanchazhemoshi",
                },
                {
                  text: "模式十二——发布订阅模式",
                  link: "/blogs/js-ts/js/design-mode/fabudingyuemoshi",
                },
                {
                  text: "模式十三——模块模式",
                  link: "/blogs/js-ts/js/design-mode/mokuaimoshi",
                },
                {
                  text: "模式十四——桥接模式",
                  link: "/blogs/js-ts/js/design-mode/qiaojiemoshi",
                },
                {
                  text: "模式十五——组合模式",
                  link: "/blogs/js-ts/js/design-mode/zuhemoshi",
                },
                {
                  text: "模式十六——命令模式",
                  link: "/blogs/js-ts/js/design-mode/minglinmoshi",
                },
                {
                  text: "模式十七——宏命令模式",
                  link: "/blogs/js-ts/js/design-mode/hongminglinmoshi",
                },
                {
                  text: "模式十八——模板方法模式",
                  link: "/blogs/js-ts/js/design-mode/mubanfangfamoshi",
                },
                {
                  text: "模式十九——迭代器模式",
                  link: "/blogs/js-ts/js/design-mode/diedaiqimoshi",
                },
                {
                  text: "模式二十——职责链模式",
                  link: "/blogs/js-ts/js/design-mode/zhizelianmoshi",
                },
              ],
            },
            {
              text: "jsAPI的实现",
              items: [
                {
                  text: "实现new操作符",
                  link: "/blogs/js-ts/js/js-api/new",
                },
                {
                  text: "实现instanceof操作符",
                  link: "/blogs/js-ts/js/js-api/instanceof",
                },
                {
                  text: "实现深拷贝",
                  link: "/blogs/js-ts/js/js-api/deep-clone",
                },
                {
                  text: "实现Map",
                  link: "/blogs/js-ts/js/js-api/map",
                },
                {
                  text: "实现call,apply,bind",
                  link: "/blogs/js-ts/js/js-api/call-apply-bind",
                },
              ],
            },
            {
              text: "函数柯里化",
              link: "/blogs/js-ts/js/coriolization-of-the-function",
            },
          ],
        },
        {
          text: "TypeScript",
          items: [
            {
              text: "introduction",
              link: "/blogs/js-ts/ts/introduction",
            },
            {
              text: "杂货间",
              items: [
                {
                  text: ".d.ts和declare的用途",
                  link: "/blogs/js-ts/ts/groceries/d.ts-he-declare-de-yong-tu",
                },
              ],
            },
          ],
        },
      ],
      "/blogs/other/": [
        {
          text: "浏览器",
          items: [
            {
              text: "浏览器运行机制",
              link: "/blogs/other/browser/operating-machining",
            },
            {
              text: "事件循环",
              link: "/blogs/other/browser/event-loop",
            },
            {
              text: "协商缓存和强缓存",
              link: "/blogs/other/browser/negotiated-cache-and-strong-cache",
            },
            {
              text: "预检请求（preflight）【摘录】",
              link: "/blogs/other/browser/precheck-request",
            },
            {
              text: "indexDB",
              link: "/blogs/other/browser/indexdb",
            },
            {
              text: "【转】Web Components",
              link: "/blogs/other/browser/web-compoments",
            },
          ],
        },
        {
          text: "网络",
          items: [
            {
              text: "websocket",
              link: "/blogs/other/network/websocket",
            },
          ],
        },
      ],
      "/blogs/server-end/": [
        {
          text: "服务器端",
          items: [
            {
              text: "Node",
              items: [
                {
                  text: "introduction",
                  link: "/blogs/server-end/node/introduction",
                },
                {
                  text: "node模块化以及exports与module.exports",
                  link: "/blogs/server-end/node/node-modularization",
                },
              ],
            },
            {
              text: "数据库",
              items: [
                {
                  text: "sql",
                  items: [
                    {
                      text: "什么的是SQL",
                      link: "/blogs/server-end/database/sql/introduction",
                    },
                    {
                      text: "MySQL workbench安装和介绍",
                      link: "/blogs/server-end/database/sql/install-mysql-workbench",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      copyright: "Copyright © 2024-present Nangxif",
    },
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
};
