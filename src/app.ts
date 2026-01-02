import Fastify from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { registerPlugins } from "./plugins/index.js";
import { registerRoutes } from "./routes/index.js";

export const app = Fastify({ logger: true });

export async function buildApp() {
  await app.register(cors);
  await app.register(swagger);
  await app.register(swaggerUI, {
    routePrefix: "/docs",
  });

  await registerPlugins(app);
  await registerRoutes(app);

  return app;
}
