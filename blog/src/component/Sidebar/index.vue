<template>
  <Teleport to="body">
    <!-- 遮罩层 -->
    <Transition name="fade">
      <div
        v-if="sidebarOpen"
        @click="toggleSidebar"
        class="fixed inset-0 z-30 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
      />
    </Transition>

    <!-- 侧边栏面板 -->
    <Transition name="slide">
      <aside
        v-if="sidebarOpen"
        class="fixed left-0 top-0 z-40 h-full w-72
               bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700
               shadow-2xl shadow-black/10
               flex flex-col pt-16"
      >
        <!-- 头部 -->
        <div class="flex items-center justify-between px-4 h-16 border-b border-gray-100 dark:border-gray-800 shrink-0">
          <h2 class="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">笔记</h2>
          <button
            @click="toggleSidebar"
            class="flex items-center justify-center w-8 h-8 rounded-lg
                   hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/10 transition-colors text-gray-400 dark:text-gray-500"
          >
            <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
              <path d="M12 12l24 24M36 12l-24 24" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            </svg>
          </button>
        </div>

        <!-- 树形列表 -->
        <div class="flex-1 overflow-y-auto px-2 py-3">
          <div v-if="loading" class="flex items-center justify-center py-12 text-sm text-gray-400 dark:text-gray-500">
            加载中...
          </div>
          <div v-else-if="tree.length === 0" class="flex items-center justify-center py-12 text-sm text-gray-400 dark:text-gray-500">
            暂无笔记
          </div>
          <TreeNode
            v-for="node in tree"
            v-else
            :key="node.slug"
            :node="node"
            :depth="0"
            :active-slug="activeSlug"
            @select="onSelect"
          />
        </div>

        <!-- 不蒜子统计 -->
        <div class="shrink-0 border-t border-gray-100 dark:border-gray-800 px-4 py-3 text-xs text-gray-400 dark:text-gray-500 space-y-1">
          <div class="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span>总访问 <span id="busuanzi_value_site_pv">0</span> 次</span>
          </div>
          <div class="flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>访客 <span id="busuanzi_value_site_uv">0</span> 人</span>
          </div>
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAppStore } from '@/store/index'
import { sqlocal } from '@/db/index'
import TreeNode, { type TreeNodeData } from './TreeNode.vue'

const { sidebarOpen, toggleSidebar } = useAppStore()

const loading = ref(true)
const tree = ref<TreeNodeData[]>([])
const activeSlug = ref<string>()

interface DbNode {
  id: number
  slug: string
  title: string
  node_type: 'folder' | 'note'
  content: string
  tags_json: string
  parent_id: number | null
  sort_order: number
  created_at: string
}

/** 扁平列表 → 树形结构（通过 parent_id 匹配） */
function buildTree(rows: DbNode[]): TreeNodeData[] {
  const nodeMap = new Map<number, TreeNodeData>()
  const roots: TreeNodeData[] = []

  // 第一遍：创建所有节点
  for (const row of rows) {
    nodeMap.set(row.id, {
      slug: row.slug,
      title: row.title,
      nodeType: row.node_type,
      content: row.content,
      tags: JSON.parse(row.tags_json || '[]'),
      parentSlug: null,
      sortOrder: row.sort_order,
      createdAt: row.created_at,
      children: [],
    })
  }

  // 第二遍：建立父子关系
  for (const row of rows) {
    const node = nodeMap.get(row.id)!
    if (row.parent_id !== null) {
      const parent = nodeMap.get(row.parent_id)
      if (parent && parent.children) {
        parent.children.push(node)
      }
    } else {
      roots.push(node)
    }
  }

  return roots
}

async function fetchTree() {
  try {
    const rows = await sqlocal.sql<DbNode>(
      'SELECT id, slug, title, node_type, content, tags_json, parent_id, sort_order, created_at FROM nodes ORDER BY sort_order'
    )
    tree.value = buildTree(rows)
  } catch (e) {
    console.warn('[sidebar] 加载节点失败', e)
  } finally {
    loading.value = false
  }
}

function onSelect(slug: string) {
  activeSlug.value = slug
  toggleSidebar()
  const { activeNoteSlug } = useAppStore()
  activeNoteSlug.value = slug
}

onMounted(fetchTree)
</script>

<style scoped>
/* 遮罩层动画 */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 侧边栏滑入动画 */
.slide-enter-active {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-leave-active {
  transition: transform 0.2s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>