import { logger } from "$lib/server/logger";
import { os } from "$lib/server/orpc/base";

export const healthCheckHandler = os.route({ method: "GET" }).handler(() => {
  logger.info("test logging in opentelemetry");
  return { message: "API server is up and running" };
});
