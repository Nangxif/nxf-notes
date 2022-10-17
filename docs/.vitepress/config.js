import mdItCustomAttrs from 'markdown-it-custom-attrs';
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  title: "Nangxi's blogs",
  description: "Nangxi's blogs",
  base: isProd ? '/nxf-notes/' : '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `${isProd ? '/nxf-notes/' : '/'}favicon.ico`,
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js',
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: '框架',
        items: [
          { text: 'Vue3', link: '/blogs/front-frame/vue3/introduction' },
          { text: 'React', link: '/blogs/front-frame/react/introduction' },
        ],
      },
      {
        text: '自动化',
        items: [
          { text: 'Webpack', link: '/blogs/automation/webpack/introduction' },
          { text: 'ESBuild', link: '/blogs/automation/esbuild/introduction' },
          { text: 'Rollup', link: '/blogs/automation/rollup/introduction' },
          {
            text: '包管理工具',
            link: '/blogs/automation/package-manage/npm/introduction',
          },
        ],
      },
      { text: 'JS&TS', link: '/blogs/js-ts/js/coriolization-of-the-function' },
      {
        text: '浏览器',
        link: '/blogs/browser/operating-machining',
      },
      { text: 'Node', link: '/blogs/node/introduction' },
      {
        text: '关于我',
        items: [
          { text: 'github', link: 'https://github.com/Nangxif' },
          {
            text: '掘金',
            link: 'https://juejin.cn/user/1821245353761704/posts',
          },
        ],
      },
    ],
    sidebar: {
      '/blogs/front-frame/': [
        {
          text: 'Vue3',
          items: [
            {
              text: 'Vue3介绍',
              link: '/blogs/front-frame/vue3/introduction',
            },
            {
              text: 'Vue3环境搭建',
              link: '/blogs/front-frame/vue3/environment-setup',
            },
            {
              text: 'reactivity',
              items: [
                {
                  text: 'reactive',
                  link: '/blogs/front-frame/vue3/reactivity/reactive',
                },
                {
                  text: 'effect',
                  link: '/blogs/front-frame/vue3/reactivity/effect',
                },
                {
                  text: 'computed',
                  link: '/blogs/front-frame/vue3/reactivity/computed',
                },
                {
                  text: 'watch',
                  link: '/blogs/front-frame/vue3/reactivity/watch',
                },
              ],
            },
            {
              text: 'runtime-dom',
              link: '/blogs/front-frame/vue3/runtime-dom',
            },
            {
              text: 'runtime-core',
              items: [
                {
                  text: '虚拟节点vnode',
                  link: '/blogs/front-frame/vue3/runtime-core/vnode',
                },
                {
                  text: 'createRenderer创建渲染器',
                  link: '/blogs/front-frame/vue3/runtime-core/createRenderer',
                },
                {
                  text: 'diff算法',
                  link: '/blogs/front-frame/vue3/runtime-core/diff',
                },
                {
                  text: '生命周期',
                  link: '/blogs/front-frame/vue3/runtime-core/apiLifecycle',
                },
              ],
            },
            {
              text: 'Pinia',
              items: [
                {
                  text: 'Pinia介绍以及使用',
                  link: '/blogs/front-frame/vue3/pinia/introduction',
                },
                {
                  text: '实现一个Pinia',
                  link: '/blogs/front-frame/vue3/pinia/sound-code',
                },
              ],
            },
            {
              text: 'Vuex',
              items: [
                {
                  text: 'Vuex介绍以及使用',
                  link: '/blogs/front-frame/vue3/vuex/introduction',
                },
                {
                  text: '实现一个基础vuex',
                  link: '/blogs/front-frame/vue3/vuex/simple-vuex',
                },
                {
                  text: '完整的vuex',
                  link: '/blogs/front-frame/vue3/vuex/whole-vuex',
                },
                {
                  text: 'ModuleCollection的实现',
                  link: '/blogs/front-frame/vue3/vuex/ModuleCollection',
                },
                {
                  text: '递归安装模块以及格式化vuex',
                  link: '/blogs/front-frame/vue3/vuex/installModule',
                },
                {
                  text: 'vuex增加响应式效果',
                  link: '/blogs/front-frame/vue3/vuex/resetStoreVm',
                },
                {
                  text: '动态注册模块',
                  link: '/blogs/front-frame/vue3/vuex/register-module',
                },
                {
                  text: 'vuex插件',
                  link: '/blogs/front-frame/vue3/vuex/plugins',
                },
                {
                  text: '区分mutation和action',
                  link: '/blogs/front-frame/vue3/vuex/difference-between-mutation-action',
                },
                {
                  text: '辅助函数',
                  link: '/blogs/front-frame/vue3/vuex/helper',
                },
              ],
            },
            {
              text: '杂货间',
              items: [
                {
                  text: 'Vue3渲染的几种方式',
                  link: '/blogs/front-frame/vue3/groceries/rendering',
                },
                {
                  text: 'vuepress和vitepress遇到的坑',
                  link: '/blogs/front-frame/vue3/groceries/vuepress-vitepress',
                },
              ],
            },
          ],
        },
        {
          text: 'React',
          items: [
            {
              text: 'introduction',
              link: '/blogs/front-frame/react/introduction',
            },
            {
              text: '如何调试react源码',
              link: '/blogs/front-frame/react/debug-react',
            },
          ],
        },
      ],
      '/blogs/automation/': [
        {
          text: 'Webpack',
          items: [
            {
              text: 'introduction',
              link: '/blogs/automation/webpack/introduction',
            },

            {
              text: '杂货间',
              items: [
                {
                  text: 'Babel相关',
                  link: '/blogs/automation/webpack/groceries/babel',
                },
                {
                  text: '自定义postcss插件',
                  link: '/blogs/automation/webpack/groceries/postcss',
                },
                {
                  text: 'webpack打包vue3',
                  link: '/blogs/automation/webpack/groceries/webpack-vue3',
                },
              ],
            },
          ],
        },
        {
          text: 'ESBuild',
          items: [
            {
              text: 'introduction',
              link: '/blogs/automation/esbuild/introduction',
            },
          ],
        },
        {
          text: 'Rollup',
          items: [
            {
              text: 'Rollup介绍',
              link: '/blogs/automation/rollup/introduction',
            },
            {
              text: '杂货间',
              items: [
                {
                  text: 'rollup打包vue3',
                  link: '/blogs/automation/rollup/groceries/rollup-vue3',
                },
              ],
            },
          ],
        },
        {
          text: '包管理工具',
          items: [
            {
              text: 'npm',
              items: [
                {
                  text: 'introduction',
                  link: '/blogs/automation/package-manage/npm/introduction',
                },
                {
                  text: '运行 npm run xxx 的时候发生了什么？',
                  link: '/blogs/automation/package-manage/npm/npm-run-xxx',
                },
              ],
            },
            {
              text: 'monorepo',
              items: [
                {
                  text: 'monorepo介绍',
                  link: '/blogs/automation/package-manage/monorepo/introduction',
                },
                {
                  text: 'yarn workspaces创建monorepo项目',
                  link: '/blogs/automation/package-manage/monorepo/yarn-workspaces-monorepo',
                },
                {
                  text: 'lerna',
                  link: '/blogs/automation/package-manage/monorepo/lerna',
                },
              ],
            },
            {
              text: '杂货间',
              items: [
                {
                  text: 'npx',
                  link: '/blogs/automation/package-manage/groceries/npx',
                },
              ],
            },
          ],
        },
      ],
      '/blogs/js-ts/': [
        {
          text: 'JavaScript',
          items: [
            {
              text: '函数柯里化',
              link: '/blogs/js-ts/js/coriolization-of-the-function',
            },
          ],
        },
        {
          text: 'TypeScript',
          items: [
            {
              text: 'introduction',
              link: '/blogs/js-ts/ts/introduction',
            },
            {
              text: '杂货间',
              items: [
                {
                  text: '.d.ts和declare的用途',
                  link: '/blogs/js-ts/ts/groceries/d.ts-he-declare-de-yong-tu',
                },
              ],
            },
          ],
        },
      ],
      '/blogs/browser/': [
        {
          text: '浏览器',
          items: [
            {
              text: '浏览器运行机制',
              link: '/blogs/browser/operating-machining',
            },
            {
              text: '事件循环',
              link: '/blogs/browser/event-loop',
            },
          ],
        },
      ],
      '/blogs/node/': [
        {
          text: 'Node',
          items: [
            {
              text: 'introduction',
              link: '/blogs/node/introduction',
            },
          ],
        },
      ],
    },
    footer: {
      copyright: 'Copyright © 2022-present Nangxif',
    },
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      });
    },
  },
};
