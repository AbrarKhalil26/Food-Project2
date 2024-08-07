/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: 'var(--orange)',
        paragraph: 'var(--paragraph)',
      },
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        'cursive': ['Leckerli One', 'cursive'],
      },
      borderWidth: {
        '1': '1px', 
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

