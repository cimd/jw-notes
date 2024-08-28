<template>
  <q-btn color='primary' data-cy='save' :label='label' :loading='loading' type='submit'>
    <template v-slot:loading>
      <q-spinner :thickness='5' />
    </template>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      required: false,
      default: 'Save',
      type: String
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
    }
  }
})
</script>
