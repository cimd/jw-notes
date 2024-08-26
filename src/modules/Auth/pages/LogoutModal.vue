<template>
  <q-page>
    <q-dialog v-model='open' persistent>
      <q-card style='width: 300px'>
        <q-card-section>
          <div class='text-h6' data-cy='logout-modal-title'>Logout</div>
        </q-card-section>

        <q-card-section class='q-pt-none'>
          Do you want to logout?
        </q-card-section>

        <q-card-actions align='right' class='bg-white text-teal'>
          <q-btn v-close-popup color='primary' label='Cancel' outline @click='cancel' />
          <q-btn v-close-popup color='primary' data-cy='confirmLogout' label='Confirm' @click='confirm' />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script lang="ts">

import { auth } from 'boot/apis'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      open: true
    }
  },
  methods: {
    cancel() {
      this.$router.go(-1)
    },
    confirm() {
      auth.logout().then(() => {
        this.$router.push({ path: '/auth/login' })
      })
    }
  }
})

</script>
