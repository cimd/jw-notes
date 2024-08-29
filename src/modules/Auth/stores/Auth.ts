import { defineStore } from 'pinia'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const useAuthStore = defineStore('Auth', {
  state: () => ({
    user: {
      id: undefined,
      created_at: undefined,
      updated_at: undefined,
      deleted_at: undefined,
      name: undefined,
      email: undefined,
      password: undefined,
    },
  }),
  actions: {
  },
  getters: {
  },
  persist: true,
})
