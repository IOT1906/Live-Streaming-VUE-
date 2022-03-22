import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import element from 'element-plus'
import 'element-plus/theme-chalk/index.css'
const app = createApp(App)
app.config.globalProperties.$axios=axios
app.use(element).use(store).use(router).mount('#app')
