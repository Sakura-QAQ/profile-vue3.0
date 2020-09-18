<template>
  <div class="home">
    <!-- <my-icon id="icon-yonghu" color="text-secondary" :size="28"></my-icon> -->
    <div class="wrapper">
      <slideBar id="icon-wangluo" color="text-warning" :size="40">
        Welcome to here
      </slideBar>
      <div>
        <contentBar>
          <template #title>
            I'M
          </template>
          <template #desc>
            your father
          </template>
          <template #visit>
            访客总量:
          </template>
        </contentBar>
      </div>
      <!-- 组件位置 -->
      <userProfile :src="src"></userProfile>
    </div>
  </div>
</template>

<script>
import userProfile from "@/components/user-profile/user-profile.vue";
import slideBar from "@/components/slide-bar/slide-bar.vue";
import contentBar from "@/components/content-bar/content-bar.vue";
export default {
  name: 'Home',
  setup () {
    return {
      src: require('../assets/images/panda.jpg')
    }
  },
  components: {
    userProfile,
    slideBar,
    contentBar
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
