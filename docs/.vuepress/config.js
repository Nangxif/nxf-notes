const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  title: "Nangxi's docs",
  description: "Nangxi's docs",
  base: isProd ? '/nxf-notes/' : '/',
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
        ],
      },
      { text: 'JS&TS', link: '/blogs/js&ts/js/coriolization-of-the-function' },
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
          title: 'Vue3',
          children: [
            {
              title: 'Vue3介绍',
              path: '/blogs/front-frame/vue3/introduction',
            },
            {
              title: 'Vue3环境搭建',
              path: '/blogs/front-frame/vue3/environment-setup',
            },
            {
              title: 'reactive',
              path: '/blogs/front-frame/vue3/reactive',
            },
            {
              title: 'diff',
              path: '/blogs/front-frame/vue3/diff',
            },
            {
              title: '杂货间',
              children: [
                {
                  title: 'Vue3渲染的几种方式',
                  path: '/blogs/front-frame/vue3/groceries/rendering',
                },
              ],
            },
          ],
        },
        {
          title: 'React',
          children: [
            {
              title: 'introduction',
              path: '/blogs/front-frame/react/introduction',
            },
            {
              title: '如何调试react源码',
              path: '/blogs/front-frame/react/debug-react',
            },
          ],
        },
      ],
      '/blogs/automation/': [
        {
          title: 'Webpack',
          children: [
            {
              title: 'introduction',
              path: '/blogs/automation/webpack/introduction',
            },

            {
              title: '杂货间',
              children: [
                {
                  title: 'Babel相关',
                  path: '/blogs/automation/webpack/groceries/babel',
                },
                {
                  title: '自定义postcss插件',
                  path: '/blogs/automation/webpack/groceries/postcss',
                },
                {
                  title: 'webpack打包vue3',
                  path: '/blogs/automation/webpack/groceries/webpack-vue3',
                },
              ],
            },
          ],
        },
        {
          title: 'ESBuild',
          children: [
            {
              title: 'introduction',
              path: '/blogs/automation/esbuild/introduction',
            },
          ],
        },
      ],
      '/blogs/js&ts/': [
        {
          title: 'JavaScript',
          children: [
            {
              title: '函数柯里化',
              path: '/blogs/js&ts/js/coriolization-of-the-function',
            },
          ],
        },
        {
          title: 'TypeScript',
          children: [
            {
              title: 'introduction',
              path: '/blogs/js&ts/ts/introduction',
            },
            {
              title: '杂货间',
              children: [
                {
                  title: '.d.ts和declare的用途',
                  path: '/blogs/js&ts/ts/groceries/d.ts-he-declare-de-yong-tu',
                },
              ],
            },
          ],
        },
      ],
      '/blogs/browser/': [
        {
          title: '浏览器',
          children: [
            {
              title: '浏览器运行机制',
              path: '/blogs/browser/operating-machining',
            },
            {
              title: '事件循环',
              path: '/blogs/browser/event-loop',
            },
          ],
        },
      ],
      '/blogs/node/': [
        {
          title: 'Node',
          children: [
            {
              title: 'introduction',
              path: '/blogs/node/introduction',
            },
          ],
        },
      ],
    },
    lastUpdated: true,
  },
  markdown: {
    lineNumbers: true,
  },
};
