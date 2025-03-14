<template>
  <div class="flex flex-col gap-12">
    <HomeFeatureList />
    <HomeRecentProjects />
    <div
      style="
        background:
          radial-gradient(
            1130.92% 141.42% at 100% 0%,
            color-mix(in srgb, var(--p-primary-color), transparent 40%) 0%,
            var(--p-surface-950) 100%
          ),
          #18181b;
      "
      class="flex flex-wrap relative overflow-hidden rounded-2xl"
    >
      <div class="px-12 py-20">
        <span class="uppercase text-lg text-primary-300 font-bold"> Discover </span>
        <div class="text-surface-0 text-4xl font-medium mt-4 mb-8 leading-tight">
          Get started with 'Quick Start' video tutorials
        </div>
        <Button
          type="button"
          label="Get Started"
          rounded
          :pt="{
            root: { class: '!px-3 !py-2 !text-base !font-medium' }
          }"
        />
      </div>

      <img
        src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/cta/mockup.png"
        alt="Image"
        class="static lg:absolute block mx-auto h-[28.57rem] -top-8 -right-4"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import HomeFeatureList from '../components/home/HomeFeatureList.vue'
import HomeRecentProjects from '../components/home/HomeRecentProjects.vue'
</script>
