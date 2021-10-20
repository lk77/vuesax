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
      fallback: {
        "os": false,
        "stream": false,
        "path": false,
        "constants": false
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
