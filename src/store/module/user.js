import { login, getUserInfo, logout } from '@/api/user'
import { setToken, getToken, localSave } from '@/libs/util'

export default {

  state: {
    token: getToken(),

    // 刷新token
    refreshToken: '',

    // 用户名是否登录了
    isLogin: false,

    // 是否显示蒙版
    isShowMask: false,

    // 用户名
    username: null,

    // 商品的数量
    productNum: 0,

    // 商品价格
    productPrice: 0,

    // 当前选中的导航项的索引
    currentNavIndex: 1,

    // 品牌
    brand: null,

    // 屏幕尺寸
    screenSize: null,

    // 操作系统
    operatingSystem: null,

    // 运行内存
    runningMemory: null,

    // 网络类型
    networkType: null,

    // 标记是否设置了收货信息
    isReceive: false,

    // 标记用户选择的支付方式，0:没有选择支付方式、1:微信支付、2:现金支付
    payMethod: 0,

    // 标记是否需要发票
    isInvoice: false,

    // 检测的状态，0:不显示检测结果、1:显示正确的检测结果,、2:显示错误的检测结果
    checkStatus: 0,

    // 检测结果中显示的内容
    checkContent: null,

    // 当前显示的省的编码
    provinceCode: '110000',

    // 当前显示的市的编码
    cityCode: '110100',

    // 当前显示的区的编码
    areaCode: '110101',

    // 当前显示的省的名称
    provinceName: '北京市',

    // 当前显示的市的名称
    cityName: '北京市',

    // 当前显示的区的名称
    areaName: '东城区'
  },

  mutations: {
    setToken(state, token) {
      state.token = token
      setToken(token)
    },

    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken
      localSave('refreshToken', refreshToken)
    },

    // 显示模板
    showMask(state) {
      state.isShowMask = true
    },

    // 隐藏模板
    hideMask(state) {
      state.isShowMask = false
    },

    // 退出
    exit(state) {
      state.isLogin = false
      state.username = ''
    },

    // 设置用户名
    setUsername(state, username) {
      state.username = username
    },

    // 设置商品数量
    setProductNum(state, productNum) {
      state.productNum = productNum
    },

    // 设置商品价格
    setProductPrice(state, productPrice) {
      state.productPrice = productPrice
    },

    // 改变当前选中的导航项的索引
    changeNavIndex(state, currentIndex) {
      state.currentNavIndex = currentIndex
    },

    // 设置品牌
    setBrand(state, brand) {
      state.brand = brand
    },

    // 设置屏幕尺寸
    setScreenSize(state, screenSize) {
      state.screenSize = screenSize
    },

    // 设置操作系统
    setOperatingSystem(state, operatingSystem) {
      state.operatingSystem = operatingSystem
    },

    // 设置运行内存
    setRunningMemory(state, runningMemory) {
      state.runningMemory = runningMemory
    },

    // 设置网络类型
    setNetworkType(state, networkType) {
      state.networkType = networkType
    },

    // 改变收货信息的状态
    changeReceiveStatus(state, receiveStatus) {
      state.isReceive = receiveStatus
    },

    // 设置支付方式
    setPayMethod(state, payMethod) {
      state.payMethod = payMethod
    },

    // 改变发票的状态
    changeInvoiceStatus(state, isInvoice) {
      state.isInvoice = isInvoice
    },

    // 改变检测结果的状态
    changeCheckStatus(state, checkStatus) {
      state.checkStatus = checkStatus
    },

    // 设置检测结果中显示的内容
    setCheckContent(state, checkContent) {
      state.checkContent = checkContent
    },

    // 切换登录的状态
    changeLoginStatus(state, isLogin) {
      state.isLogin = isLogin
    },

    setProvinceName(state, provinceName) {
      state.provinceName = provinceName
    },

    setCityName(state, cityName) {
      state.cityName = cityName
    },

    setAreaName(state, areaName) {
      state.areaName = areaName
    },

    setProvinceCode(state, provinceCode) {
      state.provinceCode = provinceCode
    },

    setCityCode(state, cityCode) {
      state.cityCode = cityCode
    },

    setAreaCode(state, areaCode) {
      state.areaCode = areaCode
    }
  },

  actions: {
    // 登录
    handleLogin({ commit }, { userName, password, generateKey, captchaCode }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password,
          generateKey,
          captchaCode
        }).then(res => {
          window.localStorage.removeItem('tagNaveList')
          commit('setToken', res.access_token)
          commit('setRefreshToken', res.refresh_token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 退出登录
    handleLogOut({ state, commit }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          window.localStorage.removeItem('tagNaveList')
          window.localStorage.removeItem('refreshToken')
          commit('setToken', '')
          commit('setHasGetInfo', false)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },

    // 获得用户信息
    getUserInfo({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo(state.token).then(res => {
            const data = res.data
            commit('setUserName', res.data.userName)
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
