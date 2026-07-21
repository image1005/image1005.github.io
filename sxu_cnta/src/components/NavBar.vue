<script setup lang="ts">
import { inject, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

interface ThemeContext {
  isDark: { value: boolean }
  toggleTheme: () => void
}

const route = useRoute()
const menuOpen = ref(false)

const theme = inject<ThemeContext>('theme')

const navItems = [
  { path: '/', label: '首页' },
  { path: '/tech', label: '技术部' },
  { path: '/volunteer', label: '志愿队' },
  { path: '/ai', label: 'Ai助手' },
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
  <nav class="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-neutral-900 border-b border-border dark:border-neutral-700 z-50">
    <div class="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-2.5 text-lg font-bold text-text dark:text-white no-underline" @click="closeMenu">
        <img class="w-8 h-8 object-contain" src="/logo.png" alt="CNTA Logo" />
        <span>CNTA</span>
      </RouterLink>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-1">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="px-4 py-1.5 text-[15px] font-medium text-text-secondary dark:text-gray-300 no-underline hover:text-text dark:hover:text-white transition-colors"
          :class="{ '!text-text dark:!text-white underline underline-offset-[6px]': isActive(item.path) }"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>

        <!-- Theme toggle -->
        <button
          v-if="theme"
          @click="theme.toggleTheme()"
          class="ml-3 w-9 h-9 flex items-center justify-center rounded-lg text-text-muted dark:text-gray-400 hover:text-text dark:hover:text-white hover:bg-bg-alt dark:hover:bg-neutral-700 transition-all"
          :title="theme.isDark.value ? '切换至浅色模式' : '切换至深色模式'"
        >
          <!-- Sun icon (shown in dark mode, click to switch to light) -->
          <svg v-if="theme.isDark.value" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <!-- Moon icon (shown in light mode, click to switch to dark) -->
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        :class="{ 'gap-0': menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="切换菜单"
      >
        <span
          class="block w-6 h-0.5 bg-current text-text dark:text-white transition-transform"
          :class="{ 'rotate-45 translate-y-[1px]': menuOpen }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-current text-text dark:text-white transition-opacity"
          :class="{ 'opacity-0': menuOpen }"
        ></span>
        <span
          class="block w-6 h-0.5 bg-current text-text dark:text-white transition-transform"
          :class="{ '-rotate-45 -translate-y-[4px]': menuOpen }"
        ></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      class="md:hidden fixed top-16 left-0 right-0 bg-white dark:bg-neutral-900 border-b border-border dark:border-neutral-700 flex flex-col px-6 py-4 gap-1 transition-all duration-200"
      :class="menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'"
    >
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="w-full px-4 py-3 text-[17px] font-medium text-text-secondary dark:text-gray-300 no-underline hover:text-text dark:hover:text-white"
        :class="{ '!text-text dark:!text-white underline underline-offset-[6px]': isActive(item.path) }"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>
      <!-- Mobile theme toggle -->
      <button
        v-if="theme"
        @click="theme.toggleTheme(); closeMenu()"
        class="w-full px-4 py-3 text-left text-[17px] font-medium text-text-secondary dark:text-gray-300 hover:text-text dark:hover:text-white transition-colors flex items-center gap-2"
      >
        <svg v-if="theme.isDark.value" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        {{ theme.isDark.value ? '浅色模式' : '深色模式' }}
      </button>
    </div>
  </nav>
</template>
