import { RouteRecordRaw } from 'vue-router'

const userRoutes: RouteRecordRaw[] = [
  {
    path: 'profile',
    component: () => import('src/modules/Auth/pages/ProfileModal.vue'),
    meta: {
      title: 'User Profile',
      requiresAuth: true,
    },
  },
  {
    path: 'register',
    component: () => import('src/modules/Auth/pages/RegisterPage.vue'),
    meta: {
      title: 'Register',
      requiresAuth: false,
    },
  },
  {
    path: 'logout',
    component: () => import('src/modules/Auth/pages/LogoutModal.vue'),
    meta: {
      title: 'Logout',
      requiresAuth: true,
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
