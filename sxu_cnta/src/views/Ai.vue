<template>
  <div class="max-w-[800px] mx-auto h-[calc(100vh-64px-140px)] flex flex-col bg-[#faf7f2] dark:bg-black border border-[#e8e8e8] dark:border-neutral-700 rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] max-md:rounded-none max-md:border-x-0">

    <!-- 聊天头部 -->
    <div class="shrink-0 flex items-center gap-3 px-6 py-4 border-b border-[#f0f0f0] dark:border-neutral-700 bg-[#fafafa] dark:bg-neutral-900 max-md:px-4 max-md:py-3">
      <h2 class="text-lg font-semibold text-[#1a1a1a] dark:text-white">AI 助手</h2>
      <span
        v-if="messages.length > 1"
        class="text-xs text-[#999] dark:text-gray-400 bg-[#f0f0f0] dark:bg-neutral-700 px-2.5 py-0.5 rounded-full"
      >
        {{ messages.length - 1 }} 条消息
      </span>
      <span
        :class="[
          'text-xs px-2.5 py-0.5 rounded-full',
          remaining > 5 ? 'text-[#999] dark:text-gray-400 bg-[#f0f0f0] dark:bg-neutral-700' : remaining > 0 ? 'text-orange-600 bg-orange-50 dark:bg-orange-900/30' : 'text-red-500 bg-red-50 dark:bg-red-900/30'
        ]"
      >
        剩余 {{ remaining }}/{{ DAILY_LIMIT }} 次
      </span>
      <button
        @click="clearChat"
        :disabled="messages.length <= 1"
        class="ml-auto px-4 py-1.5 text-sm text-[#999] dark:text-gray-400 bg-transparent border border-[#e0e0e0] dark:border-neutral-600 rounded-md cursor-pointer transition-all hover:text-red-500 hover:border-red-500 hover:bg-[#fff5f5] dark:hover:bg-red-900/20 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        清空对话
      </button>
    </div>

    <!-- 消息列表 -->
    <div class="flex-1 min-h-0 overflow-y-auto px-6 py-5 flex flex-col gap-4 scroll-smooth max-md:px-4" ref="messagesContainer">
      <div v-for="(message, index) in messages" :key="index" class="flex flex-col">
        <div
          :class="[
            'flex gap-3 max-w-[85%] animate-[messageIn_0.3s_ease-out]',
            message.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'
          ]"
        >
          <!-- 头像 -->
          <div
            :class="[
              'w-9 h-9 rounded-full flex items-center justify-center shrink-0',
              message.role === 'user' ? 'bg-[#e8f4ff] dark:bg-white' : 'bg-[#f0fff4] dark:bg-white'
            ]"
          >
            <img
              :src="message.role === 'user' ? `${base}icons/user.svg` : `${base}icons/robot.svg`"
              :alt="message.role === 'user' ? '用户' : 'AI'"
              class="w-[22px] h-[22px]"
            />
          </div>
          <!-- 内容 -->
          <div class="flex flex-col gap-1">
            <!-- 用户消息：文本 + 图片 -->
            <div
              v-if="message.role === 'user'"
              class="px-4 py-2.5 rounded-xl rounded-br-[4px] bg-[#1677ff] dark:bg-blue-600 text-white text-sm leading-relaxed break-words"
            >
              <div v-if="message.content" class="whitespace-pre-wrap">{{ message.content }}</div>
              <div v-if="message.images?.length" class="flex flex-wrap gap-2 mt-2">
                <img
                  v-for="(img, i) in message.images"
                  :key="i"
                  :src="img.dataUrl"
                  class="max-w-[200px] max-h-[200px] rounded-lg object-cover border border-white/20"
                  loading="lazy"
                />
              </div>
            </div>
            <!-- AI 消息：markstream-vue 流式渲染 -->
            <div
              v-else
              class="px-4 py-2.5 rounded-xl rounded-bl-[4px] bg-[#f5f5f5] dark:bg-neutral-800 text-sm leading-relaxed break-words"
            >
              <MarkdownRender
                :content="message.content"
                :final="!message.streaming"
                mode="chat"
                :typewriter="true"
                :smooth-streaming="true"
                :fade="true"
                :render-code-blocks-as-pre="true"
              />
            </div>
            <!-- 时间 -->
            <div
              :class="[
                'text-[0.75rem] text-[#bbb] dark:text-gray-500 px-1',
                message.role === 'user' ? 'text-right' : ''
              ]"
            >
              {{ formatTime(message.time) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="shrink-0 px-6 py-4 border-t border-[#f0f0f0] dark:border-neutral-700 dark:bg-neutral-900 bg-[#fafafa] max-md:px-4 max-md:py-3">
      <!-- 图片预览 -->
      <div v-if="attachments.length" class="flex flex-wrap gap-2 mb-3">
        <div
          v-for="(att, i) in attachments"
          :key="att.id"
          class="relative group"
        >
          <img
            :src="att.dataUrl"
            class="w-16 h-16 rounded-lg object-cover border border-[#e0e0e0] dark:border-neutral-600"
          />
          <button
            @click="removeAttachment(i)"
            class="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ×
          </button>
        </div>
      </div>
      <div class="flex gap-3">
        <textarea
          v-model="inputMessage"
          @keydown.enter.prevent="sendMessage"
          @paste="handlePaste"
          placeholder="输入您的问题..."
          rows="3"
          maxlength="4000"
          :disabled="isLoading"
          class="flex-1 px-3.5 py-2.5 text-sm font-[inherit] leading-normal border border-[#e0e0e0] dark:border-neutral-600 rounded-lg resize-none outline-none transition-colors focus:border-[#1677ff] focus:shadow-[0_0_0_2px_rgba(22,119,255,0.1)] disabled:bg-[#f9f9f9] dark:disabled:bg-black disabled:cursor-not-allowed bg-white dark:bg-black text-text dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
        ></textarea>
        <div class="flex flex-col gap-2 self-end">
          <button
            @click="fileInput?.click()"
            :disabled="isLoading"
            class="w-9 h-9 flex items-center justify-center text-[#999] dark:text-gray-400 bg-white dark:bg-neutral-900 border border-[#e0e0e0] dark:border-neutral-600 rounded-lg cursor-pointer transition-all hover:text-[#1677ff] hover:border-[#1677ff] dark:hover:text-blue-400 dark:hover:border-blue-400 disabled:opacity-40 disabled:cursor-not-allowed"
            title="上传图片"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21,15 16,10 5,21"/>
            </svg>
          </button>

          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            multiple
            class="hidden"
            @change="handleFileSelect"
          />
          <button
            @click="sendMessage"
            :disabled="(!inputMessage.trim() && !attachments.length) || isLoading || remaining <= 0"
            class="px-6 py-2.5 text-sm text-white bg-[#1677ff] dark:bg-blue-600 border-0 rounded-lg cursor-pointer transition-all whitespace-nowrap hover:bg-[#4096ff] dark:hover:bg-blue-500 active:bg-[#0958d9] dark:active:bg-blue-700 disabled:bg-[#c0c0c0] dark:disabled:bg-neutral-600 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">发送</span>
            <span v-else>发送中...</span>
          </button>
        </div>
      </div>
    </div>

    <!-- 错误提示 -->
    <div
      v-if="errorMessage"
      class="flex items-center justify-center gap-1.5 px-6 py-2.5 text-sm text-red-500 dark:text-red-400 bg-[#fff5f5] dark:bg-red-900/20 border-t border-[#ffe0e0] dark:border-red-900/30 text-center"
    >
      <img :src="`${base}icons/error.svg`" class="w-4 h-4 shrink-0" alt="错误" />
      {{ errorMessage }}
    </div>


  </div>
</template>

<script setup lang="ts">
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { streamText } from 'ai';
import { decodeImage, extractTextFromImage } from '@pinta365/steganography';
import CryptoJS from 'crypto-js';
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import MarkdownRender from 'markstream-vue';
import 'markstream-vue/index.css';

// ===== 反调试：拦截控制台输出 API Key =====
(() => {
  const block = (v: unknown) => typeof v === 'string' && /\bsk-[A-Za-z0-9]{40,}\b/.test(v);
  const methods = ['log', 'info', 'warn', 'error', 'debug', 'trace', 'dir', 'dirxml'] as const;
  const saved: Partial<Record<typeof methods[number], (...args: unknown[]) => void>> = {};
  for (const m of methods) {
    saved[m] = console[m].bind(console);
    console[m] = (...args: unknown[]) => {
      if (args.some(block)) return;
      saved[m]!(...args);
    };
  }
  // 防御 console 被复原
  Object.freeze(console);
})();

interface AttachedImage {
  id: string;
  dataUrl: string;
  file: File;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: number;
  streaming?: boolean;
  images?: { dataUrl: string; mimeType: string }[];
}

const base = import.meta.env.BASE_URL;

const messages = ref<Message[]>([]);
const inputMessage = ref('');
const isLoading = ref(false);
const errorMessage = ref('');
const messagesContainer = ref<HTMLElement | null>(null);
const attachments = ref<AttachedImage[]>([]);
const fileInput = ref<HTMLInputElement | null>(null);

const openai = ref<ReturnType<typeof createOpenAICompatible> | null>(null);

const systemPrompt = ref('');

// ===== 每日使用限制 =====
const DAILY_LIMIT = 15;
const STORAGE_KEY = 'ai_usage_remaining';
const DATE_KEY = 'ai_usage_date';

const remaining = ref(DAILY_LIMIT);

const initDailyUsage = () => {
  const savedDate = localStorage.getItem(DATE_KEY);
  const now = Date.now();

  if (savedDate) {
    const elapsed = now - Number(savedDate);
    // 超过 24 小时重置
    if (elapsed > 24 * 60 * 60 * 1000) {
      remaining.value = DAILY_LIMIT;
      localStorage.setItem(STORAGE_KEY, String(DAILY_LIMIT));
      localStorage.setItem(DATE_KEY, String(now));
    } else {
      const saved = localStorage.getItem(STORAGE_KEY);
      remaining.value = saved ? Math.min(Number(saved), DAILY_LIMIT) : DAILY_LIMIT;
    }
  } else {
    remaining.value = DAILY_LIMIT;
    localStorage.setItem(STORAGE_KEY, String(DAILY_LIMIT));
    localStorage.setItem(DATE_KEY, String(now));
  }
};

const decrementUsage = () => {
  if (remaining.value <= 0) return false;
  remaining.value--;
  localStorage.setItem(STORAGE_KEY, String(remaining.value));
  return true;
};

// 格式化时间
const formatTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// ===== 反调试：检测 DevTools =====
const devtoolsCheckInterval = setInterval(() => {
  const before = new Date().getTime();
  debugger;
  const after = new Date().getTime();
  if (after - before > 100) {
    document.title = '🔒 ' + document.title.replace(/^🔒 /, '');
  }
}, 5000);

// 清空对话
const clearChat = () => {
  messages.value = [];
  attachments.value = [];
  errorMessage.value = '';
};

// 滚动到底部
const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// 监听消息变化自动滚动
watch(messages, () => {
  scrollToBottom();
}, { deep: true });

// 初始欢迎消息 & 解码 API Key
onMounted(async () => {
  initDailyUsage();

  let apiKey = '';

  try {
    const method = Math.floor(Math.random() * 3) + 1; // 随机 1-3

    if (method === 1) {
      // flag1：从 logo.png 隐写解码
      const response = await fetch(`${base}logo.png`);
      const fileBytes = new Uint8Array(await response.arrayBuffer());
      const image = await decodeImage(fileBytes);
      const payload = extractTextFromImage(image.data);

      const MARKER = 'STEG_TEXT_V1\0';
      if (payload.startsWith(MARKER)) {
        apiKey = payload.slice(MARKER.length).replace(/^flag1:/, '');
      }
    } else if (method === 2) {
      // flag2：双层 Base64 解码
      const encoded = 'Wm14aFp6STZjMnN0YkRCclkwUXdWVkY0Ym5jM2VtNTJOMmcwVldKUWNXdHZWMkphVG5aTlVGRnZRbkZ2U1hkbGFHSllSVXRVVURKRldHeG1lRWRyZFhObk56WkxUVGg2VEE9PQ==';
      const first = atob(encoded);
      apiKey = atob(first).replace(/^flag2:/, '');
    } else {
      // flag3：AES-128-ECB 解密
      const key = CryptoJS.enc.Utf8.parse('Sxu_Cnta_Welcome');
      const ciphertext = 'yAjEAPCOLLJQ5jiggwGKU/9wH5q5lEdfC4JO0XRQi9CS0MWTJDuY4UTfDTzGccHEMIL6oBX7OrxmBzlsjGmoD5TZbzaeBICf5UYsHzh97Tc=';
      const decrypted = CryptoJS.AES.decrypt(ciphertext, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      apiKey = decrypted.toString(CryptoJS.enc.Utf8).replace(/^flag3:/, '');
    }

    if (apiKey) {
      openai.value = createOpenAICompatible({
        name: 'opencode',
        baseURL: `${window.location.origin}/zen/v1`,
        apiKey,
      });
      console.log(`API Key loaded via method ${method}`);
    }
  } catch (e) {
    console.error('Failed to decode API key:', e);
  }

  // 加载系统提示词
  try {
    const resp = await fetch(`${base}sysPrompt.json`);
    const data = await resp.json();
    systemPrompt.value = data.val || '';
  } catch (e) {
    console.error('Failed to load system prompt:', e);
  }

  messages.value.push({
    role: 'assistant',
    content: '你好！我是 CNTA AI 助手，有什么可以帮助你的吗？',
    time: Date.now()
  });
});

onUnmounted(() => {
  clearInterval(devtoolsCheckInterval);
});

// 文件转 data URL
const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 处理文件选择
const handleFileSelect = async (e: Event) => {
  const files = (e.target as HTMLInputElement).files;
  if (!files) return;
  for (const file of Array.from(files)) {
    if (!file.type.startsWith('image/')) continue;
    const dataUrl = await fileToDataUrl(file);
    attachments.value.push({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      dataUrl,
      file,
    });
  }
  // 重置 input 以便重复选择同一文件
  if (fileInput.value) fileInput.value.value = '';
};

// 移除附件
const removeAttachment = (index: number) => {
  attachments.value.splice(index, 1);
};

// 粘贴图片处理
const handlePaste = (e: ClipboardEvent) => {
  const items = e.clipboardData?.items;
  if (!items) return;
  for (const item of Array.from(items)) {
    if (item.type.startsWith('image/')) {
      e.preventDefault();
      const file = item.getAsFile();
      if (file) {
        fileToDataUrl(file).then((dataUrl) => {
          attachments.value.push({
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
            dataUrl,
            file,
          });
        });
      }
      break;
    }
  }
};



// 构建发送给 API 的消息
const buildApiMessages = () => {
  return messages.value
    .filter(m => !m.streaming)
    .map(msg => {
      if (msg.role === 'user') {
        const parts: any[] = [];
        if (msg.content) parts.push({ type: 'text' as const, text: msg.content });
        if (msg.images?.length) {
          parts.push(...msg.images.map(img => ({
            type: 'image' as const,
            image: img.dataUrl,
            mimeType: img.mimeType,
          })));
        }

        return parts.length > 1
          ? { role: 'user' as const, content: parts }
          : { role: 'user' as const, content: msg.content || '(audio message)' };
      }
      return { role: msg.role as 'user' | 'assistant', content: msg.content };
    });
};

// 发送消息到 API（通用逻辑）
const completeSend = async (userMsg: Message) => {
  const assistantMsg: Message = {
    role: 'assistant',
    content: '',
    time: Date.now(),
    streaming: true,
  };
  messages.value.push(assistantMsg);

  await scrollToBottom();
  isLoading.value = true;

  if (!openai.value) {
    assistantMsg.content = '正在加载中，请稍后再试';
    assistantMsg.streaming = false;
    isLoading.value = false;
    return;
  }

  try {
    const result = await streamText({
      model: openai.value.chatModel('mimo-v2.5-free'),
      system: systemPrompt.value,
      messages: buildApiMessages(),
      providerOptions: {
        opencode: {
          reasoningEffort: 'low',
        },
      },
    });

    for await (const event of result.fullStream) {
      if (event.type === 'text-delta') {
        assistantMsg.content += event.text;
        await scrollToBottom();
      } else if (event.type === 'reasoning-delta') {
        assistantMsg.content += event.text;
        await scrollToBottom();
      }
    }

    assistantMsg.streaming = false;

    if (!assistantMsg.content) {
      assistantMsg.content = '抱歉，我没有理解您的问题，请再试一次。';
    }
  } catch (error) {
    console.error('Error sending message:', error);
    const idx = messages.value.indexOf(assistantMsg);
    if (idx !== -1) messages.value.splice(idx, 1);
    errorMessage.value = '发送消息时出错，请检查网络连接或稍后再试';
  } finally {
    isLoading.value = false;
  }
};

const sendMessage = async () => {
  if ((!inputMessage.value.trim() && !attachments.value.length) || isLoading.value) return;

  // 检查每日限制
  if (remaining.value <= 0) {
    errorMessage.value = '今日对话次数已用完，请明天再试';
    return;
  }

  const userText = inputMessage.value.trim();
  const currentAttachments = attachments.value.map(a => ({
    dataUrl: a.dataUrl,
    mimeType: a.file.type,
  }));

  inputMessage.value = '';
  attachments.value = [];
  errorMessage.value = '';

  // 扣减次数
  decrementUsage();

  const userMsg: Message = {
    role: 'user',
    content: userText,
    time: Date.now(),
    images: currentAttachments.length > 0 ? currentAttachments : undefined,
  };
  messages.value.push(userMsg);

  completeSend(userMsg);
};
</script>

<style>
@keyframes messageIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* markstream-vue 深色模式覆盖 */
.dark .markstream-vue {
  color: #e5e5e5;
}
.dark .markstream-vue code {
  background: #333 !important;
  color: #e5e5e5 !important;
}
.dark .markstream-vue pre {
  background: #000 !important;
  border: 1px solid #444;
}
.dark .markstream-vue pre code {
  background: transparent !important;
}
.dark .markstream-vue blockquote {
  border-left-color: #3b82f6 !important;
  color: #999 !important;
}
.dark .markstream-vue table th,
.dark .markstream-vue table td {
  border-color: #444 !important;
}
.dark .markstream-vue table th {
  background: #222 !important;
}
.dark .markstream-vue hr {
  border-color: #444 !important;
}
.dark .markstream-vue a {
  color: #60a5fa !important;
}

/* 深色模式头像图标变白 */
.dark .message-avatar img {
  filter: brightness(0) invert(1);
}
</style>