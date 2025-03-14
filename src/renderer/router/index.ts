// import { MainScreen } from '@/renderer/screens'
import { HomeScreen } from '@/renderer/screens'
import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomeScreen,
      meta: {
        titleKey: 'title.main'
      }
    },
    {
      path: '/second',
      component: () => import('@/renderer/screens/SecondScreen.vue'),
      meta: {
        titleKey: 'title.second'
      }
    },
    {
      path: '/error',
      component: () => import('@/renderer/screens/ErrorScreen.vue'),
      meta: {
        titleKey: 'title.error'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
