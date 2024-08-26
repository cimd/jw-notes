<template>
  <q-page class='q-page-min-height-fixer'>
    <div class='fixed-top-left form-box'>
      <q-form id='forgot-password-form'
              ref='Form'
              @submit.prevent='submitForm'>
        <q-input ref='email'
                 v-model='formData.email'
                 label='Email'
                 name='email'
                 :rules='[val => !!val || "Required"]' />
        <q-btn color='primary'
               label='Recover Password'
               :loading='loading'
               type='submit'>
          <template v-slot:loading>
            <q-spinner-hourglass class='on-left' />Loading...
          </template>
        </q-btn>
        <div class='text-weight-regular text-center text-red text-italic'
             style='margin-top: 20px;'>
          <span v-show='showMessage'>{{ message }}</span>
        </div>
      </q-form>

    </div>

  </q-page>
</template>

<script lang="ts">
import { auth } from 'boot/apis'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      formData: {
        email: ''
      },
      loading: false,
      showMessage: false,
      message: null
    }
  },
  methods: {
    submitForm() {
      const userValidation = this.$refs.email.hasError
      if (!userValidation) {
        this.loading = true
        this.loginError = false
        auth.forgotPassword(this.formData.email)
          .then(response => {
            this.message = response.message
          })
          .catch(() => {
            this.message = 'Email could not be found'
          })
          .then(() => {
            this.loading = false
            this.showMessage = true
          })
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

.q-page-min-height-fixer {
  min-height: 0 !important;
}
</style>
