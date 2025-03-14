<script setup lang="tsx">
import { DefaultLayout, EmptyLayout, VideoEditorLayout } from '@/renderer/components/layout'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const layouts = {
  DefaultLayout,
  EmptyLayout,
  VideoEditorLayout
}
const route = useRoute()

const layout = computed(() => {
  return (route?.meta?.layout || 'DefaultLayout') as string
})
</script>

<template>
  <component :is="layouts[layout]">
    <router-view />
  </component>
</template>

<style>
@import 'tailwindcss';
@import 'tailwindcss-primeui';
html {
  overflow-y: auto !important;
  user-select: none;
}
html,
body {
  width: 100%;
  height: 100%;
}
/* Do not force capitalization of button text */
.v-btn {
  text-transform: unset !important;
}
</style>
