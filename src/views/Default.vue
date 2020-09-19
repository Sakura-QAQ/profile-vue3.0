<template>
  <div class="default container">
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('About')">
        <my-icon id="icon-yonghu1" color="text-danger" size="45"></my-icon>
        <h3>About me</h3>
      </button>
      <button class="col btn btn-light rounded border-0" @click="toPage('Resume')">
        <my-icon id="icon-diannao" color="text-warning" size="45"></my-icon>
        <h3>Resume</h3>
      </button>
    </div>
    <div class="row">
      <button class="col btn btn-light rounded border-0" @click="toPage('Portfolio')">
        <my-icon id="icon-xin" color="text-info" size="45"></my-icon>
        <h3>Portfolio</h3>
      </button>
    </div>
  </div>
</template>

<script>
import { routerJump } from "../lib/router-lib.js";
// const routerJump = () => {
//     const router = useRouter()
//     const toPage = path => router.push(path)
//     return {
//       toPage
//     }
// }
export default {
  setup () {
    const { toPage } = routerJump()
    return {
      toPage
    }
  }
}
</script>

<style lang="less" scoped>
.row {
  height: 30vh;
}
.col {
  color: #fff;
  margin: 10px 20px;
  background-color: rgba(255, 255, 255, .1);
}

</style>