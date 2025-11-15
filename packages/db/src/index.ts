import { SQL } from "bun";
import {
  and,
  avg,
  count,
  DrizzleQueryError,
  desc,
  eq,
  gt,
  gte,
  ilike,
  inArray,
  like,
  lt,
  lte,
  not,
  or,
} from "drizzle-orm";
import { drizzle } from "drizzle-orm/bun-sql";
import * as auth from "./auth";

export const connectDb = (dbURL: string) => {
  const client = new SQL(dbURL);
  return drizzle({
    client,
    schema: {
      ...auth,
    },
  });
};

export {
  eq,
  not,
  and,
  or,
  lt,
  lte,
  gt,
  gte,
  like,
  ilike,
  desc,
  avg,
  count,
  inArray,
  DrizzleQueryError,
};

export type { PgSelect } from "drizzle-orm/pg-core";

export * from "./auth";
