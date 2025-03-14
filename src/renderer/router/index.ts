// import { MainScreen } from '@/renderer/screens'
import { HomeScreen, TextToVideoScreen, VideoEditorScreen } from '@/renderer/screens'
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
      path: '/text-to-video',
      component: TextToVideoScreen,
      meta: {
        titleKey: 'title.text-to-video',
        layout: 'EmptyLayout'
      }
    },
    {
      path: '/video-editor',
      component: VideoEditorScreen,
      meta: {
        titleKey: 'title.video-editor',
        layout: 'VideoEditorLayout'
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
