<template>
  <div>
    <div class="flex flex-col gap-12 items-center">
      <div class="flex flex-col gap-4 items-start w-full">
        <h3
          class="text-surface-900 dark:text-surface-0 font-bold text-2xl leading-tight text-start"
        >
          Simple create a video with AI
        </h3>
        <p class="text-surface-500 dark:text-surface-400 text-start leading-tight">
          Select one of the boxes below to create a new video with AI.
        </p>
      </div>
      <div class="flex space-x-4 overflow-x-auto scrollbar-thin w-full">
        <BaseFeatureCard
          v-for="(feature, index) in features"
          :key="index"
          class="min-w-64 max-w-72"
          v-bind="feature"
        />
      </div>
    </div>
    <div>
      <div class="dark:bg-yellow-900/30 bg-yellow-50"></div>
      <div class="dark:bg-green-900/30 bg-green-50"></div>
      <div class="dark:bg-red-900/30 bg-red-50"></div>
      <div class="dark:bg-sky-900/30 bg-sky-50"></div>
      <div class="dark:bg-violet-900/30 bg-violet-50"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseFeatureCard from '@/renderer/components/base/BaseFeatureCard.vue'
import { computed } from 'vue'

const features = computed(() => [
  {
    title: 'Text to video',
    description:
      'Transform your text into a video with AI. You can use this feature to create videos from your blog posts, articles, or any other text content.',
    icon: 'fluent-mdl2:locale-language',
    color: 'yellow',
    to: '/text-to-video'
  },
  {
    title: 'URL to video',
    description:
      'Turn blog posts, articles, or any other web content into a video with AI. You can use this feature to create videos from your existing web content.',
    icon: 'logos:webkit',
    color: 'green'
  },
  {
    title: 'AI video editor',
    description:
      'Edit your video with AI. You can use this feature to edit your existing video content.',
    icon: 'vscode-icons:folder-type-video',
    color: 'red'
  },
  {
    title: 'Image to video',
    description:
      'Transform your image into a video with AI. You can use this feature to create videos from your existing image content.',
    icon: 'fluent-color:image-24',
    color: 'sky'
  },
  {
    title: 'PPT to video',
    description:
      'Transform your PPT into a video with AI. You can use this feature to create videos from your existing PPT content.',
    icon: 'vscode-icons:file-type-powerpoint',
    color: 'violet'
  }
])
</script>
