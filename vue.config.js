const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  // 配置选项
  transpileDependencies: true,

  // 构建为库模式时的配置
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production" && process.env.LIBRARY_BUILD) {
      config.externals = {
        vue: {
          commonjs: "vue",
          commonjs2: "vue",
          root: "Vue",
          amd: "vue",
        },
        "element-ui": {
          commonjs: "element-ui",
          commonjs2: "element-ui",
          root: "ELEMENT",
          amd: "element-ui",
        },
        vant: {
          commonjs: "vant",
          commonjs2: "vant",
          root: "vant",
          amd: "vant",
        },
      };
    }
  },
});
