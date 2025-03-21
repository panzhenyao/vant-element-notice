# vant-element-notice API 文档

这是 vant-element-notice 的详细 API 文档。此库为 Element UI 和 Vant UI 提供了统一的对话框 API。

## 目录

- [安装](#安装)
- [基本用法](#基本用法)
- [消息提示 (Message)](#消息提示-message)
- [警告框 (Alert)](#警告框-alert)
- [确认框 (Confirm)](#确认框-confirm)
- [框架兼容性](#框架兼容性)

## 安装

```bash
# 使用 npm 安装
npm install vant-element-notice --save

# 或使用 yarn 安装
yarn add vant-element-notice
```

## 基本用法

在 Vue 项目中引入并注册插件：

```js
import Vue from 'vue'
import vantElementNotice from 'vant-element-notice'

// 注册插件
Vue.use(vantElementNotice)

// 或指定 UI 框架
Vue.use(vantElementNotice, { 
  framework: 'element'  // 'element' 或 'vant'
})
```

## 消息提示 (Message)

### 基本用法

```js
// 基本消息
this.$utils.message('这是一条消息提示')

// 带类型的消息
this.$utils.message({
  message: '操作成功',
  type: 'success'
})

// 使用快捷方法
this.$utils.message.success('操作成功')
this.$utils.message.warning('警告信息')
this.$utils.message.error('错误信息')
this.$utils.message.info('提示信息')
```

### API

#### message(options)

| 参数 | 类型 | 说明 |
|-----|------|------|
| message | String | 消息内容 |
| type | String | 消息类型：'success', 'warning', 'error', 'info'，默认 'info' |
| duration | Number | 显示时间，单位毫秒，默认 3000 |
| showClose | Boolean | 是否显示关闭按钮 (仅 Element UI) |
| center | Boolean | 是否居中显示 (仅 Element UI) |
| onClose | Function | 关闭时的回调函数 |

## 警告框 (Alert)

### 基本用法

```js
// 基本警告框
this.$utils.alert('这是一个警告框')

// 带标题的警告框
this.$utils.alert('这是警告框内容', '警告标题')

// 自定义确认按钮文字
this.$utils.alert('这是警告框内容', '警告标题', '我知道了')

// 使用 Promise
this.$utils.alert('操作已完成')
  .then(() => {
    console.log('用户确认了警告框')
  })
```

### API

#### alert(options) / alert(message, title, confirmButtonText)

| 参数 | 类型 | 说明 |
|-----|------|------|
| message | String | 警告框内容 |
| title | String | 警告框标题 |
| confirmButtonText | String | 确认按钮文字，默认为"确定" |
| type | String | 警告框类型：'success', 'warning', 'info', 'error' (仅 Element UI) |
| showClose | Boolean | 是否显示关闭图标 |
| closeOnClickModal | Boolean | 是否可以点击蒙层关闭 |
| callback | Function | 关闭时的回调函数 |

## 确认框 (Confirm)

### 基本用法

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

// 带标题的确认框
this.$utils.confirm('确定要删除此项吗？', '删除确认')
```

### API

#### confirm(options) / confirm(message, title)

| 参数 | 类型 | 说明 |
|-----|------|------|
| message | String | 确认框内容 |
| title | String | 确认框标题 |
| confirmButtonText | String | 确认按钮文字，默认为"确定" |
| cancelButtonText | String | 取消按钮文字，默认为"取消" |
| type | String | 确认框类型：'success', 'warning', 'info', 'error' (仅 Element UI) |
| showClose | Boolean | 是否显示关闭图标 |
| showCancelButton | Boolean | 是否显示取消按钮 |
| closeOnClickModal | Boolean | 是否可以点击蒙层关闭 |
| closeOnPressEscape | Boolean | 是否可通过按下 ESC 关闭 (仅 Element UI) |

## 框架兼容性

此表显示了统一 API 与各 UI 框架原生 API 之间的参数映射关系：

### Message 消息提示参数映射

| 统一 API 参数 | Element UI 参数 | Vant 参数 | 说明 |
|--------------|----------------|-----------|------|
| message | message | message | 消息内容 |
| type | type | 特殊处理* | 消息类型：success, warning, error, info |
| duration | duration | duration | 显示时间（毫秒） |
| showClose | showClose | 不支持 | 是否显示关闭按钮 |
| center | center | 不支持 | 是否居中显示 |
| onClose | onClose | onClose | 关闭时的回调函数 |

\* Vant中type映射：success='success', warning='text', error='fail', info='text'

### Alert 警告框参数映射

| 统一 API 参数 | Element UI 参数 | Vant 参数 | 说明 |
|--------------|----------------|-----------|------|
| title | title | title | 对话框标题 |
| message | message | message | 对话框内容 |
| confirmButtonText | confirmButtonText | confirmButtonText | 确认按钮文字 |
| type | type | 不支持 | 对话框类型(success/warning/info/error) |
| showClose | showClose | 不支持 | 是否显示关闭图标 |
| closeOnClickModal | closeOnClickModal | closeOnClickOverlay | 点击遮罩是否关闭 |
| closeOnPressEscape | closeOnPressEscape | 不支持 | 是否可通过按下ESC关闭 |
| callback | callback | 通过Promise | 关闭时的回调 |

### Confirm 确认框参数映射

| 统一 API 参数 | Element UI 参数 | Vant 参数 | 说明 |
|--------------|----------------|-----------|------|
| title | title | title | 对话框标题 |
| message | message | message | 对话框内容 |
| confirmButtonText | confirmButtonText | confirmButtonText | 确认按钮文字 |
| cancelButtonText | cancelButtonText | cancelButtonText | 取消按钮文字 |
| type | type | 不支持 | 对话框类型(success/warning/info/error) |
| showClose | showClose | showCancelButton | 是否显示关闭图标 |
| showCancelButton | showCancelButton | showCancelButton | 是否显示取消按钮 |
| closeOnClickModal | closeOnClickModal | closeOnClickOverlay | 点击遮罩是否关闭 |
| closeOnPressEscape | closeOnPressEscape | 不支持 | 是否可通过按下ESC关闭 | 