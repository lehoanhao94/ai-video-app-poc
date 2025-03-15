<template>
  <div class="relative h-full flex flex-col">
    <div class="w-full flex flex-1 mb-40 flex-col">
      <div
        class="border dark:border-gray-700 h-fit w-full p-4 rounded-lg gap-4 flex items-center justify-center text-3xl"
      >
        <button @click="onPlay">
          <Icon :icon="isPlaying ? 'hugeicons:pause' : 'hugeicons:play'" />
        </button>
        <button @click="onRestart">
          <Icon icon="hugeicons:stop" />
        </button>
        <button @click="exportToBlob">
          <Icon icon="hugeicons:download-square-02" />
        </button>
      </div>
      <div ref="editorWrapper" class="editor w-full flex-1">
        <div v-if="!movie?.currentTime" class="flex items-center justify-center relative h-fit">
          <img
            :src="selectedScene?.thumbnail"
            alt="Thumbnail"
            class="w-full"
            :style="`height: ${canvasHeight}px`"
          />
          <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800/70 p-2 rounded-lg flex items-center gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700/80"
          >
            <button class="cursor-pointer" @click="onPlay">
              <Icon :icon="isPlaying ? 'hugeicons:pause' : 'hugeicons:play'" class="text-4xl" />
            </button>
          </div>
        </div>
        <canvas v-show="movie?.currentTime" ref="canvas" class="w-full"></canvas>

        <div class="text-sm border border-gray-300 dark:border-gray-600 p-2 mt-4 mx-4 rounded-lg">
          <ul class="list-disc ml-4">
            <li>Width: {{ editorWrapperWidth }}</li>
            <li>Height: {{ canvasHeight }}</li>
            <li>Ratio: {{ formatRatio }}</li>
            <li>Duration: {{ movie?.duration }}</li>
            <li>Current Time: {{ movie?.currentTime }}</li>
            <li>Current Scene: {{ currentScene?.id }}</li>
          </ul>
        </div>
      </div>
    </div>
    <VideoEditorScenes class="absolute bottom-0" />
  </div>
</template>

<script setup lang="ts">
import etro from 'etro'
import { nextTick, ref, watch } from 'vue'
import VideoEditorScenes from './VideoEditorScenes.vue'
import { useVideoEditorStore } from '@/renderer/store/videoEditor'
import { storeToRefs } from 'pinia'

const videoEditorStore = useVideoEditorStore()
const {
  editorWrapper,
  editorWrapperWidth,
  formatRatio,
  movie,
  canvasHeight,
  canvas,
  currentScene,
  selectedScene
} = storeToRefs(videoEditorStore)
const isPlaying = ref(false)

const onDurationChange = (value: number) => {
  movie.value?.seek(value)
  // update frame
  nextTick(() => {
    movie.value?.refresh()
  })
}

const onPlay = () => {
  if (!movie.value?.currentTime) {
    // play and seek to selected scene
    movie.value?.seek(selectedScene.value?.startTime)
    movie.value?.play()

    isPlaying.value = true
    return
  }
  if (isPlaying.value) {
    movie.value?.pause()
    isPlaying.value = false
  } else {
    movie.value?.play()
    isPlaying.value = true
  }
}

const onRestart = () => {
  movie.value?.stop()
  isPlaying.value = false
}

// const startLayer = (index: number) => {
//   movie.value?.seek(movie.value?.layers[index].startTime)
//   movie.value?.play()
// }

const exportToBlob = async () => {
  movie.value
    ?.record({
      frameRate: 1,
      type: 'video/mp4',
      video: true,
      audio: true,
      onStart: (recorder: MediaRecorder) => {
        // Recording has started
        console.log('Recording has started')
      }
    })
    .then((blob) => {
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'etro.mp4'
      a.click()
    })
}
// watch canvas.value for changes
watch(canvas, (value) => {
  if (value) {
    movie.value = new etro.Movie({
      canvas: canvas.value!
    })
  }
})

// watch editorWrapper for changes
watch(editorWrapper, (value) => {
  if (value) {
    const ctx = canvas.value?.getContext('2d')
    const width = editorWrapperWidth.value
    const height = (width / formatRatio.value?.width!) * formatRatio.value?.height!
    canvas.value!.width = width
    canvas.value!.height = height
    ctx?.fillRect(0, 0, width, height)

    videoEditorStore.makeMovie()
  }
})
</script>
