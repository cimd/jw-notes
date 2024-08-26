<template>
  <q-page class='row items-center justify-evenly'>
    <example-component
      active
      :meta='meta'
      title='Example component'
      :todos='todos'
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Meta, Todo } from 'src/components/models'
import ExampleComponent from 'components/ExampleComponent.vue'

export default defineComponent({
  components: {
    ExampleComponent
  },
  data() {
    const todos: Todo[] = [
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]

    const meta: Meta = {
      totalCount: 1200
    }

    return { todos, meta }
  }
})
</script>
