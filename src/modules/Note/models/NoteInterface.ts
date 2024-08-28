import { ModelParams } from '@konnec/vue-eloquent'

export interface INote extends ModelParams {
  type?: string
  meeting_at?: Date
  created_at?: Date
  updated_at?: Date
  keywords?: string[]
  notes?: string
}
