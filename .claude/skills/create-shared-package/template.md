{
  "name": "@repo/$PACKAGE_NAME",
  "version": "0.0.0",
  "exports": {
    ".": {
      "import": "./src/index.ts",
      "types": "./src/index.ts"
    },
    "./lib/*": {
      "import": "./src/lib/*.ts",
      "types": "./src/lib/*.ts"
    }
  },
  "devDependencies": {
    "@repo/typescript-config": "workspace:*",
    "typescript": "^5.3.3"
  }
}