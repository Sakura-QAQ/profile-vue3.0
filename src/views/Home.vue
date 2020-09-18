<template>
  <div class="home">
    <!-- <my-icon id="icon-yonghu" color="text-secondary" :size="28"></my-icon> -->
    <div class="wrapper">
      <div>
        <my-icon id="icon-wangluo" color="text-warning" :size="45" class="network"></my-icon>
        <div class="text">Welcome to here</div>
      </div>
      <div>
        <div class="content-head">
          <div>
            <h1>I'M</h1>
            <h1>your father</h1>
          </div>
          <h6>访客人数:</h6>
        </div>
      </div>
      <img src="../assets/images/panda.jpg" alt="" class="user-profile img-thumbnail">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup () {
    return {
    }
  }
}
</script>

<style lang="less">
.home {
  height: 100vh;
  background: url(../assets/images/bg.jpg) no-repeat center;
  background-size: cover;
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 95vw;
    height: 90vh;
    background-color: rgb(44, 48, 80);
    position: absolute;
    left: calc(50% - 95vw / 2);
    top: calc(50% - 90vh / 2);
    .user-profile {
      min-width: 350px;
      height: 90vh;
    }
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
    .content-head {
      width: 100%;
      height: 20vh;
      display: flex;
      color: #fff;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > div {
        display: flex;
        > h1:nth-child(2) {
          margin-left: 10px;
          color: rgb(6, 255, 247);
        }
      }
    }
  }
}
</style>
