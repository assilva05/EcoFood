const { UrlHandlingStrategy } = require('@angular/router');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'sm-azul-escuro': '#2A3D65',
        'sm-azul-claro': '#0B5CD6',
        'sm-fundo': '#E8E8E8',
        'sm-amarelo': '#FFC439',
        'sm-verde': '#299976',
        'sm-borda': '#bababa',
        'sm-amarelo-escuro': '#d2974c'
      },
      fontFamily:{
        header: "freely-movable",
        body: "juicebox",
        bodyBold: "sunny-spells"
      },
      rotate:{
        '40': "40deg",
        '-30': "-30deg",
        '-10': "-10deg",
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