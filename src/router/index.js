import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import HomeworkView from '@/views/HomeworkView.vue'
import SettingsView from '@/views/SettingsView.vue'
import GoalsView from '@/views/GoalsView.vue'
import Setting1View from '@/views/Setting1View.vue'

//Components
import Flyouttab from '@/components/Flyouttab.vue'

//Components - Home
import HomeAddTab from '@/components/Home/HomeAddTab.vue'
import HomeAddColorPalette from '@/components/Home/HomeAddColorPalette.vue'

//Components - Homework
import homeworkadd from '@/components/Homework/homeworkadd.vue'

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
          component: Flyouttab,
          props: { title: "เพิ่มคาบเรียน", close_route: "/" },
          children: [
            {
              path: '',
              component: HomeAddTab
            },
            {
              path: 'color',
              component: HomeAddColorPalette
            }
          ]
        }
      ]
    },
    {
      path: '/homework',
      name: 'homework',
      component: HomeworkView,
      children: [
        {
          path: 'add',
          component: Flyouttab,
          props: { title: "เพิ่มคาบเรียน", close_route: "/homework" },
          children: [
            {
              path: '',
              component: homeworkadd
            }
          ]
        }
      ]
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
