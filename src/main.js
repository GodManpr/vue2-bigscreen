import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'
import {setComponents, setConfig, setDataV} from "@/plugins";
import VueRouter from "vue-router";

Vue.use(VueRouter)

// 配置dataV
setDataV(Vue)

// 配置config
setConfig(Vue)

// 注册全局组件
setComponents(Vue)

const app = new Vue({
  router,
  store,
  render: h => h(App)
})

app.$mount('#app')
