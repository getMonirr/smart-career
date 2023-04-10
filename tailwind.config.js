/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "sm-bg1": '#7E90FE',
        "sm-bg2": '#9873FF'
      }
    },
  },
  plugins: [require("daisyui")],
}

