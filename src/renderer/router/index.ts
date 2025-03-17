// import { MainScreen } from '@/renderer/screens'
import {
  HomeScreen,
  TextToVideoScreen,
  VideoEditorScreen,
  ProjectsScreen
} from '@/renderer/screens'
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
        titleKey: 'title.video-editor-story',
        layout: 'VideoEditorLayout'
      }
    },
    {
      path: '/video-editor/visuals',
      component: () => import('@/renderer/screens/video-editor/VideoEditorVisualsTab.vue'),
      meta: {
        titleKey: 'title.visuals',
        layout: 'VideoEditorLayout'
      }
    },
    {
      path: '/projects',
      component: ProjectsScreen,
      meta: {
        titleKey: 'title.projects'
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
