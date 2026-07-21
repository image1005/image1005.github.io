import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TechDept from '../views/TechDept.vue'
import VolunteerTeam from '../views/VolunteerTeam.vue'
import JoinUs from '../views/JoinUs.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: '首页' },
    },
    {
      path: '/tech',
      name: 'tech',
      component: TechDept,
      meta: { title: '技术部' },
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: VolunteerTeam,
      meta: { title: '志愿队' },
    },
    {
      path: '/join',
      name: 'join',
      component: JoinUs,
      meta: { title: '加入我们' },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: '统一身份认证' },
    },
  ],
})

export default router
