<script setup lang="ts">
import InteractiveHoverButton from '@/components/ui/interactive-hover-button.vue'

const loginUrl = 'https://login.sxu-cnta.cn/login/CNTA?orgChoiceMode=None'
const logoUrl = 'https://www.gwy.fun/zhan/cnta_login.png'

interface ServiceItem {
  id: string
  title: string
  desc: string
  icon: 'folder' | 'shield' | 'code'
}

const services: ServiceItem[] = [
  {
    id: 'storage',
    title: '统一网盘',
    desc: '协会文件存储与共享，随时随地访问学习资料和项目文档。',
    icon: 'folder',
  },
  {
    id: 'shield',
    title: '运维堡垒机',
    desc: '安全管控服务器访问权限，统一管理协会内外运维操作，保障资产安全。',
    icon: 'shield',
  },
  {
    id: 'code',
    title: '代码仓库',
    desc: '托管协会项目源码，支持 Git 版本控制与 CI/CD 自动化构建部署。',
    icon: 'code',
  },
]
</script>

<template>
  <div class="login-page">
    <!-- Hero -->
    <section class="py-[120px] max-md:py-[100px] text-center bg-[#faf7f2] dark:bg-black border-b border-border dark:border-neutral-700">
      <div class="max-w-[1200px] mx-auto px-6">
        <img
          :src="logoUrl"
          alt="SXU CNTA 统一身份认证"
          class="max-w-[280px] max-md:max-w-[200px] w-full h-auto mx-auto mb-7"
        />
        <h1 class="text-[2.4rem] max-md:text-[1.8rem] font-extrabold mb-3 tracking-wide text-text dark:text-white">
          SXU 网协统一身份认证
        </h1>
        <p class="text-base text-text-secondary dark:text-gray-400 max-w-[480px] mx-auto mb-10 leading-relaxed">
          一个账号连接协会全部服务
        </p>

        <InteractiveHoverButton
          text="前往登录"
          :href="loginUrl"
          variant="primary"
          class="text-[17px]"
        />
      </div>
    </section>

    <!-- 接入服务 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3">接入服务</h2>
        <p class="text-base text-text-secondary text-center mb-12 max-w-[640px] mx-auto">
          统一身份认证打通协会全部内部平台，一次登录即可无缝访问以下所有服务
        </p>

        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          <div
            v-for="svc in services"
            :key="svc.id"
            class="border border-border rounded-md p-7 text-center hover:border-border-strong transition-colors"
          >
            <div class="w-11 h-11 mx-auto mb-4 flex items-center justify-center border border-border rounded-md bg-bg text-text-secondary">
              <!-- Folder icon -->
              <svg v-if="svc.icon === 'folder'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z"/>
              </svg>
              <!-- Shield icon -->
              <svg v-if="svc.icon === 'shield'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <!-- Code icon -->
              <svg v-if="svc.icon === 'code'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3 class="text-base font-semibold mb-2">{{ svc.title }}</h3>
            <p class="text-sm leading-relaxed text-text-secondary">{{ svc.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
