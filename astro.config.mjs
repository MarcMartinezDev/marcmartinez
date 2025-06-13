// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          en: "en-US",
          es: "es-ES",
          it: "it-IT",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es", "it"],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
