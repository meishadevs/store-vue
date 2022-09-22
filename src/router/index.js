import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './routers';
import { getToken } from '@/libs/util';
import config from '@/config';
const { homeName } = config;

// 登录页路由
const LOGIN_PAGE_NAME = 'login';

// 不要登录的路由
const NO_LOGIN_ROUTER = [];

Vue.use(Router);

const router = new Router({
  routes,
  mode: 'history'
});

router.$addRoutes = (params) => {
  router.matcher = new Router({ routes, mode: 'history' }).matcher;
  router.addRoutes(params);
};

router.beforeEach((to, from, next) => {
  // 获得当前用户的 token
  const token = getToken();

  // 如果当前用户有 token
  if (token) {
    next({ ...to, replace: true });
  }

  // 如果未登录且要跳转的页面不是登录页
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 如果要跳转的页面不需要登录，并且要跳转的页面是首页
    if (NO_LOGIN_ROUTER.includes(to.name) || to.path.includes('home')) {
      console.log('to.path:', to.path);
      // 跳转
      next();
    } else {
      // 跳转到登录页
      next({
        name: LOGIN_PAGE_NAME
      });
    }

  // 如果未登陆且要跳转的页面是登录页
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 跳转
    next();
  // 已登录且要跳转的页面是登录页
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 跳转到 home 页
    next({
      name: homeName
    });
  } else {
    next();
  }
});

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

router.afterEach(to => {
  window.scrollTo(0, 0);
});

export default router;
