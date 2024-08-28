<template>
  <q-page padding>

    <q-form @submit='onSubmit'>
      <my-action-footer>
        <q-space />
        <my-cancel-button @click="$router.push({name:'NotesGrid'})" />
        <my-save-button :loading='note.state.isLoading' />
      </my-action-footer>
    </q-form>

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Note from 'modules/Note/models/Note'

export default defineComponent({
  components: {
  },
  setup() {
    return {
      note: new Note(),
    }
  },
  data() {
    return {
      noteId: parseInt(<string>this.$route.params.id),
    }
  },
  computed: {
  },
  created() {
    if (this.noteId) {
      this.note.refresh(this.noteId)
    }
    this.note.initValidations()
  },
  methods: {
    onSubmit() {
    },
  },
})
</script>

<style lang='scss'>
</style>
