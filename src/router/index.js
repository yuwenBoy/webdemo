import vue from 'vue'
import Router from 'vue-router'
import routerConfig from './router.js'

vue.use(Router)
const router = new Router(routerConfig)
export default router