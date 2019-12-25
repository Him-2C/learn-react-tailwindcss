// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

const configCssnano = cssnano();
const configPurgecss = purgecss({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.tsx',
    './src/**/*.jsx'
    // etc.
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]*[\w-/:]/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [configPurgecss, configCssnano]
      : []
  ]
}
