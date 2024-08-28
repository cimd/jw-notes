<template>
  <div class='form-area' :style='cStyle'>
    <div class='row'>
      <div class='form-section-label text-uppercase'>{{ label }}</div>
      <div class='form-float-right'>
        <slot name='right'></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      required: false,
      type: String,
      default: ''
    },
    color: {
      type: String,
      required: false,
      default: 'grey',
    }
  },
  data() {
    return {
    }
  },
  computed: {
    cStyle() {
      switch (this.color) {
      case 'secondary':
        return 'background-color: #EBFAFF;'
      case 'primary':
        return 'background-color: #512D6D08;'
      case 'grey':
        return 'background-color: #fafafa;'
      default:
        return 'background-color: #512D6D08;'
      }
    }
  },
})
</script>

<style lang="scss" scoped>
  .form-area {
    //background-color: $sps-primary-50;
    border-radius: 5px;
    border-color: $sps-grey-100;
    border-style: solid;
    border-width: 1px;
    margin: 10px 0px 20px 0px;
  }

  .form-float-right {
    position: relative;
    right: -90%;
    margin: 10px 0px 0px 0px;
  }
</style>
