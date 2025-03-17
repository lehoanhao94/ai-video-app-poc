<template>
  <div class="h-screen fixed left-0 top-0 py-4 pl-4 lg:p-0 z-50">
    <div
      class="w-[18rem] h-full flex flex-col bg-surface-50 dark:bg-surface-900 rounded-2xl border lg:border-0 border-surface-100 dark:border-surface-800"
    >
      <a class="inline-flex items-center gap-3 px-6 pt-5 pb-6 cursor-pointer">
        <BaseLogo class="w-8" />
        <span class="font-semibold text-surface-900 dark:text-surface-0">AI Video Generator</span>
      </a>
      <div class="w-[calc(100%-3rem)] mx-auto h-px bg-surface-200 dark:bg-surface-700 px-6" />
      <div class="px-4 py-6 flex-1">
        <ul class="flex flex-col gap-2 overflow-hidden">
          <template v-for="(item, index) of navs" :key="index">
            <li @click="item.to && router.push(item.to)">
              <button
                :class="
                  selectedNav === item.label
                    ? 'bg-surface-0 dark:bg-surface-950 text-surface-900 dark:text-surface-0 border-surface shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.12)_inset]'
                    : 'border-transparent hover:border-surface-200 dark:hover:border-surface-800 hover:bg-surface-0 dark:hover:bg-surface-950 text-surface-600 dark:text-surface-400'
                "
                class="z-30 text-left w-full relative flex items-center gap-2 pl-3 pr-2 py-2 rounded-lg cursor-pointer transition-all border"
                @click="selectedNav = item.label"
              >
                <Icon :icon="item.icon" class="!text-2xl !leading-none" />
                <span class="flex-1 font-medium">{{ item.label }}</span>
              </button>
            </li>
          </template>
        </ul>
      </div>
      <ul class="flex flex-col gap-2 px-4 py-3">
        <template v-for="(item, index) of bottomNavs" :key="index">
          <li>
            <button
              :class="
                selectedNav === item.label
                  ? 'bg-surface-0 dark:bg-surface-950 text-surface-900 dark:text-surface-0 border-surface shadow-[0px_-1px_3px_0px_rgba(0,0,0,0.12)_inset]'
                  : 'border-transparent hover:border-surface-200 dark:hover:border-surface-800 hover:bg-surface-0 dark:hover:bg-surface-950 text-surface-600 dark:text-surface-400'
              "
              class="z-30 text-left w-full relative flex items-center gap-2 pl-3 pr-2 py-2 rounded-lg cursor-pointer transition-all border"
              @click="selectedNav = item.label"
            >
              <i :class="item.icon" class="!text-xl !leading-none" />
              <span class="flex-1 font-medium">{{ item.label }}</span>
            </button>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseLogo from '../base/BaseLogo.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const selectedNav = ref('Home')
const bottomNavs = ref([
  {
    icon: 'pi pi-question-circle',
    label: 'Help'
  },
  {
    icon: 'pi pi-cog',
    label: 'Settings'
  }
])
const navs = ref([
  {
    icon: 'hugeicons:home-03',
    label: 'Home',
    to: '/'
  },
  {
    icon: 'hugeicons:folder-03',
    label: 'Projects',
    to: '/projects'
  },
  {
    icon: 'hugeicons:user-group',
    label: 'Team'
  }
])
</script>
