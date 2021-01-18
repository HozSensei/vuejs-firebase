import { createRouter, createWebHashHistory } from 'vue-router'
import firebase from '@/js/firebase'

const routes = [
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !await firebase.getCurrentUser()) {
    next('/login')
  } else {
    next()
  }
})

export default router
