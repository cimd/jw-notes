<template>
  <q-input
    bg-color='white'
    :error='error'
    :error-message='errorMessage'
    :hint='label'
    :model-value='date'
    outlined
    :readonly='readonly'
    @update:model-value="$emit('update:value', new Date($event))"
  >
    <template v-slot:prepend>
      <q-icon v-show='!readonly' class='cursor-pointer' name='sym_o_event'>
        <q-popup-proxy transition-hide='scale' transition-show='scale'>
          <q-date v-model='date' mask='DD/MM/YYYY HH:mm' @update:model-value='onUpdateModelValue'></q-date>
        </q-popup-proxy>
      </q-icon>
    </template>

    <template v-slot:append>
      <q-icon v-show='!readonly' class='cursor-pointer' name='sym_o_access_time'>
        <q-popup-proxy transition-hide='scale'>
          <q-time v-model='date' format24h mask='DD/MM/YYYY HH:mm' @update:model-value='onUpdateModelValue'></q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script lang="ts">
import { date } from 'quasar'
import { defineComponent } from 'vue'
import moment from 'moment-timezone'

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
      date: date.formatDate(this.value, 'DD/MM/YYYY HH:mm'),
      valueParamApplied: false
    }
  },
  updated() {
    if (this.value !== undefined && !this.valueParamApplied) {
      this.date = date.formatDate(this.value, 'DD/MM/YYYY HH:mm')
      this.valueParamApplied = true
    }
  },
  methods: {
    onUpdateModelValue($event: any) {
      this.$emit('update:value', moment.utc($event, 'DD/MM/YYYY HH:mm').toDate())
    }
  }
})
</script>

<style></style>
