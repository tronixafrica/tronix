/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "'./node_modules/tw-elements/dist/js/**/*.js'",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: "#121212",
        backgroundGrey: "#464646",
        backgroundRed: "#fff",
        backgroundDarkRed: "#7A0E0E",
        backgroundWhite: "#eeeeee",
        textGrey: "#C2C2C2",
        textGreyLighter: "#D4D4D4",
        textGreyLight: "#F9F9F9",
        textAuthGrey: "#D2CACA",
      },
      fontFamily: {
        poppins: "Poppins",
        raleway: "Raleway",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
