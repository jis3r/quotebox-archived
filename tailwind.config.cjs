/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {      
      colors: {
        'svelte-orange': '#FF3E00',
      }
    },
  },
  plugins: [],
}
