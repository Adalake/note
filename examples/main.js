import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import ColorPicker from './../packages/index'
// 注册组件库
Vue.use(ColorPicker)

import Loading from './components/loading/index'
Vue.use(Loading)

Vue.config.productionTip = false // 阻止显示生产模式的消息

new Vue({
  render: h => h(App),
}).$mount('#app')
