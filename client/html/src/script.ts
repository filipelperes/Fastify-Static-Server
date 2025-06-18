const fileList = document.getElementById('file-list') as HTMLUListElement | null;
const refreshButton = document.getElementById('refresh-button') as HTMLButtonElement | null;
const refreshIcon = document.getElementById('refresh-icon') as SVGSVGElement | null;

function setLoading(isLoading: boolean) {
   if (!refreshButton || !refreshIcon) return;
   refreshButton.disabled = isLoading;

   if (isLoading) {
      refreshButton.classList.add('cursor-not-allowed', 'opacity-60');
      refreshButton.classList.remove('cursor-pointer');
   } else {
      refreshButton.classList.remove('cursor-not-allowed', 'opacity-60');
      refreshButton.classList.add('cursor-pointer');
   }

   const value = isLoading ? 'Refreshing Files...' : 'Refresh Files';
   refreshButton.setAttribute('title', value);
   refreshButton.setAttribute('aria-label', value);

   refreshIcon.classList.toggle('animate-spin', isLoading);
}

async function getFiles() {
   if (!refreshButton || !fileList) return;

   setLoading(true);
   if (fileList) fileList.innerHTML = '';

   await fetch('/api/files')
      .then((res: Response) => {
         if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
         return res.json();
      })
      .then((files: string[]) => {
         if (fileList) {
            files.forEach((file: string) => {
               const li = document.createElement('li');
               li.className = "text-sky-400 hover:text-sky-800 text-2xl text-center !py-2";

               const a = document.createElement('a');
               a.href = `/files/${file}`;
               a.textContent = file;
               a.download = '';

               li.appendChild(a);
               fileList.appendChild(li);
            });
         }
      })
      .catch((err: Error) => {
         console.error('Failed to fetch files:', err);
         alert(`Failed to fetch files: ${err.message || 'Unknown Error'}`);
      })
      .finally(() => {
         setLoading(false);
      });
}

document.addEventListener('DOMContentLoaded', getFiles);
refreshButton?.addEventListener('click', getFiles);