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
    
    // 添加 babel-loader 配置，确保输出 ES5 代码
    const jsRule = config.module.rules.find(rule => rule.test && rule.test.toString().includes('js'));
    if (jsRule && jsRule.use) {
      const babelLoaderConfig = jsRule.use.find(use => use.loader && use.loader.includes('babel-loader'));
      if (babelLoaderConfig) {
        babelLoaderConfig.options = {
          ...babelLoaderConfig.options,
          presets: [
            ['@babel/preset-env', {
              useBuiltIns: 'usage',
              corejs: 3,
              targets: {
                browsers: ['> 1%', 'last 2 versions', 'not dead', 'ie >= 11']
              }
            }]
          ]
        };
      }
    }
  },
  
  // 确保生成 sourcemap，便于调试
  productionSourceMap: true,
  
  // CSS 配置
  css: {
    extract: false, // 不提取 CSS 到单独的文件
    sourceMap: true
  }
});
