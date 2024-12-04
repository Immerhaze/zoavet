import animations from "@midudev/tailwind-animations";
/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require("@iconify/tailwind");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary_brand: "#6db3ae",
        secondary_brand: "#e8745b",
        primary_light: "#b6e0dc",
        primary_white: "#fcfefd",
        secondary_light: "#e6b3b2",
        secondary_dark: "#5E5D5C",
      },
    },
  },
  plugins: [animations, addDynamicIconSelectors()],
};
