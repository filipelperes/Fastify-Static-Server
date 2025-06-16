import os from 'os';

export const getLocalIP = () => {
   const interfaces = os.networkInterfaces();
   for (const list of Object.values(interfaces)) {
      for (const iface of list || []) {
         if (iface.family === 'IPv4' && !iface.internal) return iface.address;
      }
   }

   return 'localhost';
};