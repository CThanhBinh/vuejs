import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Products from '../views/ProductsView.vue'
import PastOrders from '../views/PastOrdersView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: Products
  },
  {
    path: '/past-orders',
    name: 'PastOrdersView',
    component: PastOrders
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
