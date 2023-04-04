import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "VoyagerTheme",
      fileName: (format) => `voyager-theme.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@chakra-ui/react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@chakra-ui/react": "ChakraUI",
        },
      },
    },
  },
});

export default config;
