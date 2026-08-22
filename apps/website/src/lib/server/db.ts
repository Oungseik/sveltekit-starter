import { DATABASE_URL } from "$env/static/private";
import { connectDb } from "@repo/db";

export const db = connectDb(DATABASE_URL);
