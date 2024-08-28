<template>
  <my-toolbar-button-dropdown
    icon='fa-solid fa-grid-2'
    label='Columns'
    :persistent='true'
    tooltip='Choose Grid Columns'
  >
    <q-list bordered class='column-chooser-q-list' separator>
      <q-card-section
        class='scroll'
        style='width: 250px'
      >
        <q-checkbox
          v-model='selectAll'
          checked='false'
          color='secondary'
          label='Select All'
        />
        <q-separator />
        <q-scroll-area style='height: 500px;max-height: 50vh;'>
          <div v-for='element in columnsObj' :key='element.index'>
            <q-checkbox
              v-model='element.visible'
              :checked='element.visible'
              color='secondary'
              :label='element.headerText'
            />
          </div>
        </q-scroll-area>
      </q-card-section>
      <q-separator />
      <q-card-actions class='on-right'>
        <q-space />
        <q-btn
          id='column-chooser-ok-btn'
          v-close-popup
          class='text-secondary q-px-md'
          flat
          label='OK'
          @click='onChooseColumns'
        />
        <q-btn
          v-close-popup
          flat
          label='Cancel'
          @click='onCancelChooseColumns'
        />
      </q-card-actions>
    </q-list>
  </my-toolbar-button-dropdown>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    gridId: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      selectAll: null,
      dense: false,
      size: 'md',
      updateColumnChooser: 0,
      columnsObj: [],
      startWatching: false
    }
  },
  watch: {
    selectAll: function (newVal) {
      if (this.startWatching) {
        this.columnsObj.forEach(element => {
          element.visible = newVal
        })
      }
    },
    columnsObj: {
      handler: function () {
        if (this.startWatching) {
          this.startWatching = false
          const previousState = this.columnsObj[ 0 ].visible
          this.columnsObj.forEach(element => {
            if (element.visible !== previousState) {
              this.selectAll = null
            }
          })
          setTimeout(() => {
            this.startWatching = true
          }, 100)
        }
      },
      deep: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.cloneGridColumnsObj()
    }, 100)
  },
  methods: {
    onCancelChooseColumns: function () {
      this.cloneGridColumnsObj()
    },
    onChooseColumns: function () {
      let grid = document.getElementById(this.gridId).ej2_instances[ 0 ]
      grid.columns.forEach(element => {
        element.visible = this.columnsObj.find(el => el.field === element.field).visible
      })

      grid.refresh()
      this.$emit('updated')
    },
    cloneGridColumnsObj: function () {
      this.startWatching = false
      let index = 0
      let grid = document.getElementById(this.gridId).ej2_instances[ 0 ]
      // console.log(grid)
      this.columnsObj = []
      grid.columns.forEach(element => {
        const item = {
          index: index,
          headerText: element.headerText,
          field: element.field,
          visible: (element.visible || (typeof element.visible === 'undefined')),
          showInColumnChooser: element.showInColumnChooser
        }
        this.columnsObj.push(item)
        index++
      })
      const hasInvisible = this.columnsObj.findIndex(element => element.visible === false)

      if (hasInvisible) {
        this.selectAll = null
      } else {
        this.selectAll = true
      }
      setTimeout(() => {
        this.startWatching = true
      }, 100)
    }
  }
})
</script>
