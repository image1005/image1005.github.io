import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// ─── 节点表（多叉树） ───
export const nodes = sqliteTable('nodes', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  slug: text('slug').notNull().unique(),
  title: text('title').notNull(),
  nodeType: text('node_type', { enum: ['folder', 'note'] }).notNull().default('note'),
  content: text('content').notNull().default(''),
  tagsJson: text('tags_json').notNull().default('[]'),
  tokensJson: text('tokens_json').notNull().default('[]'),
  parentId: integer('parent_id'),
  sortOrder: integer('sort_order').notNull().default(0),
  createdAt: text('created_at').notNull().default('CURRENT_TIMESTAMP'),
  updatedAt: text('updated_at').notNull().default('CURRENT_TIMESTAMP'),
})

// ─── 标签表 ───
export const tags = sqliteTable('tags', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
})

// ─── 节点-标签关联表 ───
export const nodeTags = sqliteTable('node_tags', {
  nodeId: integer('node_id').notNull().references(() => nodes.id),
  tagId: integer('tag_id').notNull().references(() => tags.id),
})

// ─── 文件追踪表 ───
export const fileTracks = sqliteTable('file_tracks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  filePath: text('file_path').notNull().unique(),
  hash: text('hash').notNull(),
  updatedAt: text('updated_at').notNull().default('CURRENT_TIMESTAMP'),
})
