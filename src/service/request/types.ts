import type { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface PLRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

// 接口继承

export interface PLRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  // 对原来拦截器进行扩展
  interceptors: PLRequestInterceptors<T>
  showLoading?: boolean
}
