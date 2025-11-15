import { register } from "node:module";
import { SpanStatusCode, trace } from "@opentelemetry/api";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { PinoInstrumentation } from "@opentelemetry/instrumentation-pino";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { ORPCInstrumentation } from "@orpc/otel";
import { createAddHookMessageChannel } from "import-in-the-middle";

const { registerOptions } = createAddHookMessageChannel();
register("import-in-the-middle/hook.mjs", import.meta.url, registerOptions);

const sdk = new NodeSDK({
  serviceName: "ORPC",
  traceExporter: new OTLPTraceExporter(),
  instrumentations: [
    new PinoInstrumentation(),
    getNodeAutoInstrumentations(),
    new ORPCInstrumentation(),
  ],
});

sdk.start();

const tracer = trace.getTracer("uncaught-errors");

function recordError(eventName: string, reason: unknown) {
  const span = tracer.startSpan(eventName);
  const message = String(reason);

  if (reason instanceof Error) {
    span.recordException(reason);
  } else {
    span.recordException({ message });
  }

  span.setStatus({ code: SpanStatusCode.ERROR, message });
  span.end();
}

process.on("uncaughtException", (reason) => {
  recordError("uncaughtException", reason);
});

process.on("unhandledRejection", (reason) => {
  recordError("unhandledRejection", reason);
});
