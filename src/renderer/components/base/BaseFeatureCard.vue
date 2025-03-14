<template>
  <div
    class="flex flex-col gap-4 bg-white dark:bg-surface-950 border border-surface-200 dark:border-surface-700 rounded-xl p-4"
  >
    <div
      class="h-36 rounded-xl flex items-center justify-center p-3"
      :class="[`bg-${props.color}-50 dark:bg-${props.color}-900/30`]"
    >
      <Icon :icon="props.icon" class="w-16 h-16 text-yellow-500" :class="`text-${color}-500`" />
    </div>
    <div class="flex flex-col gap-2">
      <div class="text-surface-900 dark:text-surface-0 font-medium text-lg leading-tight">
        {{ props.title }}
      </div>
      <div class="text-sm text-surface-500 dark:text-surface-400 leading-normal">
        Transform your text into a video with AI. You can use this feature to create videos from
        your blog posts, articles, or any other text content.
      </div>
    </div>
    <a
      class="flex items-center gap-4 font-medium text-surface-900 dark:text-surface-0 cursor-pointer group leading-normal"
    >
      <span>Explore</span>
      <i
        class="pi pi-arrow-right !text-sm !leading-normal transition-transform duration-300 ease-in-out group-hover:translate-x-1"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  title?: string
  description?: string
  icon?: string
  color?: string
}>()
</script>
