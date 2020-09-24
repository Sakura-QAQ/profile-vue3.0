<template>
  <div :class="['bodys', fontColor]" :style="{fontSize: `${size}px`}">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: [Number, String],
      default: 18
    },
    fontColor: {
      type: String,
      default: 'text-white'
    }
  }
}
</script>

<style lang="less" scoped>
.bodys {
  background-color: RGB(74,80,115);
  padding: 10px;
  text-indent:2em;
  word-break:break-all;
}
</style>