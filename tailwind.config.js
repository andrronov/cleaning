/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        dev: {
          '100': '#FFD990',
          '300': '#FFBF43',
          '500': '#FFA800',
          '10': '#D9D9D9'
        },
        txt: {
          '100': '#555555'
        }
      },
    },
    fontFamily: {
      kyiv: ['KyivType Serif', 'Serif']
    }
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js}']
}

