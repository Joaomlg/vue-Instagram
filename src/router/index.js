import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main'
import Explore from '../views/Explore'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/explore', component: Explore }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
