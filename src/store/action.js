
export default {

  //显示模板
  showMask({ commit }) {
    commit("showMask");
  },

  //隐藏模板
  hideMask({ commit }) {
    commit("hideMask");
  },

  //退出
  exit({ commit }) {
    commit("exit");
  },

  //设置用户名
  setUsername({ commit }, username) {
    commit("setUsername", username);
  },

  //设置商品数量
  setProductNum({ commit }, productNum) {
    commit("setProductNum", productNum);
  },

  //设置商品价格
  setProductPrice({ commit }, productPrice) {
    commit("setProductPrice", productPrice);
  },

  //改变当前选中的导航项的索引
  changeNavIndex({ commit }, currentIndex) {
    commit("changeNavIndex", currentIndex);
  },

  //设置品牌
  setBrand({ commit }, brand) {
    commit("setBrand", brand);
  },

  //设置屏幕尺寸
  setScreenSize({ commit }, screenSize) {
    commit("setScreenSize", screenSize);
  },

  //设置操作系统
  setOperatingSystem({ commit }, operatingSystem) {
    commit("setOperatingSystem", operatingSystem);
  },

  //设置运行内存
  setRunningMemory({ commit }, runningMemory) {
    commit("setRunningMemory", runningMemory);
  },

  //设置网络类型
  setNetworkType({ commit }, networkType) {
    commit("setNetworkType", networkType);
  },

  //改变收货信息的状态
  changeReceiveStatus({ commit }, receiveStatus) {
    commit("changeReceiveStatus", receiveStatus);
  },

  //设置支付方式
  setPayMethod({ commit }, payMethod) {
    commit("setPayMethod", payMethod);
  },

  //改变发票的状态
  changeInvoiceStatus({ commit }, invoiceStatus) {
    commit("changeInvoiceStatus", invoiceStatus);
  },

  //改变检测结果的状态
  changeCheckStatus({ commit }, checkStatus) {
    commit("changeCheckStatus", checkStatus);
  },

  //设置检测结果中显示的内容
  setCheckContent({ commit }, checkContent) {
    commit("setCheckContent", checkContent);
  },

  //切换登录的状态
  changeLoginStatus({ commit }, isLogin) {
    commit("changeLoginStatus", isLogin);
  }
};
