/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1/9': '0.11111111111%'
      },
      height: {
        '1/9': '0.11111111111%'
      },
    },
  },
  plugins: [],
}

