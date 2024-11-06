import { FastifyInstance } from "fastify";

export function authPublicRoutes(app: FastifyInstance) {
  app.post("/login", authController.login);
}
