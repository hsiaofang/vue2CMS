const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
  devServer: {
    proxy: {
      '/api': { 
        target: 'http://localhost:7788',
        ws: true,
        changeOrigin: true, // 支持跨域
        pathRewrite: { // 路徑重寫
          '^/api': ''
        }
      },
    }
  },

  
})
