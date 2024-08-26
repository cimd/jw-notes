import { RouteRecordRaw } from 'vue-router'
import authRoutes from 'src/modules/Auth/routes/auth'
import userRoutes from 'src/modules/Auth/routes/user'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  ...authRoutes,
  ...userRoutes,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
