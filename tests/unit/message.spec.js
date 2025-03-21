import Vue from 'vue'
import { message } from '@/lib'

// 模拟 Vue 的 prototype 以避免错误
Vue.prototype.$toast = jest.fn()
Vue.prototype.$toast.loading = jest.fn()
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

  // 对于实际行为的测试，我们需要更复杂的设置
  // 为了简化，我们只测试公共API的存在
}) 