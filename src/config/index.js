export default {

  // token 在 Cookie 中存储的天数，默认 1 天
  cookieExpires: 1,

  // api 请求基础路径
  baseUrl: {
    dev: 'http://localhost:8002',
    pro: 'http://localhost:8002'
  },

  // 淘宝网商品搜索 url
  taobaoUrl: 'https://suggest.taobao.com/sug?q=',

  // 百度搜索 url
  baiduUrl: 'http://www.baidu.com/s',

  // 默认打开的首页的路由name值，默认为 home
  homeName: 'home'
};
