import axios from 'axios'
import { getToken, localRead } from '@/libs/util'
import refreshToken from '@/api/refreshToken'

let isLock = true
class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl
    }
    return config
  }
  destroy(url) {
    delete this.queue[url]
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(request => {
      if (!request.url.includes('/oauth/token') && !request.url.includes('/user/check_password')) {
        request.headers['Content-type'] = 'application/json;charset=UTF-8'
        request.headers['X-URL-PATH'] = location.pathname
        request.headers['Authorization'] = 'Bearer ' + getToken()
      }
      this.queue[url] = true
      return request
    }, error => {
      this.destroy(url)
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(async(response) => {
      let data = {}
      this.destroy(url)
      if (response.data.code && response.data.code !== 2000 && !url.includes('/oauth/token')) {
        // token 过期应该返回登陆页面
        if (response.data.code === 1010) {
          const refreshJwt = localRead('refreshToken')
          if ((refreshJwt !== 'undefined' && refreshJwt) && isLock) {
            await refreshToken(response)
            isLock = false
            const token = getToken()
            response.config.headers.Authorization = 'Bearer ' + token// 重新获取最新token
            const result = await axios.request(response.config) // 执行上一次请求
            if (result) {
              data = result.data
              isLock = true
              if (data.code !== 2000) {
                return Promise.reject(data)
              } else {
                return data
              }
            }
          }
        } else if (response.data.code !== 1010) {
          return Promise.reject(response.data)
        }
      } else if (response.headers['content-type'] === 'application/vnd.ms-excel;charset=UTF-8' ||
          response.headers['content-type'] === 'application/vnd.ms-word;charset=UTF-8' ||
          response.headers['content-type'] === 'application/x-download;charset=UTF-8') {
        return response
      } else {
        return response.data
      }
    }, error => {
      // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
      this.destroy(url)
      if (error && error.response) {
        switch (error.response.status) {
          case 400:
            error.message = '错误请求'
            break
          case 401:
            // 如果token过期或者不存在则跳转到登录页面
            window.location.href = '/login'
            // Msg.error('未登录，或者登录已过期，请登录')
            error.message = '未授权，请重新登录'
            break
          case 403:
            error.message = '拒绝访问'
            break
          case 404:
            error.message = '请求错误，未找到资源'
            break
          case 405:
            error.message = '请求方法未允许'
            break
          case 408:
            error.message = '请求超时'
            break
          case 500:
            error.message = '服务器端出错'
            break
          case 501:
            error.message = '网络未实现'
            break
          case 502:
            error.message = '网络错误'
            break
          case 503:
            error.message = '服务不可用'
            break
          case 504:
            error.message = '网络超时'
            break
          case 505:
            error.message = 'http版本不支持请求'
            break
          default:
            error.message = `链接错误${error.response.status}`
        }
      } else {
        error.message = '链接服务器失败'
      }
      return Promise.reject(error.message)
    })
  }

  request(options) {
    const instance = axios.create()
    // 解构对象
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
