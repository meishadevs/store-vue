
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './action';
import mutations from './mutations';

//使用Vuex状态管理器
Vue.use(Vuex);

const state = {

  //用户名是否登录了
  isLogin: true,

  //是否显示蒙版
  isShowMask: false,

  //用户名
  username: 'meishadevs',

  //商品的数量
  productNum: 0,

  //当前选中的导航项的索引
  currentNavIndex: 1
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
