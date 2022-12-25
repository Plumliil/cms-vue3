// service 统一出口
import PLRreuest from './request'
import localCache from '../utils/cache'

import { BASE_URL, TIME_OUT } from './request/config'
console.log(BASE_URL)

const plRequest = new PLRreuest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: true,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')

      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    responseInterceptor: (config) => {
      return config
    }
  }
})

export default plRequest
