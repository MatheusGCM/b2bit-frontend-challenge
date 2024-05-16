/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        'yellow-b2': '#FDCF00',
        'blue-b2': '#02274f',
        'red-b2': '#F62323',
        'black-2': '#262626',
        'gray-6': '#999999',
        'white-1': '#FAFAFA',
        'white-2': '#F1F5F9',
        'white-3': '#F1F1F1',
      },
    },
  },
  plugins: [],
}
