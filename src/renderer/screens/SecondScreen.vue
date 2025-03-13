<template>
  <div>
    <canvas id="etro-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import etro from "etro";
import { onMounted } from "vue";

onMounted(() => {
  const canvas = document.getElementById("etro-canvas") as HTMLCanvasElement;
  const movie = new etro.Movie({
    canvas
  });
  console.log("🚀 ~ onMounted ~ movie:", movie)
})
</script>
