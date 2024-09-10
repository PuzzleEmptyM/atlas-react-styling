/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      width: {
      },
      height: {
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

