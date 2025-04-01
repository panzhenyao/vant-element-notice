import Vue from 'vue'
import { message } from '@/lib'

// 模拟 Vue 的 prototype
Vue.prototype.$toast = jest.fn()
Vue.prototype.$toast.success = jest.fn()
Vue.prototype.$toast.fail = jest.fn()
Vue.prototype.$message = jest.fn()
Vue.prototype.$message.success = jest.fn()
Vue.prototype.$message.warning = jest.fn()
Vue.prototype.$message.error = jest.fn()
Vue.prototype.$message.info = jest.fn()

describe('Message Module', () => {
  beforeEach(() => {
    // 重置所有模拟
    jest.clearAllMocks()
  })

  it('should provide message methods', () => {
    expect(typeof message).toBe('function')
    expect(typeof message.success).toBe('function')
    expect(typeof message.warning).toBe('function')
    expect(typeof message.error).toBe('function')
    expect(typeof message.info).toBe('function')
  })

  describe('Element UI Message', () => {
    beforeEach(() => {
      Vue.prototype.$message = jest.fn()
      Vue.prototype.$message.success = jest.fn()
      Vue.prototype.$message.warning = jest.fn()
      Vue.prototype.$message.error = jest.fn()
      Vue.prototype.$message.info = jest.fn()
      Vue.prototype.$toast = undefined
    })

    it('should call Element UI message with correct options', () => {
      const options = {
        message: 'test message',
        type: 'success',
        duration: 3000,
        showClose: true,
        center: true,
        onClose: jest.fn()
      }
      message(options)
      expect(Vue.prototype.$message).toHaveBeenCalledWith(options)
    })

    it('should handle string input', () => {
      message('test message')
      expect(Vue.prototype.$message).toHaveBeenCalledWith({ message: 'test message' })
    })

    it('should call success method', () => {
      message.success('success message')
      expect(Vue.prototype.$message).toHaveBeenCalledWith({
        message: 'success message',
        type: 'success'
      })
    })

    it('should call warning method', () => {
      message.warning('warning message')
      expect(Vue.prototype.$message).toHaveBeenCalledWith({
        message: 'warning message',
        type: 'warning'
      })
    })

    it('should call error method', () => {
      message.error('error message')
      expect(Vue.prototype.$message).toHaveBeenCalledWith({
        message: 'error message',
        type: 'error'
      })
    })

    it('should call info method', () => {
      message.info('info message')
      expect(Vue.prototype.$message).toHaveBeenCalledWith({
        message: 'info message',
        type: 'info'
      })
    })
  })

  describe('Vant Toast', () => {
    beforeEach(() => {
      Vue.prototype.$message = undefined
      Vue.prototype.$toast = jest.fn()
      Vue.prototype.$toast.success = jest.fn()
      Vue.prototype.$toast.fail = jest.fn()
    })

    it('should call Vant toast with correct options', () => {
      const options = {
        message: 'test message',
        type: 'success',
        duration: 3000,
        onClose: jest.fn()
      }
      message(options)
      expect(Vue.prototype.$toast.success).toHaveBeenCalledWith('test message')
    })

    it('should handle string input', () => {
      message('test message')
      expect(Vue.prototype.$toast).toHaveBeenCalledWith({ message: 'test message' })
    })

    it('should call success method', () => {
      message.success('success message')
      expect(Vue.prototype.$toast.success).toHaveBeenCalledWith('success message')
    })

    it('should call fail method for error', () => {
      message.error('error message')
      expect(Vue.prototype.$toast.fail).toHaveBeenCalledWith('error message')
    })

    it('should handle warning as text', () => {
      message.warning('warning message')
      expect(Vue.prototype.$toast).toHaveBeenCalledWith({
        message: 'warning message',
        type: 'text'
      })
    })

    it('should handle info as text', () => {
      message.info('info message')
      expect(Vue.prototype.$toast).toHaveBeenCalledWith({
        message: 'info message',
        type: 'text'
      })
    })
  })
}) 