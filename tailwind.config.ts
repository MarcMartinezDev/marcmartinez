import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d2d2d",
        muted: "#666666",
        secondary: "#b48ead",
        accent: "#4544F0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
