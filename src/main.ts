import { createApp } from 'vue'
import { globalRegister } from './global'
import './assets/css/index.less'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
const app = createApp(App)

// element-plus注册
app.use(globalRegister)
app.use(store)
// 刷新后重新获取数据
setupStore()
// 路由匹配之前先注册
app.use(router)

app.mount('#app')
