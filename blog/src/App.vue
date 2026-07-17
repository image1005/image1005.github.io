<template>
  <div class="min-h-screen">
    <Topbar />

    <main class="pt-16 px-6 max-w-4xl mx-auto">
      <NoteViewer />
    </main>

    <Sidebar />
    <live2d />
  </div>
</template>

<script setup lang="ts">
import Topbar from '@/component/Topbar/index.vue'
import Sidebar from '@/component/Sidebar/index.vue'
import Live2d from '@/component/live2d.vue'
import NoteViewer from '@/component/NoteViewer.vue'
</script>


<style scoped></style>
