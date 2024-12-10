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
      },
      colors: {
        primary: '#BA9113',
        secondary: '#E8CA2C',
        tersiary: '#FDF8B4',
        accent: '#A5740B',
        dark: '#724204'
      },
      textColor: {
        default: '#724204'
      }
    },
  },
  plugins: [],
}
