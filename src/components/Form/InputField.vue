<template>
  <q-input
    bg-color='white'
    :clearable='clearable'
    :error='error'
    :error-message='errorMessage'
    :hint='hint'
    :label='label'
    :model-value='value'
    outlined
    :readonly='readonly'
    :type='type'
    @update:model-value="$emit('update:value', $event)"
  >
    <template v-if='hasHint' v-slot:append>
      <my-hint-button :id='label' />
    </template>
  </q-input>
</template>

<script lang="ts">
import FormField from 'modules/Application/mixins/FormField'
import { defineComponent } from 'vue'

export default defineComponent({
  mixins: [FormField],
  props: {
    value: {
      required: false,
      type: [String, Number, Boolean],
      default: null
    },
    type: {
      required: false,
      type: String,
      default: 'text'
    },
    label: {
      required: false,
      type: String
    },
    clearable: {
      required: false,
      default: false,
      type: Boolean
    },
    readonly: {
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
      required: false,
      type: String
    },
    hint: {
      default: null,
      required: false,
      type: String
    },
    hasHint: {
      type: Boolean,
      default: false,
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
