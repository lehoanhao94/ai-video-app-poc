<template>
  <div
    class="cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
    @click="navigateToHome"
  >
    <svg
      id="Layer_1"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      xml:space="preserve"
    >
      <path
        style="fill: #84dccf"
        d="M384.73,460.111H7.866V171.293c0-65.944,53.459-119.403,119.403-119.403H384.73
	c65.944,0,119.403,53.459,119.403,119.403v169.413C504.134,406.652,450.674,460.111,384.73,460.111z"
      />
      <path
        style="fill: #027ea8"
        d="M231.522,52.012H127.466c-66.054,0-120.029,53.425-120.029,119.48v288.498h104.878V171.49
	C112.316,105.437,165.469,52.012,231.522,52.012z"
      />
      <path
        d="M384.73,467.976H0V171.293C0,101.117,57.094,44.024,127.27,44.024h257.46c70.176,0,127.27,57.093,127.27,127.269v169.413
	C512,410.884,454.906,467.976,384.73,467.976z M15.732,452.244H384.73c61.503,0,111.538-50.035,111.538-111.537V171.293
	c0-61.502-50.035-111.537-111.538-111.537H127.27c-61.503,0-111.538,50.035-111.538,111.537V452.244z"
      />
      <rect x="71.905" y="99.918" style="fill: #ffffff" width="368.197" height="304.169" />
      <rect x="135.933" y="99.918" style="fill: #f15a24" width="240.13" height="304.169" />
      <rect x="159.51" y="124.376" style="fill: #ffffff" width="192.976" height="255.904" />
      <path
        style="fill: #fbb03b"
        d="M309.759,247.231l-102.32-47.476c-3.484-1.616-7.468,0.927-7.468,4.768v47.476v47.476
	c0,3.841,3.984,6.384,7.468,4.768l102.32-47.476C313.817,254.883,313.817,249.113,309.759,247.231z"
      />
      <rect x="95.534" y="124.376" width="16.781" height="15.732" />
      <rect x="95.534" y="171.571" width="16.781" height="15.732" />
      <rect x="95.534" y="219.815" width="16.781" height="15.732" />
      <rect x="95.534" y="268.059" width="16.781" height="15.732" />
      <rect x="95.534" y="316.304" width="16.781" height="15.732" />
      <rect x="95.534" y="364.548" width="16.781" height="15.732" />
      <rect x="399.681" y="124.376" width="16.781" height="15.732" />
      <rect x="399.681" y="171.571" width="16.781" height="15.732" />
      <rect x="399.681" y="219.815" width="16.781" height="15.732" />
      <rect x="399.681" y="268.059" width="16.781" height="15.732" />
      <rect x="399.681" y="316.304" width="16.781" height="15.732" />
      <rect x="399.681" y="364.548" width="16.781" height="15.732" />
      <path
        d="M205.218,312.606c-2.458,0-4.902-0.696-7.054-2.07c-3.794-2.423-6.06-6.557-6.06-11.059v-94.954
	c0-4.502,2.265-8.637,6.061-11.06c3.794-2.423,8.499-2.737,12.583-0.842l102.322,47.476c4.688,2.175,7.599,6.736,7.598,11.904
	c0,5.167-2.911,9.727-7.6,11.903l-102.319,47.476C208.98,312.199,207.094,312.606,205.218,312.606z M207.836,208.609v86.777
	l93.51-43.389L207.836,208.609z"
      />
      <path
        d="M64.035,92.05v319.896h383.931V92.05H64.035z M368.22,107.782v288.433H143.78V107.782H368.22z M79.766,107.782h48.282
	v288.433H79.766V107.782z M432.234,396.215h-48.282V107.782h48.282V396.215z"
      />
      <path
        d="M359.83,387.623V115.988H152.17v271.635H359.83z M167.902,131.72h176.196v240.172H167.902L167.902,131.72L167.902,131.72z"
      />
      <rect x="183.632" y="140.108" width="144.732" height="15.732" />
      <rect x="183.632" y="347.767" width="144.732" height="15.732" />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const navigateToHome = () => {
  router.push('/')
}
</script>
