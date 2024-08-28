<template>
  <my-toolbar-button
    class='toolbar-button'
    icon='fa-solid fa-file-excel'
    label='Export'
    tooltip='Export to Excel'
    @click='btnExport'
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    gridId: {
      required: false,
      type: String
    }
  },
  data() {
    return {
    }
  },
  methods: {
    btnExport() {
      const gridObj = document.getElementById(this.gridId).ej2_instances[ 0 ]
      gridObj.excelExport()
    }
  }
})
</script>
