import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/backend/Dashboard.vue'
import DashboardOverview from '../views/backend/DashboardOverview.vue'
import ManageCourse from '@/views/backend/course/ManageCourse.vue'
import CreateCourse from '@/views/backend/course/CreateCourse.vue'
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
      ]
    },
    {
      path: '/managecourse',
      name: 'manageCourse',
      component: ManageCourse
    },
    {
      path: '/create/course',
      name: 'createCourse',
      component: CreateCourse
    },
    {
      path: '/course/:id/delete',
      name: 'deleteCourse',
      component: ManageCourse,
      props: true,
    },

  ] 
})

export default router
