import Vue from 'vue'
import { confirm } from '@/lib'

// 模拟 Vue 的 prototype
Vue.prototype.$confirm = jest.fn()
Vue.prototype.$dialog = {
  confirm: jest.fn()
}

describe('Confirm Module', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Element UI Confirm', () => {
    beforeEach(() => {
      Vue.prototype.$confirm = jest.fn()
      Vue.prototype.$dialog = undefined
      Vue.prototype.$ELEMENT = {}
    })

    it('should call Element UI confirm with correct options', () => {
      const options = {
        title: 'test title',
        message: 'test message',
        type: 'warning',
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        callback: jest.fn()
      }
      confirm(options)
      expect(Vue.prototype.$confirm).toHaveBeenCalledWith(
        options.message,
        options.title,
        expect.objectContaining({
          type: options.type,
          confirmButtonText: options.confirmButtonText,
          cancelButtonText: options.cancelButtonText,
          callback: options.callback
        })
      )
    })

    it('should handle string input', () => {
      confirm('test message')
      expect(Vue.prototype.$confirm).toHaveBeenCalledWith(
        'test message',
        '',
        expect.any(Object)
      )
    })

    it('should handle title and message separately', () => {
      confirm('test message', 'test title')
      expect(Vue.prototype.$confirm).toHaveBeenCalledWith(
        'test message',
        'test title',
        expect.any(Object)
      )
    })
  })

  describe('Vant Dialog', () => {
    beforeEach(() => {
      Vue.prototype.$confirm = undefined
      Vue.prototype.$ELEMENT = undefined
      Vue.prototype.$dialog = {
        confirm: jest.fn()
      }
    })

    it('should call Vant dialog with correct options', () => {
      const options = {
        title: 'test title',
        message: 'test message',
        type: 'warning',
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        callback: jest.fn()
      }
      confirm(options)
      expect(Vue.prototype.$dialog.confirm).toHaveBeenCalledWith({
        title: options.title,
        message: options.message,
        confirmButtonText: options.confirmButtonText,
        cancelButtonText: options.cancelButtonText,
        showCancelButton: true,
        beforeClose: expect.any(Function)
      })
    })

    it('should handle string input', () => {
      confirm('test message')
      expect(Vue.prototype.$dialog.confirm).toHaveBeenCalledWith({
        title: '提示',
        message: 'test message',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true
      })
    })

    it('should handle title and message separately', () => {
      confirm('test message', 'test title')
      expect(Vue.prototype.$dialog.confirm).toHaveBeenCalledWith({
        title: 'test title',
        message: 'test message',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true
      })
    })

    it('should call callback with correct action', () => {
      const callback = jest.fn()
      confirm({
        message: 'test message',
        title: 'test title',
        callback
      })
      
      // 获取 beforeClose 函数
      const beforeClose = Vue.prototype.$dialog.confirm.mock.calls[0][0].beforeClose
      
      // 模拟确认
      beforeClose('confirm')
      expect(callback).toHaveBeenCalledWith('confirm')
      
      // 模拟取消
      beforeClose('cancel')
      expect(callback).toHaveBeenCalledWith('cancel')
    })
  })
}) 