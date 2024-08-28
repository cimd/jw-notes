<template>
  <q-select
    bg-color='white'
    bottom-slots
    :clearable='clearable'
    emit-value
    :error='error'
    :error-message='errorMessage'
    :hide-dropdown-icon='readonly'
    :hint='hint'
    :label='label'
    map-options
    :model-value='value'
    :multiple='multiple'
    :option-label='optionLabel'
    :option-value='optionValue'
    :options='options'
    outlined
    :readonly='readonly'
    transition-hide='jump-up'
    transition-show='jump-down'
    :use-chips='multiple'
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
    clearable: {
      required: false,
      default: true
    },
    readonly: {
      type: Boolean,
      required: false
    },
    multiple: {
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
    },
    options: {
      required: true
    },
    optionValue: {
      required: false,
      default: 'id'
    },
    optionLabel: {
      required: false,
      default: 'name'
    }
  },
  data() {
    return {
    }
  }
})
</script>
