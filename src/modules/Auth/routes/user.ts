import { RouteRecordRaw } from 'vue-router'

const userRoutes: RouteRecordRaw[] = [
  {
    path: 'register',
    component: () => import('src/modules/Auth/pages/RegisterPage.vue'),
    meta: {
      title: 'Register',
      requiresAuth: false,
    },
  },
  {
    path: 'password-reset',
    component: () => import('src/modules/Auth/pages/PasswordReset.vue'),
    meta: {
      title: 'Password Reset',
      requiresAuth: false,
    },
  },
]
export default userRoutes
