const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#5fe03f',
        btnBg: 'rgb(17, 19, 8, .9);',
        selectedBtnBg: 'rgb(17, 90, 8, .9)',
        btnBorder: '#1f590e',
      },
      fontFamily: {
        sono: ['Sono', ...defaultTheme.fontFamily.sans]
      },
      dropShadow: {
        fontShadow: '0 0 10px rgba(95, 224, 63, .9)',
      },
      boxShadow: {
        'border-shadow': '0 0 7px rgba(95, 224, 63, .9)',
      }
    },
  },
  plugins: [],
}