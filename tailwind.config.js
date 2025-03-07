/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E53E3E',
        'primary-dark': '#C53030',
        'accent-red': '#F56565',
      },
      fontFamily: {
        heading: ['Noto Sans SC Medium', 'sans-serif'],
        price: ['DIN Alternate Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 