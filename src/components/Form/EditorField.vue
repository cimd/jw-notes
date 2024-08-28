<template>
  <span v-if='label' class='text-uppercase form-section-label'>{{ label }}</span>
  <q-editor class='q-mt-xs'
            :data-cy='dataCy'
            :error='error'
            :error-message='errorMessage'
            :height='height'
            :label='label'
            :model-value='value'
            :placeholder='placeholder'
            :style='style'
            :toolbar='toolbar'
            @update:model-value="$emit('update:value', $event)" />
  <div v-show='error' class='error-message text-negative' role='alert'>{{ errorMessage }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: {
      required: false,
      type: String,
      default: ''
    },
    height: {
      required: false,
      type: String,
      default: '200px'
    },
    label: {
      required: false,
      type: String
    },
    dataCy: {
      required: false,
      type: String
    },
    placeholder: {
      required: false,
      type: String,
      default: 'Type here...'
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
  },
  data() {
    return {
      toolbar: [
        ['left', 'center', 'right', 'justify'],
        ['bold', 'italic', 'strike', 'underline'],
        ['link', 'unordered', 'ordered', 'outdent', 'indent'],
        ['undo', 'redo'],
        ['fullscreen'],
      ]
    }
  },
  computed: {
    style() {
      if (!this.error) return ''

      return 'border-color: #CB2C30; border-width: 2px; border-style: solid;'

    }
  }
})
</script>

<style scoped>
  .error-message {
    margin-left: 0.5rem;
    margin-top: 0.2rem;
    font-size: 12px;
    border-color: red;
  }
</style>
