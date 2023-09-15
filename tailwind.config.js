/** @type {import('tailwindcss').Config} */


export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      ibm: ['IBM Plex Sans', 'sans-serif'],
      colors: {
        'milgreen': '#575b28',
        'milyellow': '#c8b372'
      }
    },
  },
  plugins: [],
}

