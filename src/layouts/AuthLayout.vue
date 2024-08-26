<template>
  <q-layout view='lHh Lpr lFf'>
    <q-page-container>
      <q-img class='background-image' :ratio='16/9' src='login_desk.jpg' />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthLayout',
  data() {
    return {
    }
  },
})
</script>

<style scoped>
  .background-image {
    width: auto;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
    display:grid;
  }
</style>
