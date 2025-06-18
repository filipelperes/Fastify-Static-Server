import { useEffect } from 'react';
import './App.css';
import { FileList } from './components/FileList';
import RefreshIcon from './components/RefreshIcon';
import { useFileData } from './hooks/useFileData';

const App = () => {
  const { files, loading, error, getFiles } = useFileData();

  useEffect(() => {
    if (error) {
      alert(`Failed to fetch files: ${error}`);
    }
  }, [error]);

  return (
    <div className="h-screen w-screen font-inter flex flex-col justify-center items-center bg-stone-700 text-neutral-50">
      <h1 className="capitalize tracking-wider text-7xl">Available Files</h1>
      <FileList files={files} />
      <button
        className={`transition duration-300 ${loading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
        onClick={getFiles}
        disabled={loading}
        title={loading ? 'Refreshing...' : 'Refresh Files'}
        aria-label={loading ? 'Refreshing...' : 'Refresh Files'}
      >
        <RefreshIcon className={loading ? 'animate-spin' : ''} />
      </button>
    </div>
  );
};

export default App;
