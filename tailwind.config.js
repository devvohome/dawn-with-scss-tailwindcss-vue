require('dotenv').config()

module.exports = {
  
    //enabled: process.env.NODE_ENV === 'production',
    content: [
      './**/*.liquid',
      './src/**/*.tsx',
      './src/**/*.ts',
      './src/**/*.jsx', 
      './src/**/*.js'
     ],
  
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

}