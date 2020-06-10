import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard'
import Global from '../views/Global'
import Nepal from '../views/Nepal'
import Maps from '../views/Maps'
import Timeline from '../views/Timeline'
import Myths from '../views/Myths'
import Faqs from '../views/Faqs'


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
  },
  {
    path: '/timeline',
    name: 'timeline',
    component: Timeline
  },
  {
    path: '/myths',
    name: 'myths',
    component: Myths
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: Faqs
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
