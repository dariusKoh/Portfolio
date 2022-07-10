/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
     extend: { //adding my own themes
      //Setup of the Fonts
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        },
  
      //Setup of the Colours
      colors: {
        body: '#17171F',
        selectedtext: '#A3A3FF',
        sitetheme: '#3F3FFF',
        nav: '#404053',
        secondary: '#9191A4',
        badge: '#3F3F51',
        inputborder: '#565666',
        input: '#2A2A35',
      },
    },
  },
  plugins: [],
}