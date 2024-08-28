import { Api, IApiResponse } from '@konnec/vue-eloquent'
import { http } from 'boot/apis'
import { IUser } from 'modules/Auth/models/UserInterface'
import { useAuthStore } from 'modules/Auth/stores/Auth'
import { auth } from 'boot/apis'

export default class UserApi extends Api {
  resource = 'users'

  constructor() {
    super()
  }

  static me(): Promise<IApiResponse<IUser>> {
    const self = new UserApi()
    return new Promise((resolve, reject) => {
      http
        .get('/api/v1/users/me')
        .then(async (response) => {
          self.retrieved(response.data)

          resolve(response.data)
        })
        .catch((err) => {
          self.retrievingError(err)
          console.error(err)
          reject(err)
        })
    })
  }

  protected retrieved(response: { data: IUser })
  {
    const store = useAuthStore()
    store.user = response.data
  }

  protected stored(response: { data: IUser, token: string })
  {
    const store = useAuthStore()
    store.user = response.data
    auth.token = response.token
  }

  protected updated(response: { data: IUser })
  {
    const store = useAuthStore()
    store.user = response.data
  }
}
