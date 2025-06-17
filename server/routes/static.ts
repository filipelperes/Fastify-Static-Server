import { FastifyInstance } from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { root } from '../utils/paths.js';
import type { AppRoutesOptions } from '../types/index.js';

export function registerStaticRoutes(app: FastifyInstance, opts: AppRoutesOptions, done: () => void) {
   app.register(fastifyStatic, {
      root: path.join(root, 'public'),
      prefix: '/files/',
      decorateReply: false,
      setHeaders: (res, filePathFromStatic) => {
         if (filePathFromStatic.endsWith('.apk')) {
            const filename = path.basename(filePathFromStatic);
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
            res.setHeader('Content-Type', 'application/vnd.android.package-archive');
         }
      }
   });

   app.register(fastifyStatic, {
      root: path.join(root, 'client/html'),
      prefix: '/html/',
      decorateReply: false,
      index: ['index.html'],
   });

   done();

   app.log.info(`Static routes registered:`);
   app.log.info(`  - /files/ serves from: ${path.join(root, 'public')}`);
   app.log.info(`  - /html/ serves from: ${path.join(root, 'client/html')}`);
}
