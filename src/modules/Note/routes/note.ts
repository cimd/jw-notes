import { RouteRecordRaw } from 'vue-router'

const noteRoutes: RouteRecordRaw[] = [
  {
    name: 'NotesGrid',
    path: '/notes/grid',
    component: () => import('modules/Note/pages/NotesGrid.vue'),
    meta: {
      title: 'Note',
      name: 'Notes',
      requiresAuth: true,
    },
  },
  {
    name: 'NotePage',
    path: '/notes/:id?',
    component: () => import('modules/Note/pages/NotePage.vue'),
    meta: {
      title: 'Note',
      name: 'Note',
      requiresAuth: true,
    },
  },
]
export default noteRoutes
