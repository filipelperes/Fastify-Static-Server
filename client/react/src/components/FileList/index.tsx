interface IFileListProps {
   files: string[];
}

export function FileList({ files }: IFileListProps) {
   return (
      <ul>
         {files.map(file => (
            <li key={file}>
               <a href={`/files/${file}`} download>{file}</a>
            </li>
         ))}
      </ul>
   );
}
