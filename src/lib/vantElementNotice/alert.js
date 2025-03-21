/**
 * Element UI 和 Vant 的统一警告对话框工具
 * 无论使用哪种 UI 框架，都提供一致的警告对话框 API
 */

import Vue from 'vue'

/**
 * 统一 API 与框架特定选项之间的默认选项映射
 */
const optionsMapping = {
  element: {
    title: 'title',
    message: 'message',
    confirmButtonText: 'confirmButtonText',
    type: 'type',
    showClose: 'showClose',
    closeOnClickModal: 'closeOnClickModal',
    closeOnPressEscape: 'closeOnPressEscape',
    callback: 'callback'
  },
  vant: {
    title: 'title',
    message: 'message',
    confirmButtonText: 'confirmButtonText',
    type: null, // Vant 不直接支持
    showClose: null, // Vant 中没有直接映射
    closeOnClickModal: 'closeOnClickOverlay',
    closeOnPressEscape: null, // Vant 不支持
    callback: null // 在 Vant 中通过 Promise 处理
  }
}

/**
 * 使用配置的 UI 框架显示警告对话框
 * @param {Object|String} options - 警告选项或消息字符串
 * @param {String} options.title - 对话框标题
 * @param {String} options.message - 对话框消息内容
 * @param {String} options.confirmButtonText - 确认按钮的文本
 * @param {String} options.type - 对话框类型（仅限 element-ui：success, warning, info, error）
 * @param {Boolean} options.showClose - 是否显示关闭图标
 * @param {Function} options.callback - 关闭警告时的回调函数（element-ui 风格）
 * @returns {Promise} 当警告被确认时解析的 Promise
 */
export function alert(options, title = '', confirmButtonText = '') {
  // 允许不同的参数模式
  if (typeof options === 'string') {
    options = { 
      message: options,
      title: title || '',
      confirmButtonText: confirmButtonText || '确定'
    }
  }
  
  // 从配置中获取UI框架，如果没有配置则回退到自动检测
  const framework = Vue.prototype.$vantElementConfig?.framework || (Vue.prototype.$ELEMENT ? 'element' : 'vant')
  
  if (framework === 'element') {
    const elementOptions = {}
    
    // 将统一选项映射到 Element UI 特定选项
    Object.keys(options).forEach(key => {
      const mappedKey = optionsMapping.element[key]
      if (mappedKey) {
        elementOptions[mappedKey] = options[key]
      }
    })
    
    // 返回 Promise 以与 Vant 保持一致
    return new Promise((resolve) => {
      Vue.prototype.$alert(options.message, options.title, {
        ...elementOptions,
        callback: (action) => {
          if (options.callback) {
            options.callback(action)
          }
          resolve(action)
        }
      })
    })
  } else {
    // 对于 Vant Dialog
    const vantOptions = {}
    
    // 将统一选项映射到 Vant 特定选项
    Object.keys(options).forEach(key => {
      const mappedKey = optionsMapping.vant[key]
      if (mappedKey) {
        vantOptions[mappedKey] = options[key]
      }
    })
    
    return Vue.prototype.$dialog.alert(vantOptions)
  }
}

export default alert 