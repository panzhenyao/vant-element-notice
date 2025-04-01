/**
 * Element UI 和 Vant 的统一确认对话框工具
 * 无论使用哪种 UI 框架，都提供一致的确认对话框 API
 */

import Vue from 'vue'

/**
 * 使用配置的 UI 框架显示确认对话框
 * @param {Object|String} options - 确认选项或消息字符串
 * @param {String} options.title - 对话框标题
 * @param {String} options.message - 对话框消息内容
 * @param {String} options.confirmButtonText - 确认按钮的文本
 * @param {String} options.cancelButtonText - 取消按钮的文本
 * @param {String} options.type - 对话框类型（仅限 element-ui：success, warning, info, error）
 * @param {Function} options.callback - 点击按钮时的回调函数
 * @returns {Promise} 确认时解析并在取消时拒绝的 Promise
 */
export function confirm(options, title = '', confirmButtonText = '', cancelButtonText = '') {
  // 允许不同的参数模式
  if (typeof options === 'string') {
    options = { 
      message: options,
      title: title || '',
      confirmButtonText: confirmButtonText || '确定',
      cancelButtonText: cancelButtonText || '取消'
    }
  }
  
  // 从配置中获取UI框架，如果没有配置则回退到自动检测
  const framework = Vue.prototype.$vantElementConfig && Vue.prototype.$vantElementConfig.framework || (Vue.prototype.$ELEMENT ? 'element' : 'vant')
  
  if (framework === 'element') {
    const elementOptions = {
      type: options.type,
      confirmButtonText: options.confirmButtonText || '确定',
      cancelButtonText: options.cancelButtonText || '取消',
      callback: options.callback
    }
    
    return Vue.prototype.$confirm(options.message, options.title || '', elementOptions)
  } else {
    // 对于 Vant Dialog
    const vantOptions = {
      title: options.title || '提示',
      message: options.message,
      confirmButtonText: options.confirmButtonText || '确定',
      cancelButtonText: options.cancelButtonText || '取消',
      showCancelButton: true
    }
    
    if (options.callback) {
      vantOptions.beforeClose = (action) => {
        options.callback(action)
        return true
      }
    }
    
    return Vue.prototype.$dialog.confirm(vantOptions)
  }
}

export default confirm 