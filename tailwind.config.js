// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#464F41',
        'primary2': '#BFCBA8',
        'secondary': '#ffffff',
        'danger': '#e3342f',
        'background': '#EEEDED',
       }),
       textColor: theme => ({
        ...theme('colors'),
        'primary': '#464F41',
        'primary2': '#BFCBA8',
        'secondary': '#ffffff',
        'danger': '#e3342f',
       }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }