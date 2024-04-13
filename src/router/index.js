import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeAddView from '@/views/Home/HomeAddView.vue'


import HomeworkView from '@/views/HomeworkView.vue'
import SettingsView from '@/views/SettingsView.vue'
import GoalsView from '@/views/GoalsView.vue'
import Setting1View from '@/views/Setting1View.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'add',
          component: HomeAddView
        }
      ]
    },
    {
      path: '/homework',
      name: 'homework',
      component: HomeworkView
    },
    {
      path: '/goals',
      name: 'goals',
      component: GoalsView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/setting1',
      name: 'setting1',
      component: Setting1View
    },
    
  ]
})

export default router
