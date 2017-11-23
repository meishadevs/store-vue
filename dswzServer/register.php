<?php

//连接数据库
require_once('connect.php');

//允许所有域名访问
header("Access-Control-Allow-Origin:*");

//获得用户名
$username = $_POST['username'];

//获得密码
$password = $_POST['password'];

//获得邮箱
$email = $_POST['email'];

//创建条查询用户名是否存在的SQL语句
$sql = "select * from user where username = '".$username."'";

//查询用户名是否存在
$query = mysql_query($sql);

$row = mysql_num_rows($query);

//如果用户名已存在
if ($row > 0) {
	echo "2";
	return;
}

//创建一条将用户名，密码，邮箱插入到数据库中的SQL语句
$sql = "insert into user(username, password, email) values ('".$username."','".$password."','".$email."')";

//将用户名，密码，邮箱插入到数据库中
$query = mysql_query($sql);

//判断注册成功还是注册失败
if ($query) {

	//注册成功
	echo "1";
} else {

	//注册失败
	echo "0";
}

?>

