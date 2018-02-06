
export default {

  //显示模板
  showMask(state) {
    state.isShowMask = true;
  },

  //隐藏模板
  hideMask(state) {
    state.isShowMask = false;
  },

  //退出
  exit(state) {
    state.isLogin = false;
    state.username = "";
  },

  //设置用户名
  setUsername(state, username) {
    state.username = username;
  },

  //设置商品数量
  setProductNum(state, productNum) {
    state.productNum = productNum;
  },

  //设置商品价格
  setProductPrice(state, productPrice) {
    state.productPrice = productPrice;
  },

  //改变当前选中的导航项的索引
  changeNavIndex(state, currentIndex) {
    state.currentNavIndex = currentIndex;
  },

  //设置品牌
  setBrand(state, brand) {
    state.brand = brand;
  },

  //设置屏幕尺寸
  setScreenSize(state, screenSize) {
    state.screenSize = screenSize;
  },

  //设置操作系统
  setOperatingSystem(state, operatingSystem) {
    state.operatingSystem = operatingSystem;
  },

  //设置运行内存
  setRunningMemory(state, runningMemory) {
    state.runningMemory = runningMemory;
  },

  //设置网络类型
  setNetworkType(state, networkType) {
    state.networkType = networkType;
  },

  //改变收货信息的状态
  changeReceiveStatus(state, receiveStatus) {
    state.isReceive = receiveStatus;
  },

  //设置支付方式
  setPayMethod(state, payMethod) {
    state.payMethod = payMethod;
  },

  //改变发票的状态
  changeInvoiceStatus(state, isInvoice) {
    state.isInvoice = isInvoice;
  },

  //改变检测结果的状态
  changeCheckStatus(state, checkStatus) {
    state.checkStatus = checkStatus;
  },

  //设置检测结果中显示的内容
  setCheckContent(state, checkContent) {
    state.checkContent = checkContent;
  },

  //切换登录的状态
  changeLoginStatus(state, isLogin) {
    state.isLogin = isLogin;
  },

  setProvinceName(state, provinceName) {
    state.provinceName = provinceName;
  },

  setCityName(state, cityName) {
    state.cityName = cityName;
  },

  setAreaName(state, areaName) {
    state.areaName = areaName;
  },

  setProvinceCode(state, provinceCode) {
    state.provinceCode = provinceCode;
  },

  setCityCode(state, cityCode) {
    state.cityCode = cityCode;
  },

  setAreaCode(state, areaCode) {
    state.areaCode = areaCode;
  }
};
