/**
 * 一些全局参数
 */

export default {
  install(Vue, option) {

    //服务器端的url
    Vue.prototype.serverUrl = 'http://meishadevs.sc2yun.com/dswzServer/';

    //获得省、市、区数据的url
    Vue.prototype.addressUrl = Vue.prototype.serverUrl + 'place.php';

    //获得商品数量的url
    Vue.prototype.productNumUrl = Vue.prototype.serverUrl + 'product.php?flag=1';

    //获得商品信息的url
    Vue.prototype.productInfoUrl = Vue.prototype.serverUrl + 'product.php?flag=2&amount=';

    //获得商品咨询信息的数量的url
    Vue.prototype.advisoryNumUrl = Vue.prototype.serverUrl + 'advisory.php?flag=1';

    //获得商品咨询信息的url
    Vue.prototype.advisoryInfoUrl = Vue.prototype.serverUrl + 'advisory.php?flag=2&amount=';

    //注册账号的url
    Vue.prototype.registerUrl = Vue.prototype.serverUrl + 'register.php';

    //登录账号的url
    Vue.prototype.loginUrl = Vue.prototype.serverUrl + 'login.php';

    //淘宝搜索的url
    Vue.prototype.taobaoUrl = 'https://suggest.taobao.com/sug?q=';

    //百度搜索的url
    Vue.prototype.baiduUrl = 'http://www.baidu.com/s';
  }
};
