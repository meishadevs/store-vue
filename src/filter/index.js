/**
 * Created by Administrator on 2017/12/16.
 * 过滤器
 */

import Vue from "vue";

//格式化现金过滤器
let formateMoney = Vue.filter("formateMoney", function (value) {
  return value.toFixed(2);
});

export default {
  formateMoney
};
