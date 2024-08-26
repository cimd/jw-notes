<template>
  <q-page>
    <q-dialog v-model='open' persistent>
      <q-card style='height: 620px ;width: 500px'>
        <q-tabs v-model='tab' class='text-primary'>
          <q-tab icon='fa-solid fa-user' label='User Profile' name='profile' />
          <q-tab icon='fa-solid fa-plug' label='Integrations' name='integration' />
        </q-tabs>

        <q-tab-panels v-model='tab' animated>
          <q-tab-panel name='profile'>

            <q-card-section class='q-pt-none'>
              <q-form ref='loginForm' @submit.prevent='submitForm'>
                <div class='q-pa-md'>
                  <div class='q-gutter-y-md column' style='max-width: 500px'>
                    <q-input ref='username' v-model='formData.username' disable label='Username' name='username' />

                    <q-input ref='name' v-model='formData.name' label='Full Name' name='name' />
                    <div v-if='submitted && !v$.formData.name.required' class='invalid-feedback'>Fullname is required</div>

                    <q-select ref='department_id'
                              v-model='formData.department_id'
                              emit-value
                              label='Department'
                              map-options
                              name='department_id'
                              option-label='name'
                              option-value='id'
                              :options='departments' />
                    <div v-if='submitted && !v$.formData.department_id.required' class='invalid-feedback'>Department is required</div>

                    <q-input ref='password' v-model='formData.password' label='Password' name='password' type='password' />
                    <div v-if='submitted && v$.formData.password.$error' class='invalid-feedback'>
                      <span v-if='!v$.formData.password.required'>Password is required</span>
                      <span v-if='!v$.formData.password.minLength'>Password must be at least 6 characters</span>
                    </div>
                    <q-input ref='passwordConfirmation' v-model='formData.passwordConfirmation' label='Confirm Password' name='passwordConfirmation' type='password' />
                    <div v-if='submitted && v$.formData.passwordConfirmation.$error' class='invalid-feedback'>
                      <span v-if='!v$.formData.passwordConfirmation.required'>Confirm Password is required</span>
                      <span v-else-if='!v$.formData.passwordConfirmation.sameAs'>Passwords must match</span>
                    </div>
                    <q-btn color='primary' label='Update' :loading='loading' type='submit'>
                      <template v-slot:loading>
                        <q-spinner-hourglass class='on-left' />Loading...
                      </template>
                    </q-btn>
                    <div><span v-show='loginError' class='text-weight-light text-red text-italic'>Error</span></div>
                    <q-btn color='primary' label='Back' outline type='reset' @click='onBack' />
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </q-tab-panel>

          <q-tab-panel name='integration'>
            <q-card-section>
              <div class='flex flex-center q-pa-md'>
                <q-btn id='box-com-btn'
                       color='primary'
                       icon='sym_o_list_alt'
                       label='Connect to Box.com'
                       outline
                       @click='onConnectToBox' />
              </div>
            </q-card-section>
          </q-tab-panel>
        </q-tab-panels>

      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">
import useVuelidate from '@vuelidate/core'
import { minLength, required, sameAs } from '@vuelidate/validators'
import { useAuthStore } from 'modules/Application/stores/Auth'
import { useDepartmentStore } from 'modules/Config/stores/Department'
import { mapState } from 'pinia'
import { defineComponent } from 'vue'
import UserApi from 'modules/Application/models/User/UserApi'

export default defineComponent({
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      tab: 'profile',
      open: true,
      formData: {
        id: null,
        username: null,
        name: null,
        password: null,
        department_id: null,
        passwordConfirmation: null
      },
      loading: false,
      loginError: false,
      submitted: false,
      boxUserLoading: false,
    }
  },
  validations() {
    return {
      formData: {
        username: {
          required,
          minLength: minLength(4)
        },
        name: {
          required,
          minLength: minLength(4)
        },
        department_id: {
          required
        },
        password: { required, minLengthValue: minLength(6) },
        passwordConfirmation: { required, sameAsPassword: sameAs(this.formData.password) }
      }
    }
  },
  computed: {
    ...mapState(useAuthStore, ['user']),
    ...mapState(useDepartmentStore, ['departments'])
  },
  created() {
    this.formData.id = this.user.id
    this.formData.username = this.user.username
    this.formData.name = this.user.name
    this.formData.department_id = this.user.department_id
  },
  methods: {
    onBack() {
      this.$router.back()
    },
    submitForm() {
      this.submitted = true
      this.v$.$touch()
      if (this.v$.$invalid) {
        return true
      }
      this.loading = true
      this.postForm()
    },
    postForm() {
      UserApi.update(this.formData)
        .then(() => {
          this.$router.push({ path: '/' })
        })
        .catch((e) => {
          console.error(e)
          this.loading = false
          this.loginError = true
        })
    },
    onConnectToBox() {
      window.location.href = process.env.API + '/box/auth?username=' + this.$config.user.username
    },
  },
})
</script>

<style lang='scss'>
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
  background: #EFE;
  border-color: #5A5;
}

.dirty:focus {
  outline-color: #8E8;
}

.error {
  background: #FDD;
  border-color: red;
}

.invalid-feedback {
  color: red;
}

.error:focus {
  outline-color: #F99;
}
</style>
