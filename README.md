# 电商网站的服务器
> 整个网站的服务器使用的是PHP，数据库使用的是MySQL，服务器端我使用的是一个叫WampServer的软件，因为WampServer中同时集成了PHP和MySQL，在后面的操作中会介绍使用WampServer配置网址服务器

## 将服务器端代码克隆到本地

**第一步：创建一个server文件夹**

	mkdir server

**第二步：进入server文件夹下**

	cd server

**第三步：初始化一个本地git仓库**

	git init

**第四步：将本地git仓库关联到远程git仓库**

	git remote add origin https://github.com/meishadevs/dswz.git

**第五步：拉取位于远程git仓库上server分支中的代码到本地**

	git pull origin server

## 配置电商网站的服务器

**第一步：安装WampServer**  
首先从网上下载一个WampServer软件，然后根据平时安装软件的方式直接点下一步下一步安装，安装过程中根据要求输入相应的信息，当启动WampServer出现下图所示的绿色图标表示WampServer安装成功，并且运行成功  
![](icon.PNG)

**第二步：启动phpMyAdmin**  
WampServer中使用phpMyAdmin管理MySQL数据库，单击上一步操作中出现的绿色的图标，在弹出的列表项中选择phpMyAdmin,点击phpMyAdmin后会使用默认浏览器打开如下图所示的phpMyAdmin登录界面  
![](login.PNG)

**第三步：进入phpMyAdmin**
在用户名一栏中输入默认的用户名root，然后点击执行就可进入phpMyAdmin
![](http://oqdvwkahb.bkt.clouddn.com/database.PNG)

**第四步：将网站需要用到的数据导入数据库中**  
选择导入，然后会弹出下图所示的界面，单击界面上的Choose File按钮，选择导入的文件为sql文件夹下的dswzdb.sql，将文件字符集设置为utf-8，格式选为SQL，设置完成后点击执行  
![](insert.PNG)

**第五步：执行后的效果**  
此时可以看到，在MySQL数据库中创建了一个mydb数据库，mydb数据库下又创建了几张表
![](table.PNG)

**第六步：部署服务器端代码**  
关闭phpMyAdmin，回到第一步的操作，再次点击绿色的小图标，在弹出的列表项中选择www directory，将dswzServer文件夹拷贝到打开的目录下，此时一个电商网站的后台就部署完成了，可以正常的使用网站中的注册、登录、省市区三级联动、商品翻页等功能  
![](folder.PNG)

## 特别说明
当你的数据库的设置和我的默认设置不同的时候，可以修改dswzServer下的connect.php文件

	<?php
	
	//主机名
	$host = "localhost";
	
	//用户名
	$db_user = "root";
	
	//密码
	$db_pass = "";
	
	//数据库名 
	$db_name = "dswzdb";
	
	//时区 
	$timezone = "Asia/Shanghai";
	
	//连接数据库
	$link = mysql_connect($host,$db_user,$db_pass);
	
	//选择数据库
	mysql_select_db($db_name, $link);
	
	//执行一条数据库查询语句
	mysql_query("SET names UTF8");
	
	//设置响应头
	header("Content-Type: text/html; charset=utf-8");
	
	//设置时区 
	date_default_timezone_set($timezone);
	
	?>


