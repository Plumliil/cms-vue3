import axios from 'axios'
import type { AxiosInstance } from 'axios' // AxiosRequestConfig
import type { PLRequestConfig, PLRequestInterceptors } from './types'
import { ElLoading } from 'element-plus'

class PLRreuest {
  // 实例
  instance: AxiosInstance
  interceptors: PLRequestInterceptors
  showLoading?: boolean
  loading: any

  constructor(config: PLRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading || false

    // 从config中取出的拦截器 是 对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )
    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 判断是否显示loading
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('请求失败', err)
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // 移除loading
        this.loading.close()
        return res.data
      },
      (err) => {
        // 移除loading
        this.loading.close()
        return err
      }
    )
  }

  request<T = any>(config: PLRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对数据处理
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get<T = any>(config: any): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: any): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: PLRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: PLRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default PLRreuest
