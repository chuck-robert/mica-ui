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
  type: {
    type: String,
    default: "default",
  },
  rounded: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: Number,
    default: 2,
  },
  text:{
    type:Boolean,
    default:false
  }
});

const mClass = computed(() => {
  return [
    'm-btn',
    props.type && ['default', 'primary', 'success', 'info', 'warning', 'error'].includes(props.type)
      ? `m-btn-${props.type}`
      : '', // 如果不合规，返回空字符串
    props.rounded ? 'm-btn-rounded' : '',
    props.plain ? 'm-btn-plain' : '',
    props.disabled ? 'm-btn-disabled' : '',
    props.size == 1 || props.size == 3 ? `m-btn-size-${props.size}` : '',
    props.text ? 'm-btn-text' : ''
  ];
});
</script>

<style lang="scss" scoped>
.m-btn {
  --mica-btn-bg-color: #f8f8f8;
  --mica-btn-border-color: #ededed;
  outline: none;
  color: var(--mica-btn-t-color, #2b2b2b);
  background: var(--mica-btn-bg-color, #f8f8f8);
  border: none;
  padding: 8px 15px;
  border-radius: 3px;
  border: 1px solid var(--mica-btn-border-color, #ededed);
  transition: all .3s;
  cursor: pointer;

  &.m-btn-rounded {
    border-radius: 10000px;
  }

  &.m-btn:not(.m-btn-plain) {
    border-color: var(--mica-btn-bg-color);
  }

  &.m-btn-plain {
    border-color: var(--mica-btn-bg-color);
    background-color: var(--mica-btn-border-color);
    color: var(--mica-btn-bg-color);

    &:hover {
      background-color: var(--mica-btn-bg-color);
      color: white;
    }
  }

  &.m-btn-size-1 {
    padding: 5px 10px;
  }

  &.m-btn-size-3 {
    padding: 12px 19px;
  }

  &.m-btn-text{
    border: none;
    background-color: transparent;
    color: var(--mica-btn-bg-color);
    &:hover{
      background-color: #f0f0f0;
    }
  }

  &.m-btn-disabled {
    opacity: .4;
    cursor: not-allowed;
  }

  &:hover {
    opacity: .8;
  }

  &.m-btn-default {
    --mica-btn-bg-color: #ecf5ff;
    color: #2b2b2b;
    --mica-btn-border-color: #ffffff;

    &:not(.m-btn-plain):hover {
      border-color: #0084ff;
    }

    &.m-btn-plain:hover {
      color: white;
      background-color: #0084ff;
    }
  }

  &.m-btn-primary {
    --mica-btn-bg-color: #409eff;
    --mica-btn-t-color: #f5f7fa;
    --mica-btn-border-color: #eaf8ff;
  }

  &.m-btn-success {
    --mica-btn-bg-color: #46c25d;
    --mica-btn-t-color: #f5f7fa;
    --mica-btn-border-color: #f1ffed;
  }

  &.m-btn-info {
    --mica-btn-bg-color: #afa3a3;
    --mica-btn-t-color: #f5f7fa;
    --mica-btn-border-color: #f5f5f5;
  }

  &.m-btn-warning {
    --mica-btn-bg-color: #f59f00;
    --mica-btn-t-color: #f5f7fa;
    --mica-btn-border-color: #fff4ed;
  }

  &.m-btn-error {
    --mica-btn-bg-color: #ef7a7a;
    --mica-btn-t-color: #f5f7fa;
    --mica-btn-border-color: #ffe4e4;
  }
}
</style>
