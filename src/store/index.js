
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
  currentNavIndex: 1,

  //品牌
  brand: '品牌',

  //屏幕尺寸
  screenSize: '屏幕尺寸',

  //操作系统
  operatingSystem: '操作系统',

  //运行内存
  runningMemory: '运行内容',

  //网络类型
  networkType: '网络类型'
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
