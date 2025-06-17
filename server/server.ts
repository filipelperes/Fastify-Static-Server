import 'dotenv/config';
import fastify from "fastify";
import { getLocalIP } from "./utils/getLocalIP.js";
import { registerStaticRoutes } from "./routes/static.js";
import { registerApiRoutes } from "./routes/api.js";
import fastifyCors from '@fastify/cors';
import { registerReactAppRoutes } from './routes/reactApp.js';
import { registerVueAppRoutes } from './routes/vueApp.js';

const PORT = parseInt(process.env.PORT || '3333', 10);
const isDevelopment = process.env.NODE_ENV !== 'production';

const app = fastify({ logger: true });

app.register(fastifyCors, {
   origin: [
      'http://localhost:5173',
      'http://localhost:5172',
      'http://127.0.0.1:5173',
      'http://127.0.0.1:5172'
   ],
   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
   allowedHeaders: ['Content-Type', 'Authorization'],
   credentials: true
});

app.register(registerApiRoutes, { prefix: '/api', isDevelopment });
app.register(registerStaticRoutes, { isDevelopment });
app.register(registerVueAppRoutes, { prefix: '/vue', isDevelopment });
app.register(registerReactAppRoutes, { prefix: '/react', isDevelopment });

app
   .listen({
      host: '0.0.0.0',
      port: PORT
   })
   .then(() => {
      const ip = getLocalIP();
      console.log(`Server running at:
         → REACT: http://${ip}:${PORT}/react/
         → VUE: http://${ip}:${PORT}/vue/
         → HTML: http://${ip}:${PORT}/html/
         → Files: http://${ip}:${PORT}/files/
         → API: http://${ip}:${PORT}/api/files
      `);
      app.log.info(`Server running at:
         → REACT: http://${ip}:${PORT}/react/
         → VUE: http://${ip}:${PORT}/vue/
         → HTML: http://${ip}:${PORT}/html/
         → Files: http://${ip}:${PORT}/files/
         → API: http://${ip}:${PORT}/api/files
      `);
   })
   .catch(err => {
      app.log.error(err);
      console.log(err);
   });