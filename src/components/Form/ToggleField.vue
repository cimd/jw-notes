<template>
  <q-toggle
    checked-icon='sym_o_check'
    :disable='disable'
    :error='error'
    :error-message='errorMessage'
    :label='label'
    :left-label='labelLeft'
    :model-value='value'
    :size='size'
    unchecked-icon='sym_o_close'
    @update:model-value="$emit('update:value', $event)"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      required: true
    },
    label: {
      required: true
    },
    labelLeft: {
      required: false,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: 'lg'
    },
    disable: {
      type: Boolean,
      required: false
    },
    error: {
      type: Boolean,
      default: false,
      required: false
    },
    errorMessage: {
      default: 'Required',
      required: false
    }
  },
  data() {
    return {
    }
  },
})
</script>

<style></style>
