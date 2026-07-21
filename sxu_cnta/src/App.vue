<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue'
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
  <NavBar />
  <main class="min-h-[calc(100vh-64px-140px)] mt-16">
    <router-view v-slot="{ Component }">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </router-view>
  </main>
  <SiteFooter />
</template>
