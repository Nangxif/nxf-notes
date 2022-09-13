<template>
  <img :src="src" data-fancybox="gallery" />
</template>

<script lang="ts">
import { toRefs, computed, onBeforeMount } from 'vue';

export default {
  name: 'Image',
  props: {
    src: String,
  },
  setup(props) {
    const { src } = toRefs(props);

    onBeforeMount(() => {
      if (window.location.pathname.startsWith('/nxf-notes')) {
        src.value = `/nxf-notes${src.value}`;
      }
    });
    return { src };
  },
};
</script>
