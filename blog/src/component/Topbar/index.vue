<template>
    <header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3
           bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm
           dark:bg-gray-900/80 dark:border-gray-700/30">
        <!-- 左侧：侧边栏按钮 -->
        <button @click="toggleSidebar" class="flex items-center justify-center w-10 h-10 rounded-xl
             hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/10 dark:hover:text-gray-200 transition-colors text-gray-700 dark:text-gray-200" aria-label="菜单">
            <svg width="20" height="20" viewBox="0 0 48 48" fill="none" class="w-5 h-5">
              <path d="M8 16h32M8 24h32M8 32h32" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
        </button>

        <!-- 中间：站点标题 + 头像 -->
        <div @click="reload" class="flex items-center gap-3 cursor-pointer select-none
             hover:opacity-80 transition-opacity">
            <img src="/avatar.jpg" alt="avatar" class="w-7 h-7 rounded-full object-cover ring-2 ring-white/60 dark:ring-gray-600/60" />
            <span class="text-base font-medium text-gray-800 dark:text-gray-100 tracking-wide">
                欢迎来到image的小破站
            </span>
        </div>

        <!-- 主题切换 -->
        <button @click="toggleTheme" class="flex items-center justify-center w-10 h-10 rounded-xl
               hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-200"
               :aria-label="isDark ? '切换到亮色模式' : '切换到暗色模式'">
            <svg v-if="isDark" width="20" height="20" viewBox="0 0 48 48" fill="none" class="w-5 h-5">
              <circle cx="24" cy="24" r="10" stroke="currentColor" stroke-width="3"/>
              <path d="M24 4v4M24 40v4M4 24h4M40 24h4M9.86 9.86l2.83 2.83M35.31 35.31l2.83 2.83M9.86 38.14l2.83-2.83M35.31 12.69l2.83-2.83" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 48 48" fill="none" class="w-5 h-5">
              <path d="M28 6A18 18 0 1042 22 14 14 0 0128 6z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
            </svg>
        </button>

        <!-- 右侧：搜索栏 -->
        <SearchBar />
    </header>
</template>

<script setup lang="ts">
import SearchBar from '@/component/Searchbar.vue'
import { useAppStore } from '@/store/index'
import { useTheme } from '@/composables/useSakura'
const { toggleSidebar } = useAppStore()
const { isDark, toggleTheme } = useTheme()

const reload = () => window.location.reload()
</script>

<style scoped></style>