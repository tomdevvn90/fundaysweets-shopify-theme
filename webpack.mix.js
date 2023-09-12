const mix = require('laravel-mix');

mix
  .js('./src/main.js', './assets/theme.bundle.js')
  .sass('./src/scss/main.scss', 'theme.bundle.css')
  .setPublicPath('assets')