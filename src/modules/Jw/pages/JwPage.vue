<template>
  <q-page padding>

    <div class='row q-ma-md'>
      <q-input v-model='watchtowerUrl' label='Watchtower URL' outlined />
      <q-btn color='primary' label='Fetch data' @click='fetchWatchtower' />
    </div>
    <div class='row'>
      <div v-html='htmlContent'></div>
    </div>

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import JwApi from 'modules/Jw/models/JwApi'

export default defineComponent({
  data() {
    return {
      watchtowerUrl: 'https://www.jw.org/en/library/magazines/watchtower-study-june-2024/Remember-That-Jehovah-Is-the-Living-God',
      htmlContent: ''
    }
  },
  created() {
  },
  methods: {
    fetchWatchtower() {
      JwApi.watchtower().then(response => {
        this.htmlContent = response.data
      })
    }
  },
})
</script>

<style lang='scss'>
</style>
