import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestConfig } from './type'

class Request {
  instance: AxiosInstance

  constructor(config: RequestConfig) {
    // 创建axios的实例
    this.instance = axios.create(config)

    // 请求拦截器
    this.instance.interceptors.request.use(
      // 全局请求成功的拦截
      (config) => config,
      // 全局请求失败的拦截
      (err) => err
    )
    // 响应拦截器
    this.instance.interceptors.response.use(
      // 全局响应成功的拦截
      (res) => res.data,
      // 全局响应失败的拦截
      (err) => err
    )

    // 针对特殊的项目添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.onFulfilledRequest,
      config.interceptors?.onRejectedRequest
    )
    this.instance.interceptors.response.use(
      config.interceptors?.onFulfilledResponse,
      config.interceptors?.onRejectedResponse
    )
  }

  // request请求
  request<T = any>(config: RequestConfig<T>) {
    // 单次请求成功的拦截器
    if (config.interceptors?.onFulfilledRequest) {
      config = config.interceptors.onFulfilledRequest(config)
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单次响应成功的拦截器
          if (config.interceptors?.onFulfilledResponse) {
            res = config.interceptors.onFulfilledResponse(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  // post请求
  post<T = any>(url: string, data: T, config: RequestConfig<T>) {
    return this.request<T>({ method: 'POST', url, data, ...config, })
  }
}

export default Request
