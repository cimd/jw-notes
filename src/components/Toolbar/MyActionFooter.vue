<template>
  <div class='q-pa-xs action-footer'>
    <q-toolbar class='bg-white q-pa-sm'>
      <slot></slot>
    </q-toolbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
    }
  }
})
</script>
