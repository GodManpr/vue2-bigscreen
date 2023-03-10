const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig(() => {
  const {VUE_HOST, VUE_PORT, VUE_BASE_URL, VUE_API_PATH} = process.env
  return {
    transpileDependencies: true,
    publicPath: VUE_BASE_URL,
    devServer: {
      port: VUE_PORT,
      host: VUE_HOST,
      // proxy: {
      //   '/api': {
      //     target: VUE_API_PATH,
      //     changeOrigin: true
      //   },
      // }
    }
  }
})
