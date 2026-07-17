<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__info">
        <p class="footer__name">计算机与网络技术协会</p>
        <p class="footer__desc">连接未来，创新无限</p>
      </div>
      <div class="footer__meta">
        <p>📍 东山校区思创楼B座B203</p>
        <p>📍 大同校区紫光楼</p>
        <p>🎓 现代教育技术学院</p>
        <p class="footer__copy">&copy; 2015–2026 CNTA. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid;
  padding: 40px 0;
  margin-top: 80px;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
}

.footer__name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.footer__desc {
  font-size: 0.9rem;
}

.footer__meta {
  text-align: right;
  font-size: 0.9rem;
  line-height: 2;
}

.footer__copy {
  margin-top: 8px;
}

@media (max-width: 768px) {
  .footer__inner {
    flex-direction: column;
    text-align: center;
  }

  .footer__meta {
    text-align: center;
  }
}
</style>
