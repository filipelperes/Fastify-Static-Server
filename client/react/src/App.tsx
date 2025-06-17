import './App.css';
import { FileList } from './components/FileList';
import { useFileData } from './hooks/useFileData';

const App = () => {
  const { files } = useFileData();

  return (
    <div className="h-screen w-screen font-inter flex flex-col justify-center items-center">
      <h1 className="capitalize tracking-wider !text-7xl">Available Files</h1>
      <FileList files={files} />
    </div>
  );
};

export default App;
