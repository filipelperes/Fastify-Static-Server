interface IFileListProps {
   files: string[];
}

export const FileList = ({ files }: IFileListProps) => (
   <ul className="!my-9 min-h-28 max-h-[55vh] overflow-x-hidden overflow-y-auto w-1/2 border border-neutral-50 rounded-xl">
      {files.map(file => (
         <li className="text-sky-400 hover:text-sky-800 text-2xl text-center !py-2" key={file}>
            <a href={`/files/${file}`} download>{file}</a>
         </li>
      ))}
   </ul>
);
