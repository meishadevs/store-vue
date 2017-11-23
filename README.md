# 简易版电商网站
> ImoocDSWZ是一个简易版的电商网站，整个网站由网站首页、商品分类页、注册页、登录页、商品信息展示页、商品筛选页、购物车及结算页组成，整个网站包含了将网页添加到收藏夹、关键字搜索、图片轮播、商品分类菜单切换、商品筛选、商品简介、商品咨询、省市区三级联动、放大镜、注册、登录等功能。

## 项目的一些链接

**网站地址：[http://meishadevs.com/ImoocDSWZ/index.html](http://meishadevs.com/ImoocDSWZ/index.html)**  
**网站的视频演示地址：[http://oqdvwkahb.bkt.clouddn.com/video.mp4](http://oqdvwkahb.bkt.clouddn.com/video.mp4)**

## 用到的技术
- **前端：** jQuery Ajax HTML5 CSS3 LocalStorage
- **构建工具：** Gulp
- **后台：** PHP
- **数据库：** MySQL

## 项目的目录结构

	├── .gitignore                // 提交到git上时，忽略提交的文件和文件夹
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
> 因为电商网站客户端代码不在master分支下，所以不能直接使用 `git clone https://github.com/meishadevs/ImoocDSWZ.git` 将代码克隆到本地，将项目代码克隆到本地的方式如下

**第一步：创建一个dswzClient文件夹**  

	  mkdir dswzClient

**第二步：进入到dswzClient文件夹下**  

	cd dswzClient
	
**第三步：初始化一个本地Git仓库**

	git init
	
**第四步：将本地Git仓库关联到远程Git仓库**  

	git remote add origin https://github.com/meishadevs/ImoocDSWZ.git

**第五步：拉取位于远程仓库上jQuery分支中的代码到本地**
	
	git pull origin jQuery

**第六步：安装依赖**

	npm install

**第七步：执行Gulp任务，编译项目**  

	gulp defaultTask

执行完`gulp defaultTask`任务后，会在dswzClient目录下自动创建一个dist文件夹，dist文件夹下存放的是编译后生成的文件

**第八步：执行Gulp任务，运行项目**  

	gulp server

执行`gulp server`任务后会自动使用默认浏览器打开网页，当修改了src文件夹下的文件后，会立即编译，并且将编译生成的文件存在在dist目录下，网页也会src目录下的修改做出相应的改变

## 配置网站的服务器
网站服务器端配置请移步到server分支：[https://github.com/meishadevs/ImoocDSWZ/tree/server](https://github.com/meishadevs/ImoocDSWZ/tree/server)


