<script setup lang="ts">
import ImageCarousel from '@/components/ImageCarousel.vue'
import TiltCard from '@/components/ui/BeUiTiltCard.vue'

const base = import.meta.env.BASE_URL

const 校园网络义诊 = [
  `${base}images/校园网络义诊/3e1503154d86b79554828d8819ff43c0.jpg`,
  `${base}images/校园网络义诊/88fb8fa53bd12f1ae1cb45622520ff89.jpg`,
  `${base}images/校园网络义诊/8f8b46c87e5ff62d2f981d3069b887f7.jpg`,
]

const 数字助老 = [
  `${base}images/数字助老/d23a5c75d6004929f3ed8e4dc9fd764a.jpg`,
  `${base}images/数字助老/f1ba5f46624b1de82ce626e13b5b3670.jpg`,
  `${base}images/数字助老/fc75fb6f0d86800e249796e1c0e452a2.jpg`,
]

const 安全宣讲 = [
  `${base}images/安全宣讲/2.jpg`,
  `${base}images/安全宣讲/5e372c0b01b300f877e99925ba79edff.jpg`,
  `${base}images/安全宣讲/8dd2d958fef5ce49eda1f3a05d66db52.jpg`,
]

const 网络安全宣讲周 = [
  `${base}images/网络安全宣讲周/509dbea26ec886bb63f6757c0d154947.jpg`,
  `${base}images/网络安全宣讲周/5fed18de069ce1cd344421015665250b.jpg`,
  `${base}images/网络安全宣讲周/8d21a9c2f61237e84e0670a9b94afcbe.jpg`,
]
</script>

<template>
  <div class="volunteer-team">
    <!-- Page Header -->
    <section class="py-[120px] max-md:py-[100px] text-center bg-[#faf7f2] dark:bg-black border-b border-border dark:border-neutral-700">
      <div class="max-w-[1200px] mx-auto px-6">
        <h1 class="text-[2.4rem] max-md:text-[1.8rem] font-extrabold mb-4 text-text dark:text-white">志愿队</h1>
        <p class="text-lg text-text-secondary dark:text-gray-400 max-w-[600px] mx-auto">
          我们坚信技术应有温度。志愿队致力于将所学知识回馈社会，用代码传递关爱，用服务解决实际问题，在奉献中收获成长与感动。
        </p>
      </div>
    </section>

    <!-- 志愿队是什么 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">志愿队是什么</h2>
        <p class="text-base text-text-secondary dark:text-gray-400 text-center mb-12 max-w-[640px] mx-auto">我们的身份与使命</p>
        <div class="max-w-[800px] mx-auto">
          <p class="leading-relaxed text-text-secondary dark:text-gray-400">
            数字素养与技能提升志愿者服务队是校级志愿服务组织，是学校推进数字校园建设、提升师生数字素养的重要力量。我们以 "普及数字技能，助力校园发展" 为宗旨，在校园中扮演着 "数字技能传播者""志愿服务践行者" 和 "师生需求联结者" 的多重角色。无论是帮助老师解决办公软件难题，还是教退休教职工使用智能手机，亦或是开展数字安全知识讲座，都能看到我们活跃的身影。在这里，每一份付出都在为建设更智能、更温暖的校园添砖加瓦。
          </p>
        </div>
      </div>
    </section>

    <!-- 志愿队做什么 -->
    <section class="py-20 max-md:py-12 bg-bg dark:bg-neutral-900 border-y border-border dark:border-neutral-700">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">志愿队做什么</h2>
        <p class="text-base text-text-secondary dark:text-gray-400 text-center mb-12 max-w-[640px] mx-auto">部门职责与成长收获</p>
        <p class="text-center mb-10 text-text-secondary dark:text-gray-400">
          志愿队下设项目部和活动部两大核心部门，两个部门协同合作，共同保障志愿活动的高效开展。
        </p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <!-- 项目部 -->
          <TiltCard class="border border-border dark:border-neutral-700 rounded-sm p-8 bg-white dark:bg-black">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 015 5c0 3-4 8-5 8s-5-5-5-8a5 5 0 015-5z"/><circle cx="12" cy="7" r="1.5"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">项目部：活动的"智慧大脑"</h3>
            <div class="text-[15px] leading-relaxed text-text-secondary dark:text-gray-400 space-y-3">
              <p>
                如果你擅长逻辑规划、热爱创意策划，项目部将是你的绝佳舞台。项目部的核心职责是活动全流程的策划与统筹，包括前期调研、撰写详细活动策划案、制定活动流程与应急预案、对接校内各部门资源等。
              </p>
              <p>
                在项目部，你将深度参与活动从 0 到 1 的诞生过程：从构思 "老年人智能设备培训班" 的课程体系，到设计 "数字安全进校园" 讲座的互动环节，每一个创意都有落地的可能。
              </p>
              <p>
                <strong class="text-text dark:text-white">加入项目部，你能收获：</strong>系统学习活动策划方法论，提升沟通能力和组织协调能力，增强逻辑思维和细节把控能力，掌握推文撰写、图片编辑和新媒体运营等实用技能。
              </p>
            </div>
          </TiltCard>

          <!-- 活动部 -->
          <TiltCard class="border border-border dark:border-neutral-700 rounded-sm p-8 bg-white dark:bg-black">
            <div class="mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">活动部：现场的"执行能手"</h3>
            <div class="text-[15px] leading-relaxed text-text-secondary dark:text-gray-400 space-y-3">
              <p>
                如果你热衷人际交流、擅长落地执行，活动部会让你大展身手。活动部主要负责活动的现场组织，具体包括招募和培训志愿者、布置活动场地、把控活动现场流程、收集活动反馈等。
              </p>
              <p>
                从活动前的志愿者培训，到活动中的秩序维护，再到活动后的成果展示，活动部是确保活动顺利开展的 "幕前功臣"。
              </p>
              <p>
                <strong class="text-text dark:text-white">在活动部，你将收获：</strong>学习志愿者管理技巧，锻炼应急处理能力和应变能力，在与师生的直接互动中收获满满的成就感和幸福感。
              </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>

    <!-- 往期工作回顾 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">往期工作回顾</h2>
        <p class="text-base text-text-secondary dark:text-gray-400 text-center mb-12 max-w-[640px] mx-auto">一场活动的完整旅程</p>

        <div class="grid grid-cols-3 max-md:grid-cols-1 gap-6">
          <TiltCard class="border border-border dark:border-neutral-700 rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">前期</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary dark:text-gray-400">
              项目部 "申报 + 定调"：挖掘校园数字需求，撰写规范志愿申报文件，对接学校、社区等平台，为志愿活动 "拿门票"。
            </p>
          </TiltCard>

          <TiltCard class="border border-border dark:border-neutral-700 rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">中期</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary dark:text-gray-400">
              活动部 "执行 + 落地"：招募培训志愿者，筹备物资，布置场地，确保活动顺利开展。
            </p>
          </TiltCard>

          <TiltCard class="border border-border dark:border-neutral-700 rounded-sm p-8 text-center">
            <div class="mb-4 mx-auto flex justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>
            </div>
            <h3 class="text-lg font-semibold mb-2 text-text dark:text-white">后期</h3>
            <p class="text-[15px] leading-relaxed text-text-secondary dark:text-gray-400">
              项目部 "宣传 + 沉淀"：用推文记录志愿故事，运营公众号账号，让更多人看见数字志愿的价值。
            </p>
          </TiltCard>
        </div>
      </div>
    </section>

    <!-- 活动风采 -->
    <section class="py-20 max-md:py-12 bg-bg dark:bg-neutral-900 border-y border-border dark:border-neutral-700">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">活动风采</h2>
        <p class="text-base text-text-secondary dark:text-gray-400 text-center mb-12 max-w-[640px] mx-auto">用行动传递温暖，用技术点亮生活</p>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <ImageCarousel :images="校园网络义诊" title="校园网络义诊" />
          <ImageCarousel :images="数字助老" title="数字助老" />
          <ImageCarousel :images="安全宣讲" title="安全宣讲" />
          <ImageCarousel :images="网络安全宣讲周" title="网络安全宣讲周" />
        </div>
      </div>
    </section>

    <!-- 电脑义诊 -->
    <section class="py-20 max-md:py-12">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">电脑义诊</h2>
        <p class="text-base text-text-secondary dark:text-gray-400 text-center mb-12 max-w-[640px] mx-auto">为你的数字生活保驾护航！</p>

        <div class="border border-border dark:border-neutral-700 border-l-[3px] border-l-text-secondary dark:border-l-gray-500 rounded-r-sm p-6 bg-white dark:bg-black mb-8">
          <p class="text-[17px] font-semibold mb-2 text-text dark:text-white">
            你的电脑卡顿、蓝屏、中毒？别急，义诊来帮你！
          </p>
          <p class="text-[15px] leading-relaxed text-text-secondary dark:text-gray-400">
            现代教育技术学院联合计算机与网络技术协会、数字素养与技能提升志愿者服务队，推出<strong class="text-text dark:text-white">免费电脑义诊服务</strong>，为全校师生解决各类电脑问题！
          </p>
        </div>

        <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
          <TiltCard class="border border-border dark:border-neutral-700 rounded-sm p-8">
            <h3 class="text-lg font-semibold mb-3 text-text dark:text-white">
              <svg class="inline-block mr-1 align-middle" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
              服务内容
            </h3>
            <ul class="space-y-[10px] text-[15px] text-text-secondary">
              <li class="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                系统重装 & 优化
              </li>
              <li class="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                电脑清灰 & 硬件检测
              </li>
              <li class="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                病毒查杀 & 软件修复
              </li>
              <li class="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                网络问题排查
              </li>
              <li class="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                一对一技术咨询
              </li>
            </ul>
          </TiltCard>

          <TiltCard class="border border-border dark:border-neutral-700 rounded-sm p-8">
            <h3 class="text-lg font-semibold mb-3">
              <svg class="inline-block mr-1 align-middle" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              服务时间
            </h3>
            <ul class="space-y-[10px] text-[15px] text-text-secondary">
              <li><strong class="text-text">教师专属：</strong>每周三下午（办公室上门服务）</li>
              <li><strong class="text-text">学生专场：</strong>每周四晚（思创楼B203集中义诊）</li>
            </ul>
            <p class="mt-3 text-sm text-text-secondary">
              活动持续至第16周，抓紧时间哦！
            </p>
          </TiltCard>
        </div>

        <div class="text-center mt-10">
          <p class="text-lg font-bold">电脑不给力？义诊来助力！</p>
          <p class="font-medium mt-2 text-text-secondary">免费 · 专业 · 高效</p>
          <p class="mt-4 text-text-secondary">东山校区思创楼B座B203</p>
          <p class="text-text-secondary">大同校区紫光楼</p>
          <p class="text-sm mt-1 text-text-muted">
            — 现代教育技术学院 & 计算机与网络技术协会 联合呈现 —
          </p>
        </div>
      </div>
    </section>

    <!-- 相亲相爱一家人 -->
    <section class="py-20 max-md:py-12 bg-bg dark:bg-neutral-900 border-y border-border dark:border-neutral-700">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold text-center mb-3 text-text dark:text-white">相亲相爱一家人</h2>
        <p class="text-base text-text-secondary dark:text-gray-400 text-center mb-12 max-w-[640px] mx-auto">我们是朋友，是伙伴，更是家人</p>

        <div class="max-w-[720px] mx-auto text-center text-text-secondary dark:text-gray-400 leading-loose space-y-4">
          <p>
            我们一起头脑风暴，碰撞出创新策划的火花，打磨出最贴合校园的数字志愿方案，用创意为服务注入活力，收获思维拓展的惊喜。
          </p>
          <p>
            我们一起制作 "超有料" 的推文，把志愿活动里的温暖、成长、收获，变成生动的文字与画面，享受创作带来的成就感。
          </p>
          <p>
            我们一起为活动奔走，在台前，是耐心教学的 "数字导师"，在幕后，是默默筹备的 "后勤管家"，活动的每一处细节，都有我们共同的身影。
          </p>
          <p>
            每一次相聚都幸福，志愿队的每个瞬间都值得珍藏。我们记得成员的生日，记得活动的里程碑。
          </p>
        </div>
      </div>
    </section>

    <!-- 期待加入 -->
    <section class="py-20 max-md:py-12 text-center">
      <div class="max-w-[1200px] mx-auto px-6">
        <h2 class="text-[2rem] max-md:text-[1.5rem] font-bold mb-3 text-text dark:text-white">期待你的加入</h2>
        <p class="text-base text-text-secondary mb-6 max-w-[640px] mx-auto">加入志愿队大家庭，和我们一起用技术传递温暖</p>
        <p class="text-text-secondary mb-5">扫码加入志愿队QQ群</p>
        <div class="w-[160px] h-[160px] border border-border mx-auto flex items-center justify-center text-sm text-text-muted">
          二维码占位
        </div>
      </div>
    </section>
  </div>
</template>
