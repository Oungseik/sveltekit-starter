import { ORPCError, ValidationError, onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { BatchHandlerPlugin, StrictGetMethodPlugin } from "@orpc/server/plugins";

import { router } from "#lib/server/orpc/router";

import type { RequestHandler } from "./$types";

const handler = new RPCHandler(router, {
  strictGetMethodPluginEnabled: true,
  plugins: [new StrictGetMethodPlugin(), new BatchHandlerPlugin()],
  clientInterceptors: [
    onError((error) => {
      console.error(error);
      if (
        error instanceof ORPCError &&
        error.code === "BAD_REQUEST" &&
        error.cause instanceof ValidationError
      ) {
        const issues = error.cause.issues;
        const formErrors: string[] = [];
        const fieldErrors: Record<string, string[]> = {};
        for (const issue of issues) {
          if (!issue.path?.length) {
            formErrors.push(issue.message);
            continue;
          }
          const key = issue.path
            .map((segment) =>
              typeof segment === "object" ? String(segment.key) : String(segment),
            )
            .join(".");
          (fieldErrors[key] ??= []).push(issue.message);
        }
        throw new ORPCError("INPUT_VALIDATION_FAILED", {
          status: 422,
          message: issues.map((issue) => issue.message).join("\n"),
          data: { formErrors, fieldErrors },
          cause: error.cause,
        });
      }

      if (
        error instanceof ORPCError &&
        error.code === "INTERNAL_SERVER_ERROR" &&
        error.cause instanceof ValidationError
      ) {
        throw new ORPCError("OUTPUT_VALIDATION_FAILED", {
          cause: error.cause,
        });
      }
    }),
  ],
});

const handle: RequestHandler = async ({ request, locals }) => {
  const { response } = await handler.handle(request, {
    prefix: "/rpc",
    context: { session: locals.session },
  });

  return response ?? new Response("Not Found", { status: 404 });
};

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
