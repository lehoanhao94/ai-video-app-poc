<template>
  <div class="relative flex gap-2 h-screen bg-surface-50 dark:bg-surface-900 p-2 overflow-hidden">
    <div
      id="app-sidebar-15"
      class="h-full hidden lg:block lg:static absolute left-0 top-0 py-4 pl-4 lg:p-0 z-50"
    >
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

    <div
      class="flex-1 flex flex-col gap-6 p-4 rounded-2xl border border-surface bg-surface-0 dark:bg-surface-950"
    >
      <div
        class="flex sm:items-center flex-wrap sm:flex-row flex-col pb-4 justify-between border-b border-dashed border-surface gap-4"
      >
        <div class="flex items-center gap-2">
          <a
            v-styleclass="{
              selector: '#app-sidebar-15',
              enterFromClass: 'hidden',
              enterActiveClass: 'animate-fadeinleft',
              leaveToClass: 'hidden',
              leaveActiveClass: 'animate-fadeoutleft',
              hideOnOutsideClick: true
            }"
            class="cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 mr-2"
          >
            <i class="pi pi-bars !text-2xl" />
          </a>
        </div>
        <div class="flex items-center gap-2">
          <Button icon="pi pi-bell" outlined severity="secondary" />
          <Avatar
            image="https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/462925483_27233051143007111_4994966838506071218_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=b04a48&_nc_ohc=pP1QOynTjrQQ7kNvgF_A0ky&_nc_oc=AdjZM8YsqJYYJWItUB3RHQ-jepL96HUXOZymk_IpKP_HV7ZlHnOTlse0ZZpBqFHYj0NbRUBREHNJfOgky0s5LCTM&_nc_zt=23&_nc_ht=scontent-nrt1-1.xx&_nc_gid=AkPFEYHlg5mAQyLRf4Ty1XR&oh=00_AYGnGGEJkti5MnfVmN7qWmOfCkLccQ0ygtOWwELZYqAooQ&oe=67D9FE37"
            size="large"
            shape="circle"
            class="!w-9 !h-9"
          />
        </div>
      </div>
      <div class="overflow-y-auto scrollbar-thin">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import { ref } from 'vue'
import BaseLogo from '../base/BaseLogo.vue'
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
    label: 'Home'
  },
  {
    icon: 'hugeicons:folder-03',
    label: 'Projects'
  },
  {
    icon: 'hugeicons:user-group',
    label: 'Team'
  }
])
</script>
