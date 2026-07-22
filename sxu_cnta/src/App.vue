<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'

const THEME_KEY = 'theme'
const isDark = ref(false)

const applyTheme = (dark: boolean) => {
  isDark.value = dark
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const toggleTheme = () => applyTheme(!isDark.value)

provide(THEME_KEY, { isDark, toggleTheme })

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark' || (saved === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    applyTheme(true)
  } else {
    applyTheme(false)
  }
})
</script>

<template>
  <!-- 底部暖光径向渐变层（模拟纸张底部反光） -->
  <div class="fixed bottom-0 left-0 right-0 pointer-events-none z-0" aria-hidden="true">
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1800px] h-[722px] opacity-40 dark:opacity-50"
      style="background: radial-gradient(50% 53% at 50% 100%, rgba(23,23,23,0.12) 0%, transparent 100%);"
    ></div>
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1800px] h-[307px] opacity-40 dark:opacity-50"
      style="background: radial-gradient(50% 53% at 50% 100%, rgba(23,23,23,0.12) 0%, transparent 100%);"
    ></div>
  </div>

  <NavBar />
  <main class="relative min-h-[calc(100vh-64px-140px)] mt-16">
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </main>
  <SiteFooter />
</template>
