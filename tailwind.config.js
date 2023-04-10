/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "sm-bg1": '#7E90FE',
        "sm-bg2": '#9873FF',
        "d1": "#1A1919",
        "d2": "#474747",
        "d3": "#757575",
        "d4": "#A3A3A3",
        "d5": "#D1D1D1",
        "d6": "#E8E8E8",
        "d7": "#F4F4F4",
      }
    },
  },
  plugins: [require("daisyui")],
}

