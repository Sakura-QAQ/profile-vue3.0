<template>
  <div class="content-head">
    <div>
      <h1>
        <slot name="title" />
      </h1>
      <h1>
        <slot name="desc" />
      </h1>
    </div>
    <h6>
      <slot name="visit" />
    </h6>
  </div>
</template>

<script>
export default {
  props: {
    
  }
}
</script>

<style lang="less" scoped>

</style>