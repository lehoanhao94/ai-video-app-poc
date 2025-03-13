<template>
  <div>
    <canvas ref="canvas" width="800" height="450"></canvas>

    <Button icon="pi pi-home" aria-label="Play" @click="onPlay" />
    <Button icon="pi pi-home" aria-label="Play" @click="onRestart" />
    <Button icon="pi pi-home" aria-label="Play" @click="exportToBlob" />
    {{ movie?.currentTime }} / {{ movie?.duration }} /
    <div>
      <InputText :model-value="movie?.currentTime" />
      <Slider :model-value="movie?.currentTime" :max="7" :step="0.1" @change="onDurationChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import etro from 'etro'
import { nextTick, ref, watch } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const movie = ref<etro.Movie | null>(null)
const isPlaying = ref(false)

const onDurationChange = (value: number) => {
  movie.value?.seek(value)
  // update frame
  nextTick(() => {
    movie.value?.refresh()
  })
}

const onPlay = () => {
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
    const layer2 = new etro.layer.Visual({
      startTime: 0,
      duration: 7,
      background: etro.parseColor('blue')
    })
    const layer = new etro.layer.Visual({
      startTime: 7,
      duration: 10,
      background: etro.parseColor('red')
    })
    movie.value.layers.push(layer2)
    movie.value.layers.push(layer)

    const textLayer = new etro.layer.Text({
      text: 'Hello World',
      font: '14px Arial',
      x: 50,
      y: 10,
      startTime: 0,
      duration: 5
    })
    movie.value.layers.push(textLayer)

    const textLayer2 = new etro.layer.Text({
      text: 'Hello World22222222',
      font: '12px Arial',
      x: 50,
      y: 100,
      startTime: 6,
      duration: 5
    })
    movie.value.layers.push(textLayer2)
    const audioLayer = new etro.layer.Audio({
      source: 'https://cdn.openai.com/API/docs/audio/shimmer.wav',
      startTime: 0,
      duration: 5
    })
    movie.value.layers.push(audioLayer)
  }
})
</script>
