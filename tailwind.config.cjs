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
        btnBg: '#113408',
        btnBorder: '#1f590e',
      },
      fontFamily: {
        sono: ['Sono', ...defaultTheme.fontFamily.sans]
      },
      dropShadow: {
        fontShadow: '0 0 8px rgba(95, 224, 63, .9)',
      },
      boxShadow: {
        'border-shadow': '0 0 7px rgba(95, 224, 63, .9)',
      }
    },
  },
  plugins: [],
}