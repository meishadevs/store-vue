// 默认加载的路由
export const routes = [
  {
    // 跳转到网站首页的路由
    name: 'home',
    path: '/home',
    component: r => require.ensure([], () => r(require('@/views/home')), 'home')
  },
  {
    // 跳转到商品分类页的路由
    name: 'cate',
    path: '/cate',
    component: r => require.ensure([], () => r(require('@/views/cate')), 'cate')
  },
  {
    // 跳转到商品选择页的路由
    name: 'choose',
    path: '/choose',
    component: r => require.ensure([], () => r(require('@/views/choose')), 'choose')
  },
  {
    // 跳转到商品信息展示页的路由
    name: 'proinfo',
    path: '/proinfo',
    component: r => require.ensure([], () => r(require('@/views/proinfo')), 'proinfo')
  },
  {
    // 跳转到购物车页的路由
    name: 'cart',
    path: '/cart',
    component: r => require.ensure([], () => r(require('@/views/cart')), 'cart')
  },
  {
    // 跳转到注册页的路由
    name: 'register',
    path: '/register',
    component: r => require.ensure([], () => r(require('@/views/register')), 'register')
  },
  {
    // 跳转到登录页的路由
    name: 'login',
    path: '/login',
    component: r => require.ensure([], () => r(require('@/views/login')), 'login')
  },
  {
    // 当用户点击加入购物车按钮时判断用户是否登录了
    // 当用户没有登录时通过这个路由跳转到登录页，在登录页登录成功后直接跳转到购物车页
    path: '/login/:isCart',
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
    meta: {
      hideInMenu: true
    },
    component: () => import('@/views/error-page/404.vue')
  }
];
