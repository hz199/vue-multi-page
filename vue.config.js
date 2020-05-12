// vue.config.js
const { pages, fileName } = require('./pages.config.js')

module.exports = {
  publicPath: './',
  outputDir: `dist/${fileName}`,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  pages: pages,
}
