<template>
  <img :src="src" alt="" class="user-profile img-thumbnail">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .user-profile {
    min-width: 350px;
    height: 90vh;
  }
</style>