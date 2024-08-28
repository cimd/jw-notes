import { defineStore } from 'pinia'

export const useNoteStore = defineStore('Note', {
  state: () => ({
    types: [
      'Life and Ministry',
      'Watchtower Study',
      'Personal Study',
    ],
  }),
  actions: {
  },
  getters: {
  },
})
