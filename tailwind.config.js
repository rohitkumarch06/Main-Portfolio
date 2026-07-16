/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        cursive: ['Great Vibes', 'cursive'],
        sacramento: ['Sacramento', 'cursive'],
        pinyon: ['Pinyon Script', 'cursive'],
      }
    },
  },
  plugins: [],
}
