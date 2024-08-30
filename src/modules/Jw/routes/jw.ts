import { RouteRecordRaw } from 'vue-router'

const jwRoutes: RouteRecordRaw[] = [
  {
    name: 'JwPage',
    path: '/jw',
    component: () => import('modules/Jw/pages/JwPage.vue'),
    meta: {
      title: 'JW',
      name: 'JW',
      requiresAuth: true,
    },
  },
]
export default jwRoutes
