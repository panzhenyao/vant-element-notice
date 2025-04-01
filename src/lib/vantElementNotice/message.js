/**
 * Element UI 和 Vant 的统一消息通知工具
 * 提供一致的 API 接口，无论使用哪种 UI 框架
 */

import Vue from 'vue'

/**
 * 统一 API 与框架特定选项之间的默认选项映射
 */
const optionsMapping = {
  element: {
    message: 'message',
    type: 'type',
    duration: 'duration',
    showClose: 'showClose',
    center: 'center',
    onClose: 'onClose'
  },
  vant: {
    message: 'message',
    type: null, // 在实现中处理
    duration: 'duration',
    showClose: null, // Vant 不支持
    center: null, // Vant 不支持
    onClose: 'onClose'
  }
}

/**
 * 统一类型与框架特定类型之间的映射
 */
const typeMapping = {
  element: {
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'info'
  },
  vant: {
    success: 'success',
    warning: 'text',
    error: 'fail',
    info: 'text'
  }
}

/**
 * 使用配置的 UI 框架创建消息通知
 * @param {Object|String} options - 消息选项或消息字符串
 * @param {String} options.message - 消息文本
 * @param {String} options.type - 消息类型：success, warning, error, info
 * @param {Number} options.duration - 显示持续时间（毫秒）
 * @param {Boolean} options.showClose - 是否显示关闭按钮（仅 Element UI）
 * @param {Boolean} options.center - 是否居中显示消息（仅 Element UI）
 * @param {Function} options.onClose - 消息关闭时的回调函数
 * @returns {Object} 消息实例
 */
export function message(options) {
  // 允许只传递字符串
  if (typeof options === 'string') {
    options = { message: options }
  }
  
  // 从配置中获取UI框架，如果没有配置则回退到自动检测
  const framework = Vue.prototype.$vantElementConfig && Vue.prototype.$vantElementConfig.framework || (Vue.prototype.$message ? 'element' : 'vant')
  
  if (framework === 'element') {
    const elementOptions = {}
    
    // 将统一选项映射到 Element UI 特定选项
    Object.keys(options).forEach(key => {
      const mappedKey = optionsMapping.element[key]
      if (mappedKey) {
        elementOptions[mappedKey] = options[key]
      }
    })
    
    return Vue.prototype.$message(elementOptions)
  } else {
    // 对于 Vant Toast
    const vantOptions = {}
    
    // 将统一选项映射到 Vant 特定选项
    Object.keys(options).forEach(key => {
      const mappedKey = optionsMapping.vant[key]
      if (mappedKey) {
        vantOptions[mappedKey] = options[key]
      }
    })
    
    // 单独处理 Vant 的类型
    if (options.type && typeMapping.vant[options.type]) {
      if (options.type === 'success') {
        return Vue.prototype.$toast.success(options.message)
      } else if (options.type === 'error') {
        return Vue.prototype.$toast.fail(options.message)
      } else {
        vantOptions.type = typeMapping.vant[options.type]
        return Vue.prototype.$toast(vantOptions)
      }
    }
    
    return Vue.prototype.$toast(vantOptions)
  }
}

// 快捷方法
message.success = (msg, options = {}) => {
  return message({ ...options, message: msg, type: 'success' })
}

message.warning = (msg, options = {}) => {
  return message({ ...options, message: msg, type: 'warning' })
}

message.error = (msg, options = {}) => {
  return message({ ...options, message: msg, type: 'error' })
}

message.info = (msg, options = {}) => {
  return message({ ...options, message: msg, type: 'info' })
}

export default message 