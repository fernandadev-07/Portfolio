/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Isso é essencial!
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Nome usado na className
      },
    },
  },
  plugins: [],
}
