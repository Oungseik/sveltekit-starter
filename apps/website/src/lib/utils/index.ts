import type { DehydratedState } from "@tanstack/svelte-query";

const replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029",
};
const pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");

export function createDehydratedScript(dehydratedState: DehydratedState) {
  const escaped = JSON.stringify(dehydratedState).replace(
    pattern,
    (match) => replacements[match as keyof typeof replacements],
  );
  return `<script>window.dehydrated = ${escaped}</script>`;
}

export function getSeparator(locale: Intl.LocalesArgument, separatorType: "decimal" | "group") {
  const numberWithGroupAndDecimal = 10000.1;
  const parts = new Intl.NumberFormat(locale).formatToParts(numberWithGroupAndDecimal);
  const separatorPart = parts.find((part) => part.type === separatorType);
  return separatorPart ? separatorPart.value : "N/A";
}
