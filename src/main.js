import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {VideoPlayer} from 'vue-videojs7'


// import 'videojs-contrib-hls.js/src/videojs.hlsjs'

import "../node_modules/@fortawesome/fontawesome-free/js/all.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./scss/main.scss";

import instance from "./plugin/axios.js";

Vue.config.productionTip = false;
Vue.prototype.$axios = instance;

// Vue.use(VideoPlayer,
  /* {
  options: global default videojs options,
  events: global videojs videojs events
} */
// )

const app = new Vue({
  router,
  store,
  // render: function(h) {
  //   return h(App);
  // },
  render: h => h(App)
});

// const app = createApp(App);

app.$mount("#app");
