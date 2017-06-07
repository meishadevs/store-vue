# 简易版电商网站
> ImoocDSWZ是一个简易版的电商网站，整个网站由网站首页、商品分类页、注册页、登录页、商品信息展示页、商品筛选页、购物车及结算页组成，整个网站包含了将网页添加到收藏夹、关键字搜索、图片轮播、商品分类菜单切换、商品筛选、商品简介、商品咨询、省市区三级联动、放大镜、注册、登录等功能。

## 项目的一些链接
**网站地址：[http://meishadevs.com/ImoocDSWZ/](http://meishadevs.com/ImoocDSWZ/)**

**网站的视频演示地址：[http://oqdvwkahb.bkt.clouddn.com/video.mp4](http://oqdvwkahb.bkt.clouddn.com/video.mp4)**

## 用到的技术
- **前台：** jQuery Ajax HTML5 CSS3 LocalStorage
- **构建工具：** Gulp
- **后台：** PHP
- **数据库：** MySQL

## 项目简介
**项目描述：** 整个项目的文件由dswzClient、dswzServer、sql三个文件夹组成，其中dswzClient存放网站的前端代码、dswzServer中存放的是网站的后台代码，sql中存放的是网站的数据库文件

**dswzClient的目录结构**

	├── .gitignore                // 设置上传到GitHub上时忽略上传的文件
	├── gulpfile.js               // Gulp编译脚本
	├── package.json              // 项目配置文件
	├── src                       // 生产目录
	    ├── css/                  // 存放网站的CSS样式
	    ├── fonts/                // 存放网站的字体
	    ├── images/               // 存放网站的图片
	    ├── js/                   // 存放网站的JS脚本
	    ├── lib/                  // 存放引用的第三方库
	    ├── classification.html   // 商品分类页的HTML
	    ├── index.html            // 网站首页的HTML
	    ├── login.html            // 登录页的HTML
	    ├── proinfo.html          // 商品信息展示页的HTML
	    ├── register.html         // 注册页的HTML
	    ├── select.html           // 商品筛选页的HTML
	    └── shopcar.html          // 购物车和结算页的HTML
            
## 启动项目

**第一步：克隆项目**  

	git clone https://github.com/meishadevs/ImoocDSWZ.git  

**第二步：进入存放网站文件的目录下**  

	cd dswzClient

**第三步：安装项目的依赖包**  

	npm install

**第四步：执行Gulp任务，编译项目**  

	gulp defaultTask

执行完`gulp defaultTask`任务后，会在dswzClient目录下自动创建一个dist文件夹，dist文件夹下存放的是编译后生成的文件

**第五步：执行Gulp任务，运行项目**  

	gulp server

执行	`gulp server`任务后会自动使用默认浏览器打开网页，当修改了src文件夹下的文件后，会立即编译，并且将编译生成的文件存在在dist目录下，网页也会src目录下的修改做出相应的改变

## 配置网站的服务器
> 整个网站的服务器使用的是PHP，数据库使用的是MySQL，服务器端我使用的是一个叫WampServer的软件，因为WampServer中同时集成了PHP和MySQL，下面的介绍的操作步骤也是使用WampServer

**第一步：安装WampServer**
首先从网上下载一个WampServer软件，然后




