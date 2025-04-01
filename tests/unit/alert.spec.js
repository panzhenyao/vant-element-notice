import Vue from 'vue'
import { alert } from '@/lib'

// 模拟 Vue 的 prototype
Vue.prototype.$alert = jest.fn()
Vue.prototype.$dialog = {
  alert: jest.fn()
}

describe('Alert Module', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Element UI Alert', () => {
    beforeEach(() => {
      Vue.prototype.$alert = jest.fn()
      Vue.prototype.$dialog = undefined
      Vue.prototype.$ELEMENT = {}
    })

    it('should call Element UI alert with correct options', () => {
      const options = {
        title: 'test title',
        message: 'test message',
        type: 'warning',
        confirmButtonText: 'OK',
        callback: jest.fn()
      }
      alert(options)
      expect(Vue.prototype.$alert).toHaveBeenCalledWith(
        options.message,
        options.title,
        expect.objectContaining({
          type: options.type,
          confirmButtonText: options.confirmButtonText,
          callback: options.callback
        })
      )
    })

    it('should handle string input', () => {
      alert('test message')
      expect(Vue.prototype.$alert).toHaveBeenCalledWith(
        'test message',
        '',
        expect.any(Object)
      )
    })

    it('should handle title and message separately', () => {
      alert('test message', 'test title')
      expect(Vue.prototype.$alert).toHaveBeenCalledWith(
        'test message',
        'test title',
        expect.any(Object)
      )
    })
  })

  describe('Vant Dialog', () => {
    beforeEach(() => {
      Vue.prototype.$alert = undefined
      Vue.prototype.$ELEMENT = undefined
      Vue.prototype.$dialog = {
        alert: jest.fn()
      }
    })

    it('should call Vant dialog with correct options', () => {
      const options = {
        title: 'test title',
        message: 'test message',
        type: 'warning',
        confirmButtonText: 'OK',
        callback: jest.fn()
      }
      alert(options)
      expect(Vue.prototype.$dialog.alert).toHaveBeenCalledWith({
        title: options.title,
        message: options.message,
        confirmButtonText: options.confirmButtonText,
        showCancelButton: false,
        beforeClose: expect.any(Function)
      })
    })

    it('should handle string input', () => {
      alert('test message')
      expect(Vue.prototype.$dialog.alert).toHaveBeenCalledWith({
        title: '提示',
        message: 'test message',
        confirmButtonText: '确定',
        showCancelButton: false
      })
    })

    it('should handle title and message separately', () => {
      alert('test message', 'test title')
      expect(Vue.prototype.$dialog.alert).toHaveBeenCalledWith({
        title: 'test title',
        message: 'test message',
        confirmButtonText: '确定',
        showCancelButton: false
      })
    })

    it('should call callback when confirmed', () => {
      const callback = jest.fn()
      alert({
        message: 'test message',
        title: 'test title',
        callback
      })
      
      // 获取 beforeClose 函数
      const beforeClose = Vue.prototype.$dialog.alert.mock.calls[0][0].beforeClose
      
      // 模拟确认
      beforeClose('confirm')
      expect(callback).toHaveBeenCalledWith('confirm')
    })
  })
}) 