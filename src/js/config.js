/**
 * Created by Administrator on 2017/4/10.
 * 用于处理一些网站的配置信息
 */

//服务器端的url
var serverUrl = 'http://localhost:8002';

//存放一些网站的配置信息
var config = {
    //获得省、市、区数据的url
    'addressUrl': serverUrl + 'place.php',

    //获得商品咨询信息的url
    'advisoryUrl': serverUrl + '/advisory/list',

    //获得商品信息的url
    'productUrl': serverUrl + '/product/list',

    //注册账号的url
    'registerUrl': serverUrl + '/user/register',

    //登录账号的url
    'loginUrl': serverUrl + '/user/login',

    //淘宝搜索的url
    'taobaoUrl': 'https://suggest.taobao.com/sug',

    //百度搜索的url
    'baiduUrl': 'http://www.baidu.com/s',

    //每页的第1条商品咨询信息的下标
    'advisoryStartIndex' : 0,

    //每页展示商品咨询信息的条数
    'advisoryAmount' : 5,

    //每页第一条商品信息的下标
    'productStartIndex': 0,

    //每页展示的商品信息的条数
    'productAmount': 6
};