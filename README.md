# 简易版电商网站
> 使用vue2.0、vuex、vue-router2.0、axios等搭建的一个简易版电商网站，整个网站由网站首页、商品分类页、注册页、登录页、商品信息展示页、商品筛选页、购物车及结算页组成，整个网站包含了将网页添加到收藏夹、关键字搜索、图片轮播、商品分类菜单切换、商品筛选、商品简介、商品咨询、省市区三级联动、放大镜、注册、登录等功能。

## 项目的一些链接

**网站地址：[http://meishadevs.com/dswz/index.html#/](http://meishadevs.com/dswz/index.html#/)**
**网站的视频演示地址：[http://oqdvwkahb.bkt.clouddn.com/video.mp4](http://oqdvwkahb.bkt.clouddn.com/video.mp4)**

## 用到的技术
- **前端：** vue + vuex + vue-router + axios + ES6/7
- **构建工具：** Webpack
- **服务器端：** PHP
- **数据库：** MySQL

## 项目的目录结构

```
├── build                      // 项目构建相关的代码       
├── config                      // 项目开发环境相关配置                   
├── src       			                      // 源码目录
│   ├── assets                 // 项目的资源目录    
│   ├── components                    // Vue公共组件
│   │   ├── advisoryList.vue       // 商品咨询列表组件
│   │   ├── banner.vue             // 轮播图组件
│   │   ├── cartHeader.vue         // 购物车页上的头部组件
│   │   ├── cateMenu.vue           // 分类菜单组件
│   │   ├── cateShowProduct.vue    // 商品分类页的商品展示组件
│   │   ├── changeProductNum.vue   // 改变商品数量组件
│   │   ├── collSite.vue           // 收藏网页组件
│   │   ├── deliveryInfo.vue       // 送货信息组件
│   │   ├── foot.vue               // 脚部组件
│   │   ├── goTop.vue              // 回到顶部按钮组件
│   │   ├── indexShowProduct.vue   // 网站首页的商品展示组件
│   │   ├── invoiceInfo.vue        // 发票信息组件
│   │   ├── loginHeader.vue        // 登录页的头部组件
│   │   ├── myHead.vue             // 头部组件
│   │   ├── navBar.vue             // 导航栏组件
│   │   ├── orderSett.vue          // 订单结算组件
│   │   ├── payMethod.vue          // 支付方式组件
│   │   ├── productCate.vue        // 商品分类组件
│   │   ├── productCateNav.vue     // 商品分类导航组件
│   │   ├── productComment.vue     // 商品评价组件
│   │   ├── productFilter.vue      // 商品筛选组件
│   │   ├── productImage.vue       // 商品图片组件
│   │   ├── productIntro.vue       // 商品介绍组件
│   │   ├── productPosition.vue    // 商品位置组件
│   │   ├── proinfoNavBar.vue      // 商品信息展示页的导航栏组件
│   │   ├── proinfoProductList.vue // 商品信息展示页的商品列表组件
│   │   ├── ratePage.vue           // 翻页组件
│   │   ├── receiveInfo.vue        // 收货信息组件
│   │   ├── registerHeader.vue     // 注册页的头部组件
│   │   ├── selectAddress.vue      // 地址选择组件
│   │   ├── selectColor.vue        // 颜色选择组件
│   │   ├── selectProductList.vue  // 商品选择页的商品列表组件
│   │   ├── selectShowProduct.vue  // 商品选择页的商品展示组件
│   │   ├── selectStyle.vue        // 商品规格选择组件
│   │   ├── showProinfo.vue        // 商品信息展示组件
│   │   ├── topBar.vue             // 顶部通栏组件
│    │ 	  └── userPosition.vue     // 用户位置组件  
│   ├──  css                         // 网站的CSS样式
│   │   └── reset.css         // 重置标签的CSS样式
│   ├──  filter                      // 过滤器
│   │   └── index.js           // 创建的一些全局过滤器
│   ├──  js                          // js脚本
│   │   └── config.js           // 网站与服务器端交互的Url
│   ├── pages                       // 网站的页面
│   │   ├── cart.vue             // 购物车和商品结算页
│   │   ├── cate.vue             // 商品分类页
│   │   ├── index.vue            // 网站首页
│   │   ├── login.vue            // 登录页
│   │   ├── proinfo.vue          // 商品信息展示页
│   │   ├── register.vue         // 注册页
│   │   ├── select.vue           // 商品选择页
│   ├── router               // vue-router路由
│    │ 	  └── index.js         // 项目的路由
│   ├── store                       // vuex状态管理器
│   │   ├── action.js            // 加载各种action模块
│   │   ├── index.vue            // 记录网站的状态
│    │ 	  └── mutations.js      // 加载各种mutations模块
│    ├── App.vue                     // 页面入口文件
│     └── index.js                    // 程序入口文件
├── static                             // 存放一些静态文件
│    ├── fonts	                      // 存放网站的字体
│    ├── images                       // 存放网站的图片
│ 	  └── .gitkeep		                  // 只是一个占位符，一个假文件
├── .babelrc			                      // babel编译的一些配置
├── .editorconfig    		              // 编辑器的配置
├── .gitignore                         // 提交到git上时，忽略提交的文件和文件夹
├── .postcssrc.js                      // 自动加载配置为PostCSS
├── index.html                         // 入口HTML文件
└── package.json                // 项目配置文件
```



