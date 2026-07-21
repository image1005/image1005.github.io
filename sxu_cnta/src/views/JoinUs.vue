<script setup lang="ts">
const base = import.meta.env.BASE_URL
const 协会招新群 = `${base}images/协会招新群/157e841f8ff3b6e888518b8ea8a2d30.png`
const 公众号 = `${base}images/公众号/93737850c43752445459bb32d86c2283.png`
</script>

<template>
  <div class="join-us">
    <!-- Page Header -->
    <section class="py-[120px] max-md:py-[100px] text-center bg-white border-b border-border">
      <div class="max-w-[1200px] mx-auto px-6">
        <h1 class="text-[2.4rem] max-md:text-[1.8rem] font-extrabold mb-4">加入我们</h1>
        <p class="text-lg text-text-secondary max-w-[600px] mx-auto">
          无论你是技术小白还是代码大神，都欢迎你的加入！在这里，我们共同成长，用代码和热情创造无限可能。
        </p>
      </div>
    </section>

    <!-- 二维码区域 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3">扫码加入我们的大家庭</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">选择你感兴趣的部门，开启 CNTA 之旅</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-w-[800px] mx-auto">
          <!-- CNTA 总群 -->
          <div class="border border-border rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">CNTA 总群</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-5">
              加入我们的QQ总群，获取最新活动资讯，与所有成员交流。
            </p>
            <div class="w-[220px] h-[220px] mx-auto">
              <img
                :src="协会招新群"
                alt="CNTA QQ总群二维码"
                class="w-full h-full object-contain"
              />
            </div>
          </div>

          <!-- 志愿队 -->
          <div class="border border-border rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">志愿队</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-5">
              用技术传递温暖，参与电脑义诊、数字助老等志愿活动。
            </p>
            <div class="w-[160px] h-[160px] rounded-md mx-auto flex items-center justify-center text-sm text-text-muted border border-border">
              二维码占位
            </div>
          </div>

          <!-- 技术部 -->
          <div class="border border-border rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">技术部</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-5">
              与技术大牛一同成长，参与竞赛培训和前沿项目开发。
            </p>
            <div class="w-[160px] h-[160px] rounded-md mx-auto flex items-center justify-center text-sm text-text-muted border border-border">
              二维码占位
            </div>
          </div>

          <!-- 微信公众号 -->
          <div class="border border-border rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">微信公众号</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-5">
              关注我们的官方公众号，获取协会动态、技术干货和活动预告。
            </p>
            <div class="w-[160px] h-[160px] rounded-md mx-auto flex items-center justify-center text-sm text-text-muted border border-border">
              <img
                :src="公众号"
                alt="一如计网二维码"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系信息 -->
    <section class="py-20 max-md:py-12 bg-bg border-y border-border">
      <div class="max-w-[1200px] mx-auto px-6 text-center">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold mb-3">联系我们</h2>
        <div class="max-w-[400px] mx-auto leading-[2.4] text-text-secondary">
          <p>东山校区思创楼B座B203</p>
          <p>大同校区紫光楼</p>
          <p>现代教育技术学院</p>
        </div>
      </div>
    </section>
  </div>
</template>
