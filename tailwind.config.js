/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    //Setup of the Fonts
    fontFamily: {
      Lato: ["Lato", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    //Setup of the Colours
    colors: {
      body: "#17171F",
      "selected-text": "#A3A3FF",
      theme: "#3F3FFF",
      nav: "#404053",
      secondary: "#9191A4",
      badge: "#3F3F51",
      "input-border": "#565666",
      input: "#2A2A35",
    },
    extend: {},
  },
  plugins: [],
};
