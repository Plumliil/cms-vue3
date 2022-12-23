import type { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface PLRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface PLRequestConfig extends AxiosRequestConfig {
  interceptors: PLRequestInterceptors
  showLoading?: boolean
}
