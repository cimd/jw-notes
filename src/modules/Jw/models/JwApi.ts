import { Api } from '@konnec/vue-eloquent'
import { http } from 'boot/apis'

export default class JwApi extends Api {
  resource = 'jw'

  constructor() {
    super()
  }

  static watchtower(payload?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      http
        .get('/api/v1/jw/watchtower', { params: payload })
        .then((response) => {
          resolve(response.data)
        })
        .catch((er) => {
          console.error(er)
          reject(er)
        })
    })
  }
}
