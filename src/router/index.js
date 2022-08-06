import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/backend/Dashboard.vue'
import DashboardOverview from '../views/backend/DashboardOverview.vue'
// course

import ManageCourse from '@/views/backend/course/ManageCourse.vue'
import CourseCreate from '@/views/backend/course/CreateCourse.vue'
import CourseEdit from '@/views/backend/course/EditCourse.vue'
import CourseDetails from '@/views/backend/course/CourseDetails.vue'
import CourseLayout from '@/views/backend/course/CourseLayout.vue'

// Category
import ManageCategories from '@/views/backend/category/ManageCategories.vue'
import CategoryCreate from '@/views/backend/category/CreateCategory.vue'
import CategoryEdit from '@/views/backend/category/EditCategory.vue'
import CategoryDetails from '@/views/backend/category/CategoryDetails.vue'
import CategoryLayout from '@/views/backend/category/CategoryLayout.vue'

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
        // courses
        {
          path: 'managecourses',
          name: 'manageCourse',
          component: ManageCourse
        },
        {
          path: 'course/create',
          name: 'CourseCreate',
          component: CourseCreate
        },
        {
          path: 'courses/:id',
          name: 'CourseLayout',
          component: CourseLayout,
          props: true,
          children: [
            {
              path: '',
              name: 'CourseDetails',
              component: CourseDetails
            },
            {
              path: 'edit',
              name: 'CourseEdit',
              component: CourseEdit
            },
          ]
        } ,
        // categories
        {
          path: '/managecategories',
          name: 'manageCategories',
          component: ManageCategories
        },
        {
          path: 'category/create',
          name: 'CategoryCreate',
          component: CategoryCreate
        },
        {
          path: 'categories/:id',
          name: 'CategoryLayout',
          component: CategoryLayout,
          props: true,
          children: [
            {
              path: '',
              name: 'CategoryDetails',
              component: CategoryDetails
            },
            {
              path: 'edit',
              name: 'CategoryEdit',
              component: CategoryEdit
            },
          ]
        }    
      ]
    },
  ] 
})

export default router
