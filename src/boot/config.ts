import { boot } from 'quasar/wrappers'
import { useAuthStore } from 'modules/Auth/stores/Auth'
import { IUser } from 'modules/Auth/models/UserInterface'

let config: {
  user: IUser,
} = {}

export default boot(({ app }) => {
  app.config.globalProperties.$config = config = {
    user: useAuthStore().user,
  }
})

export { config }
