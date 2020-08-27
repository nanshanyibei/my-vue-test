import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Register from '@/components/Register'
import Login from '@/components/Login'
import GiftPage from '@/components/GiftPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/gift-page',
      name: 'GiftPage',
      component: GiftPage
    }
  ]
})
