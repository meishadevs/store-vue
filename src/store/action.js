
export default {

  //显示模板
  showMask({ commit }) {
    commit('showMask');
  },

  //隐藏模板
  hideMask({ commit }) {
    commit('hideMask');
  },

  //退出
  exit({ commit }) {
    commit('exit');
  },

  //设置用户名
  setUsername({ commit }, username) {
    commit('setUsername', username);
  }
};
