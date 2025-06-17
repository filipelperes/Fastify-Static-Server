import './App.css';
import { FileList } from './components/FileList';
import { useFileData } from './hooks/useFileData';

const App = () => {
  const { files } = useFileData();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Available Files</h1>
      <FileList files={files} />
    </div>
  );
};

export default App;
