const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({ patterns: [
        {
          from: 'src/style',
          to: 'style/',
          toType: 'dir'
        }
      ] })
    ]
  }
}
