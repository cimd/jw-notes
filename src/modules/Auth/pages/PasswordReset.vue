<template>
  <q-page>
    <div class='fixed-top-left form-box'>
      <q-form ref='Form' @submit.prevent='submitForm'>
        <q-input ref='email' v-model='$route.params.email' label='Email' name='email' readonly />

        <q-input ref='password'
                 v-model='formData.password'
                 :error='v$.formData.password.$error'
                 :error-message='passwordErrorMessage'
                 label='Password'
                 name='password'
                 type='password' />

        <q-input ref='passwordConfirmation'
                 v-model='formData.passwordConfirmation'
                 :error='v$.formData.passwordConfirmation.$error'
                 :error-message='passwordConfirmationErrorMessage'
                 label='Confirm Password'
                 name='passwordConfirmation'
                 type='password' />

        <q-btn class='q-mt-md' color='primary' label='Submit' :loading='loading' type='submit' />

      </q-form>
    </div>
  </q-page>
</template>

<script lang="ts">
import useVuelidate from '@vuelidate/core'
import { minLength, required, sameAs } from '@vuelidate/validators'
import { defineComponent } from 'vue'
import { auth } from 'boot/apis'

export default defineComponent({
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      open: true,
      formData: {
        password: '',
        passwordConfirmation: null
      },
      loading: false,
      passwordErrorMessage: '',
      passwordConfirmationErrorMessage: ''
    }
  },
  validations() {
    return {
      formData: {
        password: { required, minLength: minLength(6) },
        passwordConfirmation: { required, sameAsPassword: sameAs(this.formData.password) }
      }
    }
  },
  methods: {
    submitForm() {
      this.v$.$touch()
      if (this.v$.$invalid) {
        this.setErrorMessages()
        return true
      }

      this.loading = true
      const params = {
        email: this.$route.params.email,
        password: this.formData.password,
        token: this.$route.params.token
      }

      auth.resetPassword(params)
        .then(() => {
          this.$router.push({ path: '/' })
        })
        .finally(() => {
          this.loading = false
        })
    },
    setErrorMessages() {
      if (this.v$.formData.password.$error) {
        if (this.v$.formData.passwordConfirmation.required) this.passwordErrorMessage = 'Password is required'
        if (this.v$.formData.password.minLength) this.passwordErrorMessage = 'Password must be at least 6 characters'
      }
      if (this.v$.formData.passwordConfirmation.$error) {
        if (this.v$.formData.passwordConfirmation.required) this.passwordConfirmationErrorMessage = 'Confirm Password is required'
        if (this.v$.formData.passwordConfirmation.sameAsPassword) this.passwordConfirmationErrorMessage = 'Passwords must match'
      }
    }
  }
})

</script>

<style>

.form-box {
  min-width: 350px;
  margin-top: 400px;
  margin-left: 50px;
}
</style>
