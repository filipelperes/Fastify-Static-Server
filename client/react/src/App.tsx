import { useEffect, useState } from 'react';
import './App.css';
import { FileList } from './components/FileList';

function App() {
  const [files, setFiles] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/files')
      .then(res => res.json())
      .then(setFiles)
      .catch(err => console.error('Failed to fetch files:', err));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Available Files</h1>
      <FileList files={files} />
    </div>
  );
}

export default App;
