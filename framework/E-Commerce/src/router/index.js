import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '@/views/CategoryView.vue'
import ProductView from '@/views/ProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      name: 'category',
      path: '/categories/:categoryId',
      component: CategoryView,
    },
    {
      name: 'product',
      path: '/products/:productId',
      component: ProductView,
    },
  ],
})

export default router
