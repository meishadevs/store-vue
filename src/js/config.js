/**
 * Created by Administrator on 2017/4/10.
 * 用于处理一些网站的配置信息
 */

//存放一些网站的配置信息
var config = {

    //获得省、市、区数据的url
    'addressUrl': 'http://localhost/dswzServer/data.php',

    //获得商品咨询信息的url
    'advisoryUrl': 'http://localhost/dswzServer/advisory.php',

    //淘宝搜索的url
    'taobaoUrl': 'https://suggest.taobao.com/sug',

    //百度搜索的url
    'baiduUrl': 'http://www.baidu.com/s',

    //每页的第1条商品咨询信息的下标
    'advisoryStartIndex' : 0,

    //每页展示商品咨询信息的条数
    'advisoryAmount' : 6
};