<template>
  <div class="home">
    <!-- <my-icon id="icon-yonghu" color="text-secondary" :size="28"></my-icon> -->
    <div class="wrapper">
      <slide-bar id="icon-wangluo" color="text-warning" :size="40">
        Welcome to here
      </slide-bar>
      <div class="w-100">
        <content-bar>
          <template #title>
            {{title}}
          </template>
          <template #desc>
            {{des}}
          </template>
          <template #visit>
            访客总量:0
          </template>
        </content-bar>
        <!-- 过渡动画 -->
        <transition enter-active-class="animate__animated animate__zoomIn">
          <router-view></router-view>
        </transition>
      </div>
      <!-- 组件位置 -->
      <user-profile :src="src"></user-profile>
    </div>
  </div>
</template>

<script>
import { pathToSign } from "../lib/router-lib.js";
import userProfile from "@/components/user-profile/user-profile.vue";
import slideBar from "@/components/slide-bar/slide-bar.vue";
import contentBar from "@/components/content-bar/content-bar.vue";
export default {
  name: 'Home',
  setup () {
    // const router = useRouter()
    // const title = ref("I'M")
    // const des = ref("")
    // watch(router.currentRoute, ({ path, name}) => {
    //   const condition = path === "/" ? "I'M" : '';
    //   const condition_2 = path === "/" ? "Mark" : name;
    //   title.value = condition
    //   des.value = condition_2
    // },{
    //   immediate: true
    // })
    // watchEffect(() => {
    //   const { path, name} = router.currentRoute.value
    //   const condition = path === "/" ? "I'M" : '';
    //   const condition_2 = path === "/" ? "Mark" : name;
    //   title.value = condition
    //   des.value = condition_2
    // })
    const { title, des } = pathToSign()
    return {
      src: require('../assets/images/panda.jpg'),
      title,
      des
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
  .w-100 {
    width: 100%;
  }
}
</style>
