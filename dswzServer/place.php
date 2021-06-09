<?php

//链接数据库
require_once('connect.php');

//获得省市区的编码
$code = $_GET['citycode'];

//获得callback值，用于设置jsonp
$callback = $_GET['callback'];

//标志位，用于区分当前获得的是省/市/区（省：1，市：2，区：3）
$flag = $_GET['flag'];

//获取省的数据
if($flag == 1) {
	$query= mysqli_query($link, "select * from province order by id");
	
//获取市的数据 
}else if($flag == 2) {
	$query = mysqli_query($link, "select * from city where provincecode = '".$code."' order by id" );
	
//获取区的数据
}else if($flag == 3) {
	$query = mysqli_query($link, "select * from area where citycode = '".$code."' order by id" );
}

//创建数组，存放获取的数据
$sayList = [];

while ($row=mysqli_fetch_array($query)) {
	$sayList[] = array(
		'code'=>$row['code'],
		'name'=>$row['name']
    );
}

//如果获取到了数据，构造一个json字符串
if($sayList) {
	echo $callback.'('.json_encode($sayList).')';
}else{
	echo $callback.'('.'[]'.')';
}

?>