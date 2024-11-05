import fastify from "fastify";
import { request } from "http";

export const app = fastify();

app.addHook("preHandler", async (request) => {
  console.log(`[${request.method}] ${request.url}`);
});

app.register(authPublicRoutes);

app.register(socialProjectsPrivateRoutes, {
  prefix: "socialProjects"
})

app.register(socialProjectsPublicRoutes, {
  prefix: "public",
})

app.addHook("onError", errorHandler);