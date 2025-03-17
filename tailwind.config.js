import { heroui } from "@heroui/react";
import { addDynamicIconSelectors } from "@iconify/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-custom)",
        secondary: "var(--secondary-custom)",
      },
    },
  },
  plugins: [heroui(), addDynamicIconSelectors()],
};
