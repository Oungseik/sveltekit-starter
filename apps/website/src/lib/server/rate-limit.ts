import { RateLimiterMemory } from "rate-limiter-flexible";

const opts = {
  points: 20,
  /** per second */
  duration: 1,
};

export const rateLimiter = new RateLimiterMemory(opts);
