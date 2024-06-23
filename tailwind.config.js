
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar':'#F1ECD3',
        'navbar-2': '#989C94',
        'navbar-3' : '#E3E7D3'
      },
      fontFamily: {
        'Main': 'Alumni Sans Inline One'
      }
    },
  },
  plugins: [],
}