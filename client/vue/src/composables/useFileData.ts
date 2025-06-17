import { ref, onMounted } from 'vue';

export function useFileData() {
   const files = ref<string[]>([]);

   onMounted(async () => {
      try {
         const res = await fetch('/api/files');
         files.value = await res.json();
      } catch (err) {
         console.error('Failed to fetch files:', err);
      }
   });

   return { files };
}
