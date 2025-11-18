/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Syne", ...defaultTheme.fontFamily.sans],
        google: ["Google Sana", "sans-serif"],
      },
      keyframes: {
        smoothBounce: {
          "0%, 100%": { transform: "translateY(-30px)" },
          "50%": { transform: "translateY(0)" },
        },
        tilt: {
          "0%": { transform: "rotate(0deg)" },
          "33%": { transform: "rotate(-8deg)" }, // Left
        },
      },
      animation: {
        smoothBounce: "smoothBounce 3s ease-in-out infinite",
        tilt: "tilt 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@khoohaoyit/tailwind-grid-center"),
  ],
};
