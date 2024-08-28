import { ModelParams } from '@konnec/vue-eloquent'

export interface INote extends ModelParams {
  type?: string
  meeting_at?: Date
  user_id?: number
  keywords?: string[]
  notes?: string
}
