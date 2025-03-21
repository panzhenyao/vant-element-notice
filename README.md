# vant-element-notice

[![npm version](https://img.shields.io/npm/v/vant-element-notice.svg)](https://www.npmjs.com/package/vant-element-notice)
[![license](https://img.shields.io/npm/l/vant-element-notice.svg)](https://github.com/yourusername/vant-element-notice/blob/master/LICENSE)

中文 | [English](README.en.md)

一个统一的对话框 API，用于在 Vue 2 项目中无缝集成 Element UI 和 Vant UI 框架的弹框功能。

## 功能特点

- 统一的 API 接口：无论使用 Element UI 还是 Vant UI，都可以使用相同的函数调用方式
- 自动检测框架：根据项目中引入的 UI 框架自动选择对应的实现
- 支持链式调用和 Promise：所有对话框方法都返回 Promise，支持现代 JavaScript 异步编程模式
- 配置灵活：可以使用简单字符串或详细配置对象

## 安装

```bash
# 使用 npm 安装
npm install vant-element-notice --save

# 或使用 yarn 安装
yarn add vant-element-notice
```

## 使用方法

在 Vue 项目中引入并注册插件：

```js
import Vue from 'vue'
import App from './App.vue'

// 引入 Element UI 或 Vant UI (二选一)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 或者
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// 引入 vant-element-notice
import vantElementNotice from 'vant-element-notice'
Vue.use(vantElementNotice)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

### 指定使用的 UI 框架

默认情况下，vant-element-notice 会自动检测项目中使用的 UI 框架（基于 `Vue.prototype.$ELEMENT` 是否存在）。
但你也可以在注册插件时明确指定要使用的框架：

```js
// 使用配置选项指定 UI 框架
Vue.use(vantElementNotice, {
  // 显式指定使用的 UI 框架: 'element' 或 'vant'
  framework: 'element', 
  
  // 可选: 启用或禁用特定功能
  features: {
    message: true,
    alert: true,
    confirm: true
  }
})
```

## 示例

获取更多示例和完整文档，请查看 [demo 示例](https://github.com/yourusername/vant-element-notice/tree/master/examples)。

## API 文档

详细的 API 文档请参见 [API 文档](https://github.com/yourusername/vant-element-notice/blob/master/docs/API.md)。

## 开发者

此项目正在积极开发中，欢迎提交问题或贡献代码。

## 许可证

[MIT](LICENSE)
