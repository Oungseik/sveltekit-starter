import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { sveltekitCookies } from "better-auth/svelte-kit";

import { getRequestEvent } from "$app/server";
import { BETTER_AUTH_SECRET } from "$env/static/private";
import { db } from "./server/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60,
    },
  },

  secret: BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  plugins: [sveltekitCookies(getRequestEvent)],
});
