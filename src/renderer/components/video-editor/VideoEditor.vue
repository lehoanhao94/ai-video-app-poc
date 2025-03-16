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
        <!-- Buttons for drawing shapes -->
        <button class="ml-4" @click="addTriangle">
          <Icon icon="mdi:triangle" />
        </button>
        <button @click="addStar">
          <Icon icon="mdi:star" />
        </button>
        <!-- Color selection -->
        <input v-model="shapeColor" type="color" class="w-8 h-8 ml-2" />
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
        <canvas
          v-show="movie?.currentTime"
          ref="canvas"
          class="w-full"
          @click="onCanvasClick"
          @mousedown="onMouseDown"
          @mousemove="onMouseMove"
          @mouseup="onMouseUp"
          @mouseleave="onMouseUp"
        ></canvas>

        <div class="text-sm border border-gray-300 dark:border-gray-600 p-2 mt-4 mx-4 rounded-lg">
          <ul class="list-disc ml-4">
            <li>Width: {{ editorWrapperWidth }}</li>
            <li>Height: {{ canvasHeight }}</li>
            <li>Ratio: {{ formatRatio }}</li>
            <li>Duration: {{ movie?.duration }}</li>
            <li>Current Time: {{ movie?.currentTime }}</li>
            <li>Current Scene: {{ currentScene?.id }}</li>
            <li>Shapes: {{ shapes.length }}</li>
            <li v-if="selectedShape"
              >Selected Shape: {{ selectedShape.type }} (Size:
              {{
                selectedShape.type === 'triangle' ? selectedShape.size : selectedShape.outerRadius
              }})</li
            >
          </ul>
        </div>
      </div>
    </div>
    <VideoEditorScenes class="absolute bottom-0" />
  </div>
</template>

<script setup lang="ts">
import etro from 'etro'
import { nextTick, ref, watch, onMounted, computed } from 'vue'
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
const isExporting = ref(false)

const { addTriangleLayer, addStarLayer } = videoEditorStore

// Define shape types
type ShapeType = 'triangle' | 'star' | null

interface Shape {
  type: 'triangle' | 'star'
  x: number
  y: number
  color: any
  createdAt: number
  duration: number
  size?: number // for triangle
  innerRadius?: number // for star
  outerRadius?: number // for star
  spikes?: number // for star
  layer?: any[] // Reference to layer
}

// state for current shape
const currentShape = ref<ShapeType>(null)
const shapeColor = ref('#FF0000') // default color is red

// state for shapes
const shapes = ref<Shape[]>([])

// state for shape interaction
const selectedShape = ref<Shape | null>(null)
const isResizing = ref(false)
const resizeStartPoint = ref({ x: 0, y: 0 })
const originalSize = ref(0)
const isDragging = ref(false)
const dragStartPoint = ref({ x: 0, y: 0 })

// Calculate the distance between two points
const distance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

// Check if a point is inside a shape
const isPointInShape = (x: number, y: number, shape: Shape) => {
  const shapeRadius = shape.type === 'triangle' ? shape.size! : shape.outerRadius!
  // Using a simple circular hit detection for both shapes
  return distance(x, y, shape.x, shape.y) <= shapeRadius
}

// Find shape at a specific point
const findShapeAtPoint = (x: number, y: number) => {
  // Iterate in reverse to select the top-most shape first
  for (let i = shapes.value.length - 1; i >= 0; i--) {
    const shape = shapes.value[i]
    if (isPointInShape(x, y, shape)) {
      return shape
    }
  }
  return null
}

// Update shape layers after changes
const updateShapeLayers = (shape: Shape) => {
  if (!shape.layer || !shape.layer.length || !movie.value) return

  // Remove old layers
  shape.layer.forEach((layer) => {
    const index = movie.value!.layers.indexOf(layer)
    if (index !== -1) {
      movie.value!.layers.splice(index, 1)
    }
  })

  // Create new layers based on shape type
  let newLayers: any[] = []
  if (shape.type === 'triangle') {
    newLayers = addTriangleLayer(shape)
  } else if (shape.type === 'star') {
    newLayers = addStarLayer(shape)
  }

  // Add new layers to movie
  newLayers.forEach((layer) => {
    movie.value!.layers.push(layer)
  })

  // Update shape's layer reference
  shape.layer = newLayers

  // Refresh the movie to show changes
  if (movie.value) {
    movie.value.refresh()
  }
}

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

// add triangle
const addTriangle = () => {
  currentShape.value = 'triangle'
  selectedShape.value = null
}

// add star
const addStar = () => {
  currentShape.value = 'star'
  selectedShape.value = null
}

// handle click on canvas to add shape
const onCanvasClick = (event: MouseEvent) => {
  if (!currentShape.value || !movie.value || !canvas.value) return

  try {
    // get click position in canvas
    const rect = canvas.value.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // create new shape
    const newShape: Shape = {
      type: currentShape.value as 'triangle' | 'star',
      x,
      y,
      color: shapeColor.value,
      createdAt: movie.value.currentTime || 0,
      duration: 5
    }

    // add properties based on shape type
    if (newShape.type === 'triangle') {
      newShape.size = 50

      // create triangle layer and add to movie
      const layers = addTriangleLayer(newShape)

      if (layers.length > 0) {
        // add all layers to movie
        layers.forEach((layer) => {
          movie.value?.layers.push(layer)
        })

        // save layer to shape
        newShape.layer = layers
        shapes.value.push(newShape)
      }
    } else if (newShape.type === 'star') {
      newShape.innerRadius = 15
      newShape.outerRadius = 30
      newShape.spikes = 5

      // create star layer and add to movie
      const layers = addStarLayer(newShape)

      if (layers.length > 0) {
        // add all layers to movie
        layers.forEach((layer) => {
          movie.value?.layers.push(layer)
        })

        // save layer to shape
        newShape.layer = layers
        shapes.value.push(newShape)
      }
    }
  } catch (error) {
    console.error('Error adding shape:', error)
  }
}

const onMouseDown = (event: MouseEvent) => {
  if (!canvas.value || isPlaying.value) return

  const rect = canvas.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // Find shape at this point
  const shape = findShapeAtPoint(x, y)

  if (shape) {
    // Select the shape
    selectedShape.value = shape

    // If shift key is pressed, enter resize mode
    if (event.shiftKey) {
      isResizing.value = true
      resizeStartPoint.value = { x, y }
      originalSize.value = shape.type === 'triangle' ? shape.size! : shape.outerRadius!
    } else {
      // Otherwise, enter drag mode
      isDragging.value = true
      dragStartPoint.value = { x, y }
    }

    event.preventDefault()
  } else {
    // Deselect if clicking outside
    selectedShape.value = null
  }
}

const onMouseMove = (event: MouseEvent) => {
  if (!canvas.value || !selectedShape.value) return

  const rect = canvas.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // Handle resizing
  if (isResizing.value) {
    // Calculate distance from start point
    const dist = distance(resizeStartPoint.value.x, resizeStartPoint.value.y, x, y)
    const scaleFactor = dist / 100 // Adjust sensitivity as needed

    // Apply new size based on shape type
    if (selectedShape.value.type === 'triangle') {
      selectedShape.value.size = Math.max(10, originalSize.value + scaleFactor * 50)
    } else {
      // star
      selectedShape.value.outerRadius = Math.max(10, originalSize.value + scaleFactor * 50)
      selectedShape.value.innerRadius = selectedShape.value.outerRadius / 2
    }

    // Update the shape's visuals
    updateShapeLayers(selectedShape.value)
  }

  // Handle dragging
  if (isDragging.value) {
    // Calculate movement delta
    const deltaX = x - dragStartPoint.value.x
    const deltaY = y - dragStartPoint.value.y

    // Update position
    selectedShape.value.x += deltaX
    selectedShape.value.y += deltaY

    // Update starting point for next move
    dragStartPoint.value = { x, y }

    // Update the shape's visuals
    updateShapeLayers(selectedShape.value)
  }
}

const onMouseUp = (event: MouseEvent) => {
  // End resize/drag operations
  isResizing.value = false
  isDragging.value = false
}

const exportToBlob = async () => {
  if (!movie.value || isExporting.value) return

  // mark exporting
  isExporting.value = true

  try {
    // save current position
    const currentPosition = movie.value.currentTime

    // seek to start to export whole video
    movie.value.seek(0)

    // calculate total duration of video, including all shapes
    const totalDuration = Math.max(
      movie.value.duration,
      ...shapes.value.map((shape) => shape.createdAt + shape.duration)
    )

    console.log('Start exporting whole video with duration:', totalDuration)

    // export whole video
    const blob = await movie.value.record({
      frameRate: 30, // increase fps to make video smoother
      duration: totalDuration, // ensure whole video is exported
      type: 'video/mp4',
      video: true,
      audio: true, // enable audio if available
      onStart: (recorder) => {
        console.log('Start recording whole video...')
      }
    })

    // create URL and download
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'etro_video.mp4'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

    // seek back to start after exporting
    movie.value.seek(currentPosition)

    console.log('Export whole video successfully')
  } catch (error) {
    console.error('Error exporting video:', error)
    alert('Error exporting whole video. Check console for more details.')
  } finally {
    // mark as finished
    isExporting.value = false
  }
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

    if (canvas.value) {
      canvas.value.width = width
      canvas.value.height = height
      ctx?.fillRect(0, 0, width, height)
    }

    videoEditorStore.makeMovie()
  }
})
</script>

<style scoped>
.editor canvas {
  cursor: pointer;
}
</style>
