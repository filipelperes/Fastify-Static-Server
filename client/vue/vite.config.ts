import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  base: mode !== 'development' ? '/vue/' : '',
  server: {
    port: 5172,
    host: true,
    proxy: {
      '^/api/.*': 'http://localhost:3333'
    }
  },
  build: {
    outDir: '../../dist/vue',
    emptyOutDir: true
  },
  resolve: {
    alias: {
      // '@': path.resolve(__dirname, '../../server/src'),
      '@/vue': path.resolve(__dirname, './src')
    }
  }
}));
