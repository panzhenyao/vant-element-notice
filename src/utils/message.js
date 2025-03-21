/**
 * Unified message notification utility for Element UI and Vant
 * This provides a consistent API regardless of which UI framework is being used
 */

import Vue from 'vue'

/**
 * Default options mapping between unified API and framework-specific options
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
    type: null, // handled in implementation
    duration: 'duration',
    showClose: null, // not supported in Vant
    center: null, // not supported in Vant
    onClose: 'onClose'
  }
}

/**
 * Type mapping between unified types and framework-specific types
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
 * Creates a message notification using the configured UI framework
 * @param {Object|String} options - Message options or message string
 * @param {String} options.message - The message text
 * @param {String} options.type - Message type: success, warning, error, info
 * @param {Number} options.duration - Display duration in milliseconds
 * @param {Boolean} options.showClose - Whether to show a close button (Element UI only)
 * @param {Boolean} options.center - Whether to center the message (Element UI only)
 * @param {Function} options.onClose - Callback function when message closes
 * @returns {Object} The message instance
 */
export function message(options) {
  // Allow passing just a string
  if (typeof options === 'string') {
    options = { message: options }
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
    
    return Vue.prototype.$message(elementOptions)
  } else {
    // For Vant Toast
    const vantOptions = {}
    
    // Map the unified options to Vant specific options
    Object.keys(options).forEach(key => {
      const mappedKey = optionsMapping.vant[key]
      if (mappedKey) {
        vantOptions[mappedKey] = options[key]
      }
    })
    
    // Handle type separately for Vant
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

// Shorthand methods
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