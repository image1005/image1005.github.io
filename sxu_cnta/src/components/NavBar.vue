<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const navItems = [
  { path: '/', label: '首页' },
  { path: '/tech', label: '技术部' },
  { path: '/volunteer', label: '志愿队' },
  { path: '/join', label: '加入我们' },
]

function isActive(path: string) {
  return route.path === path
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar__inner container">
      <RouterLink to="/" class="navbar__brand" @click="closeMenu">
        <span class="navbar__logo">🖥️</span>
        <span class="navbar__name">CNTA</span>
      </RouterLink>

      <button
        class="navbar__toggle"
        :class="{ 'navbar__toggle--open': menuOpen }"
        @click="menuOpen = !menuOpen"
        aria-label="切换菜单"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="navbar__links" :class="{ 'navbar__links--open': menuOpen }">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="navbar__link"
          :class="{ 'navbar__link--active': isActive(item.path) }"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  border-bottom: 1px solid;
  z-index: 1000;
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar__brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  font-weight: 700;
}

.navbar__logo {
  font-size: 1.5rem;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar__link {
  padding: 6px 16px;
  font-size: 0.95rem;
  font-weight: 500;
}

.navbar__link--active {
  text-decoration: underline;
}

/* Hamburger */
.navbar__toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.navbar__toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: currentColor;
}

.navbar__toggle--open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.navbar__toggle--open span:nth-child(2) {
  opacity: 0;
}

.navbar__toggle--open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 768px) {
  .navbar__toggle {
    display: flex;
  }

  .navbar__links {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 16px 24px;
    gap: 4px;
    border-bottom: 1px solid;
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
  }

  .navbar__links--open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .navbar__link {
    width: 100%;
    padding: 12px 16px;
    font-size: 1.05rem;
  }
}
</style>
