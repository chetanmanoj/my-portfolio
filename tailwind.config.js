/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#B7B7BB",
        secondary:"#D9D9D9",
        NavHover:'#FF0000'
      },
      fontFamily: {
        'kurale': ['Kurale'] 
      },
    },
  },
  plugins: [],
}
