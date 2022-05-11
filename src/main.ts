import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from './router/index'
import vuex from './vuex/index'
import './index.css'
const app = createApp(App)
app.use(Antd).use(router).use(vuex).mount('#app')
