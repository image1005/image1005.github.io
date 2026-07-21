<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const navItems = [
  { path: '/', label: '首页' },
  { path: '/tech', label: '技术部' },
  { path: '/volunteer', label: '志愿队' },
  { path: '/join', label: '加入我们' },
  { path: '/login', label: '登录' },
]

function isActive(path: string) {
  return route.path === path
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 h-16 bg-white border-b border-border z-50">
    <div class="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2.5 text-lg font-bold text-text no-underline" @click="closeMenu">
        <img class="w-8 h-8 object-contain" src="/logo.png" alt="CNTA Logo" />
        <span>CNTA</span>
      </RouterLink>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="px-4 py-1.5 text-[15px] font-medium text-text-secondary no-underline hover:text-text transition-colors"
          :class="{ '!text-text underline underline-offset-[6px]': isActive(item.path) }"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        :class="{ 'gap-0': menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="切换菜单"
      >
        <span
          class="block w-6 h-0.5 bg-current transition-transform"
          :class="{ 'rotate-45 translate-y-[1px]': menuOpen }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-current transition-opacity"
          :class="{ 'opacity-0': menuOpen }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-current transition-transform"
          :class="{ '-rotate-45 -translate-y-[4px]': menuOpen }"
        ></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      class="md:hidden fixed top-16 left-0 right-0 bg-white border-b border-border flex flex-col px-6 py-4 gap-1 transition-all duration-200"
      :class="menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'"
    >
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="w-full px-4 py-3 text-[17px] font-medium text-text-secondary no-underline hover:text-text"
        :class="{ '!text-text underline underline-offset-[6px]': isActive(item.path) }"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </nav>
</template>
