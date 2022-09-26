
import qs from 'qs';
import Vue from 'vue';
import jsonp from 'jsonp';
import App from './App';
import router from '@/router';
import store from '@/store';
import config from '@/config';
import filter from '@/filter';
import '@/assets/css/reset.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 使用插件
Vue.use(config);

Vue.use(ElementUI);

// 获得 api 请求的基础地址
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro;

// 在应用启动时，关闭生产模式下给出的提示
Vue.config.productionTip = false;

Vue.prototype.qs = qs;
Vue.prototype.$jsonp = jsonp;
Vue.prototype.bus = new Vue({});

// 全局注册后端基础路径
Vue.prototype.$baseUrl = baseUrl;

// 淘宝网商品搜索 url
Vue.prototype.$taobaoUrl = config.taobaoUrl;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  filter,
  render: h => h(App)
});

