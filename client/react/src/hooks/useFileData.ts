import { useCallback, useEffect, useState } from "react";

export const useFileData = () => {
   const [files, setFiles] = useState<string[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   const getFiles = useCallback(async () => {
      setLoading(true);
      setError(null);

      await fetch('/api/files')
         .then(res => {
            if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
            return res.json();
         })
         .then(setFiles)
         .catch(error => {
            console.error((`Failed to fetch files: ${error}`));
            setError(error.message || "Failed to fetch files");
         })
         .finally(() => {
            setLoading(false);
         });
   }, []);

   useEffect(() => {
      getFiles();
   }, [getFiles]);

   return { files, loading, error, getFiles };
};