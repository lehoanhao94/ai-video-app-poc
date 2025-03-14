<template>
  <div class="w-full relative bg-surface-50 dark:bg-surface-900 p-2">
    <div
      class="p-4 rounded-2xl border border-surface bg-surface-0 dark:bg-surface-950 scrollbar-thin"
    >
      <LayoutHeader class="mb-4" with-logo />
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LayoutSidebarMenu from './LayoutSidebarMenu.vue'
import LayoutHeader from './LayoutHeader.vue'
</script>
