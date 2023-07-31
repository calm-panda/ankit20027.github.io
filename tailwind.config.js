/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: {
      'pacafico': ['Pacifico', 'cursive'],
      // 'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [
    require('tailwindcss-dotted-background'),
  ],
}

