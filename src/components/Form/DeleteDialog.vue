<template>
  <q-dialog v-model='open'>
    <q-card class='q-pa-md' style='max-width: 300px; width:300px;'>
      <q-card-section class='row items-center'>
        <q-avatar color='warning' icon='sym_o_warning_amber' text-color='white' />
        <span id='delete-dialog-message' class='q-ml-sm'>Confirm Delete?</span>
      </q-card-section>
      <q-card-actions>
        <my-cancel-button id='cancel-button' @click='hide' />
        <q-space />
        <q-btn id='confirm-button' color='primary' flat label='Confirm' @click='onClickConfirm' />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      open: false,
      params: null
    }
  },
  methods: {
    show(args: any) {
      this.open = true
      this.params = args
    },
    hide() {
      this.open = false
      this.$emit('deleteCancelled', this.params)
      this.params = null
    },
    onClickConfirm() {
      this.open = false
      this.$emit('deleteConfirmed', this.params)
    }
  }
})
</script>
