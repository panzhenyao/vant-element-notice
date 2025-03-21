/**
 * Unified dialog utility for Element UI and Vant
 * This provides a consistent API for alert and confirm dialogs regardless of which UI framework is used
 */

import Vue from 'vue'

/**
 * Default options mapping between unified API and framework-specific options
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
    closeOnPressEscape: 'closeOnPressEscape',
    callback: 'callback' // For alert
  },
  vant: {
    title: 'title',
    message: 'message',
    confirmButtonText: 'confirmButtonText',
    cancelButtonText: 'cancelButtonText',
    type: null, // not directly supported in Vant
    showClose: 'showCancelButton', // approximate mapping
    showCancelButton: 'showCancelButton',
    closeOnClickModal: 'closeOnClickOverlay',
    closeOnPressEscape: null, // not supported in Vant
    callback: null // Handled through promises in Vant
  }
}

/**
 * Shows an alert dialog using the configured UI framework
 * @param {Object|String} options - Alert options or message string
 * @param {String} options.title - Dialog title
 * @param {String} options.message - Dialog message content
 * @param {String} options.confirmButtonText - Text for the confirm button
 * @param {String} options.type - Dialog type (element-ui only: success, warning, info, error)
 * @param {Boolean} options.showClose - Whether to show a close icon
 * @param {Function} options.callback - Callback function when alert is closed (element-ui style)
 * @returns {Promise} A promise that resolves when alert is confirmed
 */
export function alert(options, title = '', confirmButtonText = '') {
  // Allow different parameter patterns
  if (typeof options === 'string') {
    options = { 
      message: options,
      title: title || '',
      confirmButtonText: confirmButtonText || '确定'
    }
  }
  
  // Determine which UI framework to use
  const framework = Vue.prototype.$ELEMENT ? 'element' : 'vant'
  
  if (framework === 'element') {
    const elementOptions = {}
    
    // Map the unified options to Element UI specific options
    Object.keys(options).forEach(key => {
      const mappedKey = optionsMapping.element[key]
      if (mappedKey) {
        elementOptions[mappedKey] = options[key]
      }
    })
    
    // Return a promise to be consistent with Vant
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
    // For Vant Dialog
    const vantOptions = {}
    
    // Map the unified options to Vant specific options
    Object.keys(options).forEach(key => {
      const mappedKey = optionsMapping.vant[key]
      if (mappedKey) {
        vantOptions[mappedKey] = options[key]
      }
    })
    
    return Vue.prototype.$dialog.alert(vantOptions)
  }
}

/**
 * Shows a confirm dialog using the configured UI framework
 * @param {Object|String} options - Confirm options or message string
 * @param {String} options.title - Dialog title
 * @param {String} options.message - Dialog message content
 * @param {String} options.confirmButtonText - Text for the confirm button
 * @param {String} options.cancelButtonText - Text for the cancel button
 * @param {String} options.type - Dialog type (element-ui only: success, warning, info, error)
 * @param {Boolean} options.showClose - Whether to show a close icon
 * @param {Boolean} options.closeOnClickModal - Whether to close when clicking modal backdrop
 * @returns {Promise} A promise that resolves when confirmed and rejects when canceled
 */
export function confirm(options, title = '', confirmButtonText = '', cancelButtonText = '') {
  // Allow different parameter patterns
  if (typeof options === 'string') {
    options = { 
      message: options,
      title: title || '提示',
      confirmButtonText: confirmButtonText || '确定',
      cancelButtonText: cancelButtonText || '取消'
    }
  }
  
  // Determine which UI framework to use
  const framework = Vue.prototype.$ELEMENT ? 'element' : 'vant'
  
  if (framework === 'element') {
    const elementOptions = {}
    
    // Map the unified options to Element UI specific options
    Object.keys(options).forEach(key => {
      const mappedKey = optionsMapping.element[key]
      if (mappedKey) {
        elementOptions[mappedKey] = options[key]
      }
    })
    
    return Vue.prototype.$confirm(options.message, options.title, elementOptions)
  } else {
    // For Vant Dialog
    const vantOptions = {}
    
    // Map the unified options to Vant specific options
    Object.keys(options).forEach(key => {
      const mappedKey = optionsMapping.vant[key]
      if (mappedKey && mappedKey !== null) {
        vantOptions[mappedKey] = options[key]
      }
    })
    
    return Vue.prototype.$dialog.confirm(vantOptions)
  }
}

export default {
  alert,
  confirm
} 