<template>
  <q-btn-dropdown
    class='toolbar-button-dropdown'
    color='primary'
    :data-cy='dataCy'
    dense
    flat
    :icon='icon'
    :label='label'
    menu-anchor='bottom start'
    menu-self='top start'
    padding='sm'
    :persistent='persistent'
    square
    transition-hide='jump-up'
    transition-show='jump-down'
  >
    <template v-slot:label>
      <q-tooltip v-if='tooltip'>{{ tooltip }}</q-tooltip>
    </template>
    <slot></slot>
  </q-btn-dropdown>
</template>

<script>
import _camelCase from 'lodash/camelCase'
import _upperFirst from 'lodash/upperFirst'

export default {
  name: 'MyToolbarButtonDropdown',
  props: {
    icon: {
      required: false,
      default: 'Create'
    },
    label: {
      required: false,
      default: 'BUTTON'
    },
    persistent: {
      required: false,
      default: false
    },
    tooltip: {
      required: false,
      default: null
    }
  },
  data() {
    return {
    }
  },
  computed: {
    dataCy() {
      return _upperFirst(_camelCase(this.label))
    }
  }
}
</script>
