import fp from "fastify-plugin";
import { env } from "../config/env.js";
import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import type { FastifyInstance } from "fastify";

export const prismaPlugin = fp(async (app: FastifyInstance) => {
  const adapter = new PrismaPg({
    connectionString: env.DATABASE_URL,
  });

  const prisma = new PrismaClient({ adapter });

  await prisma.$connect();

  app.decorate("prisma", prisma);

  app.addHook("onClose", async () => {
    await prisma.$disconnect();
  });
});
