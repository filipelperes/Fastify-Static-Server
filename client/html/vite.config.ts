import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
   root: 'src',
   plugins: [tailwindcss()],
   base: mode !== 'development' ? '/html/' : '',
   server: {
      port: 5171,
      host: true,
      proxy: {
         '^/api/.*': 'http://localhost:3333'
      }
   },
   build: {
      outDir: '../../dist/html',
      emptyOutDir: true,
      rollupOptions: {
         input: 'src/index.html'
      }
   }
}));