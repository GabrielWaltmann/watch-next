const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['var(--font-inter)', ...fontFamily.sans],
    },
    fontSize: {
        'lg': '1.7rem',
        'xm': '1.5rem',
        'md': '1.25rem',
        'sm': '1rem',
        'xs': '0.75rem',
    },
    colors: {
      transparent: '#0000',
      current: 'currentColor',
      'blue-primary': '#01579B',
      'white-primary': '#f1f1f1',
      'green-primary': '#4ADE80',
      'gray-1': '#121212',
      'gray-2': '#262626',
      'gray-3': '#868686',
      'black': '#000000',
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
