import { defineConfig } from "tsup";

export default defineConfig(({ watch }) => ({
  bundle: false,
  clean: !watch,
  dts: true,
  entry: ["src/**/*.ts", "src/**/*.tsx"],
  format: ["cjs", "esm"],
  minify: false,
}));
