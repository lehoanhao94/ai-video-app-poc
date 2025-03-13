<template>
  <div class="min-h-screen flex relative lg:static bg-surface-50 dark:bg-surface-950">
      <div id="app-sidebar-9" class="h-screen bg-surface-0 dark:bg-surface-950 hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-10 border-r border-surface w-72 lg:w-16 select-none">
          <div class="flex flex-col h-full">
              <div class="flex items-center justify-center flex-shrink-0 bg-primary h-[60px]">
                  <svg height="36" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M33.1548 9.65956L23.9913 4.86169L5.54723 14.5106L0.924465 12.0851L23.9913 0L37.801 7.23403L33.1548 9.65956ZM23.9931 19.3085L42.4255 9.65955L47.0717 12.0851L23.9931 24.1595L10.1952 16.9361L14.8297 14.5106L23.9931 19.3085ZM4.6345 25.8937L0 23.4681V37.9149L23.0669 50V45.1489L4.6345 35.4894V25.8937ZM18.4324 28.2658L0 18.6169V13.7658L23.0669 25.8403V40.2977L18.4324 37.8615V28.2658ZM38.7301 23.468V18.6169L24.9205 25.8403V49.9999L29.555 47.5743V28.2659L38.7301 23.468ZM43.3546 35.4892V16.1914L48.0008 13.7659V37.9148L34.1912 45.1488V40.2977L43.3546 35.4892Z"
                          class="fill-primary-contrast"
                      />
                  </svg>
              </div>
              <div class="mt-4">
                  <ul class="list-none p-0 m-0">
                      <li @click="router.push('/')">
                          <a
                              class="flex flex-row lg:flex-col items-center cursor-pointer p-4 lg:justify-center text-primary-emphasis border-l-2 border-primary-emphasis hover:border-surface-300 dark:hover:border-surface-500 duration-150 transition-colors"
                          >
                              <i class="pi pi-home mr-2 lg:mr-0 !text-base lg:!text-2xl !leading-none" />
                              <span class="font-medium inline text-base lg:text-sm lg:hidden">Home</span>
                          </a>
                      </li>
                      <li @click="router.push('/second')">
                          <a
                              class="flex flex-row lg:flex-col items-center cursor-pointer p-4 lg:justify-center text-surface-600 dark:text-surface-200 border-l-2 border-transparent hover:border-surface-300 dark:hover:border-surface-500 duration-150 transition-colors"
                          >
                              <i class="pi pi-search mr-2 lg:mr-0 !text-base lg:!text-2xl !leading-none" />
                              <span class="font-medium inline text-base lg:text-sm lg:hidden">Search</span>
                          </a>
                      </li>
                      <li>
                          <a
                              class="flex flex-row lg:flex-col items-center cursor-pointer p-4 lg:justify-center text-surface-600 dark:text-surface-200 border-l-2 border-transparent hover:border-surface-300 dark:hover:border-surface-500 duration-150 transition-colors"
                          >
                              <i class="pi pi-users mr-2 lg:mr-0 !text-base lg:!text-2xl !leading-none" />
                              <span class="font-medium inline text-base lg:text-sm lg:hidden">Team</span>
                          </a>
                      </li>

                      <li>
                          <a
                              class="flex flex-row lg:flex-col items-center cursor-pointer p-4 lg:justify-center text-surface-600 dark:text-surface-200 border-l-2 border-transparent hover:border-surface-300 dark:hover:border-surface-500 duration-150 transition-colors"
                          >
                              <i class="pi pi-calendar mr-2 lg:mr-0 !text-base lg:!text-2xl !leading-none" />
                              <span class="font-medium inline text-base lg:text-sm lg:hidden">Events</span>
                          </a>
                      </li>
                      <li>
                          <a
                              class="flex flex-row lg:flex-col items-center cursor-pointer p-4 lg:justify-center text-surface-600 dark:text-surface-200 border-l-2 border-transparent hover:border-surface-300 dark:hover:border-surface-500 duration-150 transition-colors"
                          >
                              <i class="pi pi-cog mr-2 lg:mr-0 !text-base lg:!text-2xl !leading-none" />
                              <span class="font-medium inline text-base lg:text-sm lg:hidden">Options</span>
                          </a>
                      </li>
                  </ul>
              </div>
              <div class="mt-auto">
                  <hr class="mx-4 border-t border-0 border-surface" />
                  <a
                      class="my-4 flex flex-row lg:flex-col items-center cursor-pointer p-4 lg:justify-center text-surface-600 dark:text-surface-200 border-l-2 border-transparent hover:border-surface-300 dark:hover:border-surface-500 duration-150 transition-colors"
                  >
                      <i class="pi pi-sign-out mr-2 lg:mr-0 text-base lg:!text-2xl leading-none text-primary" />
                      <span class="font-medium inline lg:hidden">Sign Out</span>
                  </a>
              </div>
          </div>
      </div>
      <div class="min-h-screen flex flex-col relative flex-auto">
          <div class="h-[60px] flex justify-between items-center px-8 bg-surface-0 dark:bg-surface-950 relative lg:static border-b border-surface">
              <div class="flex">
                  <a
                      v-styleclass="{
                          selector: '#app-sidebar-9',
                          enterFromClass: 'hidden',
                          enterActiveClass: 'animate-fadeinleft',
                          leaveToClass: 'hidden',
                          leaveActiveClass: 'animate-fadeoutleft',
                          hideOnOutsideClick: true
                      }"
                      class="cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 mr-4 mt-1"
                  >
                      <i class="pi pi-bars text-4xl" />
                  </a>
                  <IconField icon-position="left">
                      <InputIcon class="pi pi-search text-surface-700 dark:text-surface-100" />
                      <InputText type="text" class="border-0 w-40 sm:w-80" placeholder="Search" />
                  </IconField>
              </div>
              <a
                  v-styleclass="{
                      selector: '#topbarmenu',
                      enterFromClass: 'hidden',
                      enterActiveClass: 'animate-fadein',
                      leaveToClass: 'hidden',
                      leaveActiveClass: 'animate-fadeout',
                      hideOnOutsideClick: true
                  }"
                  class="cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 ml-auto"
              >
                  <i class="pi pi-ellipsis-v text-2xl" />
              </a>
              <ul
                  id="topbarmenu"
                  class="list-none p-0 m-0 hidden lg:flex lg:items-center select-none lg:flex-row lg:ml-auto bg-surface-0 dark:bg-surface-950 border lg:border-0 border-surface right-0 top-full z-10 shadow lg:shadow-none absolute lg:static"
              >
                  <li>
                      <a
                          class="flex p-4 lg:px-4 lg:py-2 items-center text-surface-600 dark:text-surface-200 hover:text-surface-900 dark:hover:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-700 font-medium rounded-border cursor-pointer duration-150 transition-colors"
                      >
                          <i class="pi pi-inbox text-base lg:!text-2xl leading-none mr-2 lg:mr-0" />
                          <span class="block lg:hidden font-medium">Inbox</span>
                      </a>
                  </li>
                  <li>
                      <a
                          class="flex p-4 lg:px-4 lg:py-2 items-center text-surface-600 dark:text-surface-200 hover:text-surface-900 dark:hover:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-700 font-medium rounded-border cursor-pointer duration-150 transition-colors"
                      >
                          <OverlayBadge severity="danger" class="mr-2 lg:mr-0">
                              <i class="pi pi-bell text-base lg:!text-2xl leading-none" />
                          </OverlayBadge>
                          <span class="block lg:hidden font-medium">Notifications</span>
                      </a>
                  </li>
                  <li class="border-t border-surface lg:border-t-0">
                      <a class="flex p-4 lg:px-4 lg:py-2 items-center hover:bg-surface-100 dark:hover:bg-surface-700 font-medium rounded-border cursor-pointer duration-150 transition-colors">
                          <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png" class="mr-4 lg:mr-0 w-8 h-8" />
                          <div class="block lg:hidden">
                              <div class="text-surface-900 dark:text-surface-0 font-medium">Amy Elsner</div>
                              <span class="text-surface-600 dark:text-surface-200 font-medium text-sm">Marketing Specialist</span>
                          </div>
                      </a>
                  </li>
              </ul>
              <a
                  v-styleclass="{
                      selector: '#rightsidebar',
                      enterFromClass: 'hidden',
                      enterActiveClass: 'animate-fadeinright',
                      leaveToClass: 'hidden',
                      leaveActiveClass: 'animate-fadeoutright',
                      hideOnOutsideClick: true
                  }"
                  class="cursor-pointer block text-surface-700 dark:text-surface-100 ml-4"
              >
                  <i class="pi pi-arrow-left text-2xl" />
              </a>
          </div>
          <div class="p-8 flex flex-auto">
            <slot/>
          </div>
          <div id="rightsidebar" class="top-[60px] h-[calc(100%-60px)] bg-surface-0 dark:bg-surface-900 shadow hidden absolute right-0 w-80 animate-duration-150 animate-ease-in-out">
              <div class="flex flex-col h-full p-6">
                  <span class="text-xl font-medium text-surface-900 dark:text-surface-0 mb-4">Right Sidebar</span>
                  <div class="border-2 border-dashed border-surface rounded-border bg-surface-0 dark:bg-surface-950 flex-auto" />
              </div>
          </div>
      </div>
  </div>
</template>
<script setup>
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import OverlayBadge from 'primevue/overlaybadge';
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
