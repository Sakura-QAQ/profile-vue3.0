<template>
  <div>
    <my-icon :id="id" :color="color" :size="size" class="network"></my-icon>
    <div class="text">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number],
      default: 40
    }
  }
}
</script>

<style lang="less" scoped>
  .network {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4vw;
    height: 10vh;
  }
  .text {
    width: 4vw;
    height: 80vh;
    font-size: 30px;
    color: rgb(255, 191, 141);
    background-color: rgba(52,57,92,.8);
    display: flex;
    align-items: center;
    justify-content: center;
    // 文字纵向排列
    writing-mode: vertical-lr;
  }
</style>