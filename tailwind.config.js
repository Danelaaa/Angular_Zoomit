/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          bodycolor: '#f5f5f5',
          textcolor:'#21229e',
          textcolorhover:'#b152a3',
          buttoncolor:'#8000a3',
          footercolor:'#21225f',
          buttonbgcolor:'#e6f6fc',
          starcolor:'#ff9900',
          zoommeetcardcolor:'#d7bbdfed',
          zoommeetcolor:'#21225f',
          filtercolor:'#0009',
        },
      },
      fontFamily: {
        font: '',
      },
    },
  },
  plugins: [],
}

