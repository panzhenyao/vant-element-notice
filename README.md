# vant-element-notice

[![npm version](https://img.shields.io/npm/v/vant-element-notice.svg)](https://www.npmjs.com/package/vant-element-notice)
[![license](https://img.shields.io/npm/l/vant-element-notice.svg)](https://github.com/panzhenyao/vant-element-notice/blob/master/LICENSE)

[中文](README.zh.md) | English

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

## API Reference

### Message Notification

```js
// Basic message
this.$utils.message('This is a message')

// With options
this.$utils.message({
  message: 'Operation successful',
  type: 'success',
  duration: 3000
})

// Shorthand methods
this.$utils.message.success('Success message')
this.$utils.message.warning('Warning message')
this.$utils.message.error('Error message')
this.$utils.message.info('Info message')
```

### Alert Dialog

```js
// Basic alert
this.$utils.alert('This is an alert')

// With title
this.$utils.alert('Alert content', 'Alert Title')

// With custom confirm button text
this.$utils.alert('Alert content', 'Alert Title', 'I understand')

// Using Promise
this.$utils.alert('Operation completed')
  .then(() => {
    console.log('User confirmed the alert')
  })

// With full options
this.$utils.alert({
  title: 'Custom Title',
  message: 'This is a custom alert content',
  confirmButtonText: 'Got it',
  callback: (action) => {
    console.log(`Alert closed with action: ${action}`)
  }
})
```

### Confirm Dialog

```js
// Basic confirm
this.$utils.confirm('Are you sure you want to proceed?')
  .then(() => {
    // User clicked confirm button
    this.$utils.message.success('Operation confirmed')
  })
  .catch(() => {
    // User clicked cancel button
    this.$utils.message.info('Operation cancelled')
  })

// With title
this.$utils.confirm('Are you sure you want to delete this item?', 'Delete Confirmation')

// With full options
this.$utils.confirm({
  title: 'Delete Confirmation',
  message: 'This action will permanently delete the file. Continue?',
  confirmButtonText: 'Delete',
  cancelButtonText: 'Cancel',
  type: 'warning'
})
  .then(() => {
    this.$utils.message.success('Deleted successfully')
  })
  .catch(() => {
    this.$utils.message.info('Delete cancelled')
  })
```

## Examples

For more examples and complete documentation, please see the [demo examples](https://github.com/panzhenyao/vant-element-notice/tree/master/examples).

## API Documentation

For detailed API documentation, please refer to the [API Documentation](https://github.com/panzhenyao/vant-element-notice/blob/master/docs/API.md).

## Developers

This project is actively being developed. Issues and contributions are welcome.

## License

[MIT](LICENSE) 