/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(/public/background_desktop.png)"
      },
      colors: {
        pokemon: "#FC2D39"
      }
    },
  },
  plugins: [],
}
