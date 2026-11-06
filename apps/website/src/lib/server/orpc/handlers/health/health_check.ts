import { os } from "#lib/server/orpc/base.ts";

export const healthCheckHandler = os.handler(() => {
  return { message: "API server is up and running" };
});
