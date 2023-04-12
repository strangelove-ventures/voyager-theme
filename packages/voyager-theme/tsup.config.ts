import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  clean: !watch,
  dts: true,
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  format: ["cjs", "esm"],
  minify: false,
}));
