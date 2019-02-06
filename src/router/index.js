import Vue from 'vue'
import Router from 'vue-router'
import Marketplace from '@/components/Marketplace'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Marketplace',
      component: Marketplace
    }
  ]
})
