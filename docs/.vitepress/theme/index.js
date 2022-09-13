import theme from 'vitepress/dist/client/theme-default/index.js';
import Image from '../../../src/components/Image.vue';
export default {
  ...theme,
  enhanceApp({ app, options, router, siteData }) {
    app.component(Image.name, Image);
  },
};
