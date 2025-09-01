import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
   server: {
      proxy: {
         "/api": {
            target: "http://localhost:5050",
            changeOrigin: true,
            secure: false,
         },
      },
   },
   plugins: [react()],
   base: "./",
   css: {
      postcss: {
         plugins: [tailwind()],
      },
   },
});
