import axios from 'axios';

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }

  // 获得请求配置信息
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl
    };

    return config;
  }

  destroy(url) {
    delete this.queue[url];
  }

  // 请求拦截
  interceptors(instance, url) {
    instance.interceptors.request.use(request => {
      request.headers['Content-type'] = 'application/json;charset=UTF-8';

      this.queue[url] = true;
      return request;
    }, error => {
      this.destroy(url);
      return Promise.reject(error);
    });

    // 响应拦截
    instance.interceptors.response.use(async(response) => {
      this.destroy(url);
      return response;
    }, error => {
      // 错误的请求结果处理
      this.destroy(url);
      if (error && error.response) {
      } else {
        error.message = '链接服务器失败';
      }

      return Promise.reject(error.message);
    });
  }

  request(options) {
    const instance = axios.create();
    // 解构对象
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}

export default HttpRequest;
