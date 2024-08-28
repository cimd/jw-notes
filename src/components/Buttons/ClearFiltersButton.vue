<template>
  <my-toolbar-button
    icon='fa-solid fa-filter-slash'
    label='Filters'
    tooltip='Remove Filters from Grid'
    @click='btnClearFilter'
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyClearFiltersButton',
  props: {
    gridId: {
      required: true,
      type: String
    },
    type: {
      required: false,
      default: 'grid',
      type: String
    }
  },
  data() {
    return {
    }
  },
  methods: {
    btnClearFilter: function () {
      const gridObj = document.getElementById(this.gridId).ej2_instances[ 0 ]
      if (this.type === 'grid') {
        gridObj.clearFiltering()
        gridObj.search(null)
      }
      else {
        gridObj.clearFiltering()
        gridObj.treeGrid.search(null)
      }
    }
  }
})
</script>
