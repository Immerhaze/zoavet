import animations from "@midudev/tailwind-animations";
/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#60a09a",
        secondary: "#e67658",
        primary_light: "#e1f0ee",
        secondary_light: "#fae4de",
        secondary_dark: "#5E5D5C",
      },
    },
  },
  plugins: [animations, addDynamicIconSelectors()],
};
