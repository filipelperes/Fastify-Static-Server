import { FastifyInstance } from 'fastify';
import fs from 'fs';
import { publicPath } from '../utils/paths.js';

export function registerApiRoutes(app: FastifyInstance) {
   app.get('/api/files', async () => fs.readdirSync(publicPath));
   app.log.info('API route /api/files serving from public/');
}
