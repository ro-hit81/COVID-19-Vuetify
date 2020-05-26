import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import Global from '../views/Global'
import Nepal from '../views/Nepal'
import Maps from '../views/Maps'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/global',
    name: 'global',
    component: Global
  },
  {
    path: '/nepal',
    name: 'nepal',
    component: Nepal
  },
  {
    path: '/maps',
    name: 'maps',
    component: Maps
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
