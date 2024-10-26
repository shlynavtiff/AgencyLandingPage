/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-red': '	#fe7867',
        'custom-yellow': '	#fad400',
        'dark-saturated-cyan': '	#25564b',
        'custom-dark-blue': '#19536b',
        'dark-moderate-cyan': '	#458c7e',
        'very-dark-saturated-blue': '	#23303e',
        'very-dark-grayish-blue': '	#5a636c',
        'dark-grayish-blue': '	#818498',
        'grayish-blue': '	#a7abae'
      }
    },
  },
  plugins: [],
}