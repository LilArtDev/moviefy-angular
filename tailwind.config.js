/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "black-background": "#141414",
        "gray-background": "#282828",
        background: "#420516",
        "background-lighter": "#7D1935",
        "primary-darker": "#B42B51",
        primary: "#E63E6D",
        gray: "#DBD8E3",
        linen: "#F7EBDE",
        "sendy-brown": "#FFB685",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
