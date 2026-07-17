<template>
  <section v-if="configured && slug" class="giscus-wrapper pt-10">
    <div ref="containerRef" />
  </section>

  <!-- 未配置提示 -->
  <section
    v-else-if="!configured && slug"
    class="giscus-wrapper pt-10 text-center text-sm text-gray-400 dark:text-gray-500 select-none"
  >
    <hr class="mb-8 border-gray-100 dark:border-gray-800" />
    <p>💬 评论区待配置</p>
    <p class="mt-1">请在项目根目录创建 <code>.env</code> 文件，参考 <code>.env.example</code> 填写 Giscus 配置。</p>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useTheme } from '@/composables/useSakura'

const props = defineProps<{ slug: string | null }>()

const containerRef = ref<HTMLDivElement>()
const giscusReady = ref(false)

// 从环境变量读取 Giscus 配置
const repo  = import.meta.env.VITE_GISCUS_REPO as string | undefined
const repoId = import.meta.env.VITE_GISCUS_REPO_ID as string | undefined
const category = import.meta.env.VITE_GISCUS_CATEGORY as string | undefined
const categoryId = import.meta.env.VITE_GISCUS_CATEGORY_ID as string | undefined

const configured = !!(repo && repoId && category && categoryId)
const { isDark } = useTheme()

/** 标记脚本是否已添加到 DOM（全局只需添加一次） */
let scriptAdded = false

/** 监听 Giscus iframe 就绪消息 */
function onMessage(e: MessageEvent) {
  if (e.origin !== 'https://giscus.app') return
  if (e.data?.giscus?.discussion) {
    giscusReady.value = true
  }
}

onMounted(() => {
  window.addEventListener('message', onMessage)
  if (configured && props.slug) {
    initGiscus(props.slug)
  }
})

// 监听主题变化，刷新 Giscus
watch(isDark, () => {
  const iframe = document.querySelector('.giscus-frame') as HTMLIFrameElement | null
  if (iframe) {
    iframe.contentWindow?.postMessage({ giscus: { setConfig: { theme: isDark.value ? 'dark' : 'light' } } }, 'https://giscus.app')
  }
})

onUnmounted(() => {
  window.removeEventListener('message', onMessage)
})

watch(() => props.slug, (newSlug) => {
  if (!configured || !newSlug) return
  if (!scriptAdded) {
    initGiscus(newSlug)
    return
  }
  // 已初始化 → 通过 postMessage 切换讨论
  updateTerm(newSlug)
})

/** 首次初始化 Giscus */
function initGiscus(term: string) {
  if (scriptAdded) {
    updateTerm(term)
    return
  }
  nextTick(() => {
    if (!containerRef.value) return
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', repo!)
    script.setAttribute('data-repo-id', repoId!)
    script.setAttribute('data-category', category!)
    script.setAttribute('data-category-id', categoryId!)
    script.setAttribute('data-mapping', 'specific')
    script.setAttribute('data-term', term)
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
    script.setAttribute('data-lang', 'zh-CN')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true
    containerRef.value.appendChild(script)
    scriptAdded = true
    // 兜底：3 秒后标记就绪
    setTimeout(() => { giscusReady.value = true }, 3000)
  })
}

/** 切换讨论主题（SPA 场景） */
function updateTerm(term: string) {
  const post = () => {
    const iframe = document.querySelector<HTMLIFrameElement>('.giscus-frame')
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { term } } },
        'https://giscus.app',
      )
      return true
    }
    return false
  }

  // 尝试立即发送，若 iframe 未就绪则等就绪消息后重试
  if (!post()) {
    const handler = (e: MessageEvent) => {
      if (e.origin !== 'https://giscus.app') return
      if (e.data?.giscus?.discussion) {
        window.removeEventListener('message', handler)
        post()
      }
    }
    window.addEventListener('message', handler)
  }
}
</script>

<style scoped>
.giscus-wrapper {
  min-height: 200px;
}
</style>
