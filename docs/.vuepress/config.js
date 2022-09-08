// const sidebar = require('./siderbar.js');
module.exports = {
  title: "Nangxi's docs",
  description: "Nangxi's docs",
  base: '/',
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
      { text: 'TypeScript', link: '/blogs/ts/introduction' },
      {
        text: '浏览器',
        link: '/blogs/browser/operating-machining',
      },
      { text: 'Node', link: '/blogs/node/introduction' },
      { text: '掘金', link: 'https://juejin.cn/user/1821245353761704/posts' },
    ],
    sidebar: {
      '/blogs/front-frame/': [
        {
          title: 'Vue3',
          children: [
            {
              title: 'introduction',
              path: '/blogs/front-frame/vue3/introduction',
            },
            {
              title: 'reactive',
              path: '/blogs/front-frame/vue3/reactive',
            },
            {
              title: 'diff',
              path: '/blogs/front-frame/vue3/diff',
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
              title: 'babel',
              path: '/blogs/automation/webpack/babel',
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
      '/blogs/ts/': [
        {
          title: 'TypeScript',
          children: [
            {
              title: 'introduction',
              path: '/blogs/ts/introduction',
            },
            {
              title: '杂货间',
              children: [
                {
                  title: '.d.ts和declare的用途',
                  path: '/blogs/ts/groceries/d.ts-he-declare-de-yong-tu',
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
