/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
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
        grad1: '#101010',
        grad2: '#141416',
        grad3: '#19191C',
        grad4: '#1D1D23',
        ends: '#101010',
        body: '#141416',
        selectedtext: '#A3A3FF',
        sitetheme: '#3F3FFF',
        nav: '#404053',
        badsecondary: '#9191A4',
        badbadge: '#3F3F51',
        badinputborder: '#565666',
        input: '#2A2A35',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}