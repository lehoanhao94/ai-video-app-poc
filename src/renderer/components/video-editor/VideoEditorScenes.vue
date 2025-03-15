<template>
  <div
    class="max-w-full flex flex-row items-center px-2 overflow-x-auto scrollbar-thin flex-nowrap"
  >
    <div
      v-for="item in scenes"
      :key="item.id"
      class="flex flex-row items-center gap-4 px-2"
      @click="onSelectScene(item)"
    >
      <div>
        <img
          :src="item.thumbnail"
          alt="Thumbnail"
          class="h-20 rounded-xl"
          :class="{
            'border-2 border-primary-500': selectedScene.id === item.id
          }"
        />

        <div class="flex items-center p-2 justify-center text-sm" style="width: 100px">
          Scene {{ item.id }}
        </div>
      </div>
      <Button
        icon="pi pi-objects-column"
        size="small"
        severity="secondary"
        rounded
        aria-label="Bookmark"
        class="mb-6"
      />
    </div>
  </div>
</template>
<script setup>
import { useVideoEditorStore } from '@/renderer/store/videoEditor'
import { storeToRefs } from 'pinia'
const videoEditorStore = useVideoEditorStore()
const { scenes, selectedScene } = storeToRefs(videoEditorStore)

const onSelectScene = (scene) => {
  videoEditorStore.selectedScene = scene
  videoEditorStore.makeSelectedSceneMovie()
}
</script>
