export default {

  // token在Cookie中存储的天数，默认1天 (测试时设置为4分钟)
  cookieExpires: 1,

  // api请求基础路径
  baseUrl: {
    dev: 'http://localhost/dswzServer',
    pro: 'http://localhost/dswzServer'
  },

  // 文件下载地址
  fileUrl: {
    dev: 'http://localhost/dswzServer',
    pro: 'http://localhost/dswzServer'
  },

  // 默认打开的首页的路由name值，默认为home
  homeName: 'home',

  // 需要加载的插件
  plugin: {
    'error-store': {
      showInHeader: false, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  }
}
