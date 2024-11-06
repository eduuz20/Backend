import { app } from "./app";
import { appDataSource } from "./database/dataSource";
import { createUser } from "./database/seeds/createUser";
import { env } from "./env";

export async function initServer() {
  try {
    const dataSource = await appDataSource.initialize();

    await createUser(dataSource);

    console.log("DataSource initialized");

    await app.listen({ port: env.PORT });
  } catch (error) {
    console.log("error:", error);
    process.exit(1);
  }
}

initServer();
