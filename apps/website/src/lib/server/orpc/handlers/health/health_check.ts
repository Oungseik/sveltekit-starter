import { os } from "$lib/server/orpc/base";

export const healthCheckHandler = os.route({ method: "GET" }).handler(() => {
  return { message: "API server is up and running" };
});
