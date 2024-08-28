<template>
  <q-input
    bg-color='white'
    clearable
    :error='error'
    :error-message='errorMessage'
    :hint='label'
    mask='time'
    :model-value='value'
    outlined
    :readonly='readonly'
    @update:model-value='onUpdateModel'
  >
    <template v-slot:append>
      <q-icon v-show='!readonly' class='cursor-pointer' name='sym_o_access_time'>
        <q-popup-proxy cover transition-hide='scale'>
          <q-time v-model='time' format24h mask='HH:mm' @update:model-value='onUpdateTime'></q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script lang="ts">
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
      time: null
    }
  },
  methods: {
    onUpdateModel($event) {
      this.$emit('update:value', $event)
    },
    onUpdateTime($event) {
      this.$emit('update:value', $event)
    }
  }
})
</script>

<style></style>
