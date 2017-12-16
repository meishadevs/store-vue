
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import config from './js/config';
import axios from 'axios';
import qs from 'qs';
import jsonp from 'jsonp';
import filter from './filter';

//使用插件
Vue.use(config);

//在应用启动时，关闭生产模式下给出的提示
Vue.config.productionTip = false;

Vue.prototype.axios = axios;
Vue.prototype.qs = qs;
Vue.prototype.jsonp = jsonp;
Vue.prototype.bus = new Vue({});

//创建一个Vue实例
let vm = new Vue({
  el: '#app',
  router,
  store,
  filter,
  template: '<App/>',
  components: { App }
});
