var path = require('path')

const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    path.resolve(__dirname, '../lib/**/*.tsx'),
    path.resolve(__dirname, '../lib/**/*.ts'),
    path.resolve(__dirname, '../lib/**/*.jsx'),
    path.resolve(__dirname, '../lib/**/*.js'),
    path.resolve(__dirname, '../lib/**/*.vue'),
    path.resolve(__dirname, '../lib/**/*.html'),
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('tailwindcss')(path.resolve(__dirname, './tailwindcss.config.js')),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}