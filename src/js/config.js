/**
 * 一些全局参数
 */

export default {
  install(Vue, option) {

    //服务器端的url
    Vue.prototype.serverUrl = 'http://localhost/dswzServer/';

    //获得省、市、区数据的url
    Vue.prototype.addressUrl = Vue.prototype.serverUrl + 'place.php';

    //获得商品咨询信息的url
    Vue.prototype.advisoryUrl = Vue.prototype.serverUrl + 'advisory.php';

    //获得商品信息的url
    Vue.prototype.productUrl = Vue.prototype.serverUrl + 'product.php';

    //注册账号的url
    Vue.prototype.registerUrl = Vue.prototype.serverUrl + 'register.php';

    //登录账号的url
    Vue.prototype.loginUrl = Vue.prototype.serverUrl + 'login.php';

    //淘宝搜索的url
    Vue.prototype.taobaoUrl = 'https://suggest.taobao.com/sug?callback=jQuery111309159938665821359_1511661036976&code=utf-8&_ksTS=1490839958568_2749&jsonpCallback=jsonp2750&area=b2c&k=1&bucketid=7&src=tmall_pc&_=1511661037004&callback=__jp5&q=';

    //百度搜索的url
    Vue.prototype.baiduUrl = 'http://www.baidu.com/s';

    //每页的第1条商品咨询信息的下标
    Vue.prototype.advisoryStartIndex = 0;

    //每页展示商品咨询信息的条数
    Vue.prototype.advisoryAmount = 5;

    //每页第一条商品信息的下标
    Vue.prototype.productStartIndex = 0;

    //每页展示的商品信息的条数
    Vue.prototype.productAmount = 6;
  }
};
