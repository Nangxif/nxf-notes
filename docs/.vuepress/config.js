// const sidebar = require('./siderbar.js');
module.exports = {
  title: "Nangxi's doc",
  description: "Nangxi's doc",
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
};
