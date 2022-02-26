import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/ya
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "~": resolve(__dirname, "src"),
      "@api": resolve(__dirname, "src/areas/api"),
    },
  },
  plugins: [vue()],
});
