import { ref, onMounted } from 'vue';

export function useFileData() {
   const files = ref<string[]>([]);
   const loading = ref<boolean>(true);
   const error = ref<string | null>(null);

   const getFiles = async () => {
      loading.value = true;
      error.value = null;

      await fetch('/api/files')
         .then(res => {
            if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
            return res.json();
         })
         .then(data => {
            files.value = data;
         })
         .catch(err => {
            console.error('Failed to fetch files:', err);
            error.value = err.message || 'Failed to fetch files';
         })
         .finally(() => {
            loading.value = false;
         });
   };

   onMounted(() => {
      getFiles();
   });

   return { files, loading, error, getFiles };
}
