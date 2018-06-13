import Vue from 'vue'
import Router from 'vue-router'
import pos from '@/components/page/Pos'
import axios from 'axios'
Vue.use(Router)
Vue.prototype.$ajax = axios

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: pos
    }
  ]
})
