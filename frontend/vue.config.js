const path = require('path')
const fs = require('fs')

const env = process.env

module.exports = {
  productionSourceMap: false,
  publicPath: env.PUBLIC_PATH,

  outputDir: path.resolve(__dirname, '../resources/assets/'),

  indexPath:
    env.NODE_ENV === 'development'
      ? 'index.html'
      : path.resolve(__dirname, '../resources/views/panel.php'),

  configureWebpack: {
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      host: env.SERVER_HOST,
      publicPath: env.PUBLIC_PATH,
      port: env.SERVER_PORT,
      proxy: {
        '/api': {
          target: env.API_SCHEME + '://' + env.API_HOST,
          pathRewrite: { '^/api': env.API_BASE_PATH },
          changeOrigin: true,
        },
      },
    },
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('html-loader').loader('html-loader')

    const alias = config.resolve.alias
    alias.set('@app', path.resolve(__dirname, 'src/app'))
    alias.set('@assets', path.resolve(__dirname, 'public/assets'))

    // if yarn link used
    let svjsPath = path.resolve(__dirname, 'node_modules/@superv/ui/src/main.js')
    if (fs.existsSync(svjsPath)) {
      alias.set('@superv/ui', '@superv/ui/src/main')
    }
  },
}
