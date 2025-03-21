const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // 配置选项
  transpileDependencies: true,
  
  // 构建为库模式时的配置
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production' && process.env.LIBRARY_BUILD) {
      config.externals = {
        vue: 'Vue',
        'element-ui': 'ELEMENT',
        'vant': 'vant'
      }
    }
  }
})
