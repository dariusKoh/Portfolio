/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      //adding my own themes
      //Setup of the Fonts
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },

      //Setup of the Colours
      colors: {
        logo: "#EAEAFF",
        headc: "#101010",
        bodyc: "#141416",
        selectedtext: "#A3A3FF",
        sitetheme: "#3F3FFF",
        nav: "#404053",
        badsecondary: "#9191A4",
        badge: "#3F3F51",
        badinputborder: "#565666",
        input: "#2A2A35",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("tw-elements/dist/plugin"),
  ],
};
