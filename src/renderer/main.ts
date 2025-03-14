import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/renderer/App.vue'
import router from '@/renderer/router'
import i18n from '@/renderer/plugins/i18n'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import 'primeicons/primeicons.css'
import { Icon } from '@iconify/vue'
import '@/renderer/assets/styles/index.css'
// Add API key defined in contextBridge to window object type
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    mainApi?: any
  }
}

const app = createApp(App)

app
  .use(PrimeVue, {
    theme: {
      preset: Aura
    }
  })
  .use(i18n)
  .use(router)
  .component('Icon', Icon)
  .use(createPinia())

app.mount('#app')
