import path from "path";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        "name": "LIGHT Driver",
        "short_name": "LIGHTDriver",
        "start_url": "/home",
        "display": "standalone",
        "background_color": "#000000",
        "theme_color": "#000",
        "icons": [
          {
            "src": "./src/assets/react.svg",
            "type": "image/svg"
          },
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
