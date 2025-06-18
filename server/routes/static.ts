import { FastifyInstance } from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { htmlPath, publicPath, reactDistPath, vueDistPath } from '../utils/paths.js';

export function registerStaticRoutes(app: FastifyInstance) {
   app.register(fastifyStatic, {
      root: publicPath,
      prefix: '/files/',
      decorateReply: false,
      setHeaders: (res, filePathFromStatic) => {
         res.setHeader('Content-Disposition', `attachment; filename="${path.basename(filePathFromStatic)}"`);
      }
   });

   app.register(fastifyStatic, {
      root: htmlPath,
      prefix: '/html/',
      decorateReply: false,
      index: ['index.html'],
   });

   app.register(fastifyStatic, {
      root: reactDistPath,
      prefix: '/react/',
      decorateReply: false,
      wildcard: true,
      index: ['index.html'],
   });

   app.register(fastifyStatic, {
      root: vueDistPath,
      prefix: '/vue/',
      decorateReply: false,
      wildcard: true,
      index: ['index.html'],
   });

   app.log.info(`Static routes registered:`);
   app.log.info(`  - /files/ serves from: ${publicPath}`);
   app.log.info(`  - /html/ serves from: ${htmlPath}`);
   app.log.info(`- /react/ serves from: ${reactDistPath}`);
   app.log.info(`- /vue/ serves from: ${vueDistPath}`);
}
