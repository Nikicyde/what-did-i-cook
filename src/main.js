import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './index.css';
import VueSmoothScroll from 'v-smooth-scroll';

createApp(App).use(store).use(VueSmoothScroll).use(router).mount("#app");