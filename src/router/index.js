import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Testing'
import Circle from '@/components/Circle'
import Square from '@/components/Square'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/circle',
      name: 'circle',
      component: Circle
    },
    {
      path: '/square',
      name: 'square',
      component: Square
    }
  ]
})
