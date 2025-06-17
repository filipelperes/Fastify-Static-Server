<template>
  <div style="padding: 2rem; font-family: sans-serif;">
    <h1>Available Files</h1>
    <FileList :files="files" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue' ;
import FileList from '@/vue/components/FileList.vue';
import { useFileData } from '@/vue/composables/useFileData';
const { files } = useFileData();

onMounted(async () => {
  try {
    const res = await fetch('/api/files');
    files.value = await res.json() as string[];
  } catch (err) {
    console.error('Failed to fetch files:', err);
  }
})
</script>

<style scoped>
/* Pode manter o App.css como global, ou usar aqui */
</style>