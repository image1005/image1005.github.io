import { SQLocalDrizzle } from 'sqlocal/drizzle';
import { drizzle } from 'drizzle-orm/sqlite-proxy';
import * as schema from './schema';

export { schema };

// 初始化 SQLocal（浏览器端 SQLite，localStorage 持久化，无需 COEP）
const sqlocal = new SQLocalDrizzle({ databasePath: 'local' });

// 创建 Drizzle ORM 实例
export const db = drizzle(sqlocal.driver, { schema });

// 导出原始 SQLocal 实例（可直接执行 SQL）
export { sqlocal };
