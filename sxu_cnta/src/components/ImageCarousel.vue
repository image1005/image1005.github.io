<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    images: string[]
    title?: string
  }>(),
  { title: '' },
)

const currentIndex = ref(0)
const total = computed(() => props.images.length)
const isPaused = ref(false)
const direction = ref<'left' | 'right'>('right')

let timer: ReturnType<typeof setInterval> | null = null

function startTimer() {
  stopTimer()
  if (total.value > 1) {
    timer = setInterval(() => {
      if (!isPaused.value) {
        direction.value = 'right'
        currentIndex.value = (currentIndex.value + 1) % total.value
      }
    }, 3000)
  }
}

function stopTimer() {
  if (timer !== null) {
    clearInterval(timer)
    timer = null
  }
}

function resetTimer() {
  startTimer()
}

function prev() {
  direction.value = 'left'
  currentIndex.value = (currentIndex.value - 1 + total.value) % total.value
  resetTimer()
}

function next() {
  direction.value = 'right'
  currentIndex.value = (currentIndex.value + 1) % total.value
  resetTimer()
}

function goTo(index: number) {
  direction.value = index > currentIndex.value ? 'right' : 'left'
  currentIndex.value = index
  resetTimer()
}

function onMouseEnter() {
  isPaused.value = true
}

function onMouseLeave() {
  isPaused.value = false
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<template>
  <div v-if="images.length > 0" class="border border-border dark:border-neutral-700 rounded-md overflow-hidden" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="flex items-center justify-between px-4 py-3 gap-2">
      <h3 v-if="title" class="text-base font-semibold text-text dark:text-white">{{ title }}</h3>
      <span class="text-sm text-text-secondary dark:text-gray-400 whitespace-nowrap">{{ currentIndex + 1 }} / {{ total }}</span>
    </div>

    <div class="relative flex items-center aspect-[4/3] overflow-hidden bg-bg-alt dark:bg-black">
      <button
        class="absolute z-[2] left-2 w-10 h-10 rounded-full border border-border dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center text-2xl leading-none cursor-pointer hover:bg-bg-alt dark:hover:bg-neutral-700 transition-colors text-text dark:text-white"
        @click="prev"
        :aria-label="'上一张'"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      <div class="relative flex-1 h-full overflow-hidden">
        <Transition :name="direction === 'right' ? 'slide-right' : 'slide-left'" mode="out-in">
          <img
            :key="currentIndex"
            :src="images[currentIndex]"
            :alt="title ? `${title} - ${currentIndex + 1}` : `图片 ${currentIndex + 1}`"
            class="w-full h-full object-cover block"
          />
        </Transition>
      </div>

      <button
        class="absolute z-[2] right-2 w-10 h-10 rounded-full border border-border dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center text-2xl leading-none cursor-pointer hover:bg-bg-alt dark:hover:bg-neutral-700 transition-colors text-text dark:text-white"
        @click="next"
        :aria-label="'下一张'"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>

    <div v-if="total > 1" class="flex justify-center gap-2 px-4 py-3">
      <button
        v-for="(_, i) in images"
        :key="i"
        class="w-2.5 h-2.5 rounded-full border border-border dark:border-neutral-700 cursor-pointer p-0 transition-colors"
        :class="i === currentIndex ? 'bg-text dark:bg-white border-text dark:border-white' : 'bg-transparent'"
        :aria-label="`第 ${i + 1} 张`"
        @click="goTo(i)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  inset: 0;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
