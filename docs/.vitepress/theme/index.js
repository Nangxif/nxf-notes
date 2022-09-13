import Theme from "vitepress/theme";
import Image from '../../../src/components/Image.vue';
export default {
  ...Theme,
  enhanceApp({ app, options, router, siteData }) {
    app.component(Image.name, Image);
  },
};
