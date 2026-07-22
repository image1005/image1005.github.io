<script setup lang="ts">
withDefaults(defineProps<{
  text: string
}>(), {})
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center text-center px-4">
    <template v-for="(line, i) in text.split('\n')" :key="i">
      <p v-if="i === 0" class="text-4xl md:text-5xl font-bold text-text dark:text-white">
        {{ line }}
      </p>
      <p v-else class="text-3xl md:text-[3rem] font-extrabold mt-2 leading-tight text-text dark:text-white">
        {{ line }}
      </p>
    </template>
  </div>
</template>
