const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false
},)
module.exports = {
  lintOnSave:false,
  css: {
    loaderOptions: {
      // 这里不再使用 postcssOptions
    },
  },
};
