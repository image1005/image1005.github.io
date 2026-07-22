<script setup lang="ts">
import { Sun, Moon } from '@lucide/vue'
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
  <nav
    class="fixed top-0 left-0 right-0 h-16 z-50"
    :style="{
      backgroundColor: theme?.isDark.value ? 'rgba(18,20,26,0.85)' : 'rgba(250,247,242,0.85)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--color-border)',
      boxShadow: theme?.isDark.value
        ? '0.36px 0.48px 0.6px -0.94px rgba(0,0,0,0.4), 1.09px 1.45px 1.81px -1.88px rgba(0,0,0,0.35), 2.87px 3.83px 4.79px -2.81px rgba(0,0,0,0.3), 9px 12px 15px -3.75px rgba(0,0,0,0.15)'
        : '0.36px 0.48px 0.6px -0.94px rgba(0,0,0,0.06), 1.09px 1.45px 1.81px -1.88px rgba(0,0,0,0.05), 2.87px 3.83px 4.79px -2.81px rgba(0,0,0,0.04), 9px 12px 15px -3.75px rgba(0,0,0,0.02)'
    }"
  >
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
          class="px-4 py-1.5 text-[15px] font-medium text-text-secondary dark:text-gray-300 no-underline hover:text-text dark:hover:text-white transition-colors rounded-md"
          :class="{ '!text-text dark:!text-white bg-surface-hover dark:bg-surface-hover': isActive(item.path) }"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>

        <!-- Theme toggle -->
        <button
          v-if="theme"
          @click="theme.toggleTheme()"
          class="ml-3 w-9 h-9 flex items-center justify-center rounded-lg text-text-muted dark:text-gray-400 hover:text-text dark:hover:text-white hover:bg-surface-hover dark:hover:bg-surface-hover transition-all"
          :title="theme.isDark.value ? '切换至浅色模式' : '切换至深色模式'"
        >
          <Sun v-if="theme.isDark.value" :size="20" />
          <Moon v-else :size="20" />
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
      class="md:hidden fixed top-16 left-0 right-0 flex flex-col px-6 py-4 gap-1 transition-all duration-200"
      :style="{
        backgroundColor: theme?.isDark.value ? 'rgba(18,20,26,0.95)' : 'rgba(250,247,242,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--color-border)',
      }"
      :class="menuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'"
    >
      <RouterLink
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="w-full px-4 py-3 text-[17px] font-medium text-text-secondary dark:text-gray-300 no-underline hover:text-text dark:hover:text-white rounded-md"
        :class="{ '!text-text dark:!text-white bg-surface-hover dark:bg-surface-hover': isActive(item.path) }"
        @click="closeMenu"
      >
        {{ item.label }}
      </RouterLink>
      <!-- Mobile theme toggle -->
      <button
        v-if="theme"
        @click="theme.toggleTheme(); closeMenu()"
        class="w-full px-4 py-3 text-left text-[17px] font-medium text-text-secondary dark:text-gray-300 hover:text-text dark:hover:text-white transition-colors flex items-center gap-2 rounded-md"
      >
        <Sun v-if="theme.isDark.value" :size="18" />
        <Moon v-else :size="18" />
        {{ theme.isDark.value ? '浅色模式' : '深色模式' }}
      </button>
    </div>
  </nav>
</template>
