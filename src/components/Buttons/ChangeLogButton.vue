<template>
  <div>
    <q-btn class='q-mx-sm'
           color='secondary'
           :disabled='disabled'
           :label='label'
           :loading='loading'
           style='height: 30px'
           @click='open = true' />

    <q-dialog v-model='open'>
      <my-change-log-modal :api='api' :model='model' />
    </q-dialog>
  </div>
</template>

<script lang="ts">
import GridState from 'modules/Application/mixins/GridState'
import { defineComponent } from 'vue'
import MyChangeLogModal from 'modules/Application/components/Modals/ChangeLogModal.vue'

export default defineComponent({
  components: { MyChangeLogModal },
  mixins: [
    GridState
  ],
  props: {
    label: {
      required: false,
      default: 'View Changes',
      type: String
    },
    api: {
      required: true,
      type: Function
    },
    model: {
      required: false,
      type: Object
    },
    disabled: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      open: false,
      loading: false,
    }
  },
})
</script>
