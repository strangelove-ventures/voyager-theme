import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  bundle: false,
  clean: !watch,
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  format: ["cjs", "esm"],
  minify: false,
  onSuccess: () => process.exit(0), // force exit on success to avoid hanging due to ERR_WORKER_OUT_OF_MEMORY
  tsconfig: "tsconfig.build.json",
}));
