import { type Handle, sequence } from "@sveltejs/kit/hooks";

import { paraglideMiddleware } from "#lib/paraglide/server";
import { client } from "#lib/server/orpc/router";
import { rateLimiter } from "#lib/server/rate-limit";

globalThis.$client = client;

const handleParaglide: Handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request, locale }) =>
    resolve(
      { ...event, request },
      {
        transformPageChunk: ({ html }) => html.replace("%paraglide.lang%", locale),
      },
    ),
  );

const rateLimitHandle: Handle = async ({ event, resolve }) => {
  const clientIP = event.request.headers.get("X-Forwarded-For");
  if (clientIP === null) {
    return resolve(event);
  }

  const cost = event.request.method === "GET" || event.request.method === "OPTIONS" ? 1 : 2;
  try {
    await rateLimiter.consume(clientIP, cost);
  } catch {
    return new Response("Too many requests", { status: 429 });
  }

  return resolve(event);
};

const authHandle: Handle = async ({ event, resolve }) => {
  // TODO handle authentication here
  return resolve(event);
};

export const handle: Handle = sequence(rateLimitHandle, handleParaglide, authHandle);
