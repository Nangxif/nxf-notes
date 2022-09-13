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
              text: 'reactive',
              link: '/blogs/front-frame/vue3/reactive',
            },
            {
              text: 'diff',
              link: '/blogs/front-frame/vue3/diff',
            },
            {
              text: '杂货间',
              items: [
                {
                  text: 'Vue3渲染的几种方式',
                  link: '/blogs/front-frame/vue3/groceries/rendering',
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
      ],
      '/blogs/js&ts/': [
        {
          text: 'JavaScript',
          items: [
            {
              text: '函数柯里化',
              link: '/blogs/js&ts/js/coriolization-of-the-function',
            },
          ],
        },
        {
          text: 'TypeScript',
          items: [
            {
              text: 'introduction',
              link: '/blogs/js&ts/ts/introduction',
            },
            {
              text: '杂货间',
              items: [
                {
                  text: '.d.ts和declare的用途',
                  link: '/blogs/js&ts/ts/groceries/d.ts-he-declare-de-yong-tu',
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
    lastUpdated: true,
  },
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
