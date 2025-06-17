import { FastifyInstance } from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { root } from '../utils/paths.js';
import fastifyHttpProxy from '@fastify/http-proxy';
import type { AppRoutesOptions } from '../types/index.js';

export function registerVueAppRoutes(app: FastifyInstance, opts: AppRoutesOptions, done: () => void) {
   const { isDevelopment } = opts;

   app.register(async (scopedApp) => {
      if (isDevelopment) {
         scopedApp.register(fastifyHttpProxy, {
            upstream: 'http://localhost:5172',
            prefix: '/',
            rewritePrefix: '/',
         });
         app.log.info('Vue development server proxy enabled at /vue/');
      } else {
         const vueDistPath = path.join(root, 'dist/vue');
         scopedApp.register(fastifyStatic, {
            root: vueDistPath,
            prefix: '/',
            decorateReply: false,
            wildcard: true,
            index: ['index.html'],
         });
         scopedApp.get('/*', (req, reply) => {
            reply.sendFile('index.html', vueDistPath);
         });
         app.log.info(`Vue production build serving from: ${vueDistPath} at /vue/`);
      }
   }, { prefix: '/vue' });

   done();

   app.log.info(`Static routes registered:`);
   app.log.info(`- /vue/ serves from: ${isDevelopment ? '[proxy]' : path.join(root, 'dist/vue')}`);
}
