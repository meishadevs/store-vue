export default {

  // token在Cookie中存储的天数，默认1天 (测试时设置为4分钟)
  cookieExpires: 1,

  // api 请求基础路径
  baseUrl: {
    dev: 'http://localhost:8002',
    pro: 'http://localhost:8002'
  },

  // 默认打开的首页的路由name值，默认为 home
  homeName: 'home'
};
