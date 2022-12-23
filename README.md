#### Editorconfig


#### prettier语法检查


#### vue-router@next


#### vuex@next


#### element-plus

##### 全局


##### 按需


#### axios

##### 拦截器基本封装
对接口进行扩展,添加拦截器接口
~~~js
// types.ts
import type { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface PLRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface PLRequestConfig extends AxiosRequestConfig {
  interceptors: PLRequestInterceptors
}

// 封装
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { PLRequestConfig, PLRequestInterceptors } from './types'
class PLRreuest {
  instance: AxiosInstance
  interceptors: PLRequestInterceptors
  constructor(config: PLRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors.requestInterceptor,
      this.interceptors.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors.responseInterceptor,
      this.interceptors.responseInterceptorCatch
    )
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default PLRreuest

// main.ts
plRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

~~~
#### 环境区分
在开发中,有时根据不同环境设置变量
- 开发环境:development
- 生产环境:production
- 测试环境:test
如何区别环境变量:
- 方式一:手动修改不同变量
- 方式二:根据process.env.NODE_ENV的值进行区分
- 方式三:编写不同的配置文件


