<template>
  <q-input
    bg-color='white'
    :error='error'
    :error-message='errorMessage'
    :hint='hint'
    :label='label'
    :model-value='displayValue'
    outlined
    :readonly='readonly'
    stack-label
    type='date'
    @update:model-value="$emit('update:value', new Date($event))"
  />
</template>

<script lang="ts">

import { date } from 'quasar'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      required: false,
      type: [Date, String],
    },
    label: {
      required: false,
      type: String
    },
    hint: {
      required: false,
      type: String
    },
    readonly: {
      type: Boolean,
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
      required: false,
      type: String
    }
  },
  data() {
    return {
    }
  },
  computed: {
    displayValue(): string {
      if (typeof this.value === 'string') {
        return this.value
      }
      return date.formatDate(this.value, 'YYYY-MM-DD')
    }
  },
})
</script>

<style></style>
