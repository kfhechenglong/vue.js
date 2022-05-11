import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: {
      path: '/home/content'
    },
    children: [
      {
        path: 'content',
        name: 'content',
        component: () => import(/* webpackChunkName: "content" */ '@/pages/home/content/index.vue')
      },
    ]
  },
  {
    path: '/login',
    name: '',
    component: () => import(/* webpackChunkName: "Login" */ '@/pages/login/index.vue')
  },
  {
    path: '/',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
