import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      //跳转到网站首页的路由
      path: "/",
      component: r => require.ensure([], () => r(require("../pages/home")), "home")
    },
    {
      //跳转到商品分类页的路由
      path: "/cate",
      component: r => require.ensure([], () => r(require("../pages/cate")), "cate")
    },
    {
      //跳转到商品选择页的路由
      path: "/choose",
      component: r => require.ensure([], () => r(require("../pages/choose")), "choose")
    },
    {
      //跳转到商品信息展示页的路由
      path: "/proinfo",
      component: r => require.ensure([], () => r(require("../pages/proinfo")), "proinfo")
    },
    {
      //跳转到购物车页的路由
      path: "/cart",
      component: r => require.ensure([], () => r(require("../pages/cart")), "cart")
    },
    {
      //跳转到注册页的路由
      path: "/register",
      component: r => require.ensure([], () => r(require("../pages/register")), "register")
    },
    {
      //跳转到登录页的路由
      path: "/login",
      component: r => require.ensure([], () => r(require("../pages/login")), "login")
    },
    {
      //当用户点击加入购物车按钮时判断用户是否登录了
      //当用户没有登录时通过这个路由跳转到登录页，在登录页登录成功后直接跳转到购物车页
      path: "/login/:isCart",
      component: r => require.ensure([], () => r(require("../pages/login")), "login")
    }
  ]
});
