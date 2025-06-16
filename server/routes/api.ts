import { FastifyInstance } from 'fastify';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function registerApiRoutes(app: FastifyInstance) {
   const publicPath = path.resolve(__dirname, '../../public');

   app.get('/api/files', async () => fs.readdirSync(publicPath));
}
