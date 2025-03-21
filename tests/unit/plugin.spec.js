import Vue from 'vue'
import vantElementNotice from '@/lib'
import { message, alert, confirm } from '@/lib'

describe('vantElementNotice Plugin', () => {
  // 在每个测试前重置 Vue
  let VueInstance
  
  beforeEach(() => {
    // 清理 Vue 的原型，防止测试间相互影响
    VueInstance = Vue.extend()
  })
  
  it('should export plugin correctly', () => {
    expect(vantElementNotice).toBeDefined()
    expect(vantElementNotice.install).toBeDefined()
    expect(typeof vantElementNotice.install).toBe('function')
  })

  it('should export individual utilities', () => {
    expect(message).toBeDefined()
    expect(alert).toBeDefined()
    expect(confirm).toBeDefined()
  })

  it('should install on Vue', () => {
    VueInstance.use(vantElementNotice)
    const instance = new VueInstance()
    expect(instance.$utils).toBeDefined()
    expect(instance.$utils.message).toBeDefined()
    expect(instance.$utils.alert).toBeDefined()
    expect(instance.$utils.confirm).toBeDefined()
  })

  it('should honor framework option', () => {
    VueInstance.use(vantElementNotice, { framework: 'element' })
    const instance = new VueInstance()
    expect(instance.$vantElementConfig).toBeDefined()
    expect(instance.$vantElementConfig.framework).toBe('element')
  })
}) 