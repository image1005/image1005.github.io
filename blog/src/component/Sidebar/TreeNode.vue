<template>
  <div>
    <!-- 文件夹节点 -->
    <div v-if="node.nodeType === 'folder'">
      <button
        @click="expanded = !expanded"
        class="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm
               hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/10 transition-colors text-left"
        :style="{ paddingLeft: depth * 16 + 8 + 'px' }"
      >
        <!-- 展开/折叠箭头 -->
        <svg
          width="12" height="12" viewBox="0 0 48 48" fill="none"
          class="shrink-0 transition-transform duration-150"
          :class="expanded ? 'rotate-90' : ''"
        >
          <path d="M18 12l12 12-12 12" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- 文件夹图标 -->
        <svg width="16" height="16" viewBox="0 0 48 48" fill="none" class="shrink-0 text-yellow-500">
          <path d="M6 8h15l5 6h16v26H6V8z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span class="text-gray-700 dark:text-gray-300 font-medium truncate">{{ node.title }}</span>
      </button>

      <!-- 子节点 -->
      <div v-show="expanded">
        <TreeNode
          v-for="child in children"
          :key="child.slug"
          :node="child"
          :depth="depth + 1"
        />
      </div>
    </div>

    <!-- 笔记节点 -->
    <button
      v-else
      @click="selectNode"
      class="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm
             hover:bg-blue-50 dark:hover:bg-gray-700 active:bg-blue-100 dark:active:bg-gray-600 transition-colors text-left"
      :class="{ 'bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-gray-100 font-medium': isActive }"
      :style="{ paddingLeft: depth * 16 + 8 + 'px' }"
    >
      <!-- 文件图标 -->
      <svg width="16" height="16" viewBox="0 0 48 48" fill="none" class="shrink-0 text-blue-500">
        <path d="M8 4h20l12 12v28H8V4z" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2"/>
        <path d="M28 4v12h12" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
      </svg>
      <span class="truncate dark:text-gray-100">{{ node.title }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

export interface TreeNodeData {
  slug: string
  title: string
  nodeType: 'folder' | 'note'
  content: string
  tags: string[]
  parentSlug: string | null
  sortOrder: number
  createdAt: string
  children?: TreeNodeData[]
}

const props = defineProps<{
  node: TreeNodeData
  depth: number
  activeSlug?: string
}>()

const emit = defineEmits<{
  select: [slug: string]
}>()

const expanded = ref(true)
const isActive = computed(() => props.activeSlug === props.node.slug)
const children = computed(() => props.node.children ?? [])

function selectNode() {
  emit('select', props.node.slug)
}

defineOptions({ name: 'TreeNode' })
</script>
