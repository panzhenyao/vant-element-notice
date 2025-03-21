/**
 * Element UI 和 Vant 的统一确认对话框工具
 * 无论使用哪种 UI 框架，都提供一致的确认对话框 API
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
    cancelButtonText: 'cancelButtonText',
    type: 'type',
    showClose: 'showClose',
    showCancelButton: 'showCancelButton',
    closeOnClickModal: 'closeOnClickModal',
    closeOnPressEscape: 'closeOnPressEscape'
  },
  vant: {
    title: 'title',
    message: 'message',
    confirmButtonText: 'confirmButtonText',
    cancelButtonText: 'cancelButtonText',
    type: null, // Vant 不直接支持
    showClose: 'showCancelButton', // 近似映射
    showCancelButton: 'showCancelButton',
    closeOnClickModal: 'closeOnClickOverlay',
    closeOnPressEscape: null // Vant 不支持
  }
}

/**
 * 使用配置的 UI 框架显示确认对话框
 * @param {Object|String} options - 确认选项或消息字符串
 * @param {String} options.title - 对话框标题
 * @param {String} options.message - 对话框消息内容
 * @param {String} options.confirmButtonText - 确认按钮的文本
 * @param {String} options.cancelButtonText - 取消按钮的文本
 * @param {String} options.type - 对话框类型（仅限 element-ui：success, warning, info, error）
 * @param {Boolean} options.showClose - 是否显示关闭图标
 * @param {Boolean} options.closeOnClickModal - 点击模态背景时是否关闭
 * @returns {Promise} 确认时解析并在取消时拒绝的 Promise
 */
export function confirm(options, title = '', confirmButtonText = '', cancelButtonText = '') {
  // 允许不同的参数模式
  if (typeof options === 'string') {
    options = { 
      message: options,
      title: title || '提示',
      confirmButtonText: confirmButtonText || '确定',
      cancelButtonText: cancelButtonText || '取消'
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
    
    return Vue.prototype.$confirm(options.message, options.title, elementOptions)
  } else {
    // 对于 Vant Dialog
    const vantOptions = {}
    
    // 将统一选项映射到 Vant 特定选项
    Object.keys(options).forEach(key => {
      const mappedKey = optionsMapping.vant[key]
      if (mappedKey && mappedKey !== null) {
        vantOptions[mappedKey] = options[key]
      }
    })
    
    return Vue.prototype.$dialog.confirm(vantOptions)
  }
}

export default confirm 