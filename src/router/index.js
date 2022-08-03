import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/backend/Dashboard.vue'
import ManageCategory from '@/views/backend/category/ManageCategory.vue'
import DashboardOverview from '../views/backend/DashboardOverview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'overview',
          name: 'overview',
          component: DashboardOverview
        },
        {
          path: 'managecategory',
          name: 'manageCategory',
          component: ManageCategory
        },
      ]
    },
  ]
})

export default router
