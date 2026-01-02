import { env } from "../config/env.js";
import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import type { FastifyInstance } from "fastify";

export async function prismaPlugin(app: FastifyInstance) {
  const connectionString = env.DATABASE_URL;

  const adapter = new PrismaPg({ connectionString });
  const prisma = new PrismaClient({ adapter });

  app.decorate("prisma", prisma);

  app.addHook("onClose", async () => {
    await prisma.$disconnect();
  });
}
