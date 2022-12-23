// service 统一出口
import PLRreuest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const plRequest = new PLRreuest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  showLoading: true,
  interceptors: {
    requestInterceptor: (config) => {
      const token = ''
      if (token) {
        config.data.token = `Bearer ${token}`
      }
      console.log('请求成功拦截', config)
      return config
    },
    responseInterceptor: (config) => {
      console.log('响应成功拦截')
      return config
    }
  }
})

export default plRequest
