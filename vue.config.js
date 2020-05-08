// vue.config.js
let pagesConfig = require('./src/config/page.config.js')

module.exports = {
  publicPath: './',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  pages: pagesConfig,
}
