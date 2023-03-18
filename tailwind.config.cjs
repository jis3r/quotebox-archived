/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {      
      colors: {
        'svelte-orange': '#FF3E00',
        'gray-1000': '#080B12',
      }
    },
  },
  plugins: [],
}
