import Vue from 'vue'
import App from './App.vue'

// ==============================================================
// 在实际项目中，通常只会选择一个 UI 框架，以下代码演示两种框架的使用方式
// 实际应用时，根据项目需求选择其中一个进行引入
// ==============================================================

// ----- 选项1: 引入 Element UI -----
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// ----- 选项2: 引入 Vant -----
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// ----- 也可以按需引入 -----
import './plugins/element'  // Element UI 按需引入
import './plugins/vant'     // Vant 按需引入

// 引入统一弹框工具
// vantElementNotice 会自动检测使用的是哪个框架，并使用相应的实现
import vantElementNotice from './utils/vantElementNotice'
Vue.use(vantElementNotice, { framework: 'vant' })

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
