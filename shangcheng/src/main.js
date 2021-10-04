import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueWechatTitle from 'vue-wechat-title'
const echarts = require('echarts') //引入echarts
import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,Axios)
Vue.config.productionTip = false
Axios.defaults.withCredentials=true;

Vue.prototype.$echarts = echarts //引入组件
Vue.use(VueWechatTitle)
Vue.config.productionTip = false
Vue.use(ElementUI)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

