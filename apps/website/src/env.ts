import { defineEnvVars } from "@sveltejs/kit/env";

export const variables = defineEnvVars({
  BETTER_AUTH_SECRET: { static: true },
  DATABASE_URL: { static: true },
  PUBLIC_ENVIRONMENT: { public: true, schema: (value) => value },
});
