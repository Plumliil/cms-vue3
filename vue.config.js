const path = require('path')
process.env.NODE_ENV = 'test'
module.exports = {
  // 配置方式一:CLI提供的属性,和webpack对应的属性对应
  outputDir: './build',
  publicPath: './',
  // 配置方式二:和webpack一样,最后进行合并
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: '@/components'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 配置方式三
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
