<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ImageCarousel from '@/components/ImageCarousel.vue'

const base = import.meta.env.BASE_URL
const 协会场地 = [
  `${base}images/协会场地/自习室.jpg`,
  `${base}images/协会场地/机房.jpg`,
  `${base}images/协会场地/会议室.jpg`,
  `${base}images/协会场地/e2d2cb6268a011762fd616bb13d4df1e.jpg`,
]
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="py-[120px] max-md:py-[100px] text-center bg-white border-b border-border">
      <div class="max-w-[1200px] mx-auto px-6">
        <h1 class="text-[2.8rem] max-md:text-[2rem] font-extrabold mb-4 leading-tight">
          欢迎来到<br />山西大学计算机与网络技术协会
        </h1>
        <p class="text-lg text-text-secondary max-w-[560px] mx-auto mb-8">
          在这里，与最优秀的头脑一起学习、创造和成长。
        </p>
        <div class="flex gap-3 justify-center">
          <RouterLink to="/join" class="inline-flex items-center gap-2 px-6 py-2.5 text-[15px] font-medium bg-black text-white border border-black rounded-sm hover:bg-[#222] transition-colors no-underline">
            加入我们
          </RouterLink>
          <RouterLink to="/tech" class="inline-flex items-center gap-2 px-6 py-2.5 text-[15px] font-medium bg-white text-text border border-text rounded-sm hover:bg-bg transition-colors no-underline">
            了解更多
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- 关于 CNTA -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3">关于 CNTA</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">连接未来，创新无限</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <div class="border border-border rounded-sm p-8">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z"/><path d="M8 7h6"/><path d="M8 11h8"/><path d="M8 15h6"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">协会简介</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              计算机与网络技术协会（CNTA），成立于2015年，是隶属于现代教育技术学院的明星技术型学生社团，协助校区网络维护和维修。协会设有志愿队和技术部，开展专业知识学习和竞赛活动，注重将知识与实践相结合。管理校级志愿队，组织数字助老和电脑义诊等志愿活动，培养数字素养与技能。协会定期举办讲座、比赛观摩等活动，为成员提供学习和实践的平台。
            </p>
          </div>

          <div class="border border-border rounded-sm p-8">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">发展理念</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              协会致力于传播科技知识和网络安全意识，构建安全网络环境。促进成员技术交流和学习，鼓励分享经验，组织技术讲座和研讨会。提供实践机会和项目支持，鼓励探索新技术，追求创新。
            </p>
          </div>

          <div class="border border-border rounded-sm p-8">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">协会特色</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              协会有独立活动室，会员可自习和寻求帮助。注重网络安全知识的学习和竞赛参与，定期举办技术讲座和研讨会。鼓励会员参加志愿服务，成立数字素养与技能提升志愿者服务队，帮助大学生志愿者提高综合素质。促进成员团队合作和沟通技巧的提升。
            </p>
          </div>

          <div class="border border-border rounded-sm p-8">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">欢迎你的到来</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              我们欢迎对计算机和网络技术感兴趣的学生加入。通过参与协会活动，你将扩展专业知识、提高技术能力，并建立深厚友谊。加入我们，一起探索计算机与网络技术的无限可能。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 我们的团队 -->
    <section class="py-20 max-md:py-12 bg-bg border-y border-border">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3">我们的团队</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">两大核心部门，各展所长</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <div class="border border-border rounded-sm p-8 bg-white">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">技术部</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-4">
              协会的技术核心，负责竞赛训练、项目开发和前沿技术探索。
            </p>
            <RouterLink to="/tech" class="inline-block text-[15px] font-medium text-text hover:underline no-underline">
              了解技术部 →
            </RouterLink>
          </div>

          <div class="border border-border rounded-sm p-8 bg-white">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">志愿队</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-4">
              用技术传递温度，参与数字助老、电脑义诊等公益活动。
            </p>
            <RouterLink to="/volunteer" class="inline-block text-[15px] font-medium text-text hover:underline no-underline">
              了解志愿队 →
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么选择我们 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3">为什么选择我们？</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">选择 CNTA，与优秀同行</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <div class="border border-border rounded-sm p-8">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 010-5C7 4 8 7 8 7s1-3 3.5-3a2.5 2.5 0 010 5H10"/><path d="M8 9v11"/><path d="M6 20h4"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">竞赛支持</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              近三年，我们的成员在省级以上竞赛中斩获超过 20 项奖项，提供系统性的赛前培训和指导。
            </p>
          </div>

          <div class="border border-border rounded-sm p-8">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">硬件资源</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              拥有专属自习室，配备专属服务器，为你的创意提供硬件保障。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 独立自习室 -->
    <section class="py-20 max-md:py-12 bg-bg border-y border-border">
      <div class="max-w-[1200px] mx-auto px-6 text-center">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold mb-3">独立自习室</h2>
        <p class="text-base text-text-secondary mb-12 max-w-[640px] mx-auto">专属学习空间</p>
        <p class="max-w-[640px] mx-auto mb-8 leading-relaxed text-text-secondary">
          我们拥有专属的自习室，为成员们提供了一个稳定、高效的学习和交流环境。在这里，当你遇到技术难题时，可以随时向经验丰富的学长学姐请教，获得及时的指导和帮助。这个空间不仅是解决问题的场所，更是激发灵感、突破瓶颈的摇篮。
        </p>
        <div class="max-w-[480px] mx-auto">
          <ImageCarousel :images="协会场地" title="协会场地" />
        </div>
      </div>
    </section>

    <!-- 你的收获 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3">你的收获</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">加入 CNTA，收获成长</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <div class="border border-border rounded-sm p-8">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">技能提升</h3>
            <div class="text-[15px] leading-relaxed text-text-secondary space-y-2">
              <p><strong class="text-text">技术部：</strong>从入门到竞赛级的系统化训练，掌握行业前沿技术。</p>
              <p><strong class="text-text">志愿队：</strong>在实践中提升沟通协调能力，收获宝贵的公益履历。</p>
            </div>
          </div>

          <div class="border border-border rounded-sm p-8">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">职业助力</h3>
            <div class="text-[15px] leading-relaxed text-text-secondary space-y-2">
              <p>优秀成员可获实习或护网的机会。</p>
              <p>参与真实项目开发，为你的简历增添浓墨重彩的一笔。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 更多特色 -->
    <section class="py-20 max-md:py-12 bg-bg border-y border-border">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3">更多特色</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">不止于技术，我们还有更多</p>

        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          <div class="border border-border rounded-sm p-8 bg-white text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">项目孵化</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">提供资源和指导，将你的创意变为现实。</p>
          </div>

          <div class="border border-border rounded-sm p-8 bg-white text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">技术工坊</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">学习最新技术，与优秀学长面对面交流。</p>
          </div>

          <div class="border border-border rounded-sm p-8 bg-white text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2">社团活动</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">参与技术分享会，结交志同道合的伙伴。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6 text-center">
        <h2 class="text-[1.8rem] font-bold mb-4">准备好加入我们了吗？</h2>
        <p class="text-base text-text-secondary mb-8">
          无论你是技术小白还是代码大神，CNTA 都欢迎你的到来
        </p>
        <RouterLink to="/join" class="inline-flex items-center gap-2 px-9 py-3 text-[17px] font-medium bg-black text-white border border-black rounded-sm hover:bg-[#222] transition-colors no-underline">
          立即加入 →
        </RouterLink>
      </div>
    </section>
  </div>
</template>
