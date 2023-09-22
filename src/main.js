import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import { LazyImg, Waterfall } from 'vue-waterfall-plugin-next'
import 'vue-waterfall-plugin-next/dist/style.css'
import { ResponsiveDirective } from "vue-responsive-components"

createApp(App).use(store)
    .use(ElementPlus)
    .use(router)
    .use(LazyImg)
    .use(Waterfall)
    .use(ResponsiveDirective)
    .mount('#app')
