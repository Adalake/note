import Vue from 'vue'
import App from './App.vue'



import Loading from './components/loading/index'
Vue.use(Loading)

// 导入组件库
import colorPicker from './../packages/index'
import jrbutton from './../packages/index'
// 注册组件库
Vue.use(colorPicker)
Vue.use(jrbutton)

Vue.config.productionTip = false // 阻止显示生产模式的消息

new Vue({
  render: h => h(App),
}).$mount('#app')
