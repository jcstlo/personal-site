/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        albert: 'Albert Sans, sans-serif',
      },
      keyframes: {
        loadpage: {
          '0%': { transform: 'translateY(-30px)', opacity: 0 },
          '100%': { transform: 'translateY(0px)', opacity: 1 }
        }
      },
      animation: {
        'load-page': 'loadpage 1s'
      }
    },
    textColor: {
      'darkModeText': '#F9F9F9',
      'lightModeText': '#353535',
    },
    backgroundColor: {
      'darkModeBackground': '#1B1B1B',
      'lightModeBackground': '#F9F9F9',
    },
  },
  plugins: [],
  darkMode: 'selector',
}

