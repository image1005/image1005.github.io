import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import mdImporter from './vite-plugin-md-importer/index'

export default defineConfig({
  base: '/blog/dist/',
  plugins: [
    vue(),
    vueDevTools(),
    mdImporter(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
