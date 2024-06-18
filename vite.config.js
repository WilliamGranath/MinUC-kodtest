import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Adjust the path as per your project structure
    },
  },
  server: {
    proxy: {
      "/frontendapi": {
        target: "https://www1.minuc.se",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/frontendapi/, ""),
      },
      // Add more proxies if needed for other endpoints
    },
  },
});
