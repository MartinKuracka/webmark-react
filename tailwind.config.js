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
        'background': '#EEEDED',
       }),
       borderColor: theme => ({
         ...theme('colors'),
        'primary': '#464F41',
        'primary2': '#BFCBA8',
        'secondary': '#ffffff',
        'danger': '#e3342f',
        'background': '#EEEDED',
       }),
       minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '86%',
        'full': '100%',
       },
       maxWidth: {
         '500': '500px',
         '540': '540px',
         '1024': '1024px',
         'xl': '1280px',
         'lg': '32rem'
       }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }