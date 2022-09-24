import Theme from 'vitepress/theme';
import Image from '../../../src/components/Image.vue';
import Codesandbox from '../../../src/components/Codesandbox.vue';
export default {
  ...Theme,
  enhanceApp({ app, options, router, siteData }) {
    app.component(Image.name, Image);
    app.component('Codesandbox', Codesandbox);
  },
};
