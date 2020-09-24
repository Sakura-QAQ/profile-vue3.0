<template>
  <div>
    <h3 :class="color" :style="{fontSize: `${size}px`}">
      <slot>Tip</slot>
    </h3>
    <div :class="['rounded', tipColor]"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 40
    },
    tipColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.rounded {
  width: 30px;
  height: 4px;
}
.bg-info {
  background-color: blue;
}
</style>