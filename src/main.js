
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

//在应用启动时，关闭生产模式下给出的提示
Vue.config.productionTip = false;

//创建一个Vue实例
let vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
