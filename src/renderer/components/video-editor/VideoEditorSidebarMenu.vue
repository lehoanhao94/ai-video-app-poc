<template>
  <div class="h-screen fixed left-0 top-0 z-50 w-24 bg-surface-50 dark:bg-surface-900">
    <div class="flex flex-col h-full">
      <div class="flex items-center justify-center flex-shrink-0 pt-4">
        <BaseLogo class="w-12" />
      </div>
      <div class="mt-1">
        <ul class="list-none py-4 m-0">
          <li v-for="menu in menus" :key="menu.label">
            <a
              class="flex flex-row lg:flex-col items-center cursor-pointer p-4 lg:justify-center hover:bg-surface-800 rounded-border text-surface-300 hover:text-white duration-150 transition-colors"
            >
              <Icon :icon="menu.icon" class="mr-2 lg:mr-0 mb-0 lg:mb-2 !text-2xl !leading-none" />
              <span class="font-medium inline text-base lg:text-sm lg:block">
                {{ menu.label }}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BaseLogo from '../base/BaseLogo.vue'

const menus = computed(() => [
  {
    icon: 'hugeicons:block-game',
    label: 'Story'
  },
  {
    icon: 'hugeicons:ai-video',
    label: 'Visuals'
  },
  {
    icon: 'hugeicons:ai-audio',
    label: 'Audio'
  },
  {
    icon: 'hugeicons:ai-content-generator-02',
    label: 'Styles'
  },
  {
    icon: 'hugeicons:text-creation',
    label: 'Text'
  },
  {
    icon: 'hugeicons:geometric-shapes-01',
    label: 'Elements'
  },
  {
    icon: 'hugeicons:square-arrow-expand-01',
    label: 'Format'
  }
])
</script>
