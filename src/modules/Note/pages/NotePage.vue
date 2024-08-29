<template>
  <q-page padding>

    <q-form @submit='onSubmit'>
      <div class='row'>
        <my-select v-model:value='note.model.type'
                   :error='note.$model.type.$error'
                   label='Type'
                   :map-options='false'
                   :options='types' />
        <my-date v-model:value='note.model.meeting_at'
                 :error='note.$model.meeting_at.$error'
                 label='Date' />
        <my-multi-input v-model:value='note.model.keywords'
                        label='Keywords' />
        <my-input v-model:value='note.model.notes'
                  :error='note.$model.notes.$error'
                  label='Notes' />
      </div>
      <my-action-footer>
        <q-space />
        <my-cancel-button @click="$router.push({name:'NotesGrid'})" />
        <my-save-button :loading='note.state.isLoading' type='submit' />
      </my-action-footer>
    </q-form>

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Note from 'modules/Note/models/Note'
import { useNoteStore } from 'modules/Note/stores/Note'
import { mapState } from 'pinia'

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
    ...mapState(useNoteStore, ['types'])
  },
  created() {
    if (this.noteId) {
      this.note.refresh(this.noteId)
    }
    this.note.initValidations()
  },
  methods: {
    onSubmit(args) {
      console.log(args)
      this.note.$validate()
      if (this.note.$invalid) return
      console.log('Form submitted')
      this.note.save().then(() => {
        this.$router.push({ name: 'NotesGrid' })
      })
    },
  },
})
</script>

<style lang='scss'>
</style>
