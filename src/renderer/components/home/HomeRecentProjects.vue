<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-2 items-start w-full">
      <h3 class="text-surface-900 dark:text-surface-0 font-bold text-xl leading-tight text-start">
        Recent Projects
      </h3>
      <p class="text-surface-500 dark:text-surface-400 text-start leading-tight">
        Here are some of the projects that we have been working on recently.
      </p>
    </div>

    <div class="flex flex-col lg:flex-row gap-6 overflow-x-auto scrollbar-thin">
      <div
        v-for="member in teamMembers"
        :key="member.name"
        class="bg-surface-0 dark:bg-surface-900 rounded-2xl shadow-sm p-6 flex flex-col gap-4 min-w-72"
      >
        <img :src="member.image" :alt="member.name" class="rounded-2xl h-full" />
        <div class="flex justify-between items-center gap-6">
          <div class="flex flex-col gap-2">
            <h4 class="text-lg font-medium text-surface-900 dark:text-surface-0 leading-tight">{{
              member.name
            }}</h4>
            <span class="text-xs text-surface-500 dark:text-surface-400 leading-tight">{{
              member.role
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const teamMembers = [
  {
    name: 'Truyện Kiều',
    role: 'Edited 1 day ago',
    image:
      'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/square/avatar-m-1.jpg'
  },
  {
    name: 'Cô giáo Thảo',
    role: 'Edited 3 day ago',

    image:
      'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/square/avatar-f-1.jpg'
  },
  {
    name: 'Cô gái đến từ hôm qua',
    role: 'Edited 3 day ago',
    image:
      'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/square/avatar-f-2.jpg'
  },
  {
    name: 'Cô gái đến từ hôm qua',
    role: 'Edited 3 day ago',
    image:
      'https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/square/avatar-f-2.jpg'
  }
]
</script>
