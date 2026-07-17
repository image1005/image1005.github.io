import { ref } from 'vue'

const isDark = ref(false)

// 初始化主题：localStorage > 系统偏好
const stored = localStorage.getItem('theme')
if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  isDark.value = true
  document.documentElement.classList.add('dark')
}

export const useTheme = () => {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  return { isDark, toggleTheme }
}