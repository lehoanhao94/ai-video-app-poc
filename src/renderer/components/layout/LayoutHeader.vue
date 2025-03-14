<template>
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
      <ul
        class="list-none p-0 m-0 hidden lg:flex lg:items-center select-none lg:flex-row bg-surface-0 dark:bg-surface-950 border lg:border-0 border-surface right-0 top-full z-10 shadow lg:shadow-none absolute lg:static"
      >
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
          <a
            class="flex p-4 lg:px-4 lg:py-2 items-center hover:bg-surface-100 dark:hover:bg-surface-700 font-medium rounded-border cursor-pointer duration-150 transition-colors"
          >
            <img
              src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-6.png"
              class="mr-4 lg:mr-0 w-8 h-8"
            />
            <div class="block lg:hidden">
              <div class="text-surface-900 dark:text-surface-0 font-medium">Josephine Lillard</div>
              <span class="text-surface-600 dark:text-surface-200 font-medium text-sm"
                >Marketing Specialist</span
              >
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
