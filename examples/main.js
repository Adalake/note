import Vue from 'vue'
import App from './App.vue'

import Loading from './components/loading/index'
Vue.use(Loading)
 
//按需引用 样式组件库
// https://www.npmjs.com/package/captive-admin-ui
import AdminUI from 'captive-admin-ui';
import 'captive-admin-ui/lib/css/index.css'; // 导入所需的样式文件
const { Button, Fullscreen } = AdminUI;
console.log(Button);
Vue.component(Button.name, Button);
Vue.component(Fullscreen.name, Fullscreen);

// 导入组件库
import colorPicker from './../packages/index'
// import jrbutton from './../packages/index'
// 注册组件库
Vue.use(colorPicker)
// Vue.use(jrbutton)

Vue.config.productionTip = false // 阻止显示生产模式的消息

new Vue({
  render: h => h(App),
}).$mount('#app')
