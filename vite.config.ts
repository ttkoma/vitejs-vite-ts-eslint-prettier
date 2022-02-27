import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { resolve } from "path";

// https://vitejs.dev/config/ya
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~": resolve(__dirname, "src"),
      "@api": resolve(__dirname, "src/areas/api/runtime"),
    },
  },
  plugins: [createVuePlugin()],
});
