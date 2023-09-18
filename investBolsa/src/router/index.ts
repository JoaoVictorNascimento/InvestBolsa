import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue')
        },
        {
          path: '/stocks',
          name: 'stocks-page',
          component: () => import('@/views/StocksPage.vue')
        },
        {
          path: '/stock-news',
          name: 'stock-news',
          component: () => import('@/views/StockNews.vue')
        },
      ]
    },
  ]
})

export default router
