import { ModelParams } from '@konnec/vue-eloquent'

export interface IUser extends ModelParams {
  id?: number
  name?: string
  email?: string
  password?: string
}
