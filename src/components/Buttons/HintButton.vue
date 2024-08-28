<template>
  <q-btn dense
         flat
         icon='fa-light fa-sharp fa-circle-info'
         round
         size='sm'
         @click='onClick'>
    <q-tooltip>Hint</q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onClick() {
      console.log(`Clicked button with ID: ${this.id}`)
    }
  }
})
</script>
