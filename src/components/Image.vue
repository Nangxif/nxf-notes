<template>
  <img :src="src" data-fancybox="gallery" />
</template>

<script lang="ts">
import { toRefs, onMounted } from 'vue';

export default {
  name: 'Image',
  props: {
    src: String,
  },
  setup(props) {
    const { src } = toRefs(props);
    // 这里不能用beforeMount，因为img节点还未挂载
    onMounted(() => {
      // if (window.location.pathname.startsWith('/nxf-notes')) {
      src.value = `/nxf-notes${src.value}`;
      // }
    });
    return { src };
  },
};
</script>
