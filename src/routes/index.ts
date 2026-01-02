import type { FastifyInstance } from "fastify";
import { healthRoutes } from "../modules/health/health.route.js";

export async function registerRoutes(app: FastifyInstance) {
  await app.register(healthRoutes, { prefix: "/api" });
}
