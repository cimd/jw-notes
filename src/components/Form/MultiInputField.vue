<template>
  <q-select
    bg-color='white'
    bottom-slots
    emit-value
    :error='error'
    :error-message='errorMessage'
    hide-dropdown-icon
    :hint='hint'
    input-debounce='0'
    :label='label'
    :model-value='value'
    multiple
    new-value-mode='add-unique'
    outlined
    :readonly='readonly'
    transition-hide='jump-up'
    transition-show='jump-down'
    use-chips
    use-input
    @update:model-value="$emit('update:value', $event)"
  >
  </q-select>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MySelectField',
  props: {
    value: {
      required: true
    },
    label: {
      required: true
    },
    readonly: {
      type: Boolean,
      required: false
    },
    hint: {
      default: null,
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
  }
})
</script>
