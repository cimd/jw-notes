<template>
  <q-layout view='hHh Lpr lff'>
    <q-header bordered>
      <q-toolbar>
        <q-btn aria-label='Menu'
               dense
               flat
               icon='sym_o_menu'
               round
               @click='toggleLeftDrawer' />

        <q-toolbar-title>
          JW Notes
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model='leftDrawerOpen'
              bordered
              content-class='bg-grey-1'
              :mini='miniState'
              mini-to-overlay
              show-if-above
              :width='260'
              @mouseout='miniState = true'
              @mouseover='miniState = false'>
      <q-list>
        <EssentialLink v-for='link in linksList'
                       :key='link.title'
                       v-bind='link' />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    icon: 'sym_o_home',
    link: '/'
  },
  {
    title: 'Notes',
    icon: 'sym_o_note',
    link: '/notes/grid'
  },
]

export default defineComponent({
  components: {
    EssentialLink
  },
  data() {
    return {
      miniState: true,
      linksList,
      leftDrawerOpen: false
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    }
  }
})
</script>
