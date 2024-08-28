import { Model } from '../../../../../vue-eloquent'
import { email, helpers, maxLength, minLength, required, sameAs } from '@vuelidate/validators'
import { mustBeInternalEmail } from 'modules/Application/models/User/AuthValidators'
import UserApi from 'modules/Auth/models/UserApi'
import { IUser } from 'modules/Auth/models/UserInterface'
import { computed, reactive } from 'vue'

export default class User extends Model<IUser> {
  api = UserApi
  model = reactive<IUser>({
    id: undefined,
    created_at: undefined,
    updated_at: undefined,
    deleted_at: undefined,
    name: undefined,
    email: undefined,
    password: undefined,
    passwordConfirmation: undefined,
    token: undefined,
  })

  constructor(user?: IUser){
    super()
    this.factory(user)
    super.initValidations()
  }

  protected validations = computed(() => ({
    model: {
      name: {
        required,
        minLength: minLength(8)
      },
      email: {
        email,
        required
      },
      password: { required, minLengthValue: minLength(6) },
      passwordConfirmation: { required, sameAsPassword: sameAs(this.model.password) }
    }
  }))
}
