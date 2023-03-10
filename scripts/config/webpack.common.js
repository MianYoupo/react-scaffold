const path = require('path')
const { isDev, PROJECT_PATH } = require('../constant.js')

module.exports = {
  entry: {
    app: path.resolve(PROJECT_PATH, './src/app.js'),
  },
  output: {
    filename: `js/[name]${isDev ? '' : '.[hash:8]'}.js`,
    path: path.resolve(PROJECT_PATH, './dist'),
    plugins: [
      new HtmlWebpackPlugin({
        template: resolve(PROJECT_PATH, './public/index.html'),
        filename: 'index.html',
        cache: fale, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
        minify: isDev
          ? false
          : {
              removeAttributeQuotes: true,
              collapseWhitespace: true,
              removeComments: true,
              collapseBooleanAttributes: true,
              collapseInlineTagWhitespace: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              minifyCSS: true,
              minifyJS: true,
              minifyURLs: true,
              useShortDoctype: true,
            },
      }),
    ],
  },
}
