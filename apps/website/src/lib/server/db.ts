import { DATABASE_URL } from "$app/env/private";
import { connectDb } from "@repo/db";

export const db = connectDb(DATABASE_URL);
