// ===== Service Worker — API 请求代理 / 网络面板混淆 =====
// 拦截 /zen/ 路径的 fetch，使 Network 面板显示为 (service worker)

const API_PATHS = ['/zen/'];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // 拦截 API 请求
  if (API_PATHS.some((p) => url.pathname.startsWith(p))) {
    e.respondWith(proxyFetch(e));
    return;
  }

  // 拦截信标噪声请求（返回空 204 避免 404 报错）
  if (url.pathname.includes('/beacon/')) {
    e.respondWith(new Response(null, { status: 204 }));
    return;
  }
});

async function proxyFetch(event) {
  // 微延迟使请求在 Network 面板中"闪一下"再消失
  await new Promise((r) => setTimeout(r, 20 + Math.random() * 40));

  try {
    // 转发请求 — 对主线程透明，面板显示 (service worker)
    // 使用 clone() 避免请求体重复消费问题
    return await fetch(event.request.clone());
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Proxy failed' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
