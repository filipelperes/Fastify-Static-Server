<template>
  <div class="h-screen w-screen font-inter flex flex-col justify-center items-center bg-stone-700 text-neutral-50">
    <h1 class="capitalize tracking-wider text-7xl">Available Files</h1>
    <FileList :files="files" />
    <button
      @click="getFiles"
      :disabled="loading"
      :class="[
        'transition duration-300',
        loading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
      ]"
      :title="loading ? 'Refreshing...' : 'Refresh Files'"
      :aria-label="loading ? 'Refreshing files' : 'Refresh files'"
    >
      <RefreshIcon :class="{ 'animate-spin': loading }" />
    </button>
  </div>
</template>

<script setup lang="ts">
declare const alert: (message?: string) => void;
import { watch } from 'vue' ;
import FileList from '@/vue/components/FileList.vue';
import RefreshIcon from '@/vue/components/RefreshIcon.vue';
import { useFileData } from '@/vue/composables/useFileData';

const { files, loading, error, getFiles } = useFileData();

watch(error, (newError) => {
  if (newError) {
    alert(`Failed to fetch files: ${newError}`);
  }
});
</script>

<!-- <style scoped>
/* Pode manter o App.css como global, ou usar aqui */
</style> -->