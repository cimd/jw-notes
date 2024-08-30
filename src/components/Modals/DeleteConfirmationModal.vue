<template>
  <q-card class='q-pa-md' cy-label='delete-modal' style='max-width: 300px; width:300px;'>

    <q-card-section class='row items-center'>
      <q-avatar color='negative' icon='sym_o_warning_amber' outlined text-color='white' />
      <span class='q-ml-sm'>{{ label }}</span>
    </q-card-section>

    <q-card-actions>
      <my-cancel-button />
      <q-space />
      <q-btn
        id='confirm-delete-btn'
        v-close-popup
        color='negative'
        data-cy='confirm'
        flat
        label='Confirm'
        @click='onConfirmed'
      />
    </q-card-actions>
  </q-card>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DeleteConfirmationModal',
  props: {
    label: {
      type: String,
      required: false,
      default: 'Confirm Delete?'
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onConfirmed() {
      this.$emit('confirmed')
      this.$emit('close')
    }
  }
})
</script>
