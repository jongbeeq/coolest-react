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
        'primary-sub-base': "#fbbf24",
        'secondary-base': "#F471B5",
        'neutral-base': "black",
        'neutral-sub-base': "#A3A3A3",
        'neutral-sub-fade': "#D4D4D4",
        'neutral-fade': "#e5e5e5",
        'neutral-cross': "white",
        'error-base': "#F24A44",
      },
      fontFamily: {
        'base': ["Rubik", '"Noto Sans Thai"'],
        'header': ['"Archivo Black"'],
        'creative': ["Pacifico"]
      },
      keyframes: {
        "appear": {
          "from": {
            opacity: '0',
          },
          "to": {
            opacity: '100'
          }
        },
        "progress": {
          "from": {
            width: '0%',
            opacity: '0'

          },
          "to": {
            width: '100%',
            opacity: '100'
          }
        },
      },
      animation: {
        'fade-in': 'appear 1s ease-in backwards',
      }
    },
  },
  plugins: [],
}

