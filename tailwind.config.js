/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      robotoSlab: ["Roboto Slab", "serif"],
    },
    fontSize: {
      xs: ".75rem", // 12px
      xtiny: ".8125rem", // 13px
      tiny: ".875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.375rem", // 22px
      "3xl": "1.5rem", // 24px
      "4xl": "1.5625rem", // 25px
      "5xl": "1.625rem", // 26px
      "6xl": "1.75rem", // 28px
      "7xl": "2.5rem", // 40px
      "8xl": "6rem", // 40px
    },
    extend: {
      backgroundImage: {
        "card-header":
          "url('https://www.naxer.es/wp-content/uploads/2021/05/8-lenguajes-de-programacion.jpg')",
        homeBg: "url('/src/assets/images/background/bg-2.jpg')",
        "homeBg-dark": "url('/src/assets/images/background/bg-dark.jpg')",
        "homeTwoBg-dark": "url('/src/assets/images/background/bgtwo.jpg')",
        previewBg: "url('/src/assets/images/background/previewbg.jpg')",
      },
      colors: {
        minsk: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d3fe",
          300: "#a4b5fd",
          400: "#808df9",
          500: "#6267f2",
          600: "#4c45e6",
          700: "#4037cb",
          800: "#342fa4",
          900: "#34328f",
          950: "#1d1b4b",
        },
        cerise: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fccee8",
          300: "#faa7d4",
          400: "#f670b6",
          500: "#ee4699",
          600: "#dd2476",
          700: "#c0165d",
          800: "#9f154d",
          900: "#841743",
          950: "#510624",
        },

        martinique: {
          50: "#f4f6fa",
          100: "#e5e9f4",
          200: "#d2d9eb",
          300: "#b2c0de",
          400: "#8ea0cc",
          500: "#7282bf",
          600: "#606cb0",
          700: "#545ba1",
          800: "#494d84",
          900: "#3e426a",
          950: "#333552",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated"), require("flowbite/plugin")],
};
