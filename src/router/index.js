import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Register from '@/components/Register'
import Login from '@/components/Login'
import GiftPage from '@/components/GiftPage'
import AboutUs from '@/components/AboutUs'
import FAQuestion from '@/components/FAQuestion'
import SecurityPrivacy from '@/components/SecurityPrivacy'
import Checkout from '@/components/Checkout'
import ShoppingCart from '@/components/ShoppingCart'
import ProductItem from '@/components/ProductItem'
import MyAccount from '@/components/MyAccount'
import EditMyDetail from '@/components/EditMyDetail'
import EditMyBankCard from '@/components/EditMyBankCard'
import AddBankCard from '@/components/AddBankCard'
import AddAddressCard from '@/components/AddAddressCard'
import EditAddressCard from '@/components/EditAddressCard'
import MyComments from '@/components/MyComments'

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
    }, {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    }, {
      path: '/f-a-question',
      name: 'FAQuestion',
      component: FAQuestion
    }, {
      path: '/security-privacy',
      name: 'SecurityPrivacy',
      component: SecurityPrivacy
    }, {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    }, {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }, {
      path: '/product-item',
      name: 'ProductItem',
      component: ProductItem
    }, {
      path: '/my-account',
      name: 'MyAccount',
      component: MyAccount
    }, {
      path: '/edit-my-detail',
      name: 'EditMyDetail',
      component: EditMyDetail
    }, {
      path: '/edit-my-bank-card',
      name: 'EditMyBankCard',
      component: EditMyBankCard
    }, {
      path: '/add-bank-card',
      name: 'AddBankCard',
      component: AddBankCard
    }, {
      path: '/add-address-card',
      name: 'AddAddressCard',
      component: AddAddressCard
    }, {
      path: '/edit-address-card',
      name: 'EditAddressCard',
      component: EditAddressCard
    }, {
      path: '/my-comments',
      name: 'MyComments',
      component: MyComments
    }
  ]
})
