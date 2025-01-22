/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bright-red': '#FF0033',
        'charcoal': '#0F0F0F',
        'silver': '#CCCCCC'
      }
    },
  },
  plugins: [],
}

