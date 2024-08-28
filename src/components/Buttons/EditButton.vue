<template>
  <div class='row'>
    <div class='col'>
      <q-btn class='float-right'
             color='primary'
             data-cy='edit-button'
             :label='label'
             outline
             tooltip='test'
             @click='onClick'>
        <q-tooltip>{{ tooltip }}</q-tooltip>
      </q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      required: false,
      default: 'Edit',
      type: String
    },
    tooltip: {
      required: false,
      default: 'Edit Form',
      type: String
    }
  },
  data() {
    return {
    }
  },
  methods: {
    onClick() {
      this.$emit('clicked', true)
    }
  }
})
</script>
