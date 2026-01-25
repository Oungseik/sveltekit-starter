import { SQL } from "bun";
import { drizzle } from "drizzle-orm/bun-sql";
import { account, session, twoFactor, user, verification } from "./schema/auth";

export const connectDb = (dbURL: string) => {
  const client = new SQL(dbURL);
  return drizzle({
    client,
    schema: {
      account,
      session,
      twoFactor,
      user,
      verification,
    },
  });
};

export * from "drizzle-orm";
export { alias, type PgSelect } from "drizzle-orm/pg-core";
export * from "./schema/auth";
