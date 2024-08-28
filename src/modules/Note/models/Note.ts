import { Model } from '@konnec/vue-eloquent'
import { required } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
import { INote } from 'modules/Note/models/NoteInterface'
import NoteApi from 'modules/Note/models/NoteApi'

export default class Note extends Model<INote> {
  api = NoteApi
  model = reactive<INote>({
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    type: undefined,
    meeting_at: undefined,
    keywords: [],
    notes: undefined
  })

  constructor(note?: INote){
    super()
    this.factory(note)
    super.initValidations()
  }

  protected validations = computed(() => ({
    model: {
      type: { required },
      meeting_at: { required },
      notes: { required },
    }
  }))
}
