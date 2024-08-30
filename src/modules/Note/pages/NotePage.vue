<template>
  <q-page padding>

    <q-form @submit='onSubmit'>
      <div class='row'>
        <div class='col-sm-6 col-md-3 q-ma-md'>
          <my-select v-model:value='note.model.type'
                     :error='note.$model.type.$error'
                     label='Type'
                     :map-options='false'
                     :options='types' />
        </div>
        <div class='col-sm-6 col-md-3 q-ma-md'>
          <my-date v-model:value='note.model.meeting_at'
                   :error='note.$model.meeting_at.$error'
                   label='Date' />
        </div>

      </div>
      <div class='row'>
        <div class='col-sm-12 col-md-6 q-ma-md'>
          <my-multi-input v-model:value='note.model.keywords'
                          label='Keywords' />
        </div>
      </div>
      <div class='row q-ma-md'>
        <ejs-richtexteditor ref='editor'
                            :autoSaveOnIdle='false'
                            :emojiPickerSettings='emojiPickerSettings'
                            enableXhtml='true'
                            :height='height'
                            :insertImageSettings='insertImageSettings'
                            maxLength='7000'
                            :showCharCount='true'
                            :toolbarSettings='toolbarSettings'
                            :value='note.model.notes' />
      </div>

      <my-action-footer>
        <my-delete-button @delete-confirmed='onDeleteConfirmed' />
        <q-space />
        <my-cancel-button class='q-mr-md' @click="$router.push({name:'NotesGrid'})" />
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
import RichTextEditor from 'src/mixins/RichTextEditor'

export default defineComponent({
  components: {
  },
  mixins: [
    RichTextEditor
  ],
  setup() {
    return {
      note: new Note(),
    }
  },
  data() {
    return {
      noteId: parseInt(<string>this.$route.params.id),
      toolbarSettings: {
        type: 'MultiRow',
        items: [
          'Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
          'FontSize', 'FontColor', 'BackgroundColor', '|',
          'LowerCase', 'UpperCase', '|',
          'Formats', 'Alignments', '|', 'NumberFormatList', 'BulletFormatList', '|',
          'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
          '|', 'EmojiPicker', '|',
          'Undo', 'Redo'
        ]
      },
      insertImageSettings: {
        saveFormat: 'Base64'
      },
    }
  },
  computed: {
    ...mapState(useNoteStore, ['types']),
    height() {
      return this.$q.screen.height - 400
    },
  },
  created() {
    if (this.noteId) {
      this.note.refresh(this.noteId)
    }
    this.note.initValidations()
  },
  mounted() {
    this.note.$editor = this.$refs.editor
  },
  methods: {
    onSubmit() {
      this.note.$validate()
      if (this.note.$invalid) return

      this.note.save().then(() => {
      })
    },
    onDeleteConfirmed() {
      this.note.delete().then(() => {
        this.$router.push({ name: 'NotesGrid' })
      })
    }
  },
})
</script>

<style lang='scss'>
</style>
