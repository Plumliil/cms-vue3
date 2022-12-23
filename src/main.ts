import { createApp } from 'vue'
import { globalRegister } from './global'
import App from './App.vue'
import router from './router'
import store from './store'
import plRequest from './service'
const app = createApp(App)

// element-plus注册
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
  status: number
}

plRequest
  .request<DataType>({
    url: '/home/multidata',
    interceptors: {}
  })
  .then((res) => {
    console.log(res)
    console.log(res.status)
    console.log(res.success)
  })
