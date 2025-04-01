import Vue from 'vue'
import vantElementNotice from '@/lib'
import { message } from '@/lib'

describe('vantElementNotice Framework Detection', () => {
  let VueInstance

  beforeEach(() => {
    VueInstance = Vue.extend()
  })

  it('should detect Element UI when present', () => {
    // 模拟 Element UI 存在
    VueInstance.prototype.$message = function() {}
    
    VueInstance.use(vantElementNotice)
    const instance = new VueInstance()
    
    expect(instance.$vantElementConfig).toBeDefined()
    expect(instance.$vantElementConfig.framework).toBe('element')
  })

  it('should default to Vant when no UI framework is detected', () => {
    // 确保没有 Element UI
    VueInstance.prototype.$message = undefined
    
    VueInstance.use(vantElementNotice)
    const instance = new VueInstance()
    
    expect(instance.$vantElementConfig).toBeDefined()
    expect(instance.$vantElementConfig.framework).toBe('vant')
  })

  it('should respect explicit framework option over detection', () => {
    // 即使有 Element UI，也应该使用明确指定的框架
    VueInstance.prototype.$message = function() {}
    
    VueInstance.use(vantElementNotice, { framework: 'vant' })
    const instance = new VueInstance()
    
    expect(instance.$vantElementConfig).toBeDefined()
    expect(instance.$vantElementConfig.framework).toBe('vant')
  })
}) 