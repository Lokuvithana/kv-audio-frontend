/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#FBFFE4" ,
        secondary : "#A3D1C6",
        accent : "#3D8D7A"
      }
    },   
  },
  plugins: [],
}