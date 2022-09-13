<template>
  <img :src="targetSrc" data-fancybox="gallery" />
</template>

<script lang="ts">
import { toRefs, computed } from 'vue';
export default {
  name: 'Image',
  props: {
    src: String,
  },
  setup(props) {
    const { src } = toRefs(props);
    const targetSrc = computed(() => {
      if (window.location.pathname.startsWith('/nxf-notes')) {
        return `/nxf-notes${src.value}`;
      }
      return src.value;
    });
    return { targetSrc };
  },
};
</script>
