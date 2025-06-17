interface IFileListProps {
   files: string[];
}

export const FileList = ({ files }: IFileListProps) => (
   <ul>
      {files.map(file => (
         <li key={file}>
            <a href={`/files/${file}`} download>{file}</a>
         </li>
      ))}
   </ul>
);
