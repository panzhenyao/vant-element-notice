# vant-element-notice 示例

这个目录包含了 vant-element-notice 库的使用示例，展示了如何使用统一的 API 调用对话框组件。

## 运行示例

要运行此示例，请按照以下步骤操作：

1. 克隆仓库
```bash
git clone https://github.com/panzhenyao/vant-element-notice.git
cd vant-element-notice
```

2. 安装依赖
```bash
npm install
```

3. 运行开发服务器
```bash
npm run serve
```

## 切换 UI 框架

此示例默认使用 Element UI。要切换到 Vant UI，请修改 `examples/main.js` 文件：

```js
// 注释掉 Element UI
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// 取消注释 Vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// 更改框架配置
Vue.use(vantElementNotice, {
  framework: 'vant'
})
```

## 示例内容

这个示例展示了以下功能：

- 消息提示 (Message)：普通消息、成功消息、警告消息、错误消息
- 警告框 (Alert)：基本警告框、带标题的警告框
- 确认框 (Confirm)：基本确认框、高级配置的确认框

每个示例都展示了如何使用统一的 API 调用对话框，无论使用的是 Element UI 还是 Vant UI。 