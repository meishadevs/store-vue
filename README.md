# 电商网简介
> 整个网站使用 vue、vuex、vue-router、axios、ESLint、ES6 等搭建，整个网站由网站首页、商品分类页、注册页、登录页、商品信息展示页、商品筛选页、购物车及结算页组成，整个网站包含了将网页添加到收藏夹、关键字搜索、图片轮播、商品分类菜单切换、商品筛选、商品简介、商品咨询、省市区三级联动、放大镜、注册、登录等功能。

## 在线访问
**[http://meishadevs.github.io/store-vue/index.html#/](http://meishadevs.github.io/store-vue/index.html#/)**  

## 技术栈
- **前端：** vue + vuex + vue-router + axios + element-ui + ESLint + ES6
- **后端：** Node.js + Express + MongoDB + Mongoose + ES6
- **数据库：** MongoDB

## 运行项目

```
# 将项目克隆到本地
git clone https://github.com/meishadevs/store-vue.git

# 进入 store-vue 目录下
cd store-vue

# 安装依赖
npm install

# 运行项目
npm run dev

# 编译并压缩代码用于发布，将编译后生成的dist文件夹放在服务器下即可访问
npm run build
```

## 项目的目录结构

```  
├── public                         // 不需要打包的文件               
├── src                            // 源码目录
|   |── api                        // api 接口文件
│   │   ├── advisory.js            // 咨询相关的 api 接口
│   │   ├── product.js             // 产品相关的 api 接口
│   │   ├── region.js              // 地址相关的 api 接口
│   │   ├── token.js               // token 相关的 api 接口
│   │   ├── user.js                // 用户相关的 api 接口
|   |── assets                     // 资源文件
│   │   ├── less                   // Less 文件
│   │   ├── font                   // 字体
│   │   ├── images                 // 图片
│   ├── components                 // 公共组件
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
|   |── config
|   │ 	└── index.js               // 配置文件
|   |── filter                  
|   │ 	└── index.js              // 过滤器文件
|   |── libs      
│   │   ├── api.request.js         // api 请求
│   │   ├── axios.js               // axios 配置              
|   │ 	└── util.js                // 常用功能
│   ├── router                    
│   │   ├── index.js
│   │ 	└── routers.js             // 项目路由
│   ├── store                  
│   │   ├── module   
│   │   │   └── user.js            // 用户状态     
│   │   ├── getters.js              
│   │ 	└── index.js               // 状态管理
│   ├── views
│   │   ├── error-page             // 错误页
│   │   │   ├── 401.vue            // 401 页
│   │   │   ├── 404.vue            // 404 页
│   │   │   ├── 500.vue            // 500 页
│   │   │   ├── back-btn-group.vue
│   │   │   ├── error-content.vue
│   │   │ 	└── error.less         // 错误页的样式
│   │   ├── cart.vue               // 购物车和商品结算页
│   │   ├── cate.vue               // 商品分类页
│   │   ├── index.vue              // 网站首页
│   │   ├── login.vue              // 登录页
│   │   ├── proinfo.vue            // 商品信息展示页
│   │   ├── register.vue           // 注册页
│   │ 	└── select.vue             // 商品选择页
│   ├── App.vue
│   ├── main.js
├── tests                          // 自动化测试
├── .babelrc                       // babel编译的配置
├── .editorconfig                  // 编辑器的配置
├── .eslintignore                  // 设置忽略做语法检查的文件
├── .eslintrc.js                   // 设置ESLint语法检查的规则
├── .gitignore                     // 提交到git上时，忽略提交的文件和文件夹
├── .postcssrc.js                  // 自动加载配置为PostCSS
├── package-lock.json        
├── package.json                   // 项目配置文件
└── vue.config.js                  // vue 配置文件
```

## 配置网站的服务端
网站服务端配置请移步到电商网服务端项目：[https://github.com/meishadevs/store-node](https://github.com/meishadevs/store-node)

## 特别说明
当你的服务端地址和我设置的服务端地址不同时，可以修改 \src\config 下的 index.js 文件

```
export default {
  // token 在 Cookie 中存储的天数，默认 1 天
  cookieExpires: 1,

  // api 请求基础路径
  baseUrl: {
    dev: 'http://localhost:8002',
    pro: 'http://localhost:8002'
  },

  // 淘宝网商品搜索 url
  taobaoUrl: 'https://suggest.taobao.com/sug?q=',

  // 百度搜索 url
  baiduUrl: 'http://www.baidu.com/s',

  // 默认打开的首页的路由 name 值，默认为 home
  homeName: 'home'
};
```
