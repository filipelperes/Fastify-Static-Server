interface IFileListProps {
   files: string[];
}

export const FileList = ({ files }: IFileListProps) => (
   <ul className="list-none mt-6">
      {files.map(file => (
         <li className="text-cyan-600 hover:text-sky-800 text-2xl" key={file}>
            <a className="!no-underline !text-inherit" href={`/files/${file}`} download>{file}</a>
         </li>
      ))}
   </ul>
);
