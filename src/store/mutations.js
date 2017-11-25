
export default {

  //显示模板
  showMask: function (state) {
    state.isShowMask = true;
  },

  //隐藏模板
  hideMask: function (state) {
    state.isShowMask = false;
  },

  //退出
  exit: function (state) {
    state.isLogin = false;
    state.username = '';
  },

  //设置用户名
  setUsername: function (state, username) {
    state.username = username;
  }
};
