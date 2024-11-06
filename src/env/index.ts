import { config } from "dotenv";

import { z } from "zod";

if (process.env.NODE_ENV === "test") {
  config({ path: ".env.test"});
} else {
  config();
}

const envSchema = z.object({
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().default(3000),

  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string(),

})

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid enviroment variable!", _env.error.format());

  throw new Error("Invalid enviroment variable");

}

export const env = _env.data;