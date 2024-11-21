/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32
    },



    colors: {
      'black': '#111113',

      'white-100': '#eeeef0',
      'white-200': '#d9d9d9',
      'white-300': '#b2b3bd',

      'gray-900': '#303136',

      'blue': '#4253f0',
      'blue-300': '#6c79f0'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

