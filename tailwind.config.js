/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/slick-carousel/slick/slick.css', 
    'node_modules/slick-carousel/slick/slick-theme.css',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'spice1': "url('/src/Assets/spices-image-1.jpg')",
        'spice2': "url('/src/Assets/spices-image-2.jpg')",
      },
      fontFamily: {
        prociono: ["Prociono", "serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        primary: "#BA9113",
        secondary: "#E8CA2C",
        tertiary: "#FDF8B4",
        accent: "#A5740B",
        dark: "#724204",
      },
      textColor: {
        default: "#724204",
      },
      fontSize: { 
        'h1': '2.5rem',
        'h2': '2rem', 
        'h3': '1.75rem', 
        'h4': '1.5rem', 
        'h5': '1.25rem', 
        'h6': '1rem', 
        'p': '1rem', 
        'small': '0.875rem',
        'tiny': '0.75rem',
      },
      gap: {
        title: '1rem',
        p: '0.5rem',
      },
    },
  },
  plugins: [],
};
