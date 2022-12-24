import { createApp } from 'vue'
import { globalRegister } from './global'
import './assets/css/index.less'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// element-plus注册
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')
