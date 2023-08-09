import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export interface Interceptors<T = AxiosResponse> {
  onFulfilledRequest?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  onRejectedRequest?: (err: any) => any
  onFulfilledResponse?: (value: T) => T
  onRejectedResponse?: (err: any) => any
}

export interface RequestConfig<T = AxiosResponse> extends InternalAxiosRequestConfig {
  interceptors?: Interceptors<T>
}
