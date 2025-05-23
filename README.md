![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/panzhenyao/vant-element-notice?utm_source=oss&utm_medium=github&utm_campaign=panzhenyao%2Fvant-element-notice&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

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

## Requirements

- Vue 2.x
- Element UI 2.x or Vant UI 2.x (or both)

## Installation

```bash
# Install with npm
npm install vant-element-notice --save

# Or install with yarn
yarn add vant-element-notice

# You also need to install at least one of these UI frameworks
# Element UI
npm install element-ui@^2.0.0 --save

# Or Vant
npm install vant@^2.0.0 --save
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

Basic usage:

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

Advanced configuration:

```js
this.$utils.message({
  message: 'This is a message',
  type: 'success',
  duration: 3000,        // Display duration in milliseconds
  showClose: true,       // Whether to show close button (Element UI only)
  center: true,          // Center the message (Element UI only)
  onClose: () => {       // Callback when closed
    console.log('Message closed')
  }
})
```

### Alert Dialog

Basic usage:

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
```

Advanced configuration:

```js
// With full options
this.$utils.alert({
  title: 'Custom Title',
  message: 'This is a custom alert content',
  confirmButtonText: 'Got it',
  type: 'warning',               // Type: success, warning, info, error (Element UI only)
  showClose: true,               // Whether to show close icon
  closeOnClickModal: false,      // Whether to close when clicking on the mask
  callback: (action) => {
    console.log(`Alert closed with action: ${action}`)
  }
})
```

### Confirm Dialog

Basic usage:

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
```

Advanced configuration:

```js
// With full options
this.$utils.confirm({
  title: 'Delete Confirmation',
  message: 'This action will permanently delete the file. Continue?',
  confirmButtonText: 'Delete',
  cancelButtonText: 'Cancel',
  type: 'warning',              // Type: success, warning, info, error (Element UI only)
  showClose: true,              // Whether to show close icon
  closeOnClickModal: false,     // Whether to close when clicking on the mask
  showCancelButton: true        // Whether to show cancel button
})
  .then(() => {
    this.$utils.message.success('Deleted successfully')
  })
  .catch(() => {
    this.$utils.message.info('Delete cancelled')
  })
```

## Framework Compatibility Table

This table shows the parameter mapping between the unified API and the native APIs of each UI framework:

### Message Parameters Mapping

| Unified API Parameter | Element UI Parameter | Vant Parameter | Description |
|--------------|----------------|-----------|------|
| message | message | message | Message content |
| type | type | special handling* | Message type: success, warning, error, info |
| duration | duration | duration | Display duration (milliseconds) |
| showClose | showClose | not supported | Whether to show close button |
| center | center | not supported | Whether to center the message |
| onClose | onClose | onClose | Callback when closed |

\* In Vant, type mapping: success='success', warning='text', error='fail', info='text'

### Alert Parameters Mapping

| Unified API Parameter | Element UI Parameter | Vant Parameter | Description |
|--------------|----------------|-----------|------|
| title | title | title | Dialog title |
| message | message | message | Dialog content |
| confirmButtonText | confirmButtonText | confirmButtonText | Confirm button text |
| type | type | not supported | Dialog type (success/warning/info/error) |
| showClose | showClose | not supported | Whether to show close icon |
| closeOnClickModal | closeOnClickModal | closeOnClickOverlay | Close when clicking mask |
| closeOnPressEscape | closeOnPressEscape | not supported | Close when pressing ESC |
| callback | callback | via Promise | Callback when closed |

### Confirm Parameters Mapping

| Unified API Parameter | Element UI Parameter | Vant Parameter | Description |
|--------------|----------------|-----------|------|
| title | title | title | Dialog title |
| message | message | message | Dialog content |
| confirmButtonText | confirmButtonText | confirmButtonText | Confirm button text |
| cancelButtonText | cancelButtonText | cancelButtonText | Cancel button text |
| type | type | not supported | Dialog type (success/warning/info/error) |
| showClose | showClose | showCancelButton | Whether to show close icon |
| showCancelButton | showCancelButton | showCancelButton | Whether to show cancel button |
| closeOnClickModal | closeOnClickModal | closeOnClickOverlay | Close when clicking mask |
| closeOnPressEscape | closeOnPressEscape | not supported | Close when pressing ESC |

## Examples

For more examples and complete documentation, please see the [demo examples](https://github.com/panzhenyao/vant-element-notice/tree/master/examples).

## API Documentation

For detailed API documentation, please refer to the [API Documentation](https://github.com/panzhenyao/vant-element-notice/blob/master/docs/API.md).

## Developer Notes

1. It's not recommended to use the native dialog methods of Element UI and Vant in the same project. Always use the methods provided by this tool for consistency.
2. This library requires Vue 2.x and either Element UI 2.x or Vant 2.x (or both).

## Developers

This project is actively being developed. Issues and contributions are welcome.

## License

[MIT](LICENSE) 