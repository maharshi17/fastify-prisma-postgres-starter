import type { FastifyInstance } from "fastify";
import { prismaPlugin } from "./prisma.js";
import { jwtPlugin } from "./jwt.js";

export async function registerPlugins(app: FastifyInstance) {
  await app.register(prismaPlugin);
  await app.register(jwtPlugin);
}
