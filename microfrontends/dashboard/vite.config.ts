import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./Dashboard": "./src/Dashboard.tsx",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
        "styled-components",
        "recharts",
      ],
    }),
  ],
  server: {
    port: 3002,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    ssr: false,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "styled-components",
      "recharts",
    ],
  },
  define: {
    global: "globalThis",
  },
});
