<?php

//连接数据库
require_once('connect.php');

//标记位，用来区分查询的数据
$flag = $_GET['flag'];

//获得回调函数
$callback = $_GET['callback'];

//$flag == 1表示查询数据中一共有多少条商品信息
if ($flag == 1) {

	$squery = mysql_query("select count(*) from product");
    $result = mysql_result($squery, 0);
	echo $callback.'('.$result.')';

//$flag == 2表示查询商品信息
} else if ($flag == 2) {

	//发送到浏览器中的商品信息的起始位置
	$startIndex = $_GET['startIndex'];

	//发送到浏览器中的商品信息的条数
	$amount = $_GET['amount'];

	//执行SQL语句，从数据库中获得商品信息
	$query = mysql_query("select * from product order by id asc limit ".$startIndex.", ".$amount);

	//遍历从数据库中获取到的商品信息
	while ($row = mysql_fetch_array($query)) {

		//表示查询到了数据
		$flag = 3;

		//创建数组，储存从数据库中获取的商品信息
		$sayList[] = array(

			//id
			'id'=>$row['id'],

			//商品图片
			'productimage'=>$row['productimage'],

			//商品名称
			'productname'=>$row['productname'],

			//商品价格
			'productprice'=>$row['productprice'],

			//评论数量
			'commentnum'=>$row['commentnum']
	      );
	}


	//如果从数据库中查询到了数据
	if ($flag == 3) {

		//将数组转换成Json对象，并且发送到浏览器
		echo $callback.'('.json_encode($sayList).')';
	} else {
		echo $callback.'('.'null'.')';
	}
}

?>

