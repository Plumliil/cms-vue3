const path = require('path')
module.exports = {
  // 配置方式一:CLI提供的属性,和webpack对应的属性对应
  outputDir: './build',
  // 跨域设置
  devServer: {
    port: 8081,
    // 代理配置
    proxy: {
      // 这里的api 表示如果我们的请求地址有/api的时候,就出触发代理机制
      // localhost:8888/api/abc  => 代理给另一个服务器
      // 本地的前端  =》 本地的后端  =》 代理我们向另一个服务器发请求 （行得通）
      // 本地的前端  =》 另外一个服务器发请求 （跨域 行不通）
      '/api': {
        target: 'http://152.136.185.210:5000/', // 我们要代理的地址
        changeOrigin: true, // 是否跨域 需要设置此值为true 才可以让本地服务代理我们发出请求
        // 路径重写
        // 默认的路径：target+baseUrl+apiUrl
        // 如：www.baidu.com/api/login，如果后端接口就是该路径，就不用写 pathRewrite
        pathRewrite: {
          // 重新路由  localhost:8888/api/login  => www.baidu.com/api/login
          '^/api': '' // 假设我们想把 localhost:8888/api/login 变成www.baidu.com/login 就需要这么做
        }
      }
    },
    historyApiFallback: true
  },

  // publicPath: './',
  // 配置方式二:和webpack一样,最后进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
  // port: 8081
  // mode: 'development'
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 配置方式三
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // },
}
