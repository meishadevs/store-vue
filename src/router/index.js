import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../pages/index';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
});
