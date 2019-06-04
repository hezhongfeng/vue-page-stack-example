const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'vue-stack-example' : '',
  assetsDir: 'static',
  productionSourceMap: false,
  outputDir: 'docs',
  devServer: {
    port: 1234
  },

  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [path.resolve(__dirname, './src/common/style/color.scss')]
        })
        .end();
    });
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  }
};
