import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//配置axios文件
import axios from 'axios'
//配置element-plus文件
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
//使用axios
const app=createApp(App)
app.config.globalProperties.$axios=axios
app.use(store).use(router).use(ElementPlus).mount('#app')
