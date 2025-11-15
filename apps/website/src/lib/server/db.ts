import { connectDb } from "@repo/db";
import { DATABASE_URL } from "$env/static/private";

export const db = connectDb(DATABASE_URL);

