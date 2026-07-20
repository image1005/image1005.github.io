<script setup lang="ts">
import ImageCarousel from '@/components/ImageCarousel.vue'

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
    <section class="page-header">
      <div class="container">
        <h1 class="page-header__title">技术部</h1>
        <p class="page-header__desc">
          我们是技术的探索者和实践者，致力于在网络安全的海洋中航行，在前沿开发的浪潮中冲锋，在坚实的网络基建上构建未来。在这里，我们共同学习、挑战并成长。
        </p>
      </div>
    </section>

    <!-- 技术基因 -->
    <section class="section">
      <div class="container">
        <h2 class="section__title">技术基因</h2>
        <p class="section__subtitle">三大方向，全面覆盖</p>

        <div class="grid-3">
          <div class="card">
            <div class="card__icon">🔒</div>
            <h3 class="card__title">网络安全</h3>
            <p class="card__desc">
              CTF竞赛训练、漏洞挖掘与复现、企业级安全攻防实践。
            </p>
            <span class="tag" style="margin-top: 12px">CTF</span>
          </div>

          <div class="card">
            <div class="card__icon">⚡</div>
            <h3 class="card__title">前沿开发</h3>
            <p class="card__desc">
              探索Web前端、Java后端等前沿技术的应用与落地。
            </p>
            <span class="tag" style="margin-top: 12px">开发</span>
          </div>

          <div class="card">
            <div class="card__icon">🖧</div>
            <h3 class="card__title">运维</h3>
            <p class="card__desc">
              负责校园网络服务维护、Linux服务器集群管理与自动化运维。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CNTA Wiki -->
    <section class="section section--alt">
      <div class="container" style="text-align: center">
        <h2 class="section__title">CNTA Wiki</h2>
        <p class="section__subtitle">知识沉淀，共同成长</p>
        <div class="highlight-box" style="text-align: left">
          <p>
            CNTA Wiki 是一个面向社团全体成员的知识库，由技术部精心搭建与维护。它不仅是技术知识的沉淀池，更是我们共同学习、分享与成长的见证。在这里，你可以找到从入门到进阶的各类学习资料、项目文档、以及历届技术沙龙的精华回顾。
          </p>
        </div>
      </div>
    </section>

    <!-- 培训活动 -->
    <section class="section">
      <div class="container">
        <h2 class="section__title">培训活动</h2>
        <p class="section__subtitle">技术培训与知识分享</p>
        <div style="max-width: 720px; margin: 0 auto 0">
          <p style="line-height: 1.9; text-align: center; margin-bottom: 40px">
            我们定期举办技术沙龙、专题讲座和实战工作坊，内容涵盖网络安全、软件开发、服务器运维等多个领域，旨在为同学们提供一个学习和交流的平台，共同成长。
          </p>
        </div>

        <div class="grid-3">
          <ImageCarousel :images="技术部例会" title="技术部例会" />
          <ImageCarousel :images="保研讲座" title="保研讲座" />
          <ImageCarousel :images="学习资源" title="学习资源" />
        </div>
      </div>
    </section>

    <!-- 系统化学习 -->
    <section class="section section--alt">
      <div class="container">
        <h2 class="section__title">从零开始，系统化学习</h2>
        <p class="section__subtitle">无论基础如何，都能找到自己的节奏</p>
        <div class="highlight-box">
          <p>
            我们为新成员提供了系统化的训练平台，内容从计算机基础、网络协议到前后端开发、网络安全入门，无论基础如何，都能找到适合自己的学习节奏。通过项目驱动的实践，你将逐步构建解决复杂问题的能力，并在团队协作中快速成长。
          </p>
        </div>
      </div>
    </section>

    <!-- 竞赛舞台 -->
    <section class="section">
      <div class="container">
        <h2 class="section__title">竞赛舞台</h2>
        <p class="section__subtitle">以赛促学，挑战自我</p>

        <div class="grid-2" style="margin-bottom: 48px">
          <div class="card" style="text-align: center">
            <div class="card__icon" style="margin: 0 auto 16px">🛡️</div>
            <h3 class="card__title">全国大学生信息安全竞赛</h3>
            <p class="card__desc">CISCN</p>
          </div>

          <div class="card" style="text-align: center">
            <div class="card__icon" style="margin: 0 auto 16px">🏅</div>
            <h3 class="card__title">春秋杯网络安全联赛</h3>
            <p class="card__desc">与全国顶尖选手同台竞技</p>
          </div>
        </div>

        <!-- 近期竞赛成果 -->
        <h3 style="font-size: 1.3rem; font-weight: 700; text-align: center; margin-bottom: 32px">近期竞赛成果</h3>
        <div class="grid-2">
          <div class="card">
            <h3 class="card__title">第三届"熵密杯"密码安全挑战赛</h3>
            <p class="card__desc" style="margin-top: 8px">
              与清华大学、中山大学等密码学强校同台竞技，展现专业实力。
            </p>
            <p style="margin-top: 12px; font-weight: 500; font-size: 0.9rem">
              技术亮点：密码算法深度解析能力
            </p>
          </div>

          <div class="card">
            <h3 class="card__title">首届全国大学生AI安全竞赛</h3>
            <p class="card__desc" style="margin-top: 8px">
              在首届全国大学生人工智能安全竞赛中，我院学子斩获全国二等奖2项、三等奖1项。
            </p>
            <p style="margin-top: 12px; font-weight: 500; font-size: 0.9rem">
              核心技术挑战：参与AI安全相关的核心技术攻关
            </p>
          </div>
        </div>

        <!-- 竞赛风采 -->
        <h3 style="font-size: 1.3rem; font-weight: 700; text-align: center; margin: 48px 0 32px">竞赛风采</h3>
        <div class="grid-2">
          <ImageCarousel :images="信息安全竞赛" title="全国大学生信息安全竞赛" />
          <ImageCarousel :images="AI安全竞赛" title="全国大学生人工智能安全竞赛" />
          <ImageCarousel :images="熵密杯" title="熵密杯密码安全挑战赛" />
          <ImageCarousel :images="蓝桥杯" title="蓝桥杯" />
        </div>
      </div>
    </section>

    <!-- 加入技术部 -->
    <section class="section section--alt" style="text-align: center">
      <div class="container">
        <h2 class="section__title">加入技术部</h2>
        <p class="section__subtitle">扫码加入技术部招新群，开启技术之旅</p>
        <div style="width: 200px; height: 200px; border: 1px solid; margin: 20px auto 0; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; border-radius: 12px">
          二维码占位
        </div>
      </div>
    </section>
  </div>
</template>
