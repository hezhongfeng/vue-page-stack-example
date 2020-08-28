module.exports = {
  publicPath: '/',
  assetsDir: 'static',
  productionSourceMap: false,
  outputDir: 'docs',
  devServer: {
    port: 1234
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: []
      },
      sass: {
        // 不再需要sass-resources-loader
        prependData: '@import "@/common/style/color.scss";'
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    },
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
