/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors:{
        primary:"#FFFFFF",
        secondary:"#000",
        terciary:"blue",
        filter: "rgba(0, 0, 0, .5)"
      },
      backgroundImage:{
        backgroundImage:"url(/bg-image.jpg)"
      },
      spacing:{
        backgroundHeight:"1600px",
        formHeight:"1300px",
        inputWidth: "80%",
      }
    }
  },
  plugins: [require("daisyui")],
}
