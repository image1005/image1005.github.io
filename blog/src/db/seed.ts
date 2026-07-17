import { sqlocal } from './index'

let _seeded = false

async function ensureTables() {
  // 清理旧表
  await sqlocal.sql('DROP TABLE IF EXISTS posts')
  await sqlocal.sql('DROP TABLE IF EXISTS post_tags')

  await sqlocal.sql('DROP TABLE IF EXISTS nodes_fts')

  await sqlocal.sql(`CREATE TABLE IF NOT EXISTS nodes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    node_type TEXT NOT NULL DEFAULT 'note',
    content TEXT NOT NULL DEFAULT '',
    tags_json TEXT NOT NULL DEFAULT '[]',
    tokens_json TEXT NOT NULL DEFAULT '[]',
    parent_id INTEGER,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`)

  await sqlocal.sql(`CREATE VIRTUAL TABLE IF NOT EXISTS nodes_fts USING fts5(
    slug, title, content, tokens,
    tokenize='unicode61'
  )`)

  await sqlocal.sql(`CREATE TABLE IF NOT EXISTS file_tracks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    file_path TEXT UNIQUE NOT NULL,
    hash TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  )`)
}

interface SeedNode {
  slug: string
  title: string
  nodeType: 'folder' | 'note'
  content: string
  tags: string[]
  tokens?: string[]
  parentSlug: string | null
  sortOrder: number
  filePath?: string
  hash?: string
  createdAt: string
}

export async function seedIfEmpty() {
  if (_seeded) return
  await ensureTables()

  // 加载种子 JSON
  let seedNodes: SeedNode[]
  try {
    seedNodes = (await import('./notes.seed.json')).default as SeedNode[]
  } catch {
    return
  }
  if (!seedNodes || seedNodes.length === 0) return

  // 读取已有 file_tracks（仅 note 类型才有）
  const existing = await sqlocal.sql<{ file_path: string; hash: string }>(
    'SELECT file_path, hash FROM file_tracks'
  )
  const trackMap = new Map(existing.map(r => [r.file_path, r.hash]))

  // 建立 slug → id 映射（先插父节点，确保父 id 就绪）
  const slugToId = new Map<string, number>()
  const getParentId = (parentSlug: string | null): number | null =>
    parentSlug ? slugToId.get(parentSlug) ?? null : null

  // 重建 FTS5 索引
  await sqlocal.sql('DELETE FROM nodes_fts')

  let added = 0, updated = 0, skipped = 0

  for (const node of seedNodes) {
    const parentId = getParentId(node.parentSlug)
    const tokens = node.tokens?.join(' ') ?? ''

    await sqlocal.sql(
      `INSERT OR REPLACE INTO nodes (slug, title, node_type, content, tags_json, tokens_json, parent_id, sort_order, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)`,
      node.slug, node.title, node.nodeType, node.content,
      JSON.stringify(node.tags), JSON.stringify(node.tokens || []),
      parentId, node.sortOrder, node.createdAt,
    )

    // 写入 FTS5 索引
    if (node.nodeType === 'note') {
      const searchText = [node.title, node.content, tokens].join(' ')
      await sqlocal.sql(
        `INSERT INTO nodes_fts (slug, title, content, tokens)
         VALUES (?, ?, ?, ?)`,
        node.slug, node.title, node.content, searchText
      )
    }

    const row = await sqlocal.sql<{ id: number }>('SELECT id FROM nodes WHERE slug = ?', node.slug)
    if (row.length > 0) slugToId.set(node.slug, row[0]!.id)

    if (node.nodeType === 'note' && node.filePath && node.hash) {
      const oldHash = trackMap.get(node.filePath)
      if (!oldHash) {
        await sqlocal.sql(
          `INSERT INTO file_tracks (file_path, hash, updated_at)
           VALUES (?, ?, CURRENT_TIMESTAMP)`,
          node.filePath, node.hash
        )
        added++
      } else if (oldHash !== node.hash) {
        await sqlocal.sql(
          `UPDATE file_tracks SET hash = ?, updated_at = CURRENT_TIMESTAMP
           WHERE file_path = ?`,
          node.hash, node.filePath
        )
        updated++
      } else { skipped++ }
    }
  }

  console.log(`[seed] 树形数据同步完成: ${added} 新增, ${updated} 更新, ${skipped} 跳过`)
  _seeded = true
}
