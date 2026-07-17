import { createApp } from 'vue'
import App from './App.vue'
import '@/style/index.css'
import { seedIfEmpty } from '@/db/seed'

seedIfEmpty().then(() => {
  createApp(App).mount('#app')
})
