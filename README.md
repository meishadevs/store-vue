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

  ├── build                    // 项目构建相关的代码       
	├── config                    // 项目开发环境相关配置                   
	├── src       			                    // 源码目录
	│   ├── assets               // 项目的资源目录                
	│   ├── js                          // 一些常用的js脚本
	│   │   └── config.js        // 记录项目中用到的Url
	│   ├── pages                       // 网站的页面
	│   │   ├── account.vue          // 我的账户页
	│   │   ├── countMoney.vue       // 数钱游戏页
	│   │   ├── index.vue            // 网站首页
	│   │   ├── merchant.vue         // 活动商户页
	│   │   ├── ranking.vue          // 排行榜页
	│   │   ├── register.vue         // 注册页
	│   │   ├── result.vue           // 结果展示页
	│   │   ├── rule.vue             // 活动规则页
	│    │ 	  └── turnTable.js         // 转转盘页
  │   ├── router               // vue-router路由
	│    │ 	  └── index.js         // 项目的路由
	│    ├── App.vue                     // 页面入口文件
	│     └── index.js                    // 程序入口文件
	├── static                             // 存放一些静态文件
	│ 	├── css   		                      // 存放CSS文件
	│ 	│     └── reset.css               // 重置网页的样式
	│  ├── .gitkeep		                    // 只是一个占位符，一个假文件
	│ 	└── favicon.png    	              // 网站的图标
	├── .babelrc			                      // babel编译的一些配置
	├── .editorconfig    		              // 编辑器的配置
	├── .gitignore                         // 提交到git上时，忽略提交的文件和文件夹
	├── .postcssrc.js                      // 自动加载配置为PostCSS
	├── index.html                         // 入口HTML文件
	└── package.json                // 项目配置文件




