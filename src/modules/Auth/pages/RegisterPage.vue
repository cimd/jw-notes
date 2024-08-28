<template>
  <q-page>
    <q-dialog v-model='open' persistent>
      <q-card style='width: 400px'>
        <q-card-section>
          <div id='register-form-title' class='text-h6'>Register</div>
        </q-card-section>

        <q-card-section class='q-pt-none'>
          <q-form ref='registerForm' @submit.prevent='submitForm'>
            <div class='q-pa-md'>
              <div class='q-gutter-y-md column' style='max-width: 400px'>

                <q-input ref='name'
                         v-model='user.model.name'
                         :error='user.$model.name.$error'
                         :error-message='user.$model.name.$errors[0]?.$message'
                         label='Full Name'
                         name='name'
                         outlined />


                <q-input ref='email'
                         v-model='user.model.email'
                         :error='user.$model.email.$error'
                         :error-message='user.$model.email.$errors[0]?.$message'
                         label='E-Mail Address'
                         name='email'
                         outlined />

                <q-input ref='password'
                         v-model='user.model.password'
                         :error='user.$model.password.$error'
                         :error-message='user.$model.password.$errors[0]?.$message'
                         label='Password'
                         name='password'
                         outlined
                         type='password' />

                <q-input ref='passwordConfirmation'
                         v-model='user.model.passwordConfirmation'
                         :error='user.$model.passwordConfirmation.$error'
                         :error-message='user.$model.passwordConfirmation.$errors[0]?.$message'
                         label='Confirm Password'
                         name='passwordConfirmation'
                         outlined
                         type='password' />

                <q-btn color='primary' label='Register' :loading='user.state.isLoading' type='submit' />
                <q-btn color='primary' label='Back' outline type='reset' @click='onBack' />
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Error Modal -->
    <q-dialog v-model='showErrorDialog'>
      <q-card class='q-pa-md' style='max-width: 400px; width:400px;'>
        <q-card-section>
          <q-avatar color='negative' icon='o_warning_amber' text-color='white' />
          <div class='text-h6' style='display: inline; margin-left: 10px;'>Sorry, an error happened</div>
        </q-card-section>
        <q-card-section class='row items-center'>
          <div class='q-pr-xl' v-html='errorMessage'>
          </div>
        </q-card-section>
        <q-card-actions align='right'>
          <q-btn v-close-popup color='primary' label='CLOSE' outline @click='showErrorDialog = false' />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-page>
</template>

<script lang="ts">
import User from 'modules/Auth/models/User'
import { defineComponent } from 'vue'
import { AxiosError } from 'axios'

export default defineComponent({
  setup() {
    return {
      user: new User(),
    }
  },
  data() {
    return {
      open: true,
      showErrorDialog: false,
      errorMessage: ''
    }
  },
  methods: {
    onBack() {
      this.$router.go(-1)
    },
    async submitForm() {
      this.user.$validate()
      console.log(this.user.$model)
      if (this.user.$invalid) return

      try {
        const { actioned, model } = await this.user.save()
        console.log(actioned, model)
        this.$router.push({ path: '/' })
      }
      catch (error) {
        const er = new AxiosError(error).message.error.error.error.response
        console.error('#postForm', 'error', er)
        if (er.status === 422) {
          this.errorMessage = ''
          Object.keys(er.data.error).forEach((key, _index) => {
            // console.log(_index)
            er.data.error[ key ].forEach((anError: any) => {
              this.errorMessage += anError + ' '
            })
            this.errorMessage += '<br><br>'
          })
        }
        else {
          this.errorMessage = 'Unknown error'
        }
        this.showErrorDialog = true
      }
    },
  }
})

</script>

<style>
  /* unvisited link */
  a.password-recovery:link {
    color: #0077b6;
    text-decoration: none;
  }

  /* visited link */
  a.password-recovery:visited {
    color: #0077b6;
    text-decoration: none;
  }

  /* mouse over link */
  a.password-recovery:hover {
    text-decoration: underline;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #FDD;
  }

  .invalid-feedback {
    color: red;
  }

  .error:focus {
    outline-color: #F99;
  }
</style>
