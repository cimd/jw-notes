import { boot } from 'quasar/wrappers'
// import documentTitle from 'src/app/middlewares/document-title'
// import pageTitle from 'src/app/middlewares/page-title'
import { auth } from 'boot/apis'

// more info on params: https://quasar.dev/quasar-cli/boot-files
export default boot(({ router }) => {
  router.beforeEach((to: any, from: any, next: any) => {
    // documentTitle(to)
    // pageTitle(to)

    if (to.matched.some((record: any) => record.meta.requiresAuth)) {
      if (auth.isAuthenticated()) {
        next()
      } else {
        next({ path: '/auth/login' })
      }
    } else {
      // console.log('Does Not requiresAuth')
      if (to.name === 'login' && auth.isAuthenticated()) {
        next({ path: '/' })
      } else {
        next()
      }
    }
  })
})
