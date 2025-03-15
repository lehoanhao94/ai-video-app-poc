<template>
  <div class="w-full min-h-screen relative px-2">
    <VideoEditorSidebarMenu />
    <div class="ml-24 scrollbar-thin h-screen overflow-y-auto">
      <div class="h-[40px]"> Header </div>
      <div class="grid grid-cols-12 h-[calc(100%-40px)]">
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
import { ref } from 'vue'
import VideoEditorSidebarMenu from '../video-editor/VideoEditorSidebarMenu.vue'
import VideoEditor from '../video-editor/VideoEditor.vue'
</script>
