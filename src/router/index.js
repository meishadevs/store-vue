import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../pages/index';
import cate from '../pages/cate';
import select from '../pages/select';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/cate',
      name: 'cate',
      component: cate
    },
    {
      path: '/select',
      name: 'select',
      component: select
    }
  ]
});
