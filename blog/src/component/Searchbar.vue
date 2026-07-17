<template>
  <div class="relative flex items-center">
    <!-- 搜索按钮 -->
    <button
      v-if="!searchbarOpen"
      @click="toggleSearchbar"
      class="flex items-center justify-center w-10 h-10 rounded-xl
             hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-200"
      aria-label="搜索"
    >
      <svg width="20" height="20" viewBox="0 0 48 48" fill="none" class="w-5 h-5">
        <circle cx="21" cy="21" r="13" stroke="currentColor" stroke-width="3"/>
        <path d="M30 30l11 11" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </button>

    <!-- 搜索框（展开后） -->
    <div
      v-else
      ref="containerRef"
      class="relative"
    >
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl
                  bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-600/60 shadow-sm
                  focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100
                  transition-all">
        <svg width="16" height="16" viewBox="0 0 48 48" fill="none" class="w-4 h-4 shrink-0 opacity-40 dark:opacity-60">
          <circle cx="21" cy="21" r="13" stroke="currentColor" stroke-width="3"/>
          <path d="M30 30l11 11" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
        </svg>
        <input
          ref="inputRef"
          v-model="searchQuery"
          type="text"
          placeholder="搜索笔记…"
          class="w-40 bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
          @input="onInput"
          @keydown.escape="clearSearch"
          @keydown.down.prevent="onArrowDown"
          @keydown.up.prevent="onArrowUp"
          @keydown.enter="onEnter"
        />
        <button
          @click="clearSearch"
          class="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        >ESC</button>
      </div>

      <!-- 搜索结果下拉 -->
      <Transition name="fade">
        <div
          v-if="showResults"
          class="absolute right-0 top-full mt-2 w-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl
                 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl shadow-black/5
                 overflow-hidden z-50"
        >
          <!-- 加载中 -->
          <div v-if="isSearching" class="flex items-center justify-center py-8 text-sm text-gray-400 dark:text-gray-500">
            <svg class="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            搜索中…
          </div>

          <!-- 无结果 -->
          <div v-else-if="searchResults.length === 0 && searchQuery" class="py-8 text-center text-sm text-gray-400 dark:text-gray-500">
            未找到相关笔记
          </div>

          <!-- 结果列表 -->
          <ul v-else class="max-h-80 overflow-y-auto divide-y divide-gray-100 dark:divide-gray-800">
            <li
              v-for="(item, idx) in searchResults"
              :key="item.slug"
              :class="[
                'px-4 py-3 cursor-pointer transition-colors',
                idx === activeIndex ? 'bg-blue-50 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
              ]"
              @click="selectResult(item)"
              @mouseenter="activeIndex = idx"
            >
              <div class="text-sm font-medium text-gray-800 dark:text-gray-100 truncate" v-html="highlight(item.title, searchQuery)" />
              <div class="text-xs text-gray-400 dark:text-gray-500 mt-0.5 line-clamp-2" v-html="highlight(item.content, searchQuery)" />
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useAppStore, type SearchResult } from '@/store/index'
import { highlight } from '@/db/search'

const {
  toggleSearchbar, search, clearSearch: storeClear,
  searchbarOpen, searchQuery, searchResults, isSearching, showResults,
} = useAppStore()

const inputRef = ref<HTMLInputElement>()
const containerRef = ref<HTMLElement>()
const activeIndex = ref(-1)
let debounceTimer: ReturnType<typeof setTimeout>

function onInput() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => search(searchQuery.value), 300)
}

function onArrowDown() {
  if (searchResults.value.length > 0) {
    activeIndex.value = Math.min(activeIndex.value + 1, searchResults.value.length - 1)
  }
}

function onArrowUp() {
  activeIndex.value = Math.max(activeIndex.value - 1, 0)
}

function onEnter() {
  if (activeIndex.value >= 0 && searchResults.value[activeIndex.value]) {
    selectResult(searchResults.value[activeIndex.value]!)
  }
}

function selectResult(item: SearchResult) {
  console.log('[search] selected:', item.slug)
  // TODO: 跳转到笔记详情
}

function clearSearch() {
  storeClear()
  activeIndex.value = -1
}

// 点击外部关闭
function onClickOutside(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    clearSearch()
  }
}

watch(searchbarOpen, async (val) => {
  if (val) {
    await nextTick()
    inputRef.value?.focus()
    nextTick(() => document.addEventListener('click', onClickOutside))
  } else {
    document.removeEventListener('click', onClickOutside)
  }
})

onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>