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
    component: r => require.ensure([], () => r(require('@/views/home')), 'home')
  },
  {
    name: 'cate',
    path: '/cate',
    component: r => require.ensure([], () => r(require('@/views/cate')), 'cate')
  },
  {
    name: 'choose',
    path: '/choose',
    component: r => require.ensure([], () => r(require('@/views/choose')), 'choose')
  },
  {
    name: 'proinfo',
    path: '/proinfo',
    component: r => require.ensure([], () => r(require('@/views/proinfo')), 'proinfo')
  },
  {
    name: 'cart',
    path: '/cart',
    component: r => require.ensure([], () => r(require('@/views/cart')), 'cart')
  },
  {
    name: 'register',
    path: '/register',
    component: r => require.ensure([], () => r(require('@/views/register')), 'register')
  },
  {
    name: 'login',
    path: '/login',
    component: r => require.ensure([], () => r(require('@/views/login')), 'login')
  },
  {
    path: '/401',
    name: 'error_401',
    component: () => import('@/views/error-page/401')
  },
  {
    path: '/500',
    name: 'error_500',
    component: () => import('@/views/error-page/500')
  },
  {
    path: '/build',
    name: 'build',
    component: () => import('@/views/error-page/build')
  },
  {
    path: '*',
    name: 'error_404',
    component: () => import('@/views/error-page/404.vue')
  }
];
