/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        prociono: ['Prociono', 'serif'],
        lexendDeca: ['Lexend Deca', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
