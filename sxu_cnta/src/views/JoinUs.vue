<script setup lang="ts">
import { Users, Heart, Monitor, Smartphone } from '@lucide/vue'
import TiltCard from '@/components/ui/BeUiTiltCard.vue'

const base = import.meta.env.BASE_URL
const 协会招新群 = `${base}images/协会招新群/cnta总群.png`
const 公众号 = `${base}images/公众号/93737850c43752445459bb32d86c2283.png`
</script>

<template>
  <div class="join-us">
    <!-- Page Header -->
    <section class="py-[120px] max-md:py-[100px] text-center bg-surface border-b border-border dark:border-white/5">
      <div class="max-w-[1200px] mx-auto px-6">
        <h1 class="text-[2.4rem] max-md:text-[1.8rem] font-extrabold mb-4 text-text dark:text-white">加入我们</h1>
        <p class="text-lg text-text-secondary max-w-[600px] mx-auto">
          无论你是技术小白还是代码大神，都欢迎你的加入！在这里，我们共同成长，用代码和热情创造无限可能。
        </p>
      </div>
    </section>

    <!-- 二维码区域 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">扫码加入我们的大家庭</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">选择你感兴趣的部门，开启 CNTA 之旅</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-w-[800px] mx-auto">
          <!-- CNTA 总群 -->
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <Users :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">CNTA 总群</h3>
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
          </TiltCard>

          <!-- 志愿队 -->
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <Heart :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">志愿队</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-5">
              用技术传递温暖，参与电脑义诊、数字助老等志愿活动。
            </p>
            <div class="w-[160px] h-[160px] rounded-md mx-auto flex items-center justify-center text-sm text-text-muted border border-border">
              二维码占位
            </div>
          </TiltCard>

          <!-- 技术部 -->
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <Monitor :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">技术部</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary mb-5">
              与技术大牛一同成长，参与竞赛培训和前沿项目开发。
            </p>
            <div class="w-[160px] h-[160px] rounded-md mx-auto flex items-center justify-center text-sm text-text-muted border border-border">
              二维码占位
            </div>
          </TiltCard>

          <!-- 微信公众号 -->
          <TiltCard class="border border-border dark:border-white/5 rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <Smartphone :size="22" />
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">学习资源</h3>
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
          </TiltCard>
        </div>
      </div>
    </section>

    <!-- 联系信息 -->
    <section class="py-20 max-md:py-12 bg-surface-alt border-y border-border dark:border-white/5">
      <div class="max-w-[1200px] mx-auto px-6 text-center">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold mb-3 text-text dark:text-white">联系我们</h2>
        <div class="max-w-[400px] mx-auto leading-[2.4] text-text-secondary">
          <p>东山校区思创楼B座B203</p>
          <p>大同校区紫光楼</p>
          <p>现代教育技术学院</p>
        </div>
      </div>
    </section>
  </div>
</template>
