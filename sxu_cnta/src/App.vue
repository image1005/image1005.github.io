<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main class="min-h-[calc(100vh-64px-140px)] mt-16">
    <router-view />
  </main>
  <SiteFooter />
</template>
