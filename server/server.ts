import fastify from "fastify";
import dotenv from 'dotenv';
import { getLocalIP } from "./utils/getLocalIP.js";
import { registerStaticRoutes } from "./routes/static.js";
import { registerApiRoutes } from "./routes/api.js";

dotenv.config();
const PORT = parseInt(process.env.PORT || '3333', 10);

const app = fastify({ logger: true });

registerStaticRoutes(app);
registerApiRoutes(app);

app
   .listen({
      host: '0.0.0.0',
      port: PORT
   })
   .then(() => {
      const ip = getLocalIP();
      console.log(`Server running at:
         → REACT: http://${ip}:${PORT}/react/
         → HTML: http://${ip}:${PORT}/html/
         → Files: http://${ip}:${PORT}/files/
      `);
      app.log.info(`Server running at:
         → REACT: http://${ip}:${PORT}/react/
         → HTML: http://${ip}:${PORT}/html/
         → Files: http://${ip}:${PORT}/files/
      `);
   })
   .catch(err => {
      app.log.error(err);
      console.log(err);
   });