const mix = require('laravel-mix');
const path = require('path');


mix
.ts("resources/ts/app.ts", "public/js")
.vue({ version: 3 })
.webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'resources/ts/src/')
      }
    }
  });