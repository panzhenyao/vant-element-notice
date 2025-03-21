# vant-element-notice

[![npm version](https://img.shields.io/npm/v/vant-element-notice.svg)](https://www.npmjs.com/package/vant-element-notice)
[![license](https://img.shields.io/npm/l/vant-element-notice.svg)](https://github.com/panzhenyao/vant-element-notice/blob/master/LICENSE)

中文 | [English](README.md)

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

## API 参考

### 消息提示 (Message)

```js
// 基本消息
this.$utils.message('这是一条消息')

// 使用选项
this.$utils.message({
  message: '操作成功',
  type: 'success',
  duration: 3000
})

// 快捷方法
this.$utils.message.success('成功消息')
this.$utils.message.warning('警告消息')
this.$utils.message.error('错误消息')
this.$utils.message.info('提示消息')
```

### 警告框 (Alert)

```js
// 基本警告框
this.$utils.alert('这是一个警告框')

// 带标题
this.$utils.alert('警告框内容', '警告标题')

// 自定义确认按钮文字
this.$utils.alert('警告框内容', '警告标题', '我知道了')

// 使用 Promise
this.$utils.alert('操作已完成')
  .then(() => {
    console.log('用户确认了警告框')
  })

// 完整选项
this.$utils.alert({
  title: '自定义标题',
  message: '这是一个自定义警告框内容',
  confirmButtonText: '我知道了',
  callback: (action) => {
    console.log(`警告框已关闭，操作: ${action}`)
  }
})
```

### 确认框 (Confirm)

```js
// 基本确认框
this.$utils.confirm('确定要执行此操作吗？')
  .then(() => {
    // 用户点击了确认按钮
    this.$utils.message.success('操作已确认')
  })
  .catch(() => {
    // 用户点击了取消按钮
    this.$utils.message.info('操作已取消')
  })

// 带标题
this.$utils.confirm('确定要删除此项吗？', '删除确认')

// 完整选项
this.$utils.confirm({
  title: '删除确认',
  message: '此操作将永久删除该文件, 是否继续?',
  confirmButtonText: '确定删除',
  cancelButtonText: '取消',
  type: 'warning'
})
  .then(() => {
    this.$utils.message.success('删除成功')
  })
  .catch(() => {
    this.$utils.message.info('已取消删除')
  })
```

## 示例

获取更多示例和完整文档，请查看 [demo 示例](https://github.com/panzhenyao/vant-element-notice/tree/master/examples)。

## API 文档

详细的 API 文档请参见 [API 文档](https://github.com/panzhenyao/vant-element-notice/blob/master/docs/API.md)。

## 开发者

此项目正在积极开发中，欢迎提交问题或贡献代码。

## 许可证

[MIT](LICENSE)
