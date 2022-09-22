import Vue from 'vue';
import Router from 'vue-router';
import { routes, page404 } from './routers';
import store from '@/store';
import { setToken, getToken } from '@/libs/util';
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
  const token = getToken();

  console.log('token:', token);

  if (token) {
    if (!store.state.router.hasGetRules) {
      store.dispatch('authorization').then(rules => {
        store.dispatch('concatRouters', rules).then(routers => {
          router.$addRoutes(routers.concat(page404));
          next({ ...to, replace: true });
        });
      });
    }
  }

  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    if (NO_LOGIN_ROUTER.indexOf(to.name) !== -1) {
      next();
    } else {
      next({
        name: LOGIN_PAGE_NAME // 跳转到登录页
      });
    }
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next(); // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    });
  } else {
    if (store.state.user.hasGetInfo) {
      next();
    } else {
      store.dispatch('getUserInfo').then(user => {
        next();
      }).catch(() => {
        setToken('');
        next({
          name: 'login'
        });
      });
    }
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
