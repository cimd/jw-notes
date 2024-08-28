<template>
  <div>
    <q-btn
      id='delete'
      color='negative'
      data-cy='delete'
      icon='sym_o_delete'
      :label='label'
      :loading='loading'
      outline
      @click='open = true'
    />
    <q-dialog v-model='open'>
      <delete-modal ref='DeleteModal' @close='open = false' @confirmed="$emit('deleteConfirmed')" />
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

export default defineComponent({
  name: 'MyDeleteButton',
  components: {
    DeleteModal: defineAsyncComponent(
      () => import('modules/Application/components/App/DeleteConfirmationModal.vue')
    ),
  },
  props: {
    label: {
      required: false,
      default: 'Delete',
      type: String,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      open: false
    }
  }
})
</script>
