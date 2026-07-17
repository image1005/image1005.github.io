import { sqlocal } from './index'

export interface SearchResult {
  slug: string
  title: string
  content: string
  rank?: number
}

/**
 * 用户查询分词（浏览器侧简单处理）
 * 中文拆成单字符，英文保持原样
 */
function simpleTokenize(query: string): string[] {
  const tokens: string[] = []
  let english = ''
  for (const char of query) {
    if (/[a-zA-Z0-9]/.test(char)) {
      english += char
    } else {
      if (english) { tokens.push(english); english = '' }
      if (/[\u4e00-\u9fff]/.test(char)) tokens.push(char)
    }
  }
  if (english) tokens.push(english)
  return tokens
}

/**
 * 搜索笔记（使用 FTS5）
 */
export async function searchNotes(query: string): Promise<SearchResult[]> {
  const tokens = simpleTokenize(query)
  if (tokens.length === 0) return []

  const ftsQuery = tokens.map(t => `"${t}"`).join(' AND ')

  try {
    const results = await sqlocal.sql<{
      slug: string; title: string; content: string; rank: number | null
    }>(
      `SELECT slug, title, content, rank
       FROM nodes_fts
       WHERE nodes_fts MATCH ?
       ORDER BY rank
       LIMIT 20`,
      ftsQuery
    )
    return results.map(r => ({
      slug: r.slug,
      title: r.title,
      content: r.content?.substring(0, 150) ?? '',
      rank: r.rank ?? 0,
    }))
  } catch {
    // FTS5 不可用时回退 LIKE
    const likeQuery = tokens.map(() => `(title LIKE '%' || ? || '%' OR content LIKE '%' || ? || '%')`).join(' AND ')
    const params = tokens.flatMap(t => [t, t])
    const results = await sqlocal.sql<{ slug: string; title: string; content: string }>(
      `SELECT slug, title, content FROM nodes WHERE node_type = 'note' AND ${likeQuery} LIMIT 20`,
      ...params
    )
    return results.map(r => ({
      slug: r.slug,
      title: r.title,
      content: r.content?.substring(0, 150) ?? '',
    }))
  }
}

/** 高亮关键词 */
export function highlight(text: string, query: string): string {
  const tokens = simpleTokenize(query)
  let result = text
  for (const t of tokens) {
    result = result.replace(
      new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
      match => `<mark class="bg-pink-200 rounded px-0.5">${match}</mark>`
    )
  }
  return result
}
