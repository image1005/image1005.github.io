<script setup lang="ts">
import { ref } from 'vue'
import { Book, Target, Star, Users, Monitor, Heart, Hand, TrendingUp, Layers, Lightbulb, Wrench, Calendar } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import ImageCarousel from '@/components/ImageCarousel.vue'
import ContainerScroll from '@/components/ui/ContainerScroll.vue'
import InteractiveHoverButton from '@/components/ui/interactive-hover-button.vue'
import TiltCard from '@/components/ui/BeUiTiltCard.vue'

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
    <ContainerScroll>
      <template #title>
        <div class="flex flex-col items-center w-full">
          <div class="w-full py-8 md:py-12 flex flex-col items-center justify-center">
            <p class="text-5xl md:text-7xl font-bold text-text dark:text-white tracking-tight">欢迎来到</p>
            <p class="text-4xl md:text-[4rem] font-extrabold mt-3 leading-[1.15] text-text dark:text-white tracking-tight">
              山西大学计算机与网络技术协会
            </p>
          </div>
          <div class="text-center mt-2 md:mt-4">
            <p class="text-xl md:text-2xl text-text-secondary max-w-[640px] mx-auto">
              在这里，与最优秀的头脑一起学习、创造和成长。
            </p>
            <div class="flex gap-4 justify-center mt-8">
              <InteractiveHoverButton text="加入我们" to="/join" variant="primary" class="text-lg" />
              <InteractiveHoverButton text="了解更多" to="/tech" variant="secondary" class="text-lg" />
            </div>
          </div>
        </div>
      </template>

      <!-- 关于 CNTA -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">关于 CNTA</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">连接未来，创新无限</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Book :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">协会简介</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              计算机与网络技术协会（CNTA），成立于2015年，是隶属于现代教育技术学院的明星技术型学生社团，协助校区网络维护和维修。协会设有志愿队和技术部，开展专业知识学习和竞赛活动，注重将知识与实践相结合。管理校级志愿队，组织数字助老和电脑义诊等志愿活动，培养数字素养与技能。协会定期举办讲座、比赛观摩等活动，为成员提供学习和实践的平台。
            </p>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Target :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">发展理念</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              协会致力于传播科技知识和网络安全意识，构建安全网络环境。促进成员技术交流和学习，鼓励分享经验，组织技术讲座和研讨会。提供实践机会和项目支持，鼓励探索新技术，追求创新。
            </p>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Star :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">协会特色</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              协会有独立活动室，会员可自习和寻求帮助。注重网络安全知识的学习和竞赛参与，定期举办技术讲座和研讨会。鼓励会员参加志愿服务，成立数字素养与技能提升志愿者服务队，帮助大学生志愿者提高综合素质。促进成员团队合作和沟通技巧的提升。
            </p>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Users :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">欢迎你的到来</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              我们欢迎对计算机和网络技术感兴趣的学生加入。通过参与协会活动，你将扩展专业知识、提高技术能力，并建立深厚友谊。加入我们，一起探索计算机与网络技术的无限可能。
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <!-- 我们的团队 -->
    <section class="py-20 max-md:py-12 bg-surface-alt border-y border-border dark:border-white/5">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">我们的团队</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">两大核心部门，各展所长</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Monitor :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">技术部</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-4">
              协会的技术核心，负责竞赛训练、项目开发和前沿技术探索。
            </p>
            <RouterLink to="/tech" class="inline-block text-[15px] font-medium text-text dark:text-white hover:underline no-underline">
              了解技术部 →
            </RouterLink>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Heart :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">志愿队</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-4">
              用技术传递温度，参与数字助老、电脑义诊等公益活动。
            </p>
            <RouterLink to="/volunteer" class="inline-block text-[15px] font-medium text-text dark:text-white hover:underline no-underline">
              了解志愿队 →
            </RouterLink>
          </TiltCard>
        </div>
      </div>
    </section>

    <!-- 为什么选择我们 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">为什么选择我们？</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">选择 CNTA，与优秀同行</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Hand :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">竞赛支持</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              近三年，我们的成员在省级以上竞赛中斩获超过 20 项奖项，提供系统性的赛前培训和指导。
            </p>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Monitor :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">硬件资源</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              拥有专属自习室，配备专属服务器，为你的创意提供硬件保障。
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <!-- 独立自习室 -->
    <section class="py-20 max-md:py-12 bg-surface-alt border-y border-border dark:border-white/5">
      <div class="max-w-[1200px] mx-auto px-6 text-center">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold mb-3 text-text dark:text-white">独立自习室</h2>
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
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">你的收获</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">加入 CNTA，收获成长</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <TrendingUp :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">技能提升</h3>
            <div class="text-[15px] leading-relaxed text-text-secondary space-y-2">
              <p><strong class="text-text dark:text-white">技术部：</strong>从入门到竞赛级的系统化训练，掌握行业前沿技术。</p>
              <p><strong class="text-text dark:text-white">志愿队：</strong>在实践中提升沟通协调能力，收获宝贵的公益履历。</p>
            </div>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Layers :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">职业助力</h3>
            <div class="text-[15px] leading-relaxed text-text-secondary space-y-2">
              <p>优秀成员可获实习或护网的机会。</p>
              <p>参与真实项目开发，为你的简历增添浓墨重彩的一笔。</p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>

    <!-- 更多特色 -->
    <section class="py-20 max-md:py-12 bg-surface-alt border-y border-border dark:border-white/5">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">场地一览</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">协会的自习室、机房和会议室</p>

        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <Lightbulb :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">项目孵化</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">提供资源和指导，将你的创意变为现实。</p>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <Wrench :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">技术工坊</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">学习最新技术，与优秀学长面对面交流。</p>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <Calendar :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">社团活动</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">参与技术分享会，结交志同道合的伙伴。</p>
          </TiltCard>
        </div>
      </div>
    </section>

    </ContainerScroll>

    <!-- CTA -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6 text-center">
        <h2 class="text-[1.8rem] font-bold mb-4 text-text dark:text-white">准备好加入我们了吗？</h2>
        <p class="text-base text-text-secondary mb-8">
          无论你是技术小白还是代码大神，这里都有你的位置。
        </p>
        <InteractiveHoverButton text="立即加入" to="/join" variant="primary" />
      </div>
    </section>
  </div>
</template>

