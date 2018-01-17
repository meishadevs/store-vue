# 电商网简介
> 整个网站使用 vue、vuex、vue-router、axios、ESLint、ES6 等搭建，整个网站由网站首页、商品分类页、注册页、登录页、商品信息展示页、商品筛选页、购物车及结算页组成，整个网站包含了将网页添加到收藏夹、关键字搜索、图片轮播、商品分类菜单切换、商品筛选、商品简介、商品咨询、省市区三级联动、放大镜、注册、登录等功能。

## 在线访问
**[http://meishadevs.com/dswz/index.html#/](http://meishadevs.com/dswz/index.html#/)**  
**注意：** 有些功能需要自己配置服务器端才能访问，配置方式在此文档下面做了相关的介绍

## 用到的技术
- **前端：** vue + vuex + vue-router + axios + ESLint + ES6
- **构建工具：** Webpack
- **服务器端：** PHP
- **数据库：** MySQL

## 运行项目

```
# 将项目克隆到本地
git clone https://github.com/meishadevs/dswz.git

# 进入dswz目录下
cd dswz

# 安装依赖
npm install

# 运行项目
npm run dev

# 编译并压缩代码用于发布，将编译后生成的dist文件夹放在服务器下即可访问
npm run build
```

## 项目的目录结构

```
├── build                          // 项目构建相关的代码       
├── config                         // 项目开发环境相关配置                   
├── src                            // 源码目录   
│   ├── components                 // Vue公共组件
│   │   ├── AdvisoryList.vue       // 商品咨询列表组件
│   │   ├── Banner.vue             // 轮播图组件
│   │   ├── CartHead.vue           // 购物车页上的头部组件
│   │   ├── CateMenu.vue           // 分类菜单组件
│   │   ├── CateShowProduct.vue    // 商品分类页的商品展示组件
│   │   ├── ChangePage.vue         // 翻页组件
│   │   ├── ChangeProductNum.vue   // 改变商品数量组件
│   │   ├── CollSite.vue           // 收藏网页组件
│   │   ├── DeliveryInfo.vue       // 送货信息组件
│   │   ├── GoTop.vue              // 回到顶部按钮组件
│   │   ├── IndexShowProduct.vue   // 网站首页的商品展示组件
│   │   ├── InvoiceInfo.vue        // 发票信息组件
│   │   ├── LoginHead.vue          // 登录页的头部组件
│   │   ├── NavBar.vue             // 导航栏组件
│   │   ├── OrderSett.vue          // 订单结算组件
│   │   ├── PayMethod.vue          // 支付方式组件
│   │   ├── ProductCate.vue        // 商品分类组件
│   │   ├── ProductCateNav.vue     // 商品分类导航组件
│   │   ├── ProductComment.vue     // 商品评价组件
│   │   ├── ProductFilter.vue      // 商品筛选组件
│   │   ├── ProductImage.vue       // 商品图片组件
│   │   ├── ProductIntro.vue       // 商品介绍组件
│   │   ├── ProductPosition.vue    // 商品位置组件
│   │   ├── ProinfoNavBar.vue      // 商品信息展示页的导航栏组件
│   │   ├── ProinfoProductList.vue // 商品信息展示页的商品列表组件
│   │   ├── ReceiveInfo.vue        // 收货信息组件
│   │   ├── RegisterHead.vue       // 注册页的头部组件
│   │   ├── SelectAddress.vue      // 地址选择组件
│   │   ├── SelectColor.vue        // 颜色选择组件
│   │   ├── SelectProductList.vue  // 商品选择页的商品列表组件
│   │   ├── SelectShowProduct.vue  // 商品选择页的商品展示组件
│   │   ├── SelectStyle.vue        // 商品规格选择组件
│   │   ├── ShowProinfo.vue        // 商品信息展示组件
│   │   ├── SiteFoot.vue           // 脚部组件
│   │   ├── SiteHead.vue           // 头部组件
│   │   ├── TopBar.vue             // 顶部通栏组件
│   │ 	└── UserPosition.vue       // 用户位置组件  
│   ├── css                        // 网站的CSS样式
│   │   └── reset.css              // 重置标签的CSS样式
│   ├── filter                     // 过滤器
│   │   └── index.js               // 创建的一些全局过滤器
│   ├── js                         // js脚本
│   │   ├── config.js              // 网站与服务器端交互的Url
│   │   └── Util.js                // 一些通用代码
│   ├── pages                      // 网站的页面
│   │   ├── cart.vue               // 购物车和商品结算页
│   │   ├── cate.vue               // 商品分类页
│   │   ├── index.vue              // 网站首页
│   │   ├── login.vue              // 登录页
│   │   ├── proinfo.vue            // 商品信息展示页
│   │   ├── register.vue           // 注册页
│   │ 	└── select.vue             // 商品选择页
│   ├── router                     // vue-router路由
│   │ 	└── index.js               // 项目的路由
│   ├── store                      // vuex状态管理器
│   │   ├── action.js              // 加载各种action模块
│   │   ├── index.vue              // 记录网站的状态
│   │ 	└── mutations.js           // 加载各种mutations模块
│   ├── App.vue                    // 页面入口文件
│   └── index.js                   // 程序入口文件
├── static                         // 存放一些静态文件
│    ├── fonts	                   // 存放网站的字体
│    ├── images                    // 存放网站的图片
│    └── .gitkee                   // 只是一个占位符，一个假文件
├── .babelrc                       // babel编译的配置
├── .editorconfig                  // 编辑器的配置
├── .eslintignore                  // 设置忽略做语法检查的文件
├── .eslintrc.js                   // 设置ESLint语法检查的规则
├── .gitignore                     // 提交到git上时，忽略提交的文件和文件夹
├── .postcssrc.js                  // 自动加载配置为PostCSS
├── index.html                     // 入口HTML文件
└── package.json                   // 项目配置文件
```

## 配置网站的服务器
网站服务器端配置请移步到server分支：[https://github.com/meishadevs/dswz/tree/server](https://github.com/meishadevs/dswz/tree/server)

## 特别说明
当你的服务器地址和我设置的服务器端地址不同时，可以修改dswz\src\js下的config.js文件

```
/**
 * 一些全局参数
 */

export default {
  install(Vue, option) {

    //服务器端的url
    Vue.prototype.serverUrl = 'http://localhost/dswzServer/';

    //获得省、市、区数据的url
    Vue.prototype.addressUrl = Vue.prototype.serverUrl + 'place.php';

    //获得商品数量的url
    Vue.prototype.productNumUrl = Vue.prototype.serverUrl + 'product.php?flag=1';

    //获得商品信息的url
    Vue.prototype.productInfoUrl = Vue.prototype.serverUrl + 'product.php?flag=2&amount=';

    //获得商品咨询信息的数量的url
    Vue.prototype.advisoryNumUrl = Vue.prototype.serverUrl + 'advisory.php?flag=1';

    //获得商品咨询信息的url
    Vue.prototype.advisoryInfoUrl = Vue.prototype.serverUrl + 'advisory.php?flag=2&amount=';

    //注册账号的url
    Vue.prototype.registerUrl = Vue.prototype.serverUrl + 'register.php';

    //登录账号的url
    Vue.prototype.loginUrl = Vue.prototype.serverUrl + 'login.php';

    //淘宝搜索的url
    Vue.prototype.taobaoUrl = 'https://suggest.taobao.com/sug?q=';

    //百度搜索的url
    Vue.prototype.baiduUrl = 'http://www.baidu.com/s';
  }
};
```
