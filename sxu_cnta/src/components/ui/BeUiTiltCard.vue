<script setup lang="ts">
import { ref, computed } from 'vue'

interface TiltCardProps {
  max?: number
  glare?: boolean
  class?: string
}

const props = withDefaults(defineProps<TiltCardProps>(), {
  max: 12,
  glare: true,
})

const cardRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)
const glareX = ref(50)
const glareY = ref(50)
const isHovering = ref(false)

function onMove(e: MouseEvent) {
  const el = cardRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height
  rotateY.value = (px - 0.5) * props.max
  rotateX.value = (0.5 - py) * props.max
  glareX.value = px * 100
  glareY.value = py * 100
  isHovering.value = true
}

function onLeave() {
  rotateX.value = 0
  rotateY.value = 0
  isHovering.value = false
}

const transformStr = computed(
  () => `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`,
)

const glareBg = computed(
  () =>
    `radial-gradient(circle at ${glareX.value}% ${glareY.value}%, rgba(200,170,120,0.55), transparent 50%)`,
)

const cardStyle = computed(() => ({
  transform: transformStr.value,
  transformStyle: 'preserve-3d' as const,
  transition: isHovering.value
    ? 'none'
    : 'transform 400ms ease-out, box-shadow 400ms ease-out',
  willChange: 'transform' as const,
  boxShadow: isHovering.value
    ? '0 4px 24px rgba(0,0,0,0.10)'
    : 'none',
}))
</script>

<template>
  <div
    ref="cardRef"
    @mousemove="onMove"
    @mouseleave="onLeave"
    :style="cardStyle"
    :class="props.class"
  >
    <slot />
    <div
      v-if="props.glare && isHovering"
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 opacity-[0.10]"
      :style="{ background: glareBg }"
    />
  </div>
</template>
