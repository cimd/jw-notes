import {
  ColumnChooser,
  ColumnDirective,
  ColumnsDirective,
  CommandColumn,
  Edit,
  ExcelExport,
  Filter,
  ForeignKey,
  Grid,
  GridComponent,
  Page,
  Reorder,
  Resize,
  Search,
  Selection,
  Sort,
} from '@syncfusion/ej2-vue-grids'
import { defineComponent } from 'vue'

Grid.Inject(CommandColumn)
Grid.Inject(ColumnChooser)
Grid.Inject(Edit)
Grid.Inject(ExcelExport)
Grid.Inject(Filter)
Grid.Inject(ForeignKey)
Grid.Inject(Page)
Grid.Inject(Reorder)
Grid.Inject(Resize)
Grid.Inject(Search)
Grid.Inject(Selection)
Grid.Inject(Sort)

export default defineComponent({
  components: {
    EjsGrid: GridComponent,
    EColumns: ColumnsDirective,
    EColumn: ColumnDirective,
  },
  data() {
    return {
      editSettings: {
        allowEditing: false,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Normal'
      },
      filterSettings: { type: 'Excel' },
      pageSettings: {
        pageSize: 21,
        pageSizes: ['21', '50']
      },
      sortSettings: {
        columns: [
          { field: 'id', direction: 'Descending' }
        ]
      },
    }
  },
})
