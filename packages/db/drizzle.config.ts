import "./compression.polyfill";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
