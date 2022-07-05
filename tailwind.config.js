/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      transitionProperty:{
        'left': 'left'
      },
      screens: {
        '3xl': '1600px',
        '4xl': '2200px',
        "5xl": "3000px",
        "6xl": "4000px"
      },

      
    },
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ],
}