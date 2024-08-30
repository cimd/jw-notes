<template>
  <q-page padding>
    <my-toolbar>
      <my-create-button tooltip='Create Note' @click='$router.push({ name: "NotePage"})' />
      <q-separator dark inset vertical />
      <my-clear-filters-button grid-id='NotesGrid' />
      <q-space />
      <my-grid-column-chooser grid-id='NotesGrid' />
      <my-grid-search grid-id='NotesGrid' />
    </my-toolbar>

    <!-- Grid -->
    <ejs-grid id='NotesGrid'
              ref='grid'
              :allowExcelExport='true'
              :allowFiltering='true'
              :allowMultiSorting='true'
              :allowPaging='true'
              :allowReordering='true'
              :allowResizing='true'
              :allowSorting='true'
              clipMode='EllipsisWithTooltip'
              :dataSource='notes.data'
              :editSettings='editSettings'
              :enablePersistence='false'
              :filterSettings='filterSettings'
              :height='height'
              :pageSettings='pageSettings'
              :recordDoubleClick='recordDoubleClick'
              :showColumnChooser='true'
              :sortSettings='sortSettings'>
      <e-columns>
        <e-column field='id'
                  headerText='ID#'
                  isPrimaryKey='true'
                  type='number'
                  width='100' />
        <e-column field='type'
                  headerText='Type'
                  type='string'
                  width='230' />
        <e-column field='meeting_at'
                  format='dd/MM/yy'
                  headerText='Meeting Date'
                  type='date'
                  width='100' />
        <e-column field='created_at'
                  format='dd/MM/yy'
                  headerText='Created At'
                  type='date'
                  :visible='false'
                  width='100' />
        <e-column field='updated_at'
                  format='dd/MM/yy'
                  headerText='Updated At'
                  type='date'
                  width='100' />
      </e-columns>
    </ejs-grid>

  </q-page>
</template>

<script lang="ts">
import GridState from 'src/mixins/GridState'
import { defineComponent } from 'vue'
import NotesGrid from 'modules/Note/models/NotesGrid'

export default defineComponent({
  components: {
  },
  mixins: [GridState],
  setup(){
    return {
      notes: new NotesGrid(),
    }
  },
  data() {
    return {
    }
  },
  computed: {
    height() {
      return this.$q.screen.height - 350 + 'px'
    },
  },
  created() {
    this.notes.get()
  },
  mounted() {
    this.notes.$grid.init()
  },
  methods: {
    recordDoubleClick(args: any) {
      this.$router.push({ name: 'NotePage', params: { id: args.rowData.id }})
    },
  },
})
</script>

<style lang="scss">
</style>
