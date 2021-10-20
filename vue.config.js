const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  pages: {
    index: {
      entry: 'src/index.js'
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        'vue': '@vue/compat'
      }
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/style',
            to: 'style/',
            toType: 'dir'
          }]
      })
    ]
  }
}
