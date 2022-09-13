<template>
  <img :src="targetSrc" data-fancybox="gallery" />
</template>

<script lang="ts">
import { toRefs, computed } from 'vue';
function getPathName() {
  return window?.location.pathname;
}
export default {
  name: 'Image',
  props: {
    src: String,
  },
  setup(props) {
    const { src } = toRefs(props);
    const targetSrc = computed(() => {
      if (getPathName().startsWith('/nxf-notes')) {
        return `/nxf-notes${src.value}`;
      }
      return src.value;
    });
    return { targetSrc };
  },
};
</script>
