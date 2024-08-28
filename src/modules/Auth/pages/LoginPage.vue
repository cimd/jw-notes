<template>
  <q-page class='q-page-min-height-fixer'>
    <div class='fixed-top-left form-box low-res-adjustment'>
      <div class='text-h6 q-pa-md' data-cy='login-page-title'>Login</div>
      <q-form ref='loginForm' @submit.prevent='submitForm'>
        <div class='q-pa-md'>
          <div class='q-gutter-y-md column' style='max-width: 300px'>
            <q-input ref='email'
                     v-model='formData.email'
                     label='Email'
                     name='email'
                     outlined
                     :rules="[(val) => !!val || 'Required']" />
            <q-input ref='password'
                     v-model='formData.password'
                     label='Password'
                     name='password'
                     outlined
                     :rules="[(val) => !!val || 'Required']"
                     type='password' />
            <q-btn color='primary'
                   data-cy='submit'
                   label='Login'
                   :loading='loading'
                   type='submit'>
              <template v-slot:loading>
                <q-spinner-hourglass class='on-left' />Loading...
              </template>
            </q-btn>
            <div class='text-weight-regular text-center text-red text-italic'>
              <span v-show='loginError'>Username/password not matching</span>
            </div>
            <div class='text-right'>
              <a id='forgot-password-link' class='password-recovery' href='/#/auth/forgot-password'>Forgot your password?</a>
            </div>
            <div class='text-right'>
              <a id='register-link' class='password-recovery' :href='registerLink'>Register</a>
            </div>
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { auth } from 'boot/apis'
import { ApiResponse } from '@konnec/vue-eloquent'
import { IUser } from 'modules/Auth/models/UserInterface'
import { useAuthStore } from 'modules/Auth/stores/Auth'

export default defineComponent({
  data() {
    return {
      open: true,
      formData: {
        email: '',
        password: ''
      },
      loading: false,
      loginError: false,
      registerLink: '/#/user/register'
    }
  },
  methods: {
    submitForm() {
      const userValidation = this.$refs.email.hasError
      const passValidation = this.$refs.password.hasError
      if (!userValidation && !passValidation) {
        this.loading = true
        this.loginError = false
        auth.login(this.formData)
          .then((response: ApiResponse<IUser>) => {
            const store = useAuthStore()
            store.user = response.data
            this.$router.push({ path: '/' })
          })
          .catch(() => {
            this.loading = false
            this.loginError = true
          })
      }
    }
  }
})
</script>

<style>
/* unvisited link */
a.password-recovery:link {
  color: #00a3e0;
  text-decoration: none;
}

/* visited link */
a.password-recovery:visited {
  color: #00a3e0;
  text-decoration: none;
}

/* mouse over link */
a.password-recovery:hover {
  text-decoration: underline;
}

.form-box {
  min-width: 350px;
  margin-top: 300px;
  margin-left: 50px;
}

.q-page-min-height-fixer {
  min-height: 0 !important;
}
</style>
