/**
 * Created by Administrator on 2017/12/16.
 * 过滤器
 */

import Vue from 'vue';

//格式化现金过滤器
let formateMoney = Vue.filter('formateMoney', function (value) {

  //如果value是一个整数
  if (parseInt(value) === value) {

    return value + '.00';

    //如果value是一个小数
  } else {

    //获得小数点后的位数
    var num = String(value).length - String(value).indexOf('.') - 1;

    //如果小数点后有一位数字
    if (num === 1) {

      return String(value) + '0';

      //如果小数点后有两位数字
    } else if (num === 2) {

      return value;

      //如果小数点后有三位或者三位以上数字
    } else if (num >= 3) {

      //将数字转换成字符串
      var str = String(value);

      //将字符串以小数点为切割点，切割成数组
      var arr = str.split('.');

      //将小数点后面的数字切割成字符串
      var arr1 = arr[1].split('');

      return arr[0] + '.' + arr1[0] + arr1[1];
    }
  }
});

export default {
  formateMoney
};
