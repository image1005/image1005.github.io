<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="container">
        <h1 class="hero__title">欢迎来到<br />计算机与网络技术协会</h1>
        <p class="hero__desc">在这里，与最优秀的头脑一起学习、创造和成长。</p>
        <div class="hero__actions">
          <RouterLink to="/join" class="btn btn--primary">加入我们</RouterLink>
          <RouterLink to="/tech" class="btn btn--outline">了解更多</RouterLink>
        </div>
      </div>
    </section>

    <!-- 关于 CNTA -->
    <section class="section">
      <div class="container">
        <h2 class="section__title">关于 CNTA</h2>
        <p class="section__subtitle">连接未来，创新无限</p>

        <div class="grid-2">
          <div class="card">
            <div class="card__icon">📖</div>
            <h3 class="card__title">协会简介</h3>
            <p class="card__desc">
              计算机与网络技术协会（CNTA），成立于2015年，是隶属于现代教育技术学院的明星技术型学生社团，协助校区网络维护和维修。协会设有志愿队和技术部，开展专业知识学习和竞赛活动，注重将知识与实践相结合。管理校级志愿队，组织数字助老和电脑义诊等志愿活动，培养数字素养与技能。协会定期举办讲座、比赛观摩等活动，为成员提供学习和实践的平台。
            </p>
          </div>

          <div class="card">
            <div class="card__icon">🎯</div>
            <h3 class="card__title">发展理念</h3>
            <p class="card__desc">
              协会致力于传播科技知识和网络安全意识，构建安全网络环境。促进成员技术交流和学习，鼓励分享经验，组织技术讲座和研讨会。提供实践机会和项目支持，鼓励探索新技术，追求创新。
            </p>
          </div>

          <div class="card">
            <div class="card__icon">⭐</div>
            <h3 class="card__title">协会特色</h3>
            <p class="card__desc">
              协会有独立活动室，会员可自习和寻求帮助。注重网络安全知识的学习和竞赛参与，定期举办技术讲座和研讨会。鼓励会员参加志愿服务，成立数字素养与技能提升志愿者服务队，帮助大学生志愿者提高综合素质。促进成员团队合作和沟通技巧的提升。
            </p>
          </div>

          <div class="card">
            <div class="card__icon">🤝</div>
            <h3 class="card__title">欢迎你的到来</h3>
            <p class="card__desc">
              我们欢迎对计算机和网络技术感兴趣的学生加入。通过参与协会活动，你将扩展专业知识、提高技术能力，并建立深厚友谊。加入我们，一起探索计算机与网络技术的无限可能。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 我们的团队 -->
    <section class="section section--alt">
      <div class="container">
        <h2 class="section__title">我们的团队</h2>
        <p class="section__subtitle">两大核心部门，各展所长</p>

        <div class="grid-2">
          <div class="card" style="">
            <div class="card__icon">💻</div>
            <h3 class="card__title">技术部</h3>
            <p class="card__desc">
              协会的技术核心，负责竞赛训练、项目开发和前沿技术探索。
            </p>
            <RouterLink to="/tech" style="display: inline-block; margin-top: 16px; font-weight: 500">
              了解技术部 →
            </RouterLink>
          </div>

          <div class="card" style="">
            <div class="card__icon">❤️</div>
            <h3 class="card__title">志愿队</h3>
            <p class="card__desc">
              用技术传递温度，参与数字助老、电脑义诊等公益活动。
            </p>
            <RouterLink to="/volunteer" style="display: inline-block; margin-top: 16px; font-weight: 500">
              了解志愿队 →
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 为什么选择我们 -->
    <section class="section">
      <div class="container">
        <h2 class="section__title">为什么选择我们？</h2>
        <p class="section__subtitle">选择 CNTA，与优秀同行</p>

        <div class="grid-2">
          <div class="card">
            <div class="card__icon">🏆</div>
            <h3 class="card__title">竞赛支持</h3>
            <p class="card__desc">
              近三年，我们的成员在省级以上竞赛中斩获超过 20 项奖项，提供系统性的赛前培训和指导。
            </p>
          </div>

          <div class="card">
            <div class="card__icon">🖥️</div>
            <h3 class="card__title">硬件资源</h3>
            <p class="card__desc">
              拥有专属自习室，配备专属服务器，为你的创意提供硬件保障。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 独立自习室 -->
    <section class="section section--alt">
      <div class="container" style="text-align: center">
        <h2 class="section__title">独立自习室</h2>
        <p class="section__subtitle">专属学习空间</p>
        <p style="max-width: 640px; margin: 0 auto; line-height: 1.8">
          我们拥有专属的自习室，为成员们提供了一个稳定、高效的学习和交流环境。在这里，当你遇到技术难题时，可以随时向经验丰富的学长学姐请教，获得及时的指导和帮助。这个空间不仅是解决问题的场所，更是激发灵感、突破瓶颈的摇篮。
        </p>
      </div>
    </section>

    <!-- 你的收获 -->
    <section class="section">
      <div class="container">
        <h2 class="section__title">你的收获</h2>
        <p class="section__subtitle">加入 CNTA，收获成长</p>

        <div class="grid-2">
          <div class="card">
            <div class="card__icon">📈</div>
            <h3 class="card__title">技能提升</h3>
            <div class="card__desc">
              <p style="margin-bottom: 8px"><strong>技术部：</strong>从入门到竞赛级的系统化训练，掌握行业前沿技术。</p>
              <p><strong>志愿队：</strong>在实践中提升沟通协调能力，收获宝贵的公益履历。</p>
            </div>
          </div>

          <div class="card">
            <div class="card__icon">🚀</div>
            <h3 class="card__title">职业助力</h3>
            <div class="card__desc">
              <p style="margin-bottom: 8px">优秀成员可获实习或护网的机会。</p>
              <p>参与真实项目开发，为你的简历增添浓墨重彩的一笔。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 更多特色 -->
    <section class="section section--alt">
      <div class="container">
        <h2 class="section__title">更多特色</h2>
        <p class="section__subtitle">不止于技术，我们还有更多</p>

        <div class="grid-3">
          <div class="card" style="text-align: center">
            <div class="card__icon" style="margin: 0 auto 16px">💡</div>
            <h3 class="card__title">项目孵化</h3>
            <p class="card__desc">提供资源和指导，将你的创意变为现实。</p>
          </div>

          <div class="card" style="text-align: center">
            <div class="card__icon" style="margin: 0 auto 16px">🔧</div>
            <h3 class="card__title">技术工坊</h3>
            <p class="card__desc">学习最新技术，与优秀学长面对面交流。</p>
          </div>

          <div class="card" style="text-align: center">
            <div class="card__icon" style="margin: 0 auto 16px">🎉</div>
            <h3 class="card__title">社团活动</h3>
            <p class="card__desc">参与技术分享会，结交志同道合的伙伴。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container" style="text-align: center">
        <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 16px">准备好加入我们了吗？</h2>
        <p style="margin-bottom: 32px; font-size: 1.05rem">
          无论你是技术小白还是代码大神，CNTA 都欢迎你的到来
        </p>
        <RouterLink to="/join" class="btn btn--primary" style="font-size: 1.05rem; padding: 12px 36px">
          立即加入 →
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero__actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 8px;
}
</style>
