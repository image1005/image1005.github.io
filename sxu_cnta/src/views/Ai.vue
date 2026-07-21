<template>
  <div class="chat-container">
    <!-- 聊天头部 -->
    <div class="chat-header">
      <h2>AI 助手</h2>
      <span class="chat-badge" v-if="messages.length > 1">{{ messages.length - 1 }} 条消息</span>
      <button @click="clearChat" class="clear-btn" :disabled="messages.length <= 1">清空对话</button>
    </div>

    <!-- 消息列表 -->
    <div class="messages-container" ref="messagesContainer">
      <div v-for="(message, index) in messages" :key="index" class="message-wrapper">
        <div :class="['message', message.role === 'user' ? 'user-message' : 'assistant-message']">
          <div class="message-avatar">
            <img
              :src="message.role === 'user' ? `${base}icons/user.svg` : `${base}icons/robot.svg`"
              :alt="message.role === 'user' ? '用户' : 'AI'"
              class="avatar-icon"
            />
          </div>
          <div class="message-content">
            <div class="message-text" v-html="renderMarkdown(message.content)"></div>
            <div class="message-time">{{ formatTime(message.time) }}</div>
          </div>
        </div>
      </div>
      <!-- 加载状态 -->
      <div v-if="isLoading" class="message-wrapper">
        <div class="message assistant-message">
          <div class="message-avatar">
            <img :src="`${base}icons/robot.svg`" alt="AI" class="avatar-icon" />
          </div>
          <div class="message-content">
            <div class="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="input-container">
      <textarea
        v-model="inputMessage"
        @keydown.enter.prevent="sendMessage"
        placeholder="输入您的问题..."
        rows="3"
        maxlength="4000"
        :disabled="isLoading"
        class="message-input"
      ></textarea>
      <button
        @click="sendMessage"
        :disabled="!inputMessage.trim() || isLoading"
        class="send-btn"
      >
        <span v-if="!isLoading">发送</span>
        <span v-else>发送中...</span>
      </button>
    </div>

    <!-- 错误提示 -->
    <div v-if="errorMessage" class="error-message">
      <img :src="`${base}icons/error.svg`" class="error-icon" alt="错误" />
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';
import { decodeImage, extractTextFromImage } from '@pinta365/steganography';
import CryptoJS from 'crypto-js';
import { marked } from 'marked';
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue';

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

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: number;
}

const base = import.meta.env.BASE_URL;

const messages = ref<Message[]>([]);
const inputMessage = ref('');
const isLoading = ref(false);
const errorMessage = ref('');
const messagesContainer = ref<HTMLElement | null>(null);

const openai = ref<ReturnType<typeof createOpenAICompatible> | null>(null);

const systemPrompt = ref('');

// 格式化时间
const formatTime = (timestamp: number) => {
  const date = new Date(timestamp);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

// Markdown 渲染
const renderMarkdown = (text: string) => marked.parse(text) as string;

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

const sendMessage = async () => {
  // 输入为空退出
  if (!inputMessage.value.trim()) return;
  
  // 添加user消息到消息列表
  messages.value.push({
    role: 'user',
    content: inputMessage.value,
    time: Date.now()
  });
  
  // 清空输入框
  isLoading.value = true;
  errorMessage.value = '';
  inputMessage.value = '';
  
  // 滚动到底部
  await scrollToBottom();

  if (!openai.value) {
    errorMessage.value = '正在加载中，请稍后再试';
    isLoading.value = false;
    return;
  }

  try {
    const { text } = await generateText({
      model: openai.value.chatModel('mimo-v2.5-free'),
      system: systemPrompt.value,
      messages: messages.value.map(msg => ({ role: msg.role, content: msg.content })),
    });

    const reply = text || '抱歉，我没有理解您的问题，请再试一次。';
    messages.value.push({
      role: 'assistant',
      content: reply,
      time: Date.now()
    });
  } catch (error) {
    console.error('Error sending message:', error);
    errorMessage.value = '发送消息时出错，请检查网络连接或稍后再试';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.chat-container {
  max-width: 800px;
  margin: 0 auto;
  height: calc(100vh - var(--nav-height, 64px) - 48px);
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

/* ===== 头部 ===== */
.chat-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-bottom: 1px solid #f0f0f0;
  background: #fafafa;
}

.chat-header h2 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
}

.chat-badge {
  font-size: 0.8rem;
  color: #999;
  background: #f0f0f0;
  padding: 2px 10px;
  border-radius: 10px;
}

.clear-btn {
  margin-left: auto;
  padding: 6px 16px;
  font-size: 0.85rem;
  color: #999;
  background: transparent;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.clear-btn:hover:not(:disabled) {
  color: #e74c3c;
  border-color: #e74c3c;
  background: #fff5f5;
}

.clear-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* ===== 消息列表 ===== */
.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  scroll-behavior: smooth;
}

.messages-container::-webkit-scrollbar {
  width: 6px;
}

.messages-container::-webkit-scrollbar-track {
  background: transparent;
}

.messages-container::-webkit-scrollbar-thumb {
  background: #d0d0d0;
  border-radius: 3px;
}

.messages-container::-webkit-scrollbar-thumb:hover {
  background: #b0b0b0;
}

.message-wrapper {
  display: flex;
  flex-direction: column;
}

/* ===== 消息气泡 ===== */
.message {
  display: flex;
  gap: 12px;
  max-width: 85%;
  animation: messageIn 0.3s ease-out;
}

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

.user-message {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.assistant-message {
  align-self: flex-start;
}

.message-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
  background: #f5f5f5;
}

.message-avatar .avatar-icon {
  width: 22px;
  height: 22px;
}

.user-message .message-avatar {
  background: #e8f4ff;
}

.assistant-message .message-avatar {
  background: #f0fff4;
}

.message-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.message-text {
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 0.95rem;
  line-height: 1.6;
  word-break: break-word;
}

.user-message .message-text {
  background: #1677ff;
  color: #fff;
  border-bottom-right-radius: 4px;
  white-space: pre-wrap;
}

.assistant-message .message-text {
  background: #f5f5f5;
  color: #1a1a1a;
  border-bottom-left-radius: 4px;
}

/* ===== Markdown 内容样式 ===== */
.assistant-message .message-text :deep(p) {
  margin: 0 0 0.5em;
}

.assistant-message .message-text :deep(p:last-child) {
  margin-bottom: 0;
}

.assistant-message .message-text :deep(code) {
  background: #e8e8e8;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
  font-family: 'SF Mono', 'Fira Code', monospace;
}

.assistant-message .message-text :deep(pre) {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 12px 16px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 0.5em 0;
}

.assistant-message .message-text :deep(pre code) {
  background: none;
  padding: 0;
  border-radius: 0;
  font-size: 0.85em;
}

.assistant-message .message-text :deep(ul),
.assistant-message .message-text :deep(ol) {
  padding-left: 1.5em;
  margin: 0.25em 0;
}

.assistant-message .message-text :deep(li) {
  margin-bottom: 0.25em;
}

.assistant-message .message-text :deep(blockquote) {
  border-left: 3px solid #1677ff;
  padding-left: 12px;
  margin: 0.5em 0;
  color: #666;
}

.assistant-message .message-text :deep(a) {
  color: #1677ff;
  text-decoration: underline;
}

.assistant-message .message-text :deep(table) {
  border-collapse: collapse;
  width: 100%;
  margin: 0.5em 0;
}

.assistant-message .message-text :deep(th),
.assistant-message .message-text :deep(td) {
  border: 1px solid #ddd;
  padding: 6px 12px;
  text-align: left;
}

.assistant-message .message-text :deep(th) {
  background: #f0f0f0;
  font-weight: 600;
}

.assistant-message .message-text :deep(hr) {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 0.75em 0;
}

.assistant-message .message-text :deep(strong) {
  font-weight: 600;
}

.assistant-message .message-text :deep(em) {
  font-style: italic;
}

.message-time {
  font-size: 0.75rem;
  color: #bbb;
  padding: 0 4px;
}

.user-message .message-time {
  text-align: right;
}

/* ===== 打字指示器 ===== */
.typing-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: #f5f5f5;
  border-radius: 12px;
  border-bottom-left-radius: 4px;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #bbb;
  animation: typingBounce 1.4s ease-in-out infinite;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typingBounce {
  0%,
  60%,
  100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-6px);
    opacity: 1;
  }
}

/* ===== 输入区域 ===== */
.input-container {
  display: flex;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #f0f0f0;
  background: #fafafa;
}

.message-input {
  flex: 1;
  padding: 10px 14px;
  font-size: 0.95rem;
  font-family: inherit;
  line-height: 1.5;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.2s;
}

.message-input:focus {
  border-color: #1677ff;
  box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.1);
}

.message-input:disabled {
  background: #f9f9f9;
  cursor: not-allowed;
}

.send-btn {
  align-self: flex-end;
  padding: 10px 24px;
  font-size: 0.95rem;
  color: #fff;
  background: #1677ff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.send-btn:hover:not(:disabled) {
  background: #4096ff;
}

.send-btn:active:not(:disabled) {
  background: #0958d9;
}

.send-btn:disabled {
  background: #c0c0c0;
  cursor: not-allowed;
}

/* ===== 错误提示 ===== */
.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 24px;
  font-size: 0.85rem;
  color: #e74c3c;
  background: #fff5f5;
  border-top: 1px solid #ffe0e0;
  text-align: center;
}

.error-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* ===== 响应式 ===== */
@media (max-width: 640px) {
  .chat-container {
    height: calc(100vh - var(--nav-height, 64px) - 16px);
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  .chat-header {
    padding: 12px 16px;
  }

  .messages-container {
    padding: 16px;
  }

  .message {
    max-width: 90%;
  }

  .input-container {
    padding: 12px 16px;
  }

  .send-btn {
    padding: 10px 18px;
  }
}
</style>