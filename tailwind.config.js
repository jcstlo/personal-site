/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        albert: 'Albert Sans, sans-serif',
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

