import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../pages/index';
import classs from '../pages/classs';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/classs',
      name: 'classs',
      component: classs
    }
  ]
});
