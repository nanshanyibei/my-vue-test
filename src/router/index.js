import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Register from '@/components/Register'
import Login from '@/components/Login'
import AfterLogin from '@/components/AfterLogin'
import ICProfile from '@/components/ICProfile'

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
      path: '/after-login',
      name: 'AfterLogin',
      component: AfterLogin
    }, {
      path: '/ic-profile',
      name: 'ICProfile',
      component: ICProfile
    }
  ]
})
