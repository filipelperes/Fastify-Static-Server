import { FastifyInstance } from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { root } from '../utils/paths.js';
import fastifyHttpProxy from '@fastify/http-proxy';
import type { AppRoutesOptions } from '../types/index.js';

export function registerReactAppRoutes(app: FastifyInstance, opts: AppRoutesOptions, done: () => void) {
   const { isDevelopment } = opts;

   app.register(async (scopedApp) => {
      if (isDevelopment) {
         scopedApp.register(fastifyHttpProxy, {
            upstream: 'http://localhost:5173',
            prefix: '/',
            // rewritePrefix: '/',
         });
         app.log.info('React development server proxy enabled at /react/');
      } else {
         const reactDistPath = path.join(root, 'dist/react');
         scopedApp.register(fastifyStatic, {
            root: reactDistPath,
            // prefix: '/',
            decorateReply: false,
            wildcard: true,
            index: ['index.html'],
         });
         scopedApp.get('/*', (req, reply) => {
            reply.sendFile('index.html', reactDistPath);
         });
         app.log.info(`React production build serving from: ${reactDistPath} at /react/`);
      }
   }, { prefix: '/react' });

   done();

   app.log.info(`Static routes registered:`);
   app.log.info(`- /react/ serves from: ${isDevelopment ? '[proxy]' : path.join(root, 'dist/react')}`);
}
