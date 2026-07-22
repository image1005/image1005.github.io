<script setup lang="ts">
import { ShieldCheck, Zap, Server, Shield, Clock } from '@lucide/vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import TiltCard from '@/components/ui/BeUiTiltCard.vue'

const base = import.meta.env.BASE_URL

const 信息安全竞赛 = [
  `${base}images/全国大学生信息安全竞赛/2ca9216861cc86b1782dd635aa583fb5.jpg`,
  `${base}images/全国大学生信息安全竞赛/7b89eae96bfbb3c462c64962a27bba3f.jpg`,
  `${base}images/全国大学生信息安全竞赛/8d4955e1c89be03feb8593caf0589807.jpg`,
  `${base}images/全国大学生信息安全竞赛/ba70242644f8c98661b8980f52235ca6.jpg`,
]

const AI安全竞赛 = [
  `${base}images/全国大学生人工智能安全竞赛/47cb05138316daae10880d02600a9d15.jpg`,
  `${base}images/全国大学生人工智能安全竞赛/51e0089cf3acd96a2172ffdefd4f1c53.jpg`,
  `${base}images/全国大学生人工智能安全竞赛/61f536bddb6d228ff1b676404c14d46f.jpg`,
  `${base}images/全国大学生人工智能安全竞赛/b15588bc338965d72528763b2aca9011.jpg`,
]

const 熵密杯 = [
  `${base}images/熵密杯/1b9a67db06e95a74ea53f49c6554177d.jpg`,
  `${base}images/熵密杯/81f0bbfb115ce8f7457d024923fc2e8e.jpg`,
  `${base}images/熵密杯/841bc86bfc6dffe044ba6d8623876909.jpg`,
  `${base}images/熵密杯/94f673bfbe1ebdde76fa5015f4329a8e.jpg`,
]

const 蓝桥杯 = [
  `${base}images/蓝桥杯/0789d4e3e71458bf79eea1e4c83e4619.jpg`,
  `${base}images/蓝桥杯/5cfa738d15ab870376824e26db41767c.jpg`,
  `${base}images/蓝桥杯/e2eaabd91db8788a3c218edd279a932d.jpg`,
]

const 技术部例会 = [
  `${base}images/技术部例会/5b2134f7887657937c76c2a23c6d0aae.jpg`,
  `${base}images/技术部例会/af9a29bd3c3d99ceacd5bdf04714db1f.jpg`,
  `${base}images/技术部例会/d61048229fa11fe8d9cbd007427dda40.jpg`,
]

const 保研讲座 = [
  `${base}images/保研讲座/6f4ce915b6ce4428f8fb3779075074a5.jpg`,
  `${base}images/保研讲座/a1b6191f6eab57465ac31a2e83c57741.jpg`,
]

const 学习资源 = [
  `${base}images/学习资源/6f1145318172c0b3b9f535f771819c10.jpg`,
  `${base}images/学习资源/ba95f902e5f7b35b321219a20c216fd8.jpg`,
  `${base}images/学习资源/c6515bb20414df98d1a837586a41480d.jpg`,
]
</script>

<template>
  <div class="tech-dept">
    <!-- Page Header -->
    <section class="py-[120px] max-md:py-[100px] text-center bg-surface border-b border-border dark:border-white/5">
      <div class="max-w-[1200px] mx-auto px-6">
        <h1 class="text-[2.4rem] max-md:text-[1.8rem] font-extrabold mb-4 text-text dark:text-white">技术部</h1>
        <p class="text-lg text-text-secondary max-w-[600px] mx-auto">
          我们是技术的探索者和实践者，致力于在网络安全的海洋中航行，在前沿开发的浪潮中冲锋，在坚实的网络基建上构建未来。在这里，我们共同学习、挑战并成长。
        </p>
      </div>
    </section>

    <!-- 技术基因 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">技术基因</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">三大方向，全面覆盖</p>

        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <ShieldCheck :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">网络安全</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-3">
              CTF竞赛训练、漏洞挖掘与复现、企业级安全攻防实践。
            </p>
            <span class="inline-block px-2.5 py-0.5 text-xs font-medium border border-border dark:border-white/5 rounded-sm bg-surface-alt text-text-secondary">CTF</span>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Zap :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">前沿开发</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-3">
              探索Web前端、Java后端等前沿技术的应用与落地。
            </p>
            <span class="inline-block px-2.5 py-0.5 text-xs font-medium border border-border dark:border-white/5 rounded-sm bg-surface-alt text-text-secondary">开发</span>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <div class="mb-4">
              <Server :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">运维</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              负责校园网络服务维护、Linux服务器集群管理与自动化运维。
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <!-- CNTA Wiki -->
    <section class="py-20 max-md:py-12 bg-surface-alt border-y border-border dark:border-white/5">
      <div class="max-w-[1200px] mx-auto px-6 text-center">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold mb-3 text-text dark:text-white">CNTA Wiki</h2>
        <p class="text-base text-text-secondary mb-12 max-w-[640px] mx-auto">知识沉淀，共同成长</p>
        <div class="border border-border dark:border-white/5 border-l-[3px] border-l-text-secondary dark:border-l-gray-500 rounded-r-sm p-6 text-left bg-surface-float max-w-[800px] mx-auto">
          <p class="text-[15px] leading-relaxed text-text-secondary">
            CNTA Wiki 是一个面向社团全体成员的知识库，由技术部精心搭建与维护。它不仅是技术知识的沉淀池，更是我们共同学习、分享与成长的见证。在这里，你可以找到从入门到进阶的各类学习资料、项目文档、以及历届技术沙龙的精华回顾。
          </p>
        </div>
      </div>
    </section>

    <!-- 培训活动 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">培训活动</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">技术培训与知识分享</p>
        <p class="max-w-[720px] mx-auto mb-10 text-center leading-relaxed text-text-secondary">
          我们定期举办技术沙龙、专题讲座和实战工作坊，内容涵盖网络安全、软件开发、服务器运维等多个领域，旨在为同学们提供一个学习和交流的平台，共同成长。
        </p>

        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          <ImageCarousel :images="技术部例会" title="技术部例会" />
          <ImageCarousel :images="保研讲座" title="保研讲座" />
          <ImageCarousel :images="学习资源" title="学习资源" />
        </div>
      </div>
    </section>

    <!-- 系统化学习 -->
    <section class="py-20 max-md:py-12 bg-surface-alt border-y border-border dark:border-white/5">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">从零开始，系统化学习</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">无论基础如何，都能找到自己的节奏</p>
        <div class="border border-border dark:border-white/5 border-l-[3px] border-l-text-secondary dark:border-l-gray-500 rounded-r-sm p-6 bg-surface-float max-w-[800px] mx-auto">
          <p class="text-[15px] leading-relaxed text-text-secondary">
            我们为新成员提供了系统化的训练平台，内容从计算机基础、网络协议到前后端开发、网络安全入门，无论基础如何，都能找到适合自己的学习节奏。通过项目驱动的实践，你将逐步构建解决复杂问题的能力，并在团队协作中快速成长。
          </p>
        </div>
      </div>
    </section>

    <!-- 竞赛舞台 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">竞赛舞台</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">以赛促学，挑战自我</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-12">
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 text-center bg-surface-float">
            <div class="mb-4 mx-auto flex justify-center">
              <Shield :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">全国大学生信息安全竞赛</h3>
            <p class="text-[15px] text-text-secondary">CISCN</p>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 text-center bg-surface-float">
            <div class="mb-4 mx-auto flex justify-center">
              <Clock :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">春秋杯网络安全联赛</h3>
            <p class="text-[15px] text-text-secondary">与全国顶尖选手同台竞技</p>
          </TiltCard>
        </div>

        <!-- 近期竞赛成果 -->
        <h3 class="text-[1.3rem] font-bold text-center mb-8 text-text dark:text-white">近期竞赛成果</h3>
        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-12">
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">第三届"熵密杯"密码安全挑战赛</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              与清华大学、中山大学等密码学强校同台竞技，展现专业实力。
            </p>
            <p class="mt-3 text-sm font-medium text-text dark:text-white">
              技术亮点：密码算法深度解析能力
            </p>
          </TiltCard>

          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 bg-surface-float">
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">首届全国大学生AI安全竞赛</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary">
              在首届全国大学生人工智能安全竞赛中，我院学子斩获全国二等奖2项、三等奖1项。
            </p>
            <p class="mt-3 text-sm font-medium text-text dark:text-white">
              核心技术挑战：参与AI安全相关的核心技术攻关
            </p>
          </TiltCard>
        </div>

        <h3 class="text-[1.3rem] font-bold text-center mb-8 text-text dark:text-white">竞赛风采</h3>
        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <ImageCarousel :images="信息安全竞赛" title="全国大学生信息安全竞赛" />
          <ImageCarousel :images="AI安全竞赛" title="全国大学生人工智能安全竞赛" />
          <ImageCarousel :images="熵密杯" title="熵密杯密码安全挑战赛" />
          <ImageCarousel :images="蓝桥杯" title="蓝桥杯" />
        </div>
      </div>
    </section>

    <!-- 加入技术部 -->
    <section class="py-20 max-md:py-12 bg-surface-alt border-y border-border dark:border-white/5 text-center">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold mb-3 text-text dark:text-white">加入技术部</h2>
        <p class="text-base text-text-secondary mb-5 max-w-[640px] mx-auto">扫码加入技术部招新群，开启技术之旅</p>
        <div class="w-[200px] h-[200px] border border-border rounded-md mx-auto flex items-center justify-center text-sm text-text-muted">
          二维码占位
        </div>
      </div>
    </section>
  </div>
</template>
