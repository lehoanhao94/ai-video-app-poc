<template>
  <div class="w-full min-h-screen relative px-2">
    <VideoEditorSidebarMenu />
    <div class="ml-24 scrollbar-thin h-screen overflow-y-auto">
      <div class="h-[60px] pt-2">
        <div class="flex items-center justify-end gap-4">
          <Button
            label="Preview video"
            icon="pi pi-check"
            icon-pos="right"
            @click="onPrewiewVideo"
          />
        </div>
      </div>
      <div class="grid grid-cols-12 h-[calc(100%-60px)]">
        <div class="col-span-5 overflow-y-auto scrollbar-thin">
          <slot />
        </div>
        <div class="col-span-7 border-l border-surface-200 dark:border-surface-800">
          <VideoEditor />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VideoEditorSidebarMenu from '../video-editor/VideoEditorSidebarMenu.vue'
import VideoEditor from '../video-editor/VideoEditor.vue'
import { useTextToVideoStore } from '@/renderer/store/textToVideo'
import { useVideoEditorStore } from '@/renderer/store/videoEditor'
import { nextTick, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
const videoEditorStore = useVideoEditorStore()
const textToVideoStore = useTextToVideoStore()

const { videoScenes } = storeToRefs(textToVideoStore)
onMounted(() => {
  nextTick(() => {
    videoEditorStore.createScenesFromScripts(videoScenes.value)
    // videoEditorStore.makeMovie()
  })
})

watch(
  () => videoScenes.value,
  () => {
    nextTick(() => {
      videoEditorStore.createScenesFromScripts(videoScenes.value)
    })
  },
  { deep: true }
)

const onPrewiewVideo = () => {
  videoEditorStore.makeMovie()
  videoEditorStore.movie?.play()
}
</script>
