import { Api } from '@konnec/vue-eloquent'

export default class NoteApi extends Api {
  resource = 'notes'

  constructor() {
    super()
  }
}
