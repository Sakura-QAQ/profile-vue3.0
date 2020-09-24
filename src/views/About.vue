<template>
  <div class="about">
    <my-tip color="text-primary" :size="35" tip-color="bg-info"></my-tip>
    <div class="content">
      <c-header>conten-headerconten-headerconten-headerconten-headerconten-headerconten-header
      conten-headerconten-headerconten-headerconten-headerconten-headerconten-headerconten-headerconten-headerconten-header
      conten-headerconten-headerconten-headerconten-headerconten-headerconten-headerconten-headerconten-headerconten-header
      conten-headerconten-headerconten-headerconten-headerconten-headerconten-headerconten-headerconten-headerconten-header
      conten-headerconten-headerconten-headerconten-headerconten-headerconten-header</c-header>
      <c-body>
      content content content content content content content content content content content content   
      content content content content content content content content content content content content content content
      content content content content content content content content content content content content content content
      content content content content content content content content content content content content content content
      </c-body>
    </div>
  </div>
</template>

<script>
import cHeader from "@/components/content-head/c-header.vue";
import cBody from "@/components/content-body/c-body.vue";
export default {
  setup () {
    return {
      
    }
  },
  components: {
    cHeader,
    cBody
  }
}
</script>

<style lang="less" scoped>
.about {
  padding: 20px;
  .content {
    padding: 15px;
    background: rgba(255,255,255,0.1);
  }
}
</style>