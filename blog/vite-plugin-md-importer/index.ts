import { readFileSync, existsSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { resolve, relative, extname, dirname, basename } from 'node:path'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'
import type { Plugin } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 动态导入 segmentit（纯 JS 中文分词）
let _segment: any = null
async function getSegment() {
  if (!_segment) {
    // @ts-expect-error - segmentit has no type declarations
    const pkg = await import('segmentit')
    const { Segment, useDefault } = pkg.default
    const seg = new Segment()
    useDefault(seg)
    _segment = seg
  }
  return _segment
}

/** 中文分词，去重 + 过滤短词 */
async function tokenize(text: string): Promise<string[]> {
  const seg = await getSegment()
  const words = seg.doSegment(text)
  const set = new Set<string>()
  for (const w of words) {
    const word = (w.w as string).trim()
    if (word.length >= 2) set.add(word) // 只保留 2 字以上
  }
  // 也保留单字符的中文/字母/数字
  for (const char of text) {
    if (/[\u4e00-\u9fff\w]/.test(char)) set.add(char)
  }
  return [...set]
}

interface TreeNode {
  slug: string
  title: string
  nodeType: 'folder' | 'note'
  content: string
  tags: string[]
  parentSlug: string | null
  sortOrder: number
  filePath?: string      // 仅 note 有
  hash?: string           // 仅 note 有
  createdAt: string
  tokens?: string[]       // 仅 note 有：分词结果
}

/** 计算 MD5 */
function md5(content: string): string {
  return createHash('md5').update(content, 'utf-8').digest('hex')
}

/** 相对路径 → slug */
function pathToSlug(rel: string): string {
  return rel.replace(/\.md$/, '').replace(/[/\\]/g, '-')
}

/** 父目录路径 → 父 slug */
function parentSlug(rel: string, baseDir: string): string | null {
  const dir = dirname(rel)
  return dir === '.' ? null : pathToSlug(dir)
}

/** 从文件名提取标题 */
function fileNameToTitle(filePath: string): string {
  return basename(filePath).replace(/\.md$/, '')
}

/**
 * 递归扫描目录，生成 flat 的树形节点列表
 */
function scanTree(dir: string, baseDir: string, parentRel: string, nodes: TreeNode[]) {
  const entries = readdirSync(dir, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  let sortIndex = 0
  for (const entry of entries) {
    const fullPath = resolve(dir, entry.name)
    const relPath = parentRel ? `${parentRel}/${entry.name}` : entry.name

    if (entry.isDirectory()) {
      // 文件夹节点
      const slug = pathToSlug(relPath)
      nodes.push({
        slug,
        title: entry.name,
        nodeType: 'folder',
        content: '',
        tags: [],
        parentSlug: parentRel ? pathToSlug(parentRel) : null,
        sortOrder: sortIndex++,
        createdAt: statSync(fullPath).birthtime.toISOString(),
      })
      // 递归子目录
      scanTree(fullPath, baseDir, relPath, nodes)
    } else if (entry.isFile() && extname(entry.name) === '.md') {
      // 笔记节点
      const raw = readFileSync(fullPath, 'utf-8')
      const hash = md5(raw)
      const parsed = matter(raw)
      const slug = pathToSlug(relPath)

      nodes.push({
        slug,
        title: parsed.data.title ?? fileNameToTitle(entry.name),
        nodeType: 'note',
        content: parsed.content,
        tags: parsed.data.tags ?? [],
        parentSlug: parentRel ? pathToSlug(parentRel) : null,
        sortOrder: sortIndex++,
        filePath: relPath.replace(/\\/g, '/'),
        hash,
        createdAt: parsed.data.created ?? statSync(fullPath).birthtime.toISOString(),
      })
    }
  }
}

export default function mdImporter(): Plugin {
  const root = resolve(__dirname, '..')

  async function syncNotes() {
    const notesDir = resolve(root, 'src/db/notes')
    const seedPath = resolve(root, 'src/db/notes.seed.json')

    if (!existsSync(notesDir)) {
      console.log('  ⏭ notes 目录不存在，跳过')
      return
    }

    console.log('\n  📝 扫描笔记目录...')
    const nodes: TreeNode[] = []
    scanTree(notesDir, notesDir, '', nodes)

    if (nodes.length === 0) {
      console.log('  ⏭ 笔记目录为空')
      return
    }

    // 对每个笔记节点进行中文分词
    for (const node of nodes) {
      if (node.nodeType === 'note') {
        const text = `${node.title} ${node.content} ${node.tags.join(' ')}`
        node.tokens = await tokenize(text)
      }
    }

    for (const node of nodes) {
      const icon = node.nodeType === 'folder' ? '📁' : '📄'
      const parent = node.parentSlug ? ` → ${node.parentSlug}` : ''
      console.log(`  ${icon} ${node.slug}${parent}`)
    }

    writeFileSync(seedPath, JSON.stringify(nodes, null, 2), 'utf-8')
    console.log(`  ✅ 种子文件已生成: ${nodes.length} 个节点`)
    console.log('')
  }

  return {
    name: 'vite-plugin-md-importer',
    enforce: 'pre',

    buildStart() {
      return syncNotes()
    },

    handleHotUpdate(ctx) {
      const file = ctx.file
      const normalized = file.replace(/\\/g, '/')
      if (normalized.includes('/notes/') && normalized.endsWith('.md')) {
        syncNotes()
      }
    },
  }
}
