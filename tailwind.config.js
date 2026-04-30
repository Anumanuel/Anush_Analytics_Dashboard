/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/index.html',
    './src/modules/js/**/*.{js,ts}',
    './src/modules/scss/**/*.scss',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#1a56db',
          light: '#eff6ff',
        },
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
