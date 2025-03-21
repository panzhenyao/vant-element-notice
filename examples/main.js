import Vue from 'vue'
import App from './App.vue'

// 引入 Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 或者使用 Vant （取消下面的注释来切换框架）
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

// 引入统一对话框 API
// 这里假设 NPM 包已安装并且引入的是 NPM 包中的文件
// 在实际开发时，可以使用：
// import vantElementNotice from 'vant-element-notice'

// 为了示例，这里直接从本地路径引入
import vantElementNotice from '../src/lib'
Vue.use(vantElementNotice, {
  // 可以显式指定使用哪个UI框架
  // framework: 'element' // 'element' 或 'vant'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app') 