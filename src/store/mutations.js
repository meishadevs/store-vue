
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
  },

  //设置商品数量
  setProductNum: function (state, productNum) {
    state.productNum = productNum;
  },

  //设置商品价格
  setProductPrice: function (state, productPrice) {
    state.productPrice = productPrice;
  },

  //改变当前选中的导航项的索引
  changeNavIndex: function (state, currentIndex) {
    state.currentNavIndex = currentIndex;
  },

  //设置品牌
  setBrand: function (state, brand) {
    state.brand = brand;
  },

  //设置屏幕尺寸
  setScreenSize: function (state, screenSize) {
    state.screenSize = screenSize;
  },

  //设置操作系统
  setOperatingSystem: function (state, operatingSystem) {
    state.operatingSystem = operatingSystem;
  },

  //设置运行内存
  setRunningMemory: function (state, runningMemory) {
    state.runningMemory = runningMemory;
  },

  //设置网络类型
  setNetworkType: function (state, networkType) {
    state.networkType = networkType;
  },

  //改变收货信息的状态
  changeReceiveStatus: function (state, receiveStatus) {
    state.isReceive = receiveStatus;
  },

  //设置支付方式
  setPayMethod: function (state, payMethod) {
    state.payMethod = payMethod;
  },

  //改变发票的状态
  changeInvoiceStatus: function (state, isInvoice) {
    state.isInvoice = isInvoice;
  },

  //改变检测结果的状态
  changeCheckStatus: function (state, checkStatus) {
    state.checkStatus = checkStatus;
  },

  //设置检测结果中显示的内容
  setCheckContent: function (state, checkContent) {
    state.checkContent = checkContent;
  },

  //切换登录的状态
  changeLoginStatus: function (state, isLogin) {
    state.isLogin = isLogin;
  }
};
