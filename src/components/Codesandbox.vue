<template>
  <iframe :src="src" class="code-sandbox"></iframe>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps({
  src: String,
});
</script>
<style scoped>
.code-sandbox {
  width: 100%;
  height: 500px;
  border: none;
}
</style>
