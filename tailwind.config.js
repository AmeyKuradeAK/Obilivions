
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
      },
      fontFamily: {
        'Main': 'Alumni Sans Inline One'
      }
    },
  },
  plugins: [],
}