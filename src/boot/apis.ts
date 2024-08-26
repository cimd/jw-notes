import { boot } from 'quasar/wrappers'
import { Auth, createHttp } from '@konnec/vue-eloquent'

/**
 * Create an instance of the auth service
 */
const auth = new Auth()

console.log(import.meta.env.VITE_API)
/**
 * Create an instance of the HTTP service.
 */
const http = createHttp({
  baseURL: import.meta.env.VITE_API,
  apiPrefix: 'api/v1',
  bearerToken: auth.token,
})

export default boot(({ app }) => {
  app.config.globalProperties.$http = http
})

export { auth, http }
