import { FastifyInstance } from 'fastify';
import fastifyStatic from '@fastify/static';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function registerStaticRoutes(app: FastifyInstance) {
   const root = path.resolve(__dirname, '../../');

   app.register(fastifyStatic, {
      root: path.join(root, 'public'),
      prefix: '/files/',
      decorateReply: false,
   });

   app.register(fastifyStatic, {
      root: path.join(root, 'dist/react'),
      prefix: '/react/',
      decorateReply: false,
      index: ['index.html'],
   });

   app.register(fastifyStatic, {
      root: path.join(root, 'client/html'),
      prefix: '/html/',
      decorateReply: false,
      index: ['index.html'],
   });
}
