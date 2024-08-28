<template>
  <q-input
    :aria-placeholder='placeholder'
    bg-color='white'
    :error='error'
    :error-message='errorMessage'
    :hint='hint'
    :label='label'
    :model-value='value'
    outlined
    :readonly='readonly'
    type='textarea'
    @update:model-value="$emit('update:value', $event)"
  >
  </q-input>

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
    readonly: {
      type: [Boolean, Function],
      default: false,
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
    },
    hint: {
      default: null,
      required: false
    },
    placeholder: {
      default: null,
      required: false
    }
  },
  data() {
    return {
    }
  }
})
</script>

<style></style>
