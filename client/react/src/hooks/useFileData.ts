import { useEffect, useState } from "react";

export const useFileData = () => {
   const [files, setFiles] = useState<string[]>([]);

   useEffect(() => {
      fetch('/api/files')
         .then(res => res.json())
         .then(setFiles)
         .catch(err => console.error('Failed to fetch files:', err));
   }, []);

   return { files };
};