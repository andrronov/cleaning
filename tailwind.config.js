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
          '10': '#D9D9D9',
          '50': '#FEFDF5'
        },
        txt: {
          '100': '#555555',
          '200': '#333333'
        }
      },
    },
    fontFamily: {
      kyiv: ['KyivType Serif', 'Serif']
    }, 
    screens: {
        xs: "614px",
        s: "769px",
        sm: "1002px",
        md: "1022px",
        lg: "1092px",
        xl: "1280px"
    },
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js}']
}

