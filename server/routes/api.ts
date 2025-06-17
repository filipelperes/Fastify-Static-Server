import { FastifyInstance } from 'fastify';
import fs from 'fs';
import path from 'path';
import { root } from '../utils/paths.js';
import type { AppRoutesOptions } from '../types/index.js';

const publicPath = path.resolve(root, 'public');

export function registerApiRoutes(app: FastifyInstance, opts: AppRoutesOptions, done: () => void) {
   app.get('/files', async () => {
      try {
         const files = await fs.promises.readdir(publicPath);
         return files;
      } catch (error) {
         app.log.error('Error reading files from public directory:', error);
         throw new Error('Could not retrieve file list');
      }
   });

   done();
   app.log.info('API route /api/files serving from public/');
}
