const { UrlHandlingStrategy } = require('@angular/router');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {      
    extend: {
      colors:{
        'sm-verde-escuro': '#274815',
        'sm-verde-claro': '#8bab0c',
        'fundo': '#fbf3eb',
        'fundo2': '#bcbcac'
      },
      fontFamily:{
        header: "Space_Mono",
        body: "Barlow",
        bodyBold: "Barlow-bold"
      },
      rotate:{
        '40': "40deg",
        '-30': "-30deg",
        '-10': "-10deg"
      },
      screens: {
        '2xs': '443px',
        '3xs': '315px',
        '4xs': '200px',
        '3xl': '2100px'
      },
      fontSize: {
        '2xs': '0.55rem',
        '3xs': '0.35rem'
      },
      padding: {
        '20%': '20%',
        '5%': '5%',
      },
      spacing: {
        '22%': '22%',
      }
    },
  },
  plugins: [],
}