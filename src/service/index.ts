import Request from "./request"
import type { AxiosRequestHeaders } from "axios"
import { BASE_URL, TIME_OUT } from "./config"

const headers = {
  "Content-Type": "application/json;charset=UTF-8",
  Authorization: ''
}

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: headers as AxiosRequestHeaders,
  interceptors: {
    onFulfilledRequest: (config) => {
      const token = uni.getStorageSync('token')
      if (token) config.headers.Authorization = `Bearer ${token}`
      return config
    },
    onFulfilledResponse: (value) => {
      return value.data
    }
  }
})

export default request
