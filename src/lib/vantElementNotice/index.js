/**
 * vantElementNotice - Element UI 和 Vant 的统一对话框工具
 * 
 * 此模块为 Element UI 和 Vant 框架提供了统一的常用对话框操作 API
 */

import message from './message'
import alert from './alert'
import confirm from './confirm'

// 导出各个工具函数
export { message, alert, confirm }

/**
 * 可用工具函数的映射
 */
const features = {
  message: true,
  alert: true,
  confirm: true
}

/**
 * 创建一个安装在 Vue 上的插件
 * 这会将所有工具注册到 $utils 下
 */
const vantElementNotice = {
  /**
   * 在 Vue 上安装插件
   * @param {Vue} Vue - Vue 实例
   * @param {Object} options - 插件选项
   * @param {Object} options.features - 启用/禁用特定功能
   * @param {String} options.framework - 指定使用的UI框架 ('element' 或 'vant')
   */
  install(Vue, options = {}) {
    // 处理功能标志
    const enabledFeatures = { ...features, ...(options.features || {}) }
    
    // 设置UI框架偏好，可以在options中指定，否则自动检测
    const framework = options.framework || (Vue.prototype.$message ? 'element' : 'vant')
    
    // 将框架配置添加到Vue原型，以便在各个工具函数中使用
    Vue.prototype.$vantElementConfig = {
      framework,
      ...options // 保留用户传入的其他配置
    }
    
    // 创建 utils 对象
    const utils = {}
    
    // 注册启用的工具
    if (enabledFeatures.message) utils.message = message
    if (enabledFeatures.alert) utils.alert = alert
    if (enabledFeatures.confirm) utils.confirm = confirm
    
    // 注册到 Vue 原型上
    Vue.prototype.$utils = utils
  }
}

export default vantElementNotice 