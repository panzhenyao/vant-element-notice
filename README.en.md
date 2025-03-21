# vant-element-notice

[![npm version](https://img.shields.io/npm/v/vant-element-notice.svg)](https://www.npmjs.com/package/vant-element-notice)
[![license](https://img.shields.io/npm/l/vant-element-notice.svg)](https://github.com/yourusername/vant-element-notice/blob/master/LICENSE)

[中文](README.md) | English

A unified dialog API for seamlessly integrating Element UI and Vant UI dialog functionality in Vue 2 projects.

## Features

- Unified API interface: Use the same function call method regardless of whether you're using Element UI or Vant UI
- Automatic framework detection: Automatically selects the corresponding implementation based on the UI framework imported in your project
- Supports chaining and Promises: All dialog methods return Promises, supporting modern JavaScript asynchronous programming patterns
- Flexible configuration: Can use simple strings or detailed configuration objects

## Installation

```bash
# Install with npm
npm install vant-element-notice --save

# Or install with yarn
yarn add vant-element-notice
```

## Usage

Import and register the plugin in your Vue project:

```js
import Vue from 'vue'
import App from './App.vue'

// Import Element UI or Vant UI (choose one)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// Or
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// Import vant-element-notice
import vantElementNotice from 'vant-element-notice'
Vue.use(vantElementNotice)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

### Specify UI Framework

By default, vant-element-notice automatically detects the UI framework used in your project (based on whether `Vue.prototype.$ELEMENT` exists).
However, you can also explicitly specify which framework to use when registering the plugin:

```js
// Use configuration options to specify UI framework
Vue.use(vantElementNotice, {
  // Explicitly specify the UI framework to use: 'element' or 'vant'
  framework: 'element', 
  
  // Optional: Enable or disable specific features
  features: {
    message: true,
    alert: true,
    confirm: true
  }
})
```

## Examples

For more examples and complete documentation, please see the [demo examples](https://github.com/yourusername/vant-element-notice/tree/master/examples).

## API Documentation

For detailed API documentation, please refer to the [API Documentation](https://github.com/yourusername/vant-element-notice/blob/master/docs/API.md).

## Developers

This project is actively being developed. Issues and contributions are welcome.

## License

[MIT](LICENSE) 