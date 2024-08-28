import { Api } from '@konnec/vue-eloquent'

export default class NoteApi extends Api {
  resource = 'notes'

  dates = [
    'meeting_at',
    'created_at',
    'updated_at',
  ]

  constructor() {
    super()
  }
}
