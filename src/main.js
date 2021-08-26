
import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import config from '@/config'
import axios from 'axios'
import qs from 'qs'
import jsonp from 'jsonp'
import filter from '@/filter'
import '@/assets/css/reset.css'

const fileUrl = process.env.NODE_ENV === 'development' ? config.fileUrl.dev : config.fileUrl.pro
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

// 使用插件
Vue.use(config)

// 在应用启动时，关闭生产模式下给出的提示
Vue.config.productionTip = false

Vue.prototype.axios = axios
Vue.prototype.qs = qs
Vue.prototype.jsonp = jsonp
Vue.prototype.bus = new Vue({})

// 全局注册文件模板基础路径
Vue.prototype.$fileUrl = fileUrl

// 全局注册后端基础路径
Vue.prototype.$baseUrl = baseUrl

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  filter,
  render: h => h(App)
})

