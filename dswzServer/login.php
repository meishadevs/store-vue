<?php

//连接数据库
require_once('connect.php');

//允许所有域名访问
header("Access-Control-Allow-Origin:*");

//获得用户名
$username = $_POST['username'];

//获得密码
$password = $_POST['password'];

//查询用户名
$query = mysqli_query($link, "select * from user where username = '".$username."'");

$row = mysqli_num_rows($query);

//如果用户名不存在
if ($row <= 0) {
	echo "1";
	return;
}

//查询密码
$query = mysqli_query($link, "select * from user where username = '".$username."' and password = '".$password."'");

$row = mysqli_num_rows($query);

//如果密码不正确
if ($row <= 0) {
	echo "2";
	return;

//登录成功
} else {
	echo "3";
}
?>

