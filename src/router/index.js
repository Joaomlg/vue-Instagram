import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main'
import Explore from '../views/Explore'
import Profile from '../views/Profile'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/explore', component: Explore },
  { path: '/profile', component: Profile }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
