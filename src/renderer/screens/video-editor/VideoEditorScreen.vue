<template>
  <div class="gap-4 flex flex-col">
    <FloatLabel v-for="(sceneText, index) in videoScenes" :key="index" variant="in">
      <Textarea v-model="videoScenes[index]" auto-resize class="w-full" variant="filled" />
      <label for="in_label"> Scene {{ index + 1 }} </label>
    </FloatLabel>
  </div>
</template>

<script setup lang="ts">
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
    videoEditorStore.makeMovie()
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
</script>
