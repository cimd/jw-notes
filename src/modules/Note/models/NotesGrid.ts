import { ApiResponse, Collection } from '@konnec/vue-eloquent'
import { DataGrid } from '@konnec/vue-syncfusion-sdk'
import NoteApi from 'modules/Note/models/NoteApi'
import { INote } from 'modules/Note/models/NoteInterface'

export default class NotesGrid extends Collection<INote> {
  api = NoteApi
  $grid: DataGrid

  constructor() {
    super()
    this.$grid = new DataGrid<INote>({ id: 'NotesGrid', heightOffset: 900 })
  }

  async fetched(response: ApiResponse<INote[]>)
  {
    this.$grid.updateDataSource(response.data)
  }
}
