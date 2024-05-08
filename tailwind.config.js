/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-button': '#54496B',
        }
      },
    },
  plugins: [
    function({ addUtilities }) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': '#ff561e',
        },
      }
    addUtilities(extendUnderline)
    }
  ],
}

