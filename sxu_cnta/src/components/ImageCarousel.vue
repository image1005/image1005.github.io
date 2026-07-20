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
  <div v-if="images.length > 0" class="carousel-card" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <div class="carousel-card__header">
      <h3 v-if="title" class="carousel-card__title">{{ title }}</h3>
      <span class="carousel-card__counter">{{ currentIndex + 1 }} / {{ total }}</span>
    </div>

    <div class="carousel-card__viewport">
      <button class="carousel-card__btn carousel-card__btn--prev" @click="prev" :aria-label="'上一张'">
        ‹
      </button>

      <div class="carousel-card__slide">
        <Transition :name="direction === 'right' ? 'slide-right' : 'slide-left'" mode="out-in">
          <img
            :key="currentIndex"
            :src="images[currentIndex]"
            :alt="title ? `${title} - ${currentIndex + 1}` : `图片 ${currentIndex + 1}`"
            class="carousel-card__img"
          />
        </Transition>
      </div>

      <button class="carousel-card__btn carousel-card__btn--next" @click="next" :aria-label="'下一张'">
        ›
      </button>
    </div>

    <div v-if="total > 1" class="carousel-card__dots">
      <button
        v-for="(_, i) in images"
        :key="i"
        class="carousel-card__dot"
        :class="{ 'carousel-card__dot--active': i === currentIndex }"
        :aria-label="`第 ${i + 1} 张`"
        @click="goTo(i)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.carousel-card {
  border: 1px solid;
  border-radius: 8px;
  overflow: hidden;
}

.carousel-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  gap: 8px;
}

.carousel-card__title {
  font-size: 1rem;
  font-weight: 600;
}

.carousel-card__counter {
  font-size: 0.85rem;
  white-space: nowrap;
}

.carousel-card__viewport {
  position: relative;
  display: flex;
  align-items: center;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.carousel-card__slide {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

.carousel-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-card__btn {
  position: absolute;
  z-index: 2;
  width: 40px;
  height: 40px;
  border: 1px solid;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: inherit;
}

.carousel-card__btn--prev {
  left: 8px;
}

.carousel-card__btn--next {
  right: 8px;
}

.carousel-card__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
}

.carousel-card__dot {
  width: 10px;
  height: 10px;
  border: 1px solid;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  background: transparent;
  transition: background 0.3s ease;
}

.carousel-card__dot--active {
  background: currentColor;
}

/* ===== Slide Transitions ===== */
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
