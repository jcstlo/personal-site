/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        albert: 'Albert Sans, sans-serif',
      }
    },
  },
  plugins: [],
  darkMode: 'selector',
}

