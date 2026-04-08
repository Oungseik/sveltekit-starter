/**
 * TODO uncomment this and install dependencies if need logger with instrumentation
 * */
// import { isSpanContextValid, trace } from "@opentelemetry/api";
// import pino from "pino";
// import { env } from "$env/dynamic/public";
//
// const LOG_LEVEL = process.env.LOG_LEVEL || "info";
// const ENVIRONMENT = env.PUBLIC_ENVIRONMENT;
//
// function getTraceContext() {
//   const activeSpan = trace.getActiveSpan();
//   if (!activeSpan) {
//     return {};
//   }
//
//   const spanContext = activeSpan.spanContext();
//   if (!isSpanContextValid(spanContext)) {
//     return {};
//   }
//
//   return {
//     trace_id: spanContext.traceId,
//     span_id: spanContext.spanId,
//     trace_flags: spanContext.traceFlags,
//   };
// }
//
// const pinoTransport =
//   ENVIRONMENT === "development"
//     ? {
//         target: "pino-pretty",
//         options: {
//           colorize: true,
//           translateTime: "SYS:standard",
//           ignore: "pid,hostname",
//         },
//       }
//     : undefined;
//
// export const logger = pino({
//   level: LOG_LEVEL,
//   transport: pinoTransport,
//   mixin() {
//     return getTraceContext();
//   },
//   formatters: {
//     level(label) {
//       return { level: label };
//     },
//   },
//   timestamp: pino.stdTimeFunctions.isoTime,
// });
//
// export type Logger = typeof logger;
