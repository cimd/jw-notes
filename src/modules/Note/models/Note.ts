import { Model } from '@konnec/vue-eloquent'
import { required } from '@vuelidate/validators'
import { computed, reactive } from 'vue'
import { INote } from 'modules/Note/models/NoteInterface'
import NoteApi from 'modules/Note/models/NoteApi'
import { useAuthStore } from 'modules/Auth/stores/Auth'

export default class Note extends Model<INote> {
  api = NoteApi
  model = reactive<INote>({
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    user_id: useAuthStore().user.id,
    type: undefined,
    meeting_at: undefined,
    keywords: [],
    notes: undefined
  })
  $editor = null as any

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

  saving()
  {
    this.model.notes = this.$editor.getXhtml()
  }
}
