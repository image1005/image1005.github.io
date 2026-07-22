<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ArrowRight } from '@lucide/vue'
import { cn } from '@/lib/utils'

interface Props {
  text?: string
  to?: string
  href?: string
  variant?: 'primary' | 'secondary'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Button',
  variant: 'primary',
})
</script>

<template>
  <!-- RouterLink mode -->
  <RouterLink
    v-if="to"
    :to="to"
    :class="
      cn(
        'group relative inline-flex w-auto min-w-[128px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 px-8 py-3 text-center font-semibold no-underline transition-colors',
        props.class,
      )
    "
  >
    <!-- 默认边框和背景 -->
    <span
      class="absolute inset-0 rounded-full border-2 transition-colors duration-[400ms]"
      :class="
        props.variant === 'primary'
          ? 'border-black bg-black dark:border-white dark:bg-white'
          : 'border-black bg-white dark:border-white dark:bg-transparent'
      "
    />

    <!-- 悬停时扩散的圆点 -->
    <span
      class="absolute right-[12%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 scale-100 rounded-full transition-all duration-[400ms] ease-out group-hover:right-0 group-hover:top-0 group-hover:translate-y-0 group-hover:h-full group-hover:w-full group-hover:rounded-full group-hover:scale-100"
      :class="
        props.variant === 'primary'
          ? 'bg-white dark:bg-black'
          : 'bg-black dark:bg-white'
      "
    />

    <!-- 文字 + 箭头，始终可见 -->
    <span
      class="relative z-10 inline-flex items-center transition-transform duration-[400ms] ease-out group-hover:-translate-x-[10px]"
    >
      <span
        class="transition-colors duration-[400ms]"
        :class="
          props.variant === 'primary'
            ? 'text-white group-hover:text-black dark:text-black dark:group-hover:text-white'
            : 'text-black group-hover:text-white dark:text-white dark:group-hover:text-black'
        "
      >
        {{ text }}
      </span>
      <span
        class="ml-0 inline-flex w-0 overflow-hidden opacity-0 transition-all duration-[400ms] ease-out group-hover:ml-2 group-hover:w-[18px] group-hover:opacity-100"
        :class="
          props.variant === 'primary'
            ? 'text-black dark:text-white'
            : 'text-white dark:text-black'
        "
      >
        <ArrowRight :size="18" />
      </span>
    </span>
  </RouterLink>

  <!-- External link mode -->
  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="
      cn(
        'group relative inline-flex w-auto min-w-[128px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 px-8 py-3 text-center font-semibold no-underline transition-colors',
        props.class,
      )
    "
  >
    <span
      class="absolute inset-0 rounded-full border-2 transition-colors duration-[400ms]"
      :class="
        props.variant === 'primary'
          ? 'border-black bg-black dark:border-white dark:bg-white'
          : 'border-black bg-white dark:border-white dark:bg-transparent'
      "
    />

    <span
      class="absolute right-[12%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 scale-100 rounded-full transition-all duration-[400ms] ease-out group-hover:right-0 group-hover:top-0 group-hover:translate-y-0 group-hover:h-full group-hover:w-full group-hover:rounded-full group-hover:scale-100"
      :class="
        props.variant === 'primary'
          ? 'bg-white dark:bg-black'
          : 'bg-black dark:bg-white'
      "
    />

    <span
      class="relative z-10 inline-flex items-center transition-transform duration-[400ms] ease-out group-hover:-translate-x-[10px]"
    >
      <span
        class="transition-colors duration-[400ms]"
        :class="
          props.variant === 'primary'
            ? 'text-white group-hover:text-black dark:text-black dark:group-hover:text-white'
            : 'text-black group-hover:text-white dark:text-white dark:group-hover:text-black'
        "
      >
        {{ text }}
      </span>
      <span
        class="ml-0 inline-flex w-0 overflow-hidden opacity-0 transition-all duration-[400ms] ease-out group-hover:ml-2 group-hover:w-[18px] group-hover:opacity-100"
        :class="
          props.variant === 'primary'
            ? 'text-black dark:text-white'
            : 'text-white dark:text-black'
        "
      >
        <ArrowRight :size="18" />
      </span>
    </span>
  </a>

  <!-- Button mode -->
  <button
    v-else
    :class="
      cn(
        'group relative inline-flex w-auto min-w-[128px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 px-8 py-3 text-center font-semibold transition-colors',
        props.class,
      )
    "
  >
    <span
      class="absolute inset-0 rounded-full border-2 transition-colors duration-[400ms]"
      :class="
        props.variant === 'primary'
          ? 'border-black bg-black dark:border-white dark:bg-white'
          : 'border-white bg-white dark:border-white dark:bg-transparent'
      "
    />

    <span
      class="absolute right-[12%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 scale-100 rounded-full transition-all duration-[400ms] ease-out group-hover:right-0 group-hover:top-0 group-hover:translate-y-0 group-hover:h-full group-hover:w-full group-hover:rounded-full group-hover:scale-100"
      :class="
        props.variant === 'primary'
          ? 'bg-white dark:bg-black'
          : 'bg-black dark:bg-white'
      "
    />

    <span
      class="relative z-10 inline-flex items-center transition-transform duration-[400ms] ease-out group-hover:-translate-x-[10px]"
    >
      <span
        class="transition-colors duration-[400ms]"
        :class="
          props.variant === 'primary'
            ? 'text-white group-hover:text-black dark:text-black dark:group-hover:text-white'
            : 'text-black group-hover:text-white dark:text-white dark:group-hover:text-black'
        "
      >
        {{ text }}
      </span>
      <span
        class="ml-0 inline-flex w-0 overflow-hidden opacity-0 transition-all duration-[400ms] ease-out group-hover:ml-2 group-hover:w-[18px] group-hover:opacity-100"
        :class="
          props.variant === 'primary'
            ? 'text-black dark:text-white'
            : 'text-white dark:text-black'
        "
      >
        <ArrowRight :size="18" />
      </span>
    </span>
  </button>
</template>
