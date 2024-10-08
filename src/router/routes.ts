import { RouteRecordRaw } from 'vue-router'
import authRoutes from 'modules/Auth/routes/auth'
import userRoutes from 'modules/Auth/routes/user'
import noteRoutes from 'modules/Note/routes/note'
import jwRoutes from 'modules/Jw/routes/jw'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          requiresAuth: true,
        }
      },
      ...noteRoutes,
      ...jwRoutes
    ],
  },
  {
    path: '/user',
    component: () => import('layouts/BlankLayout.vue'),
    children: userRoutes,
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: authRoutes,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
