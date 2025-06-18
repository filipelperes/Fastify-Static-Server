import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '../../');

export const publicPath = path.join(root, 'public');
export const htmlDistPath = path.join(root, 'dist/html');
export const reactDistPath = path.join(root, 'dist/react');
export const vueDistPath = path.join(root, 'dist/vue');