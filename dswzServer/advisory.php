<?php

//连接数据库
require_once('connect.php');

//标记位，用来区分查询的数据
$flag = $_GET['flag'];

//获得回调函数
$callback = $_GET['callback'];

//$flag == 1表示查询数据中一共有多少条商品咨询信息
if ($flag == 1) {

	$squery = mysqli_query($link, "select count(*) from advisory");
    $result = mysql_result($squery, 0);
	echo $callback.'('.$result.')';

//$flag == 2表示查询商品咨询的信息
} else if ($flag == 2) {

	//发送到浏览器中的咨询信息的起始位置
	$startIndex = $_GET['startIndex'];

	//发送到浏览器中的咨询信息的条数
	$amount = $_GET['amount'];

	//执行SQL语句，从数据库中获得商品咨询信息
	$query = mysqli_query($link, "select * from advisory order by id asc limit ".$startIndex.", ".$amount);

	//遍历从数据库中获取的商品咨询信息
	while ($row = mysqli_fetch_array($query)) {

		//表示查询到了数据
		$flag = 3;

		//创建数组，储存从数据库中获取的商品咨询信息
		$sayList[] = array(

			//id
			'id'=>$row['id'],

			//用户头像的链接地址
			'memberimage'=>$row['memberimage'],

			//用户的会员账号
			'membernum'=>$row['membernum'],

			//用户的会员等级
			'membergrade'=>$row['membergrade'],

			//咨询的问题
			'question'=>$row['question'],

			//问题的答案
			'answer'=>$row['answer'],

			//咨询的时间
			'time'=>$row['time']
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

