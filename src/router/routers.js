// 默认加载的路由
export const routes = [
  {
    name: '',
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    meta: {
      title: '首页'
    },
    component: r => require.ensure([], () => r(require('@/views/home')), 'home')
  },
  {
    name: 'cate',
    path: '/cate',
    meta: {
      title: '商品分类'
    },
    component: r => require.ensure([], () => r(require('@/views/cate')), 'cate')
  },
  {
    name: 'choose',
    path: '/choose',
    meta: {
      title: '商品选择'
    },
    component: r => require.ensure([], () => r(require('@/views/choose')), 'choose')
  },
  {
    name: 'proinfo',
    path: '/proinfo',
    meta: {
      title: '商品信息'
    },
    component: r => require.ensure([], () => r(require('@/views/proinfo')), 'proinfo')
  },
  {
    name: 'cart',
    path: '/cart',
    meta: {
      title: '购物车'
    },
    component: r => require.ensure([], () => r(require('@/views/cart')), 'cart')
  },
  {
    name: 'register',
    path: '/register',
    meta: {
      title: '注册'
    },
    component: r => require.ensure([], () => r(require('@/views/register')), 'register')
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: r => require.ensure([], () => r(require('@/views/login')), 'login')
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      title: '401'
    },
    component: () => import('@/views/error-page/401')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      title: '500'
    },
    component: () => import('@/views/error-page/500')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      title: '404'
    },
    component: () => import('@/views/error-page/404.vue')
  }
];
