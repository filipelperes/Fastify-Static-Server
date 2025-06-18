import 'dotenv/config';
import fastify from "fastify";
import { getLocalIP } from "./utils/getLocalIP.js";
import { registerStaticRoutes } from "./routes/static.js";
import { registerApiRoutes } from "./routes/api.js";
import fastifyCors from '@fastify/cors';

const PORT = parseInt(process.env.PORT || '3333', 10);
const ip = getLocalIP();
const log = `Server running at:
   > REACT: http://${ip}:${PORT}/react/
   > VUE: http://${ip}:${PORT}/vue/
   > HTML: http://${ip}:${PORT}/html/
   > Files: http://${ip}:${PORT}/files/
   > API: http://${ip}:${PORT}/api/files
`;

const app = fastify({ logger: true });

app.register(fastifyCors, {
   origin: [
      'http://localhost:5173',
      'http://localhost:5172',
      'http://localhost:5171',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5172',
      'http://127.0.0.1:5171'
   ],
   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
   allowedHeaders: ['Content-Type', 'Authorization'],
   credentials: true
});

registerApiRoutes(app);
registerStaticRoutes(app);

app
   .listen({
      host: '0.0.0.0',
      port: PORT
   })
   .then(() => {
      console.log(log);
      app.log.info(log);
   })
   .catch(err => {
      app.log.error(err);
      console.log(err);
   });