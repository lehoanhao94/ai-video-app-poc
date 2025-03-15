<template>
  <div class="flex flex-col items-center gap-14">
    <p class="text-lg text-surface-600 dark:text-surface-300 leading-normal text-left w-full"
      >Library</p
    >
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 px-2">
      <div
        v-for="(video, index) in videoLibraries"
        :key="video.title + index"
        class="group relative w-full cursor-pointer overflow-hidden rounded-xl"
        @click="videoEditorStore.changeVisualVideoSourceLayer(selectedScene, video)"
      >
        <img class="w-full h-full object-cover" :src="video.thumb" :alt="video.title" />

        <div
          class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div
          class="absolute z-20 p-1 right-4 opacity-0 group-hover:opacity-100 group-hover:right-1 transition-all duration-300 top-6 flex flex-col gap-3 rounded-lg bg-white/20 backdrop-blur-[5px] shadow-[0px_0px_50px_0px_rgba(0,0,0,0.05)_inset]"
        >
          <a
            v-for="action in actions"
            :key="action.icon"
            v-tooltip.left="{
              value: action.label,
              pt: {
                text: 'text-xs',
                padding: 'py-0.5 px-0.5'
              }
            }"
            class="flex items-center justify-center cursor-pointer"
          >
            <Icon :icon="action.icon" class="text-lg leading-none text-white" />
          </a>
        </div>

        <div
          class="absolute z-20 opacity-0 group-hover:opacity-100 bottom-4 md:-bottom-16 group-hover:bottom-4 transition-all duration-300 left-4 right-4"
        >
          <!-- <h4 class="text-xs font-semibold text-white leading-tight">{{ video.title }}</h4> -->
          <span class="text-xs text-white leading-tight line-clamp-1">{{ video.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useVisualsStore } from '@/renderer/store/visuals'
import { useVideoEditorStore } from '@/renderer/store/videoEditor'
import { nextTick, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
const visualsStore = useVisualsStore()
const videoEditorStore = useVideoEditorStore()
const { videoLibraries } = storeToRefs(visualsStore)
const { selectedScene } = storeToRefs(videoEditorStore)
const actions = [
  {
    icon: 'hugeicons:plus-sign',
    label: 'Add as layer'
  },
  {
    icon: 'hugeicons:card-exchange-01',
    label: 'Replace visual'
  },
  {
    icon: 'hugeicons:ai-search-02',
    label: 'Search similar'
  },
  {
    icon: 'hugeicons:favourite',
    label: 'Favorite'
  }
]
</script>
