/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B74E4",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar-hide')
  ],
};
