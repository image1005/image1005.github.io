<script setup lang="ts">
const base = import.meta.env.BASE_URL
const 协会招新群 = `${base}images/协会招新群/157e841f8ff3b6e888518b8ea8a9302d.png`
const 公众号 = `${base}images/公众号/93737850c43752445459bb32d86c2283.png`
</script>

<template>
  <div class="join-us">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-header__title">加入我们</h1>
        <p class="page-header__desc">
          无论你是技术小白还是代码大神，都欢迎你的加入！在这里，我们共同成长，用代码和热情创造无限可能。
        </p>
      </div>
    </section>

    <!-- 二维码区域 -->
    <section class="section">
      <div class="container">
        <h2 class="section__title">扫码加入我们的大家庭</h2>
        <p class="section__subtitle">选择你感兴趣的部门，开启 CNTA 之旅</p>

        <div class="grid-2" style="max-width: 800px; margin: 0 auto">
          <!-- CNTA 总群 -->
          <div class="card" style="text-align: center">
            <div class="card__icon" style="margin: 0 auto 16px">👥</div>
            <h3 class="card__title">CNTA 总群</h3>
            <p class="card__desc" style="margin-bottom: 20px">
              加入我们的QQ总群，获取最新活动资讯，与所有成员交流。
            </p>
            <div style="width: 220px; height: 220px; margin: 0 auto">
              <img
                :src="协会招新群"
                alt="CNTA QQ总群二维码"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </div>
          </div>

          <!-- 志愿队 -->
          <div class="card" style="text-align: center">
            <div class="card__icon" style="margin: 0 auto 16px">❤️</div>
            <h3 class="card__title">志愿队</h3>
            <p class="card__desc" style="margin-bottom: 20px">
              用技术传递温暖，参与电脑义诊、数字助老等志愿活动。
            </p>
            <div
              style="width: 160px; height: 160px; border-radius: 12px; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; border: 1px solid"
            >
              二维码占位
            </div>
          </div>

          <!-- 技术部 -->
          <div class="card" style="text-align: center">
            <div class="card__icon" style="margin: 0 auto 16px">💻</div>
            <h3 class="card__title">技术部</h3>
            <p class="card__desc" style="margin-bottom: 20px">
              与技术大牛一同成长，参与竞赛培训和前沿项目开发。
            </p>
            <div
              style="width: 160px; height: 160px; border-radius: 12px; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; border: 1px solid"
            >
              二维码占位
            </div>
          </div>

          <!-- 微信公众号 -->
          <div class="card" style="text-align: center">
            <div class="card__icon" style="margin: 0 auto 16px">📱</div>
            <h3 class="card__title">微信公众号</h3>
            <p class="card__desc" style="margin-bottom: 20px">
              关注我们的官方公众号，获取协会动态、技术干货和活动预告。
            </p>
            <div
              style="width: 160px; height: 160px; border-radius: 12px; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; border: 1px solid"
            >
              <img
                :src="公众号"
                alt="一如计网二维码"
                style="width: 100%; height: 100%; object-fit: contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系信息 -->
    <section class="section section--alt">
      <div class="container" style="text-align: center">
        <h2 class="section__title">联系我们</h2>
        <div style="max-width: 400px; margin: 0 auto; line-height: 2.4">
          <p>📍 东山校区思创楼B座B203</p>
          <p>📍 大同校区紫光楼</p>
          <p>🎓 现代教育技术学院</p>
        </div>
      </div>
    </section>
  </div>
</template>
