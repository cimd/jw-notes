<template>
  <q-btn v-close-popup color='primary' data-cy='Cancel' :label='label' outline>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyCancelButton',
  props: {
    label: {
      required: false,
      default: 'Cancel',
      type: String
    }
  },
  data() {
    return {
    }
  }
})
</script>
