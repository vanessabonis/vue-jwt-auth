import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './config/axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "../node_modules/@fortawesome/fontawesome-free/js/all"




createApp(App).use(router).mount('#app');




