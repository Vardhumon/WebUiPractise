/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/BGSS.png')",
        'card1': "url('./src/assets/card1.png')",
        'card2': "url('./src/assets/card2.png')",
        'card3': "url('./src/assets/card3.png')",
        'card4': "url('./src/assets/card4.png')",
        'card5': "url('./src/assets/card5.png')",

      }
    },
  },
  plugins: [],
}