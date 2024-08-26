import { RouteRecordRaw } from 'vue-router'

const authRoutes: RouteRecordRaw[] = [
  {
    path: 'login',
    name: 'login',
    component: () => import('src/modules/Auth/pages/LoginPage.vue'),
    meta: {
      title: 'Login',
      requiresAuth: false,
    },
  },
  {
    path: 'forgot-password',
    component: () => import('src/modules/Auth/pages/ForgotPassword.vue'),
    meta: {
      title: 'Recover Password',
      requiresAuth: false,
    },
  },
  {
    path: 'password-reset/:email/:token',
    component: () => import('src/modules/Auth/pages/PasswordReset.vue'),
    meta: {
      title: 'Password Reset',
      requiresAuth: false,
    },
  },
]

export default authRoutes
