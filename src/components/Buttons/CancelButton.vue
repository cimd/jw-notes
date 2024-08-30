<template>
  <q-btn v-close-popup color='primary' data-cy='Cancel' :label='label' outline>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      required: false,
      default: 'Close',
      type: String
    }
  },
  data() {
    return {
    }
  }
})
</script>
