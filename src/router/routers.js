/**
 * 路由中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个
 * 调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

// 需要权限控制动态加载的路由
export const routerMap = []

// 默认加载的路由（不需要权限控制）
export const routes = [
  {
    // 跳转到网站首页的路由
    name: '',
    path: '/',
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
  }
]

// 错误处理页面
export const page404 = [{
  path: '/401',
  name: 'error_401',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/views/error-page/401')
},
{
  path: '/500',
  name: 'error_500',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/views/error-page/500')
},
{
  path: '/build',
  name: 'build',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/views/error-page/build')
},
{
  path: '*',
  name: 'error_404',
  meta: {
    hideInMenu: true
  },
  component: () => import('@/views/error-page/404.vue')
}]
