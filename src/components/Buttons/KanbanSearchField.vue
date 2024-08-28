<template>
  <q-input
    v-model='searchField'
    class='q-ml-md'
    clear-icon='sym_o_close'
    clearable
    dense
    label='Search'
    outlined
    @clear='kanban.search()'
    @keyup.enter='kanban.search(searchField)'
  >
    <template v-slot:append>
      <q-icon v-if='!searchField' clickable name='sym_o_search' @click='kanban.search(searchField)' />
      <q-icon v-else class='text-secondary' clickable name='sym_o_search' @click='kanban.search(searchField)' />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PropType } from 'vue/dist/vue'
import KanbanBoards from 'modules/Sel/models/KanbanBoard/KanbanBoards'

export default defineComponent({
  props: {
    kanban: {
      type: Object as PropType<KanbanBoards>,
      required: true
    }
  },
  data() {
    return {
      searchField: null
    }
  },
})
</script>
