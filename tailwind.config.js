// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#464F41',
        'secondary': '#ffffff',
        'danger': '#e3342f',
       }),
       textColor: theme => ({
        ...theme('colors'),
        'primary': '#464F41',
        'secondary': '#ffffff',
        'danger': '#e3342f',
       }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }