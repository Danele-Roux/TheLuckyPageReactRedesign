/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5A89EA",
        secondary: "#ffffff",
        tertiary: "#030303",
        lightGrey: "#6F7889",
        textDark: "#030303",
        textLight: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}