import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode !== 'development' ? '/react/' : '',
  server: {
    port: 5173,
    host: true,
    proxy: {
      '^/api/.*': 'http://localhost:3333'
    }
  },
  build: {
    outDir: '../../dist/react',
    emptyOutDir: true
  }
}));
