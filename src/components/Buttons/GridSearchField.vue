<template>
  <q-input
    v-model='searchField'
    class='q-ml-md'
    clear-icon='sym_o_close'
    clearable
    dense
    label='Search'
    outlined
    @clear='btnSearch'
    @keyup.enter='btnSearch'
  >
    <template v-slot:append>
      <q-icon v-if='!searchField' clickable name='sym_o_search' @click='btnSearch' />
      <q-icon v-else class='text-secondary' clickable name='sym_o_search' @click='btnSearch' />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    gridId: {
      required: true,
      type: String,
    },
    type: {
      required: false,
      default: 'grid',
      type: String
    }
  },
  data() {
    return {
      searchField: null
    }
  },
  mounted() {
    this.setSearchField(0)
  },
  methods: {
    btnSearch: function () {
      const gridObj = document.getElementById(this.gridId).ej2_instances[ 0 ]
      if (this.type === 'grid') {
        gridObj.searchModule.search(this.searchField)
      }
      else if (this.type === 'gantt') {
        gridObj.treeGrid.search(this.searchField)
      }
    },
    setSearchField: function (tryCount: number) {
      setTimeout(() => {
        if (
          document.getElementById(this.gridId) !== null &&
          document.getElementById(this.gridId).ej2_instances[ 0 ] !== undefined &&
          document.getElementById(this.gridId).ej2_instances[ 0 ].searchSettings !== undefined
        ) {
          const gridObj = document.getElementById(this.gridId).ej2_instances[ 0 ]
          this.searchField = gridObj.searchSettings.properties.key
        } else if (tryCount < 10) {
          this.setSearchField(tryCount + 1)
        }
      }, 200)
    },
  }
})
</script>
