<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main class="main-content">
    <router-view />
  </main>
  <SiteFooter />
</template>

<style scoped>
.main-content {
  min-height: calc(100vh - var(--nav-height) - 140px);
}
</style>
