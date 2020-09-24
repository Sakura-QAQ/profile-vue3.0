import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import myIcon from "./components/common/my-icon.vue";
import myTip from "./components/common/my-tip.vue";
import myBody from "./components/common/my-tip.vue";

const vue = createApp(App)
vue.component('my-icon', myIcon)
vue.component('my-tip', myTip)
vue.component('my-body', myBody)
vue.use(router).use(store).mount('#app')
