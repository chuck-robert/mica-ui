<template>
  <button :class="mClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MButton"
}
</script>


<script setup>
import { computed } from 'vue';

const props = defineProps({
  type:{
    type:String,
    default:"default"
  }
})

const mClass = computed(() => {
  return [
    'm-btn',
    props.type == '' ? '': `m-btn-${props.type}`
  ]
})
</script>

<style lang="scss" scoped>
.m-btn {
  padding: 10px 20px;
}
</style>
