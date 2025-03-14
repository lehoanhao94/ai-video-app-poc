<template>
  <div
    class="max-w-full flex flex-row items-center gap-1 px-2 overflow-x-auto scrollbar-thin flex-nowrap"
  >
    <div v-for="item in scenes" :key="item.id" class="flex flex-row items-center gap-1 px-2">
      <div>
        <img
          src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/square/avatar-m-1.jpg"
          class="h-20 rounded-xl"
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
import { onMounted } from 'vue'
const videoEditorStore = useVideoEditorStore()
const { scenes } = storeToRefs(videoEditorStore)
onMounted(() => {
  scenes.value = [
    {
      id: 1,
      duration: 10,
      text: 'Effective communication drives success in any team.'
    },
    {
      id: 2,
      duration: 10,
      text: 'Here’s how you can master it.'
    },
    {
      id: 3,
      duration: 10,
      text: '1. Start with Clarity.'
    },
    {
      id: 4,
      duration: 10,
      text: 'State your purpose clearly from the beginning.'
    },
    {
      id: 5,
      duration: 10,
      text: 'Avoid ambiguity to keep everyone aligned'
    },
    {
      id: 6,
      duration: 10,
      text: '2. Listen Actively.'
    },
    {
      id: 7,
      duration: 10,
      text: 'Focus on what others are saying.'
    },
    {
      id: 8,
      duration: 10,
      text: 'Effective communication drives success in any team.'
    },
    {
      id: 9,
      duration: 10,
      text: 'Effective communication drives success in any team.'
    },
    {
      id: 10,
      duration: 10,
      text: 'Effective communication drives success in any team.'
    }
  ]
})
</script>
