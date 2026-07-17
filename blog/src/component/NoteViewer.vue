<template>
  <div class="py-8">
    <!-- 未选择笔记 -->
    <div
      v-if="!slug"
      class="flex flex-col items-center justify-center py-24 text-gray-400 dark:text-gray-500 select-none"
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" class="opacity-30 mb-4">
        <path d="M8 4h20l12 12v28H8V4z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
        <path d="M28 4v12h12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>
      <p class="text-sm">从左侧选择一篇笔记</p>
    </div>

    <!-- 加载中 -->
    <div v-else-if="loading" class="flex items-center justify-center py-24 text-sm text-gray-400 dark:text-gray-500">
      <svg class="animate-spin w-4 h-4 mr-2" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
      </svg>
      加载中…
    </div>

    <!-- 笔记内容 -->
    <article v-else class="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-sm border border-white/20 dark:border-gray-700/20 p-6 md:p-10">
      <!-- 标题 -->
      <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">{{ note?.title }}</h1>

      <!-- 标签 -->
      <div v-if="note?.tags?.length" class="flex flex-wrap gap-1.5 mb-6">
        <span
          v-for="tag in note.tags"
          :key="tag"
          class="inline-block px-2 py-0.5 text-xs rounded-full bg-pink-50 dark:bg-gray-700 text-pink-600 dark:text-gray-300 border border-pink-100 dark:border-gray-600"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Markdown 渲染 -->
      <div class="markdown-body" v-html="rendered" />
    </article>

    <!-- 评论区 -->
    <GiscusComments :slug="slug" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAppStore } from '@/store/index'
import { sqlocal } from '@/db/index'
import MarkdownIt from 'markdown-it'
import GiscusComments from './GiscusComments.vue'

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
})

const { activeNoteSlug } = useAppStore()
const slug = ref<string | null>(null)
const note = ref<{ title: string; content: string; tags: string[] } | null>(null)
const loading = ref(false)
const rendered = ref('')

watch(activeNoteSlug, async (val) => {
  slug.value = val
  if (!val) return

  loading.value = true
  try {
    const rows = await sqlocal.sql<{ title: string; content: string; tags_json: string }>(
      'SELECT title, content, tags_json FROM nodes WHERE slug = ? AND node_type = ?',
      val, 'note'
    )
    if (rows.length > 0) {
      const row = rows[0]!
      note.value = {
        title: row.title,
        content: row.content,
        tags: JSON.parse(row.tags_json || '[]'),
      }
      rendered.value = md.render(row.content)
    }
  } catch (e) {
    console.warn('[NoteViewer]', e)
  } finally {
    loading.value = false
  }
})
</script>

<style>
.markdown-body {
  color: #374151;
  line-height: 1.75;
}

.dark .markdown-body {
  color: #d1d5db;
}
.markdown-body h1 { font-size: 1.5rem; font-weight: 700; color: #111827; margin-top: 2rem; margin-bottom: 1rem; }
.markdown-body h2 { font-size: 1.25rem; font-weight: 600; color: #1f2937; margin-top: 1.5rem; margin-bottom: 0.75rem; }
.markdown-body h3 { font-size: 1.125rem; font-weight: 600; color: #1f2937; margin-top: 1.25rem; margin-bottom: 0.5rem; }
.markdown-body p { margin-bottom: 1rem; }
.markdown-body a { color: #2563eb; text-decoration: underline; }
.markdown-body a:hover { color: #1d4ed8; }
.markdown-body ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
.markdown-body ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1rem; }
.markdown-body li { margin-bottom: 0.25rem; }
.markdown-body code { padding: 0.125rem 0.375rem; border-radius: 0.25rem; background: #f3f4f6; font-size: 0.875rem; font-family: ui-monospace, monospace; color: #db2777; }
.markdown-body pre { padding: 1rem; border-radius: 0.5rem; background: #111827; color: #f3f4f6; overflow-x: auto; margin-bottom: 1rem; }
.markdown-body pre code { background: transparent; padding: 0; color: #f3f4f6; }
.markdown-body blockquote { padding-left: 1rem; border-left: 4px solid #d1d5db; color: #6b7280; font-style: italic; margin-bottom: 1rem; }
.markdown-body img { border-radius: 0.5rem; max-width: 100%; }
.markdown-body hr { margin: 2rem 0; border-color: #e5e7eb; }
.markdown-body table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; }
.markdown-body th { padding: 0.5rem 0.75rem; background: #f9fafb; text-align: left; font-size: 0.875rem; font-weight: 600; color: #374151; border: 1px solid #e5e7eb; }
.markdown-body td { padding: 0.5rem 0.75rem; font-size: 0.875rem; border: 1px solid #e5e7eb; }
.markdown-body strong { font-weight: 600; color: #111827; }
</style>
