<template>
  <div class="h-[calc(100vh-140px)] overflow-y-auto">
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-4">
      <ul class="list-none p-0 m-0 flex items-center font-medium mb-4">
        <li>
          <a
            class="text-surface-500 dark:text-surface-300 no-underline leading-normal cursor-pointer"
            >Home</a
          >
        </li>
        <li class="px-2">
          <i class="pi pi-angle-right text-surface-500 dark:text-surface-300 leading-normal" />
        </li>
        <li>
          <span class="text-surface-900 dark:text-surface-0 leading-normal">Text to video</span>
        </li>
      </ul>
      <div
        class="flex items-start flex-col lg:justify-between lg:flex-row sticky top-0 z-10 bg-surface-0 dark:bg-surface-950 py-4 lg:py-0"
      >
        <div>
          <div class="font-medium text-3xl text-surface-900 dark:text-surface-0">
            Script/Text editor
          </div>
          <div class="flex items-center text-surface-700 dark:text-surface-100 flex-wrap pb-4">
            <div class="mr-8 flex items-center mt-4">
              <Icon icon="ri:character-recognition-line" class="mr-1 text-lg" />
              <span>{{ videoScriptCharactersCount }} Characters</span>
            </div>
            <div class="mr-8 flex items-center mt-4">
              <Icon icon="qlementine-icons:blocks-16" class="mr-1 text-lg" />
              <span>{{ videoScenesCount }} Scenes</span>
            </div>
          </div>
        </div>
        <div class="mt-4 lg:mt-0">
          <Button label="Cancel" class="mr-2" outlined icon="pi pi-times" @click="router.back" />
          <Button label="Proceed" icon="pi pi-arrow-right" icon-pos="right" @click="onProceed" />
        </div>
      </div>
      <div class="mt-10 space-y-6">
        <FloatLabel>
          <InputText id="over_label" v-model="videoName" variant="filled" class="w-full" />
          <label for="over_label"> Your video name </label>
        </FloatLabel>

        <Textarea
          id="over_label"
          v-model="videoScript"
          class="w-full"
          rows="10"
          auto-resize
          style="resize: none"
          variant="filled"
          placeholder="Start typing your script here..."
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useTextToVideoStore } from '@/renderer/store/textToVideo'
import { storeToRefs } from 'pinia'
const textToVideoStore = useTextToVideoStore()
const router = useRouter()

const { videoName, videoScript, videoScriptCharactersCount, videoScenesCount } =
  storeToRefs(textToVideoStore)

const onProceed = () => {
  router.push('/video-editor')
}
</script>
