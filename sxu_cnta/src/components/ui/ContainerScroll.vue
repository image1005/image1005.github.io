<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScroll, useTransform, motion } from 'motion-v'

defineProps<{
  titleComponent?: string
}>()

const containerRef = ref<HTMLDivElement>()
const { scrollYProgress } = useScroll({
  target: containerRef,
})
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const scaleDimensions = () => (isMobile.value ? [0.7, 0.9] : [1.05, 1])

const rotate = useTransform(scrollYProgress, [0, 0.25], [15, 0])
const scale = useTransform(scrollYProgress, [0, 0.25], scaleDimensions())
const translateY = useTransform(scrollYProgress, [0, 0.25], [0, -100])
</script>

<template>
  <div
    ref="containerRef"
    class="min-h-[60rem] md:min-h-[80rem] flex flex-col items-center relative p-2 md:p-20"
  >
    <div class="w-full relative" style="perspective: 1000px">
      <!-- 标题区：居中于视口 -->
      <div class="min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center py-10 md:py-16">
        <motion.div
          :style="{ translateY }"
          class="max-w-5xl mx-auto text-center"
        >
          <slot name="title">{{ titleComponent }}</slot>
        </motion.div>
      </div>

      <!-- 卡片插槽 -->
      <motion.div
        :style="{
          rotateX: rotate,
          scale,
          boxShadow:
            '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
        }"
        class="max-w-5xl mt-4 mx-auto w-full min-h-[30rem] md:min-h-[40rem] border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl"
      >
        <div
          class="w-full rounded-2xl bg-[#f5f0e8] dark:bg-zinc-900 md:rounded-2xl md:p-4"
        >
          <slot />
        </div>
      </motion.div>
    </div>
  </div>
</template>
