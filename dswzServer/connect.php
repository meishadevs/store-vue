<?php

//主机名
$host = "localhost";

//用户名
$db_user = "root";

//密码
$db_pass = "";

//数据库名 
$db_name = "mydb";

//时区 
$timezone = "Asia/Shanghai";

//链接数据库 
$link = mysql_connect($host,$db_user,$db_pass);

//选择数据库
mysql_select_db($db_name, $link);

//执行一条数据库查询语句
mysql_query("SET names UTF8");

header("Content-Type: text/html; charset=utf-8");

//设置时区 
date_default_timezone_set($timezone);

?>
