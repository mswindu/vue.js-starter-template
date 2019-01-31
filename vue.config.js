const path = require('path');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

// https://cli.vuejs.org/ru/config/#vue-config-js
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: process.env.API_BASE_URL,
        ws: false,
        changeOrigin: false,
      },
    },
  },
  productionSourceMap: false,
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'index.html',
      // output as dist/index.html
      filename: 'index.html',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  chainWebpack: (webpackConfig) => {
    webpackConfig.resolve.alias
      .set('@/components', path.resolve('src/components'))
      .set('@/http', path.resolve('src/http'))
      .set('@/menu', path.resolve('src/menu'))
      .set('@/pages', path.resolve('src/pages'))
      .set('@/services', path.resolve('src/services'))
      .set('@/store', path.resolve('src/store'));

    webpackConfig
      .plugin('VuetifyLoaderPlugin')
      .use(VuetifyLoaderPlugin);

    if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
      webpackConfig
        .devtool('#eval-source-map');
    }

    // https://github.com/vuejs/vue-cli/issues/2463
    webpackConfig.plugins.delete('preload-index');
    webpackConfig.plugins.delete('prefetch-index');
  },
};
