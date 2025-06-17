import type { FastifyPluginOptions } from "fastify";

export interface AppRoutesOptions extends FastifyPluginOptions {
   isDevelopment: boolean;
}