/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-header': '#FE5223',
        'primary-base': '#F59E0C',
        'primary-background': "#FFFBF5",
        'primary-sub-base': "#fff7e961",
        'secondary-base': "#0a7661",
        'neutral-base': "black",
        'neutral-fade': "#e5e5e5",
        'neutral-cross': "white"
      },
      fontFamily: {
        'base': ["Rubik", '"Noto Sans Thai"'],
        'header': ['"Archivo Black"'],
        'creative': ["Pacifico"]
      }
    },
  },
  plugins: [],
}

