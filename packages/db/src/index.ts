import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";
import { relations } from "./schema/relations";

export const connectDb = (dbURL: string) => {
  const client = new SQL(dbURL);
  return drizzle({ client, relations });
};

export * from "drizzle-orm";
export { alias, type PgSelect } from "drizzle-orm/pg-core";
export * from "./schema/auth";
