<template>
  <a :href="props.href" :target="props.target" class="m-link" :class="mClass">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: "MLink"
}
</script>


<script setup>
import { computed } from 'vue';
const props = defineProps({
  type: {
    type: String,
    default: "default"
  },
  href:{
    type:String,
  },
  target:{
    type:String,
    default:"_blank"
  },
  underline:{
    type:Boolean,
    default:true
  }
})
const mClass = computed(() => {
  return [
    props.type && ['default', 'primary', 'success', 'info', 'warning', 'error'].includes(props.type)
      ? `m-link-${props.type}`
      : '',
    !props.underline ? 'm-link-noUnderline' : ''
  ];
});
</script>

<style lang="scss" scoped>
.m-link {
  --mica-link-t-color: #585858;
  color: var(--mica-link-t-color, #585858);
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all .3s;
  margin-right: 5px;

  &.m-link-primary {
    --mica-link-t-color: #409eff;
  }

  &.m-link-success {
    --mica-link-t-color: #46c25d;
  }

  &.m-link-info {
    --mica-link-t-color: #afa3a3;
  }

  &.m-link-warning {
    --mica-link-t-color: #f59f00;
  }

  &.m-link-error {
    --mica-link-t-color: #ef7a7a;
  }

  &:not(.m-link-noUnderline):hover{
    text-decoration: underline;
  }
}
</style>
